# Portfolio Website

A fully responsive personal portfolio website built with semantic HTML5 and vanilla CSS, using Flexbox for layout. The site is a single-page design with smooth-scroll navigation across five content sections: About, Skills, Tools, Projects, and Contact.

## Design Rationale

The visual identity uses a dark-themed palette where each section carries a distinct background hue — deep crimson (About), teal (Skills), navy (Tools), forest green (Projects), and warm charcoal (Contact/Footer). These are low-saturation, dark-toned colours chosen to shift smoothly around the colour wheel so sections feel distinct without clashing. CSS custom properties (`:root` variables) centralise the entire colour scheme and spacing tokens, making future theming straightforward.

## Layout Technique

Flexbox is the sole layout mechanism. The hero section centres its content with `flex` + `align-items`/`justify-content`. Section card grids use `flex-wrap` to flow naturally across screen sizes. Two media-query breakpoints (≤ 768 px for tablet, ≤ 480 px for mobile) adjust card widths, padding, and stack direction so the layout remains readable on any device.

## Known Limitations

- The contact form is front-end only; no back-end is connected to process submissions.
- Project thumbnail images are represented by CSS gradient placeholders rather than real screenshots.
- The animated GIF background (`wallpaper.gif`) may increase initial page load time on slower connections.

## File Structure

```
web_practice/
├── index.html      — main HTML document
├── style.css       — external stylesheet
├── wallpaper.gif   — hero background animation
└── README.md       — this file
```
