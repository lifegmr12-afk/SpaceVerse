import { SpaceObject } from './types';

export const spaceObjects: SpaceObject[] = [
  {
  id: 'milky-way',
  name: 'Milky Way Galaxy',
  category: 'galaxy',
  categoryLabel: 'Galaxy',
  embedPath: '/milky-way.html',

  distance: '0 Light-years (Our Home Galaxy)',
  mass: '1–1.5 Trillion Solar Masses',
  constellation: 'Sagittarius (Galactic Center)',

  oneLiner:
    'A giant barred spiral galaxy containing hundreds of billions of stars, thousands of nebulae, countless planetary systems, and our own Solar System.',

  description:
    'The Milky Way is the galaxy that contains our Solar System and is one of the largest galaxies in the Local Group. It is a barred spiral galaxy with a bright central bulge crossed by a stellar bar and surrounded by several magnificent spiral arms. The galaxy contains between 100 and 400 billion stars, vast clouds of gas and dust, thousands of star-forming nebulae, globular clusters, open star clusters, stellar remnants, black holes, neutron stars, and enormous amounts of dark matter. At its heart lies Sagittarius A*, a supermassive black hole with a mass of approximately 4.15 million Suns. The Milky Way has been evolving for more than 13.6 billion years through mergers with smaller galaxies and continuous star formation. Our Solar System is located within the Orion Arm, about 26,700 light-years from the Galactic Center, orbiting the center once every 225–250 million years.',

  quickStats: [
    { label: 'Galaxy Type', value: 'Barred Spiral (SBbc)' },
    { label: 'Age', value: '13.6 Billion Years' },
    { label: 'Diameter', value: '100,000–120,000 Light-years' },
    { label: 'Thickness', value: '≈1,000 Light-years (Disk)' },
    { label: 'Total Mass', value: '1–1.5 Trillion Solar Masses' },
    { label: 'Visible Stars', value: '100–400 Billion' },
    { label: 'Estimated Planets', value: '100–400 Billion+' },
    { label: 'Known Spiral Arms', value: '4 Major Arms' },
    { label: 'Central Black Hole', value: 'Sagittarius A*' },
    { label: 'Black Hole Mass', value: '4.15 Million Solar Masses' },
    { label: 'Distance to Galactic Center', value: '26,700 Light-years' },
    { label: 'Solar System Location', value: 'Orion Arm (Local Spur)' },
    { label: 'Sun Orbital Speed', value: '220 km/s' },
    { label: 'Galactic Rotation Period', value: '225–250 Million Years' },
    { label: 'Dark Matter', value: '≈85% of Total Mass' }
  ],

  trivia: [
    'The Milky Way contains between 100 and 400 billion stars.',
    'Our Solar System has completed only about 20 orbits around the galaxy since its formation.',
    'The Milky Way and the Andromeda Galaxy are expected to merge in about 4.5 billion years.',
    'Sagittarius A* is a supermassive black hole weighing over four million Suns.',
    'Most of the galaxy\'s mass is invisible dark matter.',
    'Light takes more than 100,000 years to travel across the galaxy.',
    'The Milky Way contains thousands of nebulae where new stars are born.',
    'More than 180 globular clusters orbit the galaxy.',
    'The oldest stars in the Milky Way formed shortly after the Big Bang.',
    'Every star visible in the night sky without a telescope belongs to the Milky Way.',
    'The Milky Way is moving through space at over 2 million km/h relative to the cosmic microwave background.',
    'Scientists estimate there may be billions of Earth-sized planets within the galaxy.'
  ],

  themeColor: 'purple',

  bgGradient:
    'from-indigo-600/10 via-purple-600/10 to-blue-600/10',

  interactiveFeatures: [
    '3D Spiral Arm Explorer',
    'Galactic Rotation Simulator',
    'Star Density Visualization',
    'Nebula Explorer',
    'Supermassive Black Hole Viewer',
    'Dark Matter Halo Display',
    'Solar System Location Marker',
    'Zoom from Solar System to Galactic Scale',
    'Globular Cluster Map',
    'Open Cluster Explorer',
    'Variable Star Animation',
    'Supernova Remnant Viewer',
    'Interstellar Dust Toggle',
    'Realistic Stellar Population',
    'Galaxy Evolution Timeline',
    'Collision Simulation with Andromeda',
    'Constellation Overlay',
    'Distance Measurement Tool',
    'Galactic Coordinate Grid',
    'Educational Information Panels'
  ],

  scientificSignificance:
    'The Milky Way is one of the most extensively studied galaxies because humanity observes it from within. Research on its stars, nebulae, gas clouds, dark matter, star clusters, black holes, and stellar populations provides fundamental insights into galaxy formation, stellar evolution, planetary systems, cosmology, and the large-scale structure of the Universe.',

  structure: {
    galaxyType: 'Barred Spiral Galaxy',
    centralBulge: 'Dense concentration of old stars',
    stellarBar: '≈27,000 Light-years Long',
    spiralArms: [
      'Perseus Arm',
      'Scutum–Centaurus Arm',
      'Sagittarius Arm',
      'Outer Arm'
    ],
    localArm: 'Orion Arm (Local Spur)',
    halo: 'Contains ancient stars, globular clusters, and dark matter',
    disk: 'Contains most stars, gas, dust, and spiral arms'
  },

  objects: {
    stars: '100–400 Billion',
    planets: '100–400 Billion+',
    nebulae: 'Thousands',
    globularClusters: '180+',
    openClusters: 'Thousands',
    blackHoles: 'Millions (Estimated)',
    neutronStars: 'Hundreds of Millions',
    whiteDwarfs: 'Billions',
    molecularClouds: 'Thousands'
  },

  notableObjects: [
    'Sagittarius A*',
    'Orion Nebula',
    'Eagle Nebula',
    'Lagoon Nebula',
    'Crab Nebula',
    'Omega Nebula',
    'Carina Nebula',
    'Pillars of Creation',
    'Pleiades',
    'Hyades',
    'Rho Ophiuchi Cloud Complex',
    'Cygnus X Star-forming Region'
  ],

  neighboringGalaxies: [
    'Andromeda Galaxy (M31)',
    'Triangulum Galaxy (M33)',
    'Large Magellanic Cloud',
    'Small Magellanic Cloud',
    'Sagittarius Dwarf Spheroidal Galaxy',
    'Canis Major Dwarf Galaxy'
  ],

  futureEvents: [
    'Continuous star formation',
    'Gradual consumption of interstellar gas',
    'Merger with the Andromeda Galaxy in about 4.5 billion years',
    'Formation of a giant elliptical galaxy after the merger'
  ]
},
  {
  id: 'solar-system',
  name: 'The Solar System',
  category: 'stellar-system',
  categoryLabel: 'Stellar System',
  embedPath: '/solar-system.html',

  distance: '0 Light-years (Our Home)',
  mass: '1.0014 Solar Masses (Total)',
  constellation: 'Not Applicable',

  oneLiner:
    'The Solar System is our home planetary system centered around the Sun, containing eight planets, hundreds of moons, dwarf planets, asteroids, comets, and countless smaller objects bound together by gravity.',

  description:
    'The Solar System formed approximately 4.57 billion years ago when a giant molecular cloud collapsed under its own gravity. At its center lies the Sun, a G-type main-sequence star that contains 99.86% of the system’s total mass. Orbiting the Sun are eight major planets divided into terrestrial worlds (Mercury, Venus, Earth, and Mars) and giant planets (Jupiter, Saturn, Uranus, and Neptune). Beyond the planets lie dwarf planets such as Pluto, Eris, Haumea, Makemake, and Ceres, along with thousands of moons, millions of asteroids, billions of comets, icy Kuiper Belt objects, and the distant Oort Cloud. The Solar System extends far beyond Neptune into interstellar space, where the solar wind eventually meets the interstellar medium at the heliopause.',

  quickStats: [
    { label: 'Central Star', value: 'The Sun (G2V Yellow Dwarf)' },
    { label: 'Age', value: '4.57 Billion Years' },
    { label: 'Major Planets', value: '8' },
    { label: 'Terrestrial Planets', value: '4' },
    { label: 'Giant Planets', value: '4 (2 Gas, 2 Ice Giants)' },
    { label: 'Recognized Dwarf Planets', value: '5' },
    { label: 'Known Natural Moons', value: '290+' },
    { label: 'Asteroid Belt', value: 'Between Mars & Jupiter' },
    { label: 'Kuiper Belt', value: '30–55 AU' },
    { label: 'Heliopause', value: '≈120 AU from the Sun' },
    { label: 'Estimated Oort Cloud', value: 'Up to 100,000 AU' },
    { label: 'Sun Mass Fraction', value: '99.86%' }
  ],

  planets: [
    {
      name: 'Mercury',
      type: 'Terrestrial Planet',
      diameter: '4,879 km',
      orbit: '88 Earth Days',
      moons: 0,
      fact: 'Closest planet to the Sun and the smallest major planet.'
    },
    {
      name: 'Venus',
      type: 'Terrestrial Planet',
      diameter: '12,104 km',
      orbit: '225 Earth Days',
      moons: 0,
      fact: 'Hottest planet due to an extreme greenhouse effect.'
    },
    {
      name: 'Earth',
      type: 'Terrestrial Planet',
      diameter: '12,742 km',
      orbit: '365.25 Days',
      moons: 1,
      fact: 'The only known planet to support life.'
    },
    {
      name: 'Mars',
      type: 'Terrestrial Planet',
      diameter: '6,779 km',
      orbit: '687 Earth Days',
      moons: 2,
      fact: 'Home to Olympus Mons, the tallest volcano in the Solar System.'
    },
    {
      name: 'Jupiter',
      type: 'Gas Giant',
      diameter: '139,820 km',
      orbit: '11.86 Years',
      moons: '95+',
      fact: 'Largest planet with the Great Red Spot storm.'
    },
    {
      name: 'Saturn',
      type: 'Gas Giant',
      diameter: '116,460 km',
      orbit: '29.45 Years',
      moons: '140+',
      fact: 'Famous for its spectacular ring system.'
    },
    {
      name: 'Uranus',
      type: 'Ice Giant',
      diameter: '50,724 km',
      orbit: '84 Years',
      moons: 28,
      fact: 'Rotates on its side with an axial tilt of 98°.'
    },
    {
      name: 'Neptune',
      type: 'Ice Giant',
      diameter: '49,244 km',
      orbit: '164.8 Years',
      moons: 16,
      fact: 'Strongest winds measured in the Solar System.'
    }
  ],

  dwarfPlanets: [
    'Ceres',
    'Pluto',
    'Haumea',
    'Makemake',
    'Eris'
  ],

  regions: [
    'Inner Solar System',
    'Asteroid Belt',
    'Outer Solar System',
    'Kuiper Belt',
    'Scattered Disc',
    'Heliosphere',
    'Heliopause',
    'Oort Cloud'
  ],

  majorObjects: [
    'The Sun',
    '8 Major Planets',
    '290+ Natural Moons',
    'Millions of Asteroids',
    'Billions of Comets',
    'Meteoroids',
    'Trans-Neptunian Objects',
    'Interplanetary Dust'
  ],

  trivia: [
    'The Sun contains 99.86% of all the mass in the Solar System.',
    'Jupiter is more than twice as massive as all the other planets combined.',
    'One year on Neptune lasts nearly 165 Earth years.',
    'Venus spins backward compared to most planets.',
    'Olympus Mons on Mars is the tallest known volcano in the Solar System.',
    'Saturn could float in water because its average density is lower than water.',
    'The asteroid belt contains millions of rocky bodies, but its total mass is less than 4% of the Moon’s mass.',
    'Comets are often called "dirty snowballs" because they contain ice, rock, and dust.',
    'The Solar System travels around the center of the Milky Way at about 828,000 km/h.',
    'It takes roughly 230 million Earth years for the Solar System to complete one galactic orbit.'
  ],

  interactiveFeatures: [
    'Real-time planetary orbits',
    'Accurate orbital speed simulation',
    'Planet labels with live data',
    'Zoom from Sun to Oort Cloud',
    'Scale comparison mode',
    'Distance measurement tool',
    'Realistic Saturn rings',
    'Sunspot activity simulation',
    'Asteroid Belt visualization',
    'Kuiper Belt explorer',
    'Orbit trail animation',
    'Planet rotation controls',
    'Time acceleration controls',
    'Moon orbit visualization'
  ],

  scientificSignificance:
    'The Solar System is humanity’s natural laboratory for studying planetary formation, stellar evolution, geology, atmospheric science, magnetism, orbital mechanics, climate systems, and the origin of life. Every spacecraft mission—from Apollo to Voyager, Cassini, Juno, New Horizons, Perseverance, and Parker Solar Probe—has expanded our understanding of how planetary systems form and evolve. Knowledge gained from our Solar System serves as the foundation for interpreting thousands of exoplanets discovered across the Milky Way.',

  explorationHighlights: [
    'Apollo missions landed humans on the Moon.',
    'Voyager 1 became the first spacecraft to enter interstellar space.',
    'Cassini explored Saturn for 13 years.',
    'New Horizons performed the first flyby of Pluto.',
    'Juno continues studying Jupiter’s interior.',
    'Perseverance searches for signs of ancient life on Mars.',
    'Parker Solar Probe is the closest spacecraft ever sent to the Sun.'
  ],

  futureMissions: [
    'Europa Clipper',
    'Dragonfly (Titan)',
    'JUICE',
    'Artemis Moon Program',
    'Mars Sample Return (planned)'
  ],

  themeColor: 'amber',
  bgGradient: 'from-amber-500/10 to-yellow-500/10'
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
    embedPath: '/trappist-1.html',
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
    embedPath: '/kepler-90.html',
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
