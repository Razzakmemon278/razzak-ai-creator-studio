# Razzak AI Creator Studio — agent setup and access audit

## Verified on 2026-10-27
- Repository: https://github.com/Razzakmemon278/razzak-ai-creator-studio
- Branches seen: `main`, `setup/creator-studio-v1`
- PR #1: https://github.com/Razzakmemon278/razzak-ai-creator-studio/pull/1 — mobile-first starter. It adds prompt builder, social draft generator, and storyboard planner; it is not an AI video rendering agent and does not deploy itself.
- Upload-Post profile: `default`
- Connected accounts: TikTok `@razzakmemon111`, YouTube `@novel.world1`, Instagram `@razzakmemon43`, Pinterest `memonallinone`. Connections currently show no reauthorization required.
- Pinterest board currently visible: “Tech Gadgets & Accessories (restored)” (public). This is suitable for gadget affiliate pins, not Qur'an/tilawat content.
- Creative Claw balance last checked: 11 credits. The Pip reference image and 5-second 360p vertical test consumed credits; do not assume unlimited AI generations.

## What “free and unlimited” realistically means
GitHub can host a static site and run some automation, but it does not provide unlimited AI inference, unlimited GPU video generation, unlimited storage, or unlimited third-party API access. GitHub Actions has usage limits and repository workflows need setup, permissions and often a runner. A website that promises unlimited video generation for free may have hidden queues, caps, watermarks, or payment requirements. Do not add API keys or publish secrets in repository files.

## Agent roles (workflow first; no fake agents)
1. **Producer:** chooses target channel, duration, aspect ratio and deliverables.
2. **Script editor:** drafts hook, scene list, narration, title, description and tags.
3. **Rights/fact checker:** flags uncertain claims, copyright, music licences and source attribution.
4. **Media builder:** uses a connected rendering service only after checking cost/credit balance; otherwise creates a no-API local storyboard or vector animation.
5. **Technical QA:** verifies duration, dimensions, file opens, audio presence, subtitle readability, safe margins and scene continuity.
6. **Platform packager:** creates separate YouTube, TikTok, Instagram and Pinterest metadata; Pinterest pins require a destination URL and suitable board.
7. **Human approval gate:** no public post, profile edit, purchase, paid generation, or account changes without explicit approval.

These are workflow roles, not independent cloud agents unless a runner and model/tool credentials are configured.

## Current blockers and resolutions
- **Two-minute cartoon:** only a 5-second vertical test exists. Need 12–20 short shots or a locally rendered vector animation, then assemble, add captions/audio, inspect full output and export 16:9. At 11 Creative Claw credits, do not start an expensive multi-shot render. Free option: create an original code-based 2D animation using HTML/SVG/Canvas and render it through a free local Android-compatible workflow; this can be watermark-free but will not look like premium AI 3D footage.
- **30-second tilawat:** do not synthesize Qur'anic recitation. Need a verified reciter audio source with reuse rights and a verified ayah reference. Then create a restrained 9:16 visual, synchronize exact text, and listen-check the full export.
- **TikTok:** Upload-Post connection is present and does not require reauthorization according to the latest account list. It can publish video or send supported videos to TikTok drafts/inbox when capabilities permit. No video has been uploaded in this audit; do not claim a post exists.
- **YouTube:** connection present, handle `@novel.world1`. Long video can be uploaded via connected publishing tool, but only after final QA and user approval; current user wants to schedule posts manually, so provide download links and metadata unless they explicitly ask for a specific upload.
- **Pinterest/AliExpress:** Pinterest connection and one public gadget board are verified. AliExpress affiliate account login/API access is NOT connected/verified by this repo or Upload-Post. Affiliate link can be used when the user supplies their approved link; a new affiliate signup is only required if their existing AliExpress affiliate account is not approved. For a Pin, use a relevant board, original product image/video, accurate description, destination affiliate link, and clear affiliate disclosure. Never post tilawat to the gadget board.
- **Deployment:** inspect current repo and PR before changing defaults. Preserve existing files. Use a separate branch and new files for improvements; don't expose secrets.

## QA gate sequence
1. Inspect current repository and existing files read-only.
2. Add new production documents or files only on the dedicated branch.
3. Check app behavior including non-English topics; ensure hashtag generation never emits a bare hashtag and uses meaningful safe transliteration/fallback tags.
4. Test on Android-sized viewport and verify no existing project files were overwritten.
5. Deploy only after reviewing the diff and confirming GitHub Pages/workflow settings.
6. Produce each media asset, inspect it, and only then create a platform-specific upload package.
7. Human approval before public publication.
