# Fidelis Ogbeni — Portfolio

QA Engineer & Test Automation Specialist portfolio site. Built with Vite + TypeScript (no framework overhead), styled from a custom design system inspired by test-suite execution logs and instrumentation data plates.

## Stack
- Vite (vanilla-ts template)
- Plain TypeScript, no UI framework
- IBM Plex Serif / Sans / Mono (Google Fonts)
- Contact form powered by [Web3Forms](https://web3forms.com) (no backend needed)

## Development
```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure
```
index.html          all page markup + content
src/style.css        design system (tokens, layout, components)
src/main.ts          nav, hero boot animation, scroll reveal, contact form
public/resume/        downloadable résumé PDF
public/favicon.svg
```

## Editing content
All copy lives directly in `index.html` — profile text, capability modules, experience
timeline, project cards, writing/speaking cards, and contact details. Update text there;
no CMS or data file layer.

## Deploying
`npm run build` outputs a static `dist/` folder — deploy to Vercel, Netlify, GitHub Pages,
or any static host. If using GitHub Pages under a repo subpath, set `base` in `vite.config.ts`.

## Notes / things to double-check
- The Substack link for "The Fifth Layer" is referenced by name only (no confirmed URL) —
  add the real link in the Writing & Speaking section once available.
- The GitHub links point to `github.com/fidelanders` (profile-level). Update to specific
  repo URLs once confirmed.
- Contact form reuses the Web3Forms access key from the previous site version.

## Action items before you publish
1. **Push qa_agent_project (AI-Powered QA Automation Suite v8.4) to GitHub tonight**, then replace the first
   `PENDING_REPO_URL` in `index.html` with the real URL. Marked with a `TODO(Fidelis)` comment above it.
2. **Make Universal Test Recorder public**, then replace the second `PENDING_REPO_URL` in `index.html`
   the same way.
3. Confirm/add the real Substack URL for "The Fifth Layer" in the Writing & Speaking section.

## Featured GitHub projects (as of this build)
- AI-Powered QA Automation Suite (v8.4) — pending, going public tonight
- Universal Test Recorder — pending, private repo
- TestVista — https://github.com/fidelanders/TestVista (flagship open-source project)
- Guru99BankApp — https://github.com/fidelanders/Guru99BankApp
- TestingwithCypress — https://github.com/fidelanders/TestingwithCypress
- testgex-ci — https://github.com/fidelanders/testgex-ci
