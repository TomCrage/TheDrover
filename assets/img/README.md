# Hero image

Drop the front-page hero photo into this folder as:

```
assets/img/hero.jpg
```

`index.html`, and the banner at the top of every inner page, already point at
this exact path — nothing else needs to change once the file is here.

Tips for a good result with the Ken Burns / parallax effect in `style.css`:

- Landscape orientation, at least 1800px wide.
- Keep the main subject roughly centred horizontally — the animation zooms
  and pans slightly, and the CSS crops to `object-position: 50% 30%` (a bit
  above centre) on the hero, `50% 30%` on inner-page banners.
- JPEG or WebP, ideally under ~1.5MB so the page stays fast.

If `hero.jpg` is missing, the site does not break: the `onerror` handler on
each `<img>` hides the broken image and falls back to a plain warm gradient,
so every page still looks intentional.
