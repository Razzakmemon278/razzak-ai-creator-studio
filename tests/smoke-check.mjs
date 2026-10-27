import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const pass = (message) => console.log('PASS ' + message);
const fail = (message) => errors.push(message);
const read = (relativePath) => {
  const absolute = path.join(root, relativePath);
  if (!existsSync(absolute)) {
    fail('Missing required file: ' + relativePath);
    return '';
  }
  return readFileSync(absolute, 'utf8');
};

const html = read('index.html');
const app = read('app.js');
read('styles.css');
const toolsHtml = read('tools.html');
const episode = read('content/pip-red-panda-episode-2-minute.md');

function checkHtmlFile(fileName, source) {
  if (!source) return;

  const ids = [...source.matchAll(/\bid\s*=\s*["']([^"']+)["']/g)].map((match) => match[1]);
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) fail(fileName + ' has duplicate id="' + id + '"');
    seen.add(id);
  }

  const resources = [...source.matchAll(/\b(?:src|href)\s*=\s*["']([^"']+)["']/g)].map((match) => match[1]);
  for (const resource of resources) {
    if (!resource || resource.startsWith('#') || /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(resource)) continue;
    const cleanPath = resource.split('#')[0].split('?')[0];
    if (!cleanPath) continue;
    const resolved = path.resolve(root, cleanPath);
    if (!resolved.startsWith(root + path.sep) && resolved !== root) {
      fail(fileName + ' contains a local link outside repository root: ' + resource);
      continue;
    }
    if (!existsSync(resolved)) fail(fileName + ' points to missing local asset: ' + resource);
  }
  pass(fileName + ': unique IDs and local links/resources checked');
}

checkHtmlFile('index.html', html);
checkHtmlFile('tools.html', toolsHtml);

const htmlIds = new Set([...html.matchAll(/\bid\s*=\s*["']([^"']+)["']/g)].map((match) => match[1]));
const appIds = new Set([...app.matchAll(/\$\(\s*['"]([^'"]+)['"]\s*\)/g)].map((match) => match[1]));
for (const id of appIds) {
  if (!htmlIds.has(id)) fail('app.js refers to missing HTML id: ' + id);
}
if (app && appIds.size > 0) pass('app.js id references match index.html (' + appIds.size + ' references checked)');
for (const id of ['prompt', 'social', 'video', 'schedule', 'makePrompt', 'makeSocial', 'makeVideo', 'makeSchedule', 'scheduleOut']) {
  if (!htmlIds.has(id)) fail('Required dashboard feature is missing: ' + id);
}
if (html && toolsHtml && /Prompt builder/.test(html) && /Open ChatGPT/.test(toolsHtml) && /Open Gemini/.test(toolsHtml)) {
  pass('prompt/social/video dashboard and free-first tool directory are present');
}

if (episode) {
  const scenes = [...episode.matchAll(/^### Scene \d{2} \|/gm)];
  if (scenes.length !== 15) fail('Pip episode should contain 15 scenes; found ' + scenes.length);
  if (!/Target:\s*120 seconds/.test(episode)) fail('Pip episode does not declare the 120-second target');
  if (!/teal backpack with one yellow star/.test(episode)) fail('Pip continuity anchor is missing');
  if (scenes.length === 15) pass('Pip production pack has 15 scenes for a 120-second episode');
}

if (errors.length) {
  console.error('\nSMOKE CHECK FAILED');
  for (const error of errors) console.error('FAIL ' + error);
  process.exitCode = 1;
} else {
  console.log('\nSMOKE CHECK PASSED — no dependency installation or network access required.');
}
