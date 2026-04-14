# RMBL Hummingbird Watch — test site

Test website for logging bird observations. Created with Claude Code. Five pages:

- **index.html** — landing / field log intro
- **submit.html** — sighting submission form
- **map.html** — live Leaflet map with pinned sightings
- **birds.html** — "Meet the Birds" (placeholder cards)
- **team.html** — about the team (placeholder cards)

---

## Running locally

Open `index.html` in a browser. Or, for the submit→map handoff to work reliably (uses `sessionStorage`), serve it:

```bash
cd rmbl-site
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

3. In the repo, go to **Settings → Pages**.
4. Under "Source", select **Deploy from a branch** → `main` → `/ (root)` → Save.
5. In ~1 minute, your site will be live at `https://<your-username>.github.io/rmbl-hummingbirds/`.

---

## Current state: mock only

Submissions **do not persist to a real backend**. They live in `sessionStorage` — meaning:

- A submitted sighting shows up on the map in the same browser tab/session.
- Refreshing the map page keeps it; closing the tab clears it.
- Other people won't see each other's submissions.

This is intentional — the UI is a mock you can demo and iterate on before wiring up real storage.

---

## Adding a real backend later

Pick any of these. All of them require only a tiny change to the form's submit handler in `submit.html`:

### Option A — Formspree (easiest, free tier)
- Sign up at formspree.io, get a form endpoint.
- Change the `<form>` to `<form action="https://formspree.io/f/YOUR_ID" method="POST" enctype="multipart/form-data">`.
- Submissions land in your email / Formspree dashboard. You'd manually add them to a data file the map reads.

### Option B — Google Forms + Google Sheets (free, familiar to field crews)
- Build a matching Google Form, publish responses to a Sheet.
- Replace this site's form with an embedded Google Form, OR keep this UI and POST to the Form's `formResponse` endpoint.
- Map page can fetch the published Sheet as CSV/JSON and plot pins.

### Option C — Supabase or Firebase (real-time, still free tier)
- Stand up a Postgres/Firestore table with columns matching the form fields.
- Add the JS SDK to `submit.html` (insert) and `map.html` (select).
- Supports photo uploads to their storage buckets.
- Live updates possible if you want the map to refresh automatically.

### Option D — GitHub Issues as a backend (cute, version-controlled)
- Change the submit button to open a pre-filled GitHub Issue with the form data in the body.
- Periodically run a GitHub Action that parses closed/labeled issues into a `sightings.json` file the map reads.
- Fully auditable, but requires observers to have GitHub accounts.

**My recommendation:** Google Form → Sheet → CSV is the lowest-friction option for a summer field crew. Supabase if you want it to feel like a real app.

---

## Customizing

- **Colors, fonts, spacing:** all in `css/style.css` at the top (`:root` CSS variables).
- **Map center / zoom:** `map.html`, search for `setView`. Currently centered on Gothic (38.9575, -106.9903).
- **Species list on the form:** `submit.html`, `<select id="species">`.
- **Seed pins for the map:** `js/store.js`, `seedSightings` array.
- **Bird / team cards:** `birds.html` and `team.html`, fill in the placeholder cards directly.

