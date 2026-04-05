# Ario — Project Documentation

> A portfolio and services site for Ario. Visitors can browse work, learn about myself, and request web design, development, and maintenance services.

---

## What is this project?

Ario is a personal brand site built to do two things well:

1. **Show the work** — a portfolio that lets the work speak for itself
2. **Convert visitors into clients** — clear paths to request services like website creation, design, and maintenance

The stack is React + TypeScript, styled with Tailwind CSS, with Framer Motion for animations, React Router for navigation, Stripe for payments/deposits, and Axios for backend communication. Coded by a solo-developer.

---

## Tech Stack

| Tool                                                                        | Purpose                         |
| --------------------------------------------------------------------------- | ------------------------------- |
| <img src="src/assets/react.svg" style="width:16px; height:16px;"/> React 19 | UI framework                    |
| TypeScript                                                                  | Type safety                     |
| <img src="public/favicon.svg" style="width:16px; height:16px; "/> Vite      | Build tool & dev server         |
| Tailwind CSS 4                                                              | Styling                         |
| Framer Motion                                                               | Animations & transitions        |
| React Router 7                                                              | Client-side routing             |
| Axios                                                                       | API calls to the backend        |
| Stripe                                                                      | Payment processing              |
| dotenv                                                                      | Environment variable management |

---

## Folder Structure

```
src/
├── components/
│   ├── ui/
│   └── layout/
├── pages/
│   ├── Home/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── index.tsx
│   │   └── data.ts
│   └── [OtherPage]/
│       ├── components/
│       ├── index.tsx
│       └── data.ts
├── routes/
├── lib/
│   ├── api/
│   └── utils/
├── hooks/
├── styles/
├── context/
├── types/
└── assets/
```

---

## Folder Breakdown

### `components/`

Global reusable components shared across **multiple pages**. If something only shows up on one page, it doesn't belong here — it goes inside that page's own `components/` folder.

#### `components/ui/`

The small stuff. Atoms of the UI.

- Buttons
- Inputs & form fields
- Modals & dialogs
- Loaders & spinners
- Icons
- Badges, tags, cards

#### `components/layout/`

The shell of the site — things that wrap or frame every page.

- `Navbar.tsx`
- `Footer.tsx`
- `PageWrapper.tsx`
- Section containers / reusable headers

---

### `pages/`

Every page on the site lives here. Each one gets its own folder.

```
pages/
├── Home/           # Landing page, hero, intro
├── Portfolio/      # Work showcase / case studies
├── Services/       # What Ario offers + pricing
├── Contact/        # Service request form
└── NotFound/       # 404 / Catch-all
```

#### Inside each page folder:

```
Home/
├── components/    # Components only used on this page
├── hooks/         # Hooks only used on this page
├── index.tsx      # The page itself — composes everything
└── data.ts        # Static copy, service lists, project data, etc.
```

- **`index.tsx`** — the page component. Imports and arranges everything in the folder.
- **`components/`** — page-specific UI that will never be reused elsewhere.
- **`hooks/`** — logic pulled out of the page into clean, readable hooks.
- **`data.ts`** — hardcoded content like project titles, service descriptions, pricing tiers, testimonials. Keeping this separate from JSX makes copy edits painless.

---

### `routes/`

All route definitions in one place. Exports a barrel file so `App.tsx` stays clean.

```ts
// routes/index.ts
export { default as AppRouter } from "./AppRouter";
```

---

### `lib/`

#### `lib/api/`

Every backend or third-party API call lives here. Nothing in a component should be calling `axios` directly.

```
api/
├── index.ts          # Axios instance, base URL, interceptors
├── contact.ts        # Service request form submissions
└── payments.ts       # Stripe payment/deposit calls
```

#### `lib/utils/`

Pure helper functions — no React, no UI, just logic.

- Form validators
- Date formatters
- String helpers (slugify, truncate, capitalize)
- Price formatters

---

### `hooks/`

Custom React hooks used across more than one page or component.

```
hooks/
├── useContactForm.ts     # Form state + validation logic
├── useScrollPosition.ts  # For nav hide/show on scroll
└── useMediaQuery.ts      # Responsive breakpoint detection
```

> Hooks only used on a single page live inside `pages/[PageName]/hooks/` instead.

---

### `styles/`

Global styles and Tailwind configuration.

```
styles/
├── globals.css       # Tailwind imports, base resets
└── variables.css     # CSS custom properties — brand colors, spacing, typography
```

---

### `context/`

React Context for any global state that needs to be shared app-wide.

```
context/
├── ThemeContext.tsx      # Light/dark mode if applicable
└── NotificationContext.tsx  # Toast / alert system
```

---

### `types/`

Shared TypeScript types and interfaces. If a type is used in more than one file, it lives here.

```
types/
├── project.ts        # Portfolio project shape
├── service.ts        # Service offering shape
├── contact.ts        # Contact/request form data
└── index.ts          # Barrel export
```

> If a type is only used inside one component or file, just define it there. Only promote to `types/` when it's shared.

---

### `assets/`

Static files imported directly into components.

```
assets/
├── images/           # Project screenshots, hero images
├── icons/            # Custom SVG icons
└── fonts/            # Any self-hosted fonts
```

---

## Key Rules

| Rule                                            | Why                                           |
| ----------------------------------------------- | --------------------------------------------- |
| Page-specific code stays inside `pages/[Page]/` | Delete a page, delete one folder. No orphans. |
| Shared code lives at the top level              | One place to look for anything reused         |
| API calls never go inside components            | Components handle UI, not data fetching       |
| `data.ts` holds all static copy                 | Edit content without touching JSX             |
| Barrel `index.ts` in every folder               | Clean, refactor-friendly imports              |

---

## Barrel File Pattern

Each folder has an `index.ts` that re-exports its contents.

```ts
// components/ui/index.ts
export { default as Button } from "./Button";
export { default as Input } from "./Input";
export { default as Loader } from "./Loader";
```

```ts
// Clean import anywhere in the app
import { Button, Input } from "@/components/ui";
```

Set up the `@/` alias in both `vite.config.ts` and `tsconfig.json` so you never write `../../` again.

---

## Where Does This File Go?

```
Is it used on more than one page?
├── Yes → top-level folder
└── No  → pages/[PageName]/

Is it a UI element?
├── Shared → components/ui/ or components/layout/
└── Page-specific → pages/[PageName]/components/

Is it a function with no UI?
├── API call → lib/api/
└── Helper → lib/utils/

Is it a TypeScript type?
├── Used in multiple files → types/
└── Used in one file → keep it there
```

---

_This doc will grow as the project does. Update it when you add new pages, introduce new patterns, or change the structure._
