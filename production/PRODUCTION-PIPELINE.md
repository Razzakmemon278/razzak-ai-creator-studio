# Creator Studio Production Pipeline (Free-first)

## Status and guardrails
- This repository is a mobile-first helper workspace, not a magic unlimited AI renderer.
- Keep all existing files. Add new files only; do not overwrite README.md or existing app files without inspection and approval.
- Never publish automatically. All publishing remains manual or requires a separate explicit approval.
- No paid API keys, payment-card trials, or paid generation without explicit approval.
- GitHub Actions and hosted services have quotas/limits; do not advertise them as unlimited.

## Workstreams
1. **Cartoon YouTube episode**: Pip the Red Panda; target 120 seconds, landscape 16:9 for YouTube. Write a 10–14 shot script, establish continuity anchors, generate only after estimating cost, assemble, add captions, and review the entire rendered video.
2. **Tilawat Short**: target 30 seconds, vertical 9:16. Use a verified, licensed recording of a named Qur'an reciter and exact ayah boundaries. Never synthesize, paraphrase, or silently alter Qur'anic recitation. Verify Arabic text against a trusted mushaf, audio against the source, timing, pronunciation, and translation before release.
3. **TikTok package**: vertical 9:16 MP4, safe-area captions, title, short caption, relevant hashtags, cover frame, and direct download link. If account publishing is unavailable, deliver the package for manual upload.
4. **Pinterest affiliate pin**: create a vertical 2:3 image, accurate product title/price only when checked, clear affiliate disclosure, and the user's approved AliExpress affiliate link. Verify Pinterest board access and destination URL before publishing.
5. **QA / release gate**: confirm duration, aspect ratio, audio sync, no black/frozen frames, no broken captions, rights/source notes, title/description, thumbnail/cover, and platform policy checks. Human approval required before public posting.

## Required release checklist
- [ ] Correct channel and audience
- [ ] Script and source/licensing recorded
- [ ] Full video watched from beginning to end
- [ ] Audio checked separately; Qur'anic recitation verified against a trusted source
- [ ] Captions/spelling/timestamps checked
- [ ] Correct dimensions, duration, aspect ratio, and export format
- [ ] Thumbnail/cover and metadata prepared
- [ ] No unverified product claims or missing affiliate disclosure
- [ ] Final assets and download URLs saved
- [ ] Owner explicitly approves publishing

## Free-first agent architecture
- Use GitHub Issues/Projects as a task queue and Actions only for linting, metadata checks, and packaging tasks that fit free quotas.
- Use separate agents/checklists for script, visual continuity, audio/source verification, captions/metadata, and final QA.
- Use public, licensed source assets where possible. AI video generation is credit-limited and is not unlimited.
- Secrets, access tokens, and affiliate credentials must be stored in repository secrets, never committed to source files.
- Agent outputs are drafts until the owner approves them.
