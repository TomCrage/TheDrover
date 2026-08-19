# The Drover's Wife

A small static website about Henry Lawson's 1892 short story *The Drover's
Wife* — the story itself, its themes, its adaptations (Drysdale, Bail,
Leah Purcell), and Lawson's life.

## Structure

```
index.html      Home — animated hero, intro, section index
story.html      Synopsis of the original 1892 story
themes.html     Thematic analysis
legacy.html     Timeline of adaptations, 1945–2021
author.html     Henry Lawson biography
sources.html    Further reading

assets/css/style.css   All styling
assets/js/main.js      Nav toggle, hero animation, scroll reveals
assets/img/            Put hero.jpg here — see assets/img/README.md
```

No build step or dependencies — plain HTML/CSS/JS. Open `index.html`
directly in a browser, or serve the folder with any static file server
(e.g. `npx serve .` or `python3 -m http.server`).

## The hero image

The front page and every inner-page banner are already wired up to
`assets/img/hero.jpg`. Add that file and it appears automatically, with
a slow Ken Burns zoom, scroll parallax, mouse-tilt parallax, and drifting
light particles. Until then, the site falls back to a plain gradient so
nothing looks broken. See `assets/img/README.md` for image tips.

Motion respects `prefers-reduced-motion`.

## Design skill

`.claude/skills/ui-ux-pro-max/` is vendored from
[nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
(MIT) — a local, offline design-reference skill for Claude Code (style/color/
typography/motion/UX-guideline databases, no network calls). It's project-scoped:
available whenever Claude works in this repo, not in other projects, unless
vendored there too or installed as a Claude Code plugin from the same source.
