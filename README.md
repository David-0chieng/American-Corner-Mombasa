# American Corner Mombasa

The website of American Corner Mombasa, an American Space at the MEWA Information Center in Majengo, Mombasa. It is a frontend-only Next.js app that needs no backend, database or environment variables.

## How to run

### Requirements

- [Node.js](https://nodejs.org/) 20.9 or later, which includes npm. Check your version with `node -v`.
- [Git](https://git-scm.com/), to clone the repository.

### Start the development server

1. Clone the repository and open the project folder:

   ```bash
   git clone <repository-url> american-corner-mombasa
   cd american-corner-mombasa
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open http://localhost:8080. The page updates automatically when you save a file. Press `Ctrl+C` in the terminal to stop the server.

### Build and preview for production

```bash
npm run build
npm run preview
```

`npm run build` checks types and lint rules, then writes an optimized build to `.next/`. `npm run preview` serves that build at http://localhost:8080. Run `npm run build` again after each change before previewing.

### Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server at http://localhost:8080. |
| `npm run build` | Checks types and lint rules, then builds the site for production. |
| `npm run preview` | Serves the production build at http://localhost:8080. |
| `npm run lint` | Checks the code with ESLint. |

To use a different port, add it after `--`, for example `npm run dev -- -p 3000`.

### Troubleshooting

- **Port 8080 is already in use:** stop the program using it, or start the server on another port as shown above.
- **The production preview shows errors after using the development server:** both commands use the `.next/` folder. Stop the development server, run `npm run build`, then run `npm run preview`.
- **Errors after pulling changes or switching Node.js versions:** delete the `node_modules/` and `.next/` folders, then run `npm install` again.
- **Node.js version errors:** install Node.js 20.9 or later.

### Project structure

| Path | Contents |
| --- | --- |
| `pages/` | Next.js entry points. `_app.jsx` loads the global styles, and `[[...path]].jsx` renders the site for every URL. |
| `src/App.tsx` | The site's routes. |
| `src/pages/` | One component per page. |
| `src/components/` | Shared components, such as the navigation bar, footer and UI elements. |
| `src/data/` | Site content, such as Corner facts, the weekly program, impact stories and photo credits. |
| `public/` | The logo, photos and graphics. |

## About the site

Next.js serves every route through a single catch-all page, and React Router handles navigation in the browser, including for the legacy pages.

The login, admin dashboard and internship application pages were removed because they depended on an Express and MongoDB server that is no longer part of the project. The internship information page remains, and its application link opens an external form.

The public landing, about, programs and contact pages use American Corner Mombasa information. Pages and routes from the earlier site are preserved as legacy content marked "Reserved — awaits confirmation"; their opportunities, claims, forms and policies are not verified as American Corner offerings. The original home, about and programs pages remain at `/legacy/home`, `/legacy/about` and `/legacy/programs`.

The American Spaces logo was already present in the project. Confirm permission and applicable branding requirements before publishing. The contact form opens the visitor's email application; it does not send messages on its own. Opening hours are not published officially; confirm them and current activities directly with the Corner.

### Home, About and Programs

- Home (`/`) shows what's on today or next, the week at a glance, ways to take part, recent official posts and visit details.
- About (`/about`) covers who the Corner is, its six areas of work, its host MEWA, a sourced history, people, partners, the American Spaces network in Kenya, a community video, visitor information with a map and FAQs.
- Programs (`/programs`) lists the weekly programs and how they connect to the American Spaces pillars.
- Impact (`/impact`) presents documented results: headline figures, a participant's quote, how the Corner creates change, 12 dated stories from 2013 to 2026, context figures for Mombasa and Kenya, and reasons partners work with the Corner. Its content lives in `src/data/impact.ts`. The Corner publishes no annual totals, so each figure comes from a report on a single program and links to it.

Facts for Home and About live in `src/data/corner.ts`, and each one links to its source. People are named only where the Corner or a published source has credited them. The Kenya network list comes from the American Spaces locator data checked in November 2026.

### Weekly program

The weekly program is based on the schedule supplied by the site owner and is listed on `/programs`, `/events` and the home page. The Programs menu lists activities by name. Each activity has a page under `/weekly-program/<slug>` with upcoming dates, verified past sessions, named facilitators, topics, a typical session, resources and FAQs. Program content lives in `src/data/weeklyProgram.ts`; update it as the Corner confirms speakers, topics and times.

- Times and named facilitators come only from the Corner's posts or other published sources and link to them. Monday computer maintenance (2–4 pm) and Friday Games Corner (2–5 pm) use times the Corner announced; other times remain approximate or to be confirmed.
- Upcoming dates are calculated in Mombasa time. Topics assigned to upcoming dates are proposals from each program's topic list.
- Wednesday's EducationUSA and exchange session is a suggestion awaiting confirmation; it has no upcoming dates or calendar links.
- "Add to calendar" creates timed events where the Corner announced a time and all-day reminders otherwise.
- Older event content remains on `/events` and is labelled separately.

### Media

The previous organization's photos, logos, brand patterns, documentary embed and motion graphic were removed from the project and replaced. A backup of the removed files is kept outside the repository.

- `public/media/photos/`: public-domain and openly licensed photos from Wikimedia Commons and U.S. government Flickr accounts, resized and converted to WebP. Attribution is shown alongside program photos and in full on `/photo-credits`. CC BY-SA photos remain under their licences.
- `public/media/art/`, `patterns/`, `illustrations/` and `og/`: original graphics created for this site; icon geometry comes from Lucide (ISC License).
- Official posts and videos from American Corner Mombasa's Facebook page and YouTube channel are embedded, not copied. No openly licensed photo of the Corner itself was found.
- Photos of the MEWA Information Centre (2010) are U.S. Government works. Photos from elsewhere in Kenya and the U.S. illustrate program themes and are labelled as such.

### Research sources

- [American Spaces Locator: American Corner Mombasa](https://americanspaces.info/locator/acmombasa) — location, contact and social links.
- [U.S. Embassy in Kenya: American Spaces](https://ke.usembassy.gov/education/am-spaces/) — network, activities and the Corner's mobile numbers.
- [U.S. Department of State: American Spaces](https://americanspaces.state.gov/wp-content/uploads/sites/292/External-American-Spaces-One-Pager-.pdf) — free and open access and typical offerings.
- [American Corner Mombasa on Facebook](https://www.facebook.com/AmericancornerMombasa/) — current Tech Talks, Games Corner, computer maintenance and English club activity, cited post by post on each program page.
- [MEWA (archived)](https://web.archive.org/web/20150124162434/http://www.mewa.or.ke:80/miclib/index.html) and [U.S. Embassy Nairobi (archived, 2011)](https://web.archive.org/web/20110302114759/http://nairobi.usembassy.gov:80/resources/american-corners-contact-information.html) — host organization and history.
- [Kenya News Agency: Academy for Women Entrepreneurs](https://www.kenyanews.go.ke/women-undergo-entrepreneurial-training-to-improve-their-businesses/) and [Kenya Tech Frontiers at the Corner](https://www.linkedin.com/posts/daniel-muinuki-6740b5318_kenyatechfrontiers-betheleader-americancornermombasa-activity-7476569530429874176-QkBO) — entrepreneurship history.
- [KNBS Economic Survey 2026](https://repository.knbs.or.ke/bitstreams/0f93337f-d810-48af-bd1a-9de0a11498e6/download), [KNBS 2019 Census, Vol. IV](https://repository.knbs.or.ke/bitstreams/40bc90d8-177f-44d2-a9e4-7b99beb70ec5/download), [IIE Open Doors](https://opendoorsdata.org/data/international-students/all-places-of-origin/) and [EF EPI](https://www.ef.edu/epi/regions/africa/kenya/) — statistics used in "Why it matters".
- [EducationUSA: Your 5 Steps to U.S. Study](https://educationusa.state.gov/educationusa.state.gov/your-5-steps-us-study.html) and [Global UGRAD](https://www.globalugrad.org/apply/) — Wednesday proposal; exchange availability changes often and was checked in November 2026.
- [schema.org EventSeries](https://schema.org/EventSeries) and [Google Event structured data](https://developers.google.com/search/docs/appearance/structured-data/event) — program pages use `EventSeries` with a weekly `eventSchedule`, which Google does not use for event rich results.
