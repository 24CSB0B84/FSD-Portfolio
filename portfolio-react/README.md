# Portfolio React — Harshitha Vinjamuri

A fully functional React single-page application converted from a static HTML/CSS portfolio. Built with **Vite**, **React 19**, and **react-router-dom** — no class components, no third-party state libraries, no UI frameworks.

---

## Setup & Run Instructions

```bash
cd portfolio-react
npm install
npm run dev        # start dev server (default: http://localhost:5173)
npm run build      # production build → dist/
```

---

## Component Tree

```
App (theme state + toggleTheme)
 └─ BrowserRouter
     └─ Layout (receives theme, toggleTheme)
         ├─ Navbar (theme, toggleTheme)
         │   └─ ThemeToggle (theme, toggleTheme)
         ├─ <Outlet /> ← routed pages
         │   ├─ Home
         │   ├─ About
         │   │   ├─ SkillCard  ×6  (title, items)
         │   │   └─ ToolCard   ×6  (name)
         │   ├─ Projects
         │   │   └─ ProjectCard ×3 (id, title, description, techStack, date, link, gradient)
         │   │       └─ ProjectTags (tags)        ← 2-level prop drilling
         │   ├─ ProjectDetail (dynamic: /projects/:projectId)
         │   │   └─ ProjectTags (tags)
         │   ├─ Contact (theme)
         │   │   └─ ContactForm (theme)
         │   └─ NotFound (catch-all 404)
         └─ Footer
```

### State-Lifting Decisions

| State | Where Declared | How Shared |
|-------|---------------|------------|
| `theme` (dark/light) | `App.jsx` (top-level) | Passed via props: App → Layout → Navbar → ThemeToggle; also App → Contact → ContactForm |
| Contact form fields + `errors` | `ContactForm.jsx` | Local to the component; no lifting needed |
| `showDetails` per project card | `ProjectCard.jsx` | Per-instance local state; independent toggle per card |
| `isOpen` (mobile menu) | `Navbar.jsx` | Local to Navbar; reset on window resize |
| `loading` (hero animation) | `Home.jsx` | Local to Home page |

### Prop Drilling (2 Levels Deep)

**Projects** page → passes `techStack` array as prop → **ProjectCard** → passes it as `tags` → **ProjectTags** (grandchild renders the tag pills).

---

## useEffect Hooks

| # | Location | Dependencies | Purpose | Cleanup |
|---|----------|-------------|---------|---------|
| 1 | `App.jsx` | `[theme]` | **Persist theme** to `localStorage` and update `document.body[data-theme]` whenever theme toggles | None needed (synchronous `setItem`) |
| 2 | `Home.jsx` | `[]` (mount) | **Loading sequence** — 1-second `setTimeout` simulates loading; displays a pulsing "Loading…" screen before fading in the hero content | `clearTimeout(timer)` prevents state updates on unmounted component |
| 3 | `Navbar.jsx` | `[]` (mount) | **Window resize listener** — closes the mobile hamburger menu when the viewport resizes above 768px, preventing a stale open menu | `window.removeEventListener('resize', handleResize)` prevents memory leaks |

Additionally, `App.jsx`'s `useState` uses a **lazy initializer** to read the theme from `localStorage` on initial render (no extra `useEffect` needed for the read).

---

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Hero landing with loading animation |
| `/about` | About | About + Skills + Tools sections |
| `/projects` | Projects | Project card grid |
| `/projects/:projectId` | ProjectDetail | Dynamic detail view via `useParams` |
| `/contact` | Contact | Controlled form with validation |
| `*` | NotFound | 404 catch-all with link to Home |

---

## Folder Structure

```
portfolio-react/
├── public/
│   └── wallpaper.gif
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ContactForm.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx / .css
│   │   ├── ProjectCard.jsx / .css
│   │   ├── ProjectTags.jsx
│   │   ├── SkillCard.jsx
│   │   ├── ThemeToggle.jsx / .css
│   │   └── ToolCard.jsx
│   ├── data/
│   │   └── projects.js
│   ├── pages/
│   │   ├── Home.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── ProjectDetail.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── NotFound.jsx / .css
│   ├── App.jsx / .css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
The drive link to the recording of the portfolio website :- https://drive.google.com/drive/folders/1SLTox6fnoT1KdI2nE9XQ-52arP-tZVcr?usp=drive_link
---

## Tech Stack

- React 19 (functional components + Hooks only)
- Vite (build tool)
- react-router-dom (client-side routing)
- Plain CSS (no Tailwind, no Bootstrap, no Material UI)
