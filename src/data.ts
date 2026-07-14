import { SpaceObject } from './types';

export const spaceObjects: SpaceObject[] = [
  {
    id: 'milky-way',
    name: 'Milky Way Galaxy',
    category: 'galaxy',
    categoryLabel: 'Galaxy',
    embedPath: '/milky-way.html',
    distance: '0 light-years',
    mass: '1.5 trillion solar masses',
    constellation: 'Sagittarius (Galactic Center)',
    oneLiner: 'Our home barred spiral galaxy, housing over 100 billion stars.',
    description: 'The Milky Way is a massive barred spiral galaxy that contains our Solar System, along with billions of other planetary systems. Estimations suggest it stretches between 100,000 and 120,000 light-years in diameter. It is characterized by a central stellar bar, multiple spiral arms rich with gas, dust, and young star clusters, and a vast halo containing ancient globular clusters.',
    quickStats: [
      { label: 'Galaxy Type', value: 'Barred Spiral (SBbc)' },
      { label: 'Stellar Count', value: '100 – 400 Billion' },
      { label: 'Diameter', value: '100,000 – 120,000 ly' },
      { label: 'Age', value: '13.6 Billion Years' },
      { label: 'Rotational Speed', value: '220 km/s (Orbit of Sun)' }
    ],
    trivia: [
      { label: 'The local group', value: 'The Milky Way is part of the Local Group of galaxies and is on a collision course with the Andromeda Galaxy in about 4.5 billion years.' },
      { label: 'Supermassive center', value: 'Almost all spiral galaxies host a supermassive black hole at their center; ours is Sagittarius A*, weighing 4 million solar masses.' },
      { label: 'Ancient stars', value: 'The oldest stars in the Milky Way halo are nearly as old as the Universe itself.' }
    ].map(t => t.value),
    themeColor: 'purple',
    bgGradient: 'from-indigo-500/10 to-purple-500/10',
    interactiveFeatures: [
      'Stellar Population Controls',
      'Nebula & Interstellar Dust Toggles',
      'Real-time Twinkle Modulation',
      'Variable Speed Orbit Simulator'
    ],
    scientificSignificance: 'Studying the Milky Way allows us to understand galactic evolution, spiral arm formation, dark matter distribution, and planetary habitability from within a highly detailed laboratory.'
  },
  {
    id: 'solar-system',
    name: 'The Solar System',
    category: 'stellar-system',
    categoryLabel: 'Stellar System',
    embedPath: '/solar-system.html',
    distance: '0 light-years (Our Home)',
    mass: '1.0014 Solar Masses (Total)',
    constellation: 'Not Applicable',
    oneLiner: 'Our localized planetary system centered around a G-type main-sequence star.',
    description: 'The Solar System consists of our star, the Sun, and everything bound to it by gravity—the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of moons; and millions of asteroids, comets, and meteoroids. It formed 4.57 billion years ago from the gravitational collapse of a giant interstellar molecular cloud.',
    quickStats: [
      { label: 'Central Star', value: 'The Sun (G2V Class)' },
      { label: 'Major Planets', value: '8 (4 Terrestrial, 4 Giants)' },
      { label: 'Known Moons', value: '290+' },
      { label: 'Age', value: '4.57 Billion Years' },
      { label: 'Heliopause Distance', value: '120+ Astronomical Units' }
    ],
    trivia: [
      { label: '99% Sun', value: 'The Sun contains 99.86% of all the mass in the entire Solar System.' },
      { label: 'Saturn Rings', value: 'Saturn\'s ring particles are made almost entirely of water ice, varying from tiny dust grains to mountain-sized chunks.' },
      { label: 'Asteroid Belt', value: 'The total mass of the asteroid belt between Mars and Jupiter is less than 4% of the Moon\'s mass.' }
    ].map(t => t.value),
    themeColor: 'amber',
    bgGradient: 'from-amber-500/10 to-yellow-500/10',
    interactiveFeatures: [
      '8 major planets orbiting in real-time',
      'Realistic Saturn ring rendering',
      'Sun spot activity simulator',
      'Individual Orbit & Label Controls'
    ],
    scientificSignificance: 'The Solar System serves as our baseline of truth for physical astronomy, geology, climate systems, and astro-biology. Understanding our planets helps us interpret exoplanet data and assess distant life prospects.'
  },
  {
    id: 'alpha-centauri',
    name: 'Alpha Centauri System',
    category: 'stellar-system',
    categoryLabel: 'Stellar System',
    embedPath: '/alpha-centauri-system.html',
    distance: '4.37 light-years',
    mass: '2.0 Solar Masses (Combined)',
    constellation: 'Centaurus',
    oneLiner: 'The closest stellar system to Earth, consisting of three stars.',
    description: 'Alpha Centauri is a triple star system. It consists of three stars: Alpha Centauri A (a G-type star similar to our Sun), Alpha Centauri B (a slightly cooler K-type star), and Proxima Centauri (an M-type red dwarf). Proxima Centauri is the closest individual star to our Sun at 4.24 light-years, and hosts Proxima Centauri b, a planet in its habitable zone.',
    quickStats: [
      { label: 'Star Count', value: '3 (Binary A/B + Dwarf C)' },
      { label: 'Closest Star', value: 'Proxima Centauri (4.24 ly)' },
      { label: 'Known Exoplanets', value: '3 (Around Proxima Centauri)' },
      { label: 'Stellar Classes', value: 'G2V, K1V, M6Ve' },
      { label: 'Orbital Period A/B', value: '79.91 Years' }
    ],
    trivia: [
      { label: 'Breakthrough Starshot', value: 'Alpha Centauri is the target of the Breakthrough Starshot initiative, which aims to send laser-sail microprobes traveling at 20% the speed of light to capture close-up images.' },
      { label: 'Proxima b', value: 'Proxima b is a rocky planet 1.17 times the mass of Earth that orbits within Proxima\'s habitable zone every 11.2 days.' },
      { label: 'Three-body orbit', value: 'Proxima Centauri orbits the central binary pair at an immense distance, taking approximately 550,000 years to complete one orbit.' }
    ].map(t => t.value),
    themeColor: 'cyan',
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
    interactiveFeatures: [
      'Stellar orbit visualization of Binary A & B',
      'Orbit path representation for Proxima Centauri',
      'Spectral star plasma rendering',
      'Damping-controlled camera flythroughs'
    ],
    scientificSignificance: 'As our nearest neighbor, Alpha Centauri is the primary target for future interstellar exploration missions and represents our best opportunity to obtain high-resolution direct data from another star system.'
  },
  {
    id: 'trappist-1',
    name: 'TRAPPIST-1 System',
    category: 'stellar-system',
    categoryLabel: 'Stellar System',
    embedPath: '/TRAPPIST-1.html',
    distance: '40.7 light-years',
    mass: '0.09 Solar Masses (Star)',
    constellation: 'Aquarius',
    oneLiner: 'An ultra-cool red dwarf star system featuring seven rocky, Earth-sized planets.',
    description: 'TRAPPIST-1 is a cold, low-mass M-dwarf star orbited by an extraordinary chain of seven terrestrial exoplanets, all similar in size to Earth. Because the red dwarf emits very little light and heat compared to our Sun, all seven planets orbit extremely close to the star—closer than Mercury\'s orbit to our Sun. Three of these planets lie squarely within the star\'s habitable zone.',
    quickStats: [
      { label: 'Star Type', value: 'Ultra-cool Red Dwarf (M8V)' },
      { label: 'Rocky Planets', value: '7 (TRAPPIST-1b through h)' },
      { label: 'Habitable Zone', value: '3 Planets (1e, 1f, 1g)' },
      { label: 'Star Diameter', value: '12% of the Sun (size of Jupiter)' },
      { label: 'Orbital Resonances', value: 'Perfect orbital harmony (laplace chains)' }
    ],
    trivia: [
      { label: 'Compact system', value: 'The entire TRAPPIST-1 planetary system could easily fit inside the orbit of Mercury.' },
      { label: 'Close neighbors', value: 'If you stood on the surface of TRAPPIST-1f, neighboring planets would appear as large as our Moon in the sky.' },
      { label: 'Tidally locked', value: 'All seven planets are likely tidally locked, meaning they have a permanent day side and a permanent night side.' }
    ].map(t => t.value),
    themeColor: 'rose',
    bgGradient: 'from-rose-500/10 to-red-500/10',
    interactiveFeatures: [
      '7 tightly-packed orbits simulating true orbital ratios',
      'Ultra-cool red dwarf plasma solar shader',
      'Simulated atmospheric scattering on exoplanets',
      'Label controls and high-precision screenshot tool'
    ],
    scientificSignificance: 'TRAPPIST-1 offers the most promising environment for the James Webb Space Telescope (JWST) to characterize atmospheres of terrestrial planets and search for potential biosignatures outside our solar system.'
  },
  {
    id: 'kepler-90',
    name: 'Kepler-90 System',
    category: 'stellar-system',
    categoryLabel: 'Stellar System',
    embedPath: '/Kepler-90.html',
    distance: '2,840 light-years',
    mass: '1.2 Solar Masses (Star)',
    constellation: 'Draco',
    oneLiner: 'The first exoplanetary system found to match our Solar System in planet count.',
    description: 'Kepler-90 is a G-type main-sequence star, slightly larger and hotter than our Sun, located in the constellation Draco. In 2017, the discovery of Kepler-90i using Google machine learning models confirmed that the system has eight orbiting planets, establishing a tie with our own Solar System. The planets are arranged in a highly compact configuration, with all eight orbiting within 1.0 Astronomical Unit of their star.',
    quickStats: [
      { label: 'Star Type', value: 'G0V Main Sequence Star' },
      { label: 'Known Planets', value: '8 (Kepler-90b through i)' },
      { label: 'Compact Boundary', value: 'All 8 planets orbit within 1.0 AU' },
      { label: 'Outer Planet', value: 'Kepler-90h (Gas Giant)' },
      { label: 'Discovery Method', value: 'Kepler Transit Photometry + AI' }
    ],
    trivia: [
      { label: 'AI discovery', value: 'Kepler-90i, the eighth planet, was discovered by a neural network analyzing weak transit signals that human scientists had missed.' },
      { label: 'Hot worlds', value: 'Even the outermost planet, Kepler-90h, orbits at a distance similar to Earth but receives significant heat from its larger star.' },
      { label: 'Compact orbits', value: 'The orbits are extremely crowded; the inner six planets range from rocky super-Earths to mini-Neptunes, all close to their star.' }
    ].map(t => t.value),
    themeColor: 'emerald',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    interactiveFeatures: [
      '8 concentric planet orbits visualizer',
      'G-type star atmospheric rayleigh scattering glow',
      'Detailed procedural planet textures',
      'Fast-loading OrbitControls canvas with post-processing bloom'
    ],
    scientificSignificance: 'Kepler-90 proves that highly crowded planetary systems with multiple orbital rings are common in the galaxy, providing crucial data for testing theories of planetary migration and system dynamics.'
  },
  {
    id: 'sagittarius-a',
    name: 'Sagittarius A*',
    category: 'black-hole',
    categoryLabel: 'Black Hole',
    embedPath: '/sagittarius-a.html',
    distance: '26,670 light-years',
    mass: '4.15 million solar masses',
    constellation: 'Sagittarius',
    oneLiner: 'The supermassive black hole anchor at the heart of our Milky Way Galaxy.',
    description: 'Sagittarius A* (abbreviated Sgr A*) is a highly compact, supermassive black hole located at the gravitational center of the Milky Way. It is surrounded by a dense cluster of high-speed stars (such as S2) and is typically quiescent, only occasionally flaring as it consumes small clumps of gas. The Event Horizon Telescope Collaboration published its first direct image of Sgr A* in May 2022.',
    quickStats: [
      { label: 'Black Hole Class', value: 'Supermassive Black Hole (SMBH)' },
      { label: 'Schwarschild Radius', value: '12 Million km (17 Solar Radii)' },
      { label: 'Host Location', value: 'Milky Way Core' },
      { label: 'Event Horizon Image', value: 'EHT Collaboration (2022)' },
      { label: 'Central Star Cluster', value: 'The S-stars (S2 orbits Sgr A* every 16 years)' }
    ],
    trivia: [
      { label: 'S2 Orbit', value: 'The star S2 approaches within 17 light-hours of Sgr A*, reaching speeds exceeding 7,650 km/s (nearly 3% the speed of light) in its eccentric orbit.' },
      { label: 'Event Horizon Size', value: 'The event horizon of Sgr A* is roughly 17 times larger than the Sun, fitting comfortably inside the orbit of Mercury.' },
      { label: 'Quiet giant', value: 'Compared to active quasars, Sgr A* is starving, receiving very little mass and glowing extremely dimly.' }
    ].map(t => t.value),
    themeColor: 'cyan',
    bgGradient: 'from-cyan-500/10 to-purple-500/10',
    interactiveFeatures: [
      'Interactive Event Horizon & Singularity core',
      'Accretion disk with Doppler-shifted glowing gas',
      'Simulated Relativistic Outflow jets',
      'Gravitational lensing shader representing light distortion'
    ],
    scientificSignificance: 'Sgr A* is our primary source for testing Einstein\'s General Relativity under strong-field regimes. Studying S-star orbits allows us to measure galactic gravity with extreme precision.'
  },
  {
    id: 'ton-618',
    name: 'TON 618',
    category: 'black-hole',
    categoryLabel: 'Black Hole / Quasar',
    embedPath: '/ton-618.html',
    distance: '10.4 billion light-years',
    mass: '66 billion solar masses',
    constellation: 'Canes Venatici',
    oneLiner: 'One of the most massive black holes known, powering a hyperluminous quasar.',
    description: 'TON 618 is an incredibly distant, hyperluminous quasar hosting one of the largest known supermassive (or ultramassive) black holes in existence. Operating as a active galactic nucleus, the black hole swallows vast amounts of matter, compressing and heating it into an accretion disk of colossal proportions. The disk emits light so powerful that TON 618 shines with the luminosity of 140 trillion Suns.',
    quickStats: [
      { label: 'Black Hole Class', value: 'Ultramassive Black Hole (UMBH)' },
      { label: 'Schwarzschild Radius', value: '195 Billion km (1,300 Astronomical Units)' },
      { label: 'Quasar Luminosity', value: '140 Trillion Solar Luminosities' },
      { label: 'Universe Age at Emission', value: 'Only 3.4 billion years old' },
      { label: 'Accretion Rate', value: 'Estimated thousands of Earths per second' }
    ],
    trivia: [
      { label: 'Mind-boggling size', value: 'Its event horizon is so vast that it could easily contain our entire solar system inside it dozens of times over.' },
      { label: 'Distant lighthouse', value: 'The light we observe from TON 618 today left the quasar 10.4 billion years ago, long before the Earth or Sun even existed.' },
      { label: 'Ststellar wind', value: 'The radiation pressure from TON 618 drives intense winds of gas outward into its host galaxy at up to 7% the speed of light.' }
    ].map(t => t.value),
    themeColor: 'fuchsia',
    bgGradient: 'from-pink-500/10 to-fuchsia-500/10',
    interactiveFeatures: [
      'Luminous pink/magenta accretion vortex animation',
      'Relativistic plasma jet columns',
      'Deep-space gravitational lensing simulator',
      'Full screenshot, reset, and custom HUD controls'
    ],
    scientificSignificance: 'TON 618 challenges theories of black hole growth, as it grew to 66 billion solar masses extremely early in cosmic history, posing major questions about primordial gas accumulation.'
  },
  {
    id: 'gaia-bh1',
    name: 'Gaia BH1',
    category: 'black-hole',
    categoryLabel: 'Black Hole',
    embedPath: '/gaia-bh1.html',
    distance: '1,560 light-years',
    mass: '9.62 solar masses',
    constellation: 'Ophiuchus',
    oneLiner: 'The closest known black hole to Earth, residing in a quiet binary system.',
    description: 'Gaia BH1 is a stellar-mass black hole located only 1,560 light-years away in the constellation Ophiuchus. It is the closest confirmed black hole to Earth. Gaia BH1 resides in a binary system, orbiting a Sun-like companion star once every 185.6 days. Unlike most discovered stellar black holes, Gaia BH1 is quiet, not actively feeding, and was discovered by tracking the wobble of its companion star.',
    quickStats: [
      { label: 'Black Hole Class', value: 'Stellar-mass Black Hole' },
      { label: 'Distance', value: '1,560 light-years (Nearest known)' },
      { label: 'Binary Companion', value: 'Sun-like Star (1.0 Solar Mass, G-type)' },
      { label: 'Orbital Period', value: '185.6 Days' },
      { label: 'Discovery Mission', value: 'ESA Gaia Astrometry (DR3)' }
    ],
    trivia: [
      { label: 'Invisible gravity', value: 'Because the black hole does not pull gas from its companion, it emits no X-rays, making it completely invisible except for its gravity.' },
      { label: 'Binary survival', value: 'How this binary system survived the supergiant phase and supernova explosion of the black hole\'s progenitor star remains an astronomical mystery.' },
      { label: 'Wobble detection', value: 'Astronomers found it by observing the companion star traveling in a perfect ellipse around empty space.' }
    ].map(t => t.value),
    themeColor: 'violet',
    bgGradient: 'from-indigo-500/10 to-violet-500/10',
    interactiveFeatures: [
      'Interactive 3D orbital binary system',
      'Accretion lensing simulator around a stellar-mass singularity',
      'Sun-like companion star plasma shader',
      'Custom astrometric wobble toggle controls'
    ],
    scientificSignificance: 'Gaia BH1 represents a vast, previously undetected population of dormant stellar-mass black holes in binary systems, shedding light on binary star stellar-evolution and supernova mechanisms.'
  },
  {
    id: 'phoenix-a',
    name: 'Phoenix A Black Hole',
    category: 'black-hole',
    categoryLabel: 'Black Hole',
    embedPath: '/phoenix-a-black-hole.html',
    distance: '5.8 billion light-years',
    mass: '100 billion solar masses',
    constellation: 'Phoenix',
    oneLiner: 'An absolute cosmic titan, believed to be the most massive black hole in the universe.',
    description: 'Located in the core of the central galaxy of the Phoenix Cluster, the Phoenix A Black Hole is an ultramassive giant estimated at approximately 100 billion solar masses. It is so massive that it is categorized as a structural agent of the galaxy cluster, pulling entire streams of gas, regulating star formation, and shaping the local galactic environment through immense gravitational influence.',
    quickStats: [
      { label: 'Black Hole Class', value: 'Ultramassive Black Hole (UMBH)' },
      { label: 'Estimated Mass', value: '100 Billion Solar Masses' },
      { label: 'Host Cluster', value: 'Phoenix Cluster (Vast Galaxy Cluster)' },
      { label: 'Event Horizon Radius', value: '295 Billion km (1,970 AU)' },
      { label: 'Galactic Impact', value: 'Controls central cluster cooling flows' }
    ],
    trivia: [
      { label: 'Scale of titan', value: 'Its event horizon is roughly 100 times wider than the distance from the Sun to Pluto.' },
      { label: 'Cluster core', value: 'The Phoenix Cluster is one of the most active star-forming clusters, and Phoenix A regulates the warm gas cycle that feeds this stellar nursery.' },
      { label: 'Gravitational reach', value: 'Its gravitational sphere of influence stretches several thousand light-years into the central galaxy.' }
    ].map(t => t.value),
    themeColor: 'orange',
    bgGradient: 'from-orange-500/10 to-amber-500/10',
    interactiveFeatures: [
      'Massive scale event horizon visualization',
      'Blazing orange accretion disk and relativistic jets',
      'Gravitational lensing light-bending pass',
      'Ultra dark aesthetic mode toggle and screenshots'
    ],
    scientificSignificance: 'Phoenix A represents the extreme upper limit of black hole sizes, testing models of black hole growth, accretion physics, and the thermodynamic feedback cycles of massive galaxy clusters.'
  }
];
