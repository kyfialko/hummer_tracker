// Simple in-session store for sightings. No backend yet.
// Swap this out later for a real endpoint (Formspree, Supabase, etc.)

const RMBL = {
  // Seed pins so the map isn't empty on first load
  seedSightings: [
    {
      id: 's1',
      species: 'Broad-tailed Hummingbird',
      sex: 'M',
      colormark: false,
      lat: 38.9575,
      lng: -106.9903,
      time: '2026-06-02T07:45',
      observer: 'K.',
      notes: 'Feeding on Delphinium nuttallianum near cabin 4.',
      flowerPhoto: null,
      birdPhoto: null
    },
    {
      id: 's2',
      species: 'Rufous Hummingbird',
      sex: 'M',
      colormark: true,
      lat: 38.9601,
      lng: -106.9878,
      time: '2026-06-02T10:12',
      observer: 'K.',
      notes: 'Aggressive at feeder. Green leg band.',
      flowerPhoto: null,
      birdPhoto: null
    },
    {
      id: 's3',
      species: 'Broad-tailed Hummingbird',
      sex: 'F',
      colormark: false,
      lat: 38.9549,
      lng: -106.9921,
      time: '2026-06-01T15:30',
      observer: 'Team',
      notes: 'Visiting Ipomopsis aggregata patch along trail.',
      flowerPhoto: null,
      birdPhoto: null
    }
  ],

  // All sightings (seed + submitted this session)
  sightings: [],

  init() {
    this.sightings = [...this.seedSightings];
  },

  add(sighting) {
    sighting.id = 'u' + Date.now();
    this.sightings.push(sighting);
    return sighting;
  }
};

RMBL.init();

// Highlight active nav link
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});
