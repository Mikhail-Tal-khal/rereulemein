# Portfolio — sato akira

Personal portfolio site. Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.

```bash
npm run dev
```

Then open http://localhost:3000.

## Structure

| Path | What it is |
| --- | --- |
| `src/data/profile.ts` | **All site copy lives here.** Edit this file, not the components. |
| `src/app/layout.tsx` | Fonts (Geist, Geist Mono, EB Garamond), page metadata. |
| `src/app/globals.css` | Design tokens (`@theme`), animations, the chequered board background. |
| `src/components/` | One component per section, plus three interactive pieces. |

Sections in order: Hero → Profile → Arsenal (skills) → Work → Projects → Method → Credentials → Contact.

## Interactive pieces

- **`Meditations.tsx`** — rotating passages from Marcus Aurelius (George Long translation, 1862, public domain). Auto-advances every 9s, pauses on hover/focus.
- **`KnightBoard.tsx`** — a live chessboard. The knight starts on g1; legal moves are marked, click to play one. Visited squares stay dotted.
- **`EscapeLocks.tsx`** — three cards that open one at a time; opening all three changes the status line.

## Privacy

The CV this was built from contained personal particulars that are **deliberately not on the site**:

- national ID number
- date of birth
- telephone number
- nationality and security-vetting particulars
- home address

Only the professional contact points are published: email, GitHub, and city. The contact section says explicitly that particulars, referees and verification documents are available on request rather than on a public page. If you add analytics or a contact form later, keep it that way — a form that emails you is fine; a form that stores identity data on a third-party host is not.

## Deploying

Static output, no server dependencies:

```bash
npm run build
```

Deploys to Vercel, Netlify or Cloudflare Pages as-is. Set a custom domain and the `metadataBase` in `layout.tsx` if you want richer link previews.
