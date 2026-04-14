# RMBL Hummingbird Watch — test site

Test website for logging bird observations. Created with Claude Code. Five pages:

- **index.html** — landing / field log intro
- **submit.html** — sighting submission form
- **map.html** —  Leaflet map with pinned sightings
- **birds.html** — "Meet the Birds" (placeholder cards)
- **team.html** — about the team (placeholder cards)
- 

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

---

## Customizing

- **Colors, fonts, spacing:** all in `css/style.css` at the top (`:root` CSS variables).
- **Map center / zoom:** `map.html`, search for `setView`. Currently centered on Gothic (38.9575, -106.9903).
- **Species list on the form:** `submit.html`, `<select id="species">`.
- **Seed pins for the map:** `js/store.js`, `seedSightings` array.
- **Bird / team cards:** `birds.html` and `team.html`, fill in the placeholder cards directly.

