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
'The Solar System is the planetary system surrounding our home star, the Sun. Formed approximately 4.57 billion years ago from a collapsing molecular cloud, it consists of eight planets, five officially recognized dwarf planets, hundreds of moons, millions of asteroids, billions of comets, and countless smaller icy bodies. The Sun contains nearly 99.86% of the system’s total mass and its gravity controls the motion of every object. Modern missions including Voyager, Cassini, Juno, New Horizons, Perseverance, and Parker Solar Probe continue to expand our understanding of planetary science, atmospheres, geology, magnetic fields, and the origins of life. This interactive 3D visualization allows visitors to explore planetary orbits, compare distances, and better understand our cosmic neighborhood.',

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

  distance: '4.37 Light-years',

  mass: '≈2.17 Solar Masses (Combined)',

  constellation: 'Centaurus',

  oneLiner:
    'The nearest known stellar system to the Solar System, composed of three stars and several confirmed exoplanets.',

  description:
    'The Alpha Centauri System is the closest stellar system to Earth, located approximately 4.37 light-years away in the southern constellation Centaurus. It consists of three gravitationally bound stars: Alpha Centauri A, a Sun-like G-type main-sequence star; Alpha Centauri B, a slightly smaller and cooler K-type orange dwarf; and Proxima Centauri, a faint red dwarf that is the closest individual star to the Sun at approximately 4.24 light-years. Alpha Centauri A and B form a close binary system orbiting one another every 79.91 years, while Proxima Centauri orbits the pair at a distance of roughly 13,000 astronomical units and may require about 550,000 years to complete a single orbit. Several exoplanets have been discovered around Proxima Centauri, including the rocky world Proxima Centauri b within the star’s habitable zone. Because of its proximity, the Alpha Centauri System is considered humanity’s most promising destination for future interstellar exploration and the search for nearby habitable worlds.',

  quickStats: [
    { label: 'System Type', value: 'Triple Star System' },
    { label: 'Distance from Earth', value: '4.37 Light-years' },
    { label: 'Closest Star', value: 'Proxima Centauri (4.24 ly)' },
    { label: 'Star Count', value: '3' },
    { label: 'Known Exoplanets', value: '3 Confirmed (Proxima System)' },
    { label: 'Combined Mass', value: '≈2.17 Solar Masses' },
    { label: 'Age', value: '5–6 Billion Years' },
    { label: 'Binary Orbital Period', value: '79.91 Years' },
    { label: 'Binary Separation', value: '11–36 AU' },
    { label: 'Proxima Distance from A/B', value: '≈13,000 AU' },
    { label: 'Proxima Orbital Period', value: '≈550,000 Years' },
    { label: 'Brightest Star', value: 'Alpha Centauri A' },
    { label: 'Constellation', value: 'Centaurus' },
    { label: 'Galaxy', value: 'Milky Way' },
    { label: 'Galactic Region', value: 'Orion Arm' }
  ],

  trivia: [
    'Alpha Centauri is the closest stellar system to the Solar System.',
    'Proxima Centauri is the closest individual star to the Sun.',
    'Alpha Centauri A is extremely similar to our Sun in size, temperature, and luminosity.',
    'Alpha Centauri A and B can appear as a single bright star to the naked eye.',
    'The system has been observed continuously for more than 300 years.',
    'Breakthrough Starshot plans to send tiny laser-powered spacecraft to Alpha Centauri.',
    'Signals traveling at the speed of light take over four years to reach Earth.',
    'Proxima Centauri frequently produces powerful stellar flares.',
    'Proxima b is one of the nearest potentially habitable exoplanets.',
    'Alpha Centauri B is slightly cooler and smaller than the Sun.',
    'The stars are rich in heavy elements, increasing the likelihood of planet formation.',
    'This system is the primary target for future interstellar exploration missions.'
  ],

  themeColor: 'cyan',

  bgGradient:
    'from-cyan-500/10 via-sky-500/10 to-blue-500/10',

  interactiveFeatures: [
    'Interactive Triple-Star Orbit Simulator',
    'Binary Star Motion Animation',
    'Proxima Centauri Wide Orbit Viewer',
    'Real-Time Orbital Timeline',
    'Habitable Zone Visualization',
    '3D Exoplanet Explorer',
    'Spectral Classification Display',
    'Star Size Comparison',
    'Surface Temperature Comparison',
    'Luminosity Comparison',
    'Distance Scale Explorer',
    'Light Travel Time Animation',
    'Breakthrough Starshot Journey Simulator',
    'Planetary Orbit Controls',
    'Planet Information Panels',
    'Magnetic Activity Viewer',
    'Stellar Evolution Timeline',
    'System Scale Toggle',
    'Free Camera Navigation',
    'Educational Labels'
  ],

  scientificSignificance:
    'The Alpha Centauri System is humanity’s most important nearby stellar laboratory. Its proximity allows astronomers to study stellar evolution, binary star dynamics, exoplanet formation, habitability, stellar magnetic activity, and interstellar travel concepts in far greater detail than more distant star systems. It is expected to become the first destination for robotic interstellar exploration.',

  stars: [
    {
      name: 'Alpha Centauri A',
      spectralType: 'G2V Yellow Dwarf',
      mass: '1.10 Solar Masses',
      radius: '1.22 Solar Radii',
      temperature: '5,790 K',
      luminosity: '1.52 Suns',
      age: '≈5.3 Billion Years',
      notes: 'Very similar to our Sun and considered one of the best solar analogues.'
    },
    {
      name: 'Alpha Centauri B',
      spectralType: 'K1V Orange Dwarf',
      mass: '0.91 Solar Masses',
      radius: '0.86 Solar Radii',
      temperature: '5,260 K',
      luminosity: '0.50 Suns',
      notes: 'Slightly smaller, cooler, and less luminous than the Sun.'
    },
    {
      name: 'Proxima Centauri',
      spectralType: 'M5.5Ve Red Dwarf',
      mass: '0.122 Solar Masses',
      radius: '0.154 Solar Radii',
      temperature: '3,040 K',
      luminosity: '0.0017 Suns',
      notes: 'Closest known star to the Solar System and an active flare star.'
    }
  ],

  knownPlanets: [
    {
      name: 'Proxima Centauri b',
      type: 'Rocky Super-Earth',
      orbitalPeriod: '11.2 Days',
      mass: '≈1.17 Earth Masses',
      habitableZone: 'Yes',
      status: 'Confirmed'
    },
    {
      name: 'Proxima Centauri d',
      type: 'Sub-Earth',
      orbitalPeriod: '5.1 Days',
      mass: '≈0.26 Earth Masses',
      habitableZone: 'No',
      status: 'Confirmed'
    },
    {
      name: 'Proxima Centauri c',
      type: 'Super-Earth Candidate',
      orbitalPeriod: '≈1,907 Days',
      mass: '≈7 Earth Masses',
      habitableZone: 'Outside',
      status: 'Confirmed'
    }
  ],

  explorationMissions: [
    'Breakthrough Starshot',
    'James Webb Space Telescope Observations',
    'ESO Very Large Telescope',
    'Gaia Space Observatory',
    'Hubble Space Telescope',
    'Extremely Large Telescope (Future)'
  ],

  futureResearch: [
    'Direct imaging of Earth-sized exoplanets',
    'Search for biosignatures',
    'Atmospheric spectroscopy',
    'Interstellar robotic probes',
    'Laser sail propulsion',
    'Habitability assessment',
    'Magnetic field measurements',
    'Long-term orbital monitoring'
  ],

  interestingFacts: [
    'The Alpha Centauri System is visible mainly from the Southern Hemisphere.',
    'Alpha Centauri A and B together form the third-brightest star in Earth’s night sky.',
    'Proxima Centauri cannot be seen without a telescope.',
    'A spacecraft traveling at Voyager 1 speed would need more than 70,000 years to reach the system.',
    'A spacecraft traveling at 20% the speed of light could reach Alpha Centauri in about 20 years.',
    'The system likely contains additional undiscovered planets.',
    'Its stars formed from the same molecular cloud.',
    'Its chemical composition is remarkably similar to that of the Sun.'
  ]
},
  {
  id: 'trappist-1',

  name: 'TRAPPIST-1 System',

  category: 'stellar-system',

  categoryLabel: 'Stellar System',

  embedPath: '/trappist-1.html',

  distance: '40.7 Light-years',

  mass: '0.089 Solar Masses (Host Star)',

  constellation: 'Aquarius',

  oneLiner:
    'An extraordinary ultra-cool red dwarf system containing seven Earth-sized rocky planets, several of which orbit within the habitable zone.',

  description:
    'The TRAPPIST-1 System is one of the most remarkable planetary systems ever discovered. Located approximately 40.7 light-years away in the constellation Aquarius, it is centered on an ultra-cool red dwarf star known as TRAPPIST-1. The system contains seven known rocky planets, all similar in size to Earth, making it the largest known collection of Earth-sized planets around a single star. Every planet orbits extremely close to its faint host star, allowing the entire planetary system to fit comfortably within Mercury’s orbit in our Solar System. Three planets—TRAPPIST-1e, TRAPPIST-1f, and TRAPPIST-1g—orbit within or near the star’s habitable zone, where temperatures may allow liquid water under suitable atmospheric conditions. Because of its proximity, compact architecture, and Earth-sized worlds, TRAPPIST-1 has become one of the highest-priority targets in the search for extraterrestrial life.',

  quickStats: [
    { label: 'System Type', value: 'Planetary System' },
    { label: 'Host Star', value: 'TRAPPIST-1' },
    { label: 'Star Type', value: 'Ultra-cool Red Dwarf (M8V)' },
    { label: 'Distance from Earth', value: '40.7 Light-years' },
    { label: 'Constellation', value: 'Aquarius' },
    { label: 'Known Planets', value: '7 Rocky Worlds' },
    { label: 'Habitable Zone Planets', value: 'TRAPPIST-1e, f, g' },
    { label: 'Star Mass', value: '0.089 Solar Masses' },
    { label: 'Star Radius', value: '0.121 Solar Radii' },
    { label: 'Star Temperature', value: '≈2,566 K' },
    { label: 'Estimated Age', value: '7–9 Billion Years' },
    { label: 'Star Luminosity', value: '≈0.05% of the Sun' },
    { label: 'Discovery Year', value: '2016–2017' },
    { label: 'Discovery Telescope', value: 'TRAPPIST & Spitzer' },
    { label: 'Galaxy', value: 'Milky Way' }
  ],

  trivia: [
    'The entire TRAPPIST-1 planetary system fits inside Mercury’s orbit around the Sun.',
    'All seven planets are approximately Earth-sized.',
    'Three planets orbit within the star’s habitable zone.',
    'The planets are locked in an intricate orbital resonance chain.',
    'All seven planets are likely tidally locked, with permanent day and night sides.',
    'The host star is only slightly larger than Jupiter.',
    'TRAPPIST-1 is much cooler than the Sun, glowing deep red.',
    'Neighboring planets would appear enormous in each other’s skies.',
    'The star may remain stable for trillions of years—far longer than the Sun.',
    'Frequent stellar flares may influence planetary atmospheres.',
    'James Webb Space Telescope is studying the atmospheres of these planets.',
    'TRAPPIST-1 is among the most promising systems in the search for extraterrestrial life.'
  ],

  themeColor: 'rose',

  bgGradient:
    'from-rose-500/10 via-red-500/10 to-pink-500/10',

  interactiveFeatures: [
    'Interactive Seven-Planet Orbit Simulator',
    'Orbital Resonance Animation',
    'Habitable Zone Visualization',
    'Planet Size Comparison',
    'Planet Temperature Comparison',
    'Tidal Lock Demonstration',
    'Neighbor Planet Sky View',
    'Ultra-cool Red Dwarf Animation',
    'Atmospheric Simulation',
    'Planet Information Cards',
    'Real-Time Orbit Controls',
    'Distance Scale Toggle',
    'Solar System Comparison',
    'Transit Detection Simulator',
    'James Webb Observation Mode',
    'Potential Ocean World Visualization',
    'Planet Surface Explorer',
    'Educational Labels',
    '3D Camera Flythrough',
    'Free Navigation Controls'
  ],

  scientificSignificance:
    'The TRAPPIST-1 System represents one of the greatest opportunities for studying potentially habitable rocky planets beyond the Solar System. Because the planets frequently transit their small host star, astronomers can analyze their atmospheres using transit spectroscopy. Observations from the James Webb Space Telescope are helping scientists search for water vapor, carbon dioxide, methane, oxygen, and other possible biosignatures while improving our understanding of planetary evolution around red dwarf stars.',

  hostStar: {
    name: 'TRAPPIST-1',
    spectralType: 'M8V Ultra-cool Red Dwarf',
    mass: '0.089 Solar Masses',
    radius: '0.121 Solar Radii',
    temperature: '≈2,566 K',
    luminosity: '≈0.0005 Suns',
    age: '7–9 Billion Years',
    rotationPeriod: '≈3.3 Days',
    notes: 'A very small, cool red dwarf that emits only a tiny fraction of the Sun’s energy and is expected to live for trillions of years.'
  },

  planets: [
    {
      name: 'TRAPPIST-1b',
      type: 'Rocky Planet',
      orbitalPeriod: '1.51 Days',
      radius: '1.12 Earth',
      habitable: 'No'
    },
    {
      name: 'TRAPPIST-1c',
      type: 'Rocky Planet',
      orbitalPeriod: '2.42 Days',
      radius: '1.10 Earth',
      habitable: 'No'
    },
    {
      name: 'TRAPPIST-1d',
      type: 'Rocky Planet',
      orbitalPeriod: '4.05 Days',
      radius: '0.79 Earth',
      habitable: 'Near Inner Edge'
    },
    {
      name: 'TRAPPIST-1e',
      type: 'Rocky Earth-like Planet',
      orbitalPeriod: '6.10 Days',
      radius: '0.92 Earth',
      habitable: 'Yes'
    },
    {
      name: 'TRAPPIST-1f',
      type: 'Rocky Planet',
      orbitalPeriod: '9.21 Days',
      radius: '1.05 Earth',
      habitable: 'Yes'
    },
    {
      name: 'TRAPPIST-1g',
      type: 'Rocky Planet',
      orbitalPeriod: '12.35 Days',
      radius: '1.13 Earth',
      habitable: 'Yes'
    },
    {
      name: 'TRAPPIST-1h',
      type: 'Rocky Planet',
      orbitalPeriod: '18.77 Days',
      radius: '0.77 Earth',
      habitable: 'Too Cold'
    }
  ],

  discoveryHistory: [
    '2015 — Initial planets detected by the TRAPPIST telescope.',
    '2016 — Three Earth-sized planets confirmed.',
    '2017 — NASA announces the complete seven-planet system.',
    '2018–2024 — Continued observations refine planetary masses and densities.',
    '2023–2026 — James Webb Space Telescope begins detailed atmospheric studies.'
  ],

  explorationMissions: [
    'TRAPPIST Telescope',
    'NASA Spitzer Space Telescope',
    'Hubble Space Telescope',
    'James Webb Space Telescope',
    'ESO Very Large Telescope',
    'CHEOPS',
    'PLATO (Future)',
    'Nancy Grace Roman Space Telescope (Future)'
  ],

  futureResearch: [
    'Search for atmospheric water vapor',
    'Detect carbon dioxide',
    'Search for methane',
    'Search for oxygen and ozone',
    'Study planetary climates',
    'Measure atmospheric pressure',
    'Search for oceans',
    'Study stellar flare impacts',
    'Improve planetary mass measurements',
    'Search for biosignatures'
  ],

  orbitalResonance: {
    type: 'Near Laplace Resonance Chain',
    description: 'The seven planets orbit in a synchronized gravitational rhythm, making the system one of the most dynamically stable planetary systems known.'
  },

  interestingFacts: [
    'The host star is only about the size of Jupiter.',
    'TRAPPIST-1 emits less than one-thousandth of the Sun’s visible light.',
    'A year on TRAPPIST-1b lasts only 36 hours.',
    'The planets are so close together that neighboring worlds would dominate each other’s skies.',
    'Scientists estimate some planets may contain more water than Earth.',
    'The system is over a billion years older than our Solar System.',
    'TRAPPIST-1 may survive for several trillion years.',
    'This is one of the best planetary systems for studying Earth-sized exoplanets.',
    'The planets likely formed farther from the star before migrating inward.',
    'The James Webb Space Telescope continues to search for atmospheric gases that could indicate habitability.'
  ]
},
  {
  id: 'kepler-90',
  name: 'Kepler-90 System',
  category: 'stellar-system',
  categoryLabel: 'Stellar System',
  embedPath: '/kepler-90.html',

  distance: '2,840 Light-years',
  mass: '≈1.2 Solar Masses (Host Star)',
  constellation: 'Draco',

  oneLiner:
    'A remarkable planetary system containing eight known planets—the first exoplanetary system discovered to equal our Solar System in planet count.',

  description:
    'The Kepler-90 System is a fascinating planetary system located approximately 2,840 light-years from Earth in the constellation Draco. At its center is Kepler-90, a G0V main-sequence star that is slightly larger, hotter, and more massive than the Sun. The system gained worldwide attention in 2017 when the discovery of Kepler-90i increased its known planet count to eight, matching the Solar System. Unlike our Solar System, however, all eight planets orbit much closer to their host star than Earth orbits the Sun, making Kepler-90 one of the most compact multiple-planet systems ever discovered. The system contains a diverse collection of rocky super-Earths, mini-Neptunes, and giant gas planets, providing astronomers with valuable insights into planetary migration, orbital stability, and the formation of complex planetary systems.',

  quickStats: [
    { label: 'System Type', value: 'Planetary System' },
    { label: 'Host Star', value: 'Kepler-90' },
    { label: 'Star Type', value: 'G0V Main-Sequence Star' },
    { label: 'Distance from Earth', value: '2,840 Light-years' },
    { label: 'Constellation', value: 'Draco' },
    { label: 'Known Planets', value: '8' },
    { label: 'Star Mass', value: '≈1.2 Solar Masses' },
    { label: 'Star Radius', value: '≈1.2 Solar Radii' },
    { label: 'Star Temperature', value: '≈6,080 K' },
    { label: 'Estimated Age', value: '≈2 Billion Years' },
    { label: 'Discovery Mission', value: 'NASA Kepler Space Telescope' },
    { label: 'Primary Detection Method', value: 'Transit Photometry' },
    { label: 'AI-Assisted Discovery', value: 'Kepler-90i (2017)' },
    { label: 'Planetary Layout', value: 'Highly Compact' },
    { label: 'Galaxy', value: 'Milky Way' }
  ],

  trivia: [
    'Kepler-90 was the first known exoplanetary system to match the Solar System with eight confirmed planets.',
    'The eighth planet, Kepler-90i, was discovered using artificial intelligence developed by Google and NASA.',
    'All eight planets orbit closer to their star than Earth orbits the Sun.',
    'The system is much more compact than our Solar System.',
    'Several planets are likely too hot to support Earth-like life.',
    'The Kepler Space Telescope discovered thousands of exoplanets, including the Kepler-90 system.',
    'The planets likely formed farther from their star before migrating inward.',
    'Kepler-90 demonstrates that complex planetary systems are common throughout the Milky Way.',
    'The system contains both rocky planets and giant gas planets.',
    'Even the outermost giant planet receives much more stellar radiation than Jupiter.',
    'Machine learning played a historic role in identifying one of the system’s planets.',
    'Kepler-90 continues to be an important target for studies of planetary formation.'
  ],

  themeColor: 'emerald',

  bgGradient:
    'from-emerald-500/10 via-teal-500/10 to-cyan-500/10',

  interactiveFeatures: [
    'Interactive 8-Planet Orbit Simulator',
    'Compact System Scale Comparison',
    'Planet Size Comparison',
    'Orbital Speed Animation',
    'Transit Detection Demonstration',
    'Artificial Intelligence Discovery Timeline',
    'Habitable Zone Display',
    'Star Temperature Visualization',
    'Planet Temperature Comparison',
    'Dynamic Camera Flythrough',
    'Planet Information Panels',
    'Distance Scale Toggle',
    'Orbital Resonance Visualization',
    'System Evolution Timeline',
    '3D Planet Models',
    'Transit Light Curve Simulator',
    'Solar System Comparison Mode',
    'Educational Labels',
    'Free Camera Controls',
    'Real-Time Orbit Speed Controls'
  ],

  scientificSignificance:
    'The Kepler-90 System transformed scientists’ understanding of planetary systems by demonstrating that stars beyond the Sun can host large families of planets. Its compact architecture provides strong evidence that planetary migration plays a major role in shaping planetary systems. The AI-assisted discovery of Kepler-90i also marked one of the first major scientific breakthroughs achieved using machine learning in astronomy.',

  hostStar: {
    name: 'Kepler-90',
    spectralType: 'G0V Yellow Main-Sequence Star',
    mass: '≈1.2 Solar Masses',
    radius: '≈1.2 Solar Radii',
    temperature: '≈6,080 K',
    luminosity: '≈1.5 Suns',
    age: '≈2 Billion Years',
    metallicity: 'Higher than the Sun',
    notes: 'A young Sun-like star that is hotter, brighter, and slightly larger than our Sun.'
  },

  planets: [
    {
      name: 'Kepler-90b',
      type: 'Rocky Super-Earth',
      orbitalPeriod: '7.0 Days'
    },
    {
      name: 'Kepler-90c',
      type: 'Rocky Planet',
      orbitalPeriod: '8.7 Days'
    },
    {
      name: 'Kepler-90i',
      type: 'Super-Earth',
      orbitalPeriod: '14.4 Days',
      discovery: 'Discovered using Artificial Intelligence'
    },
    {
      name: 'Kepler-90d',
      type: 'Mini-Neptune',
      orbitalPeriod: '59 Days'
    },
    {
      name: 'Kepler-90e',
      type: 'Mini-Neptune',
      orbitalPeriod: '92 Days'
    },
    {
      name: 'Kepler-90f',
      type: 'Gas Giant',
      orbitalPeriod: '125 Days'
    },
    {
      name: 'Kepler-90g',
      type: 'Gas Giant',
      orbitalPeriod: '211 Days'
    },
    {
      name: 'Kepler-90h',
      type: 'Gas Giant',
      orbitalPeriod: '331 Days'
    }
  ],

  discoveryHistory: [
    '2009 — NASA launches the Kepler Space Telescope.',
    '2013 — Seven planets around Kepler-90 are confirmed.',
    '2017 — Kepler-90i becomes the eighth confirmed planet.',
    '2017 — Google AI identifies the weak transit signal missed by traditional analysis.',
    'Kepler-90 becomes the first exoplanetary system known with eight confirmed planets.'
  ],

  explorationMissions: [
    'NASA Kepler Space Telescope',
    'Google AI Neural Network Analysis',
    'NASA Exoplanet Archive',
    'Gaia Space Observatory',
    'James Webb Space Telescope (Follow-up Studies)',
    'PLATO Mission (Future)',
    'Nancy Grace Roman Space Telescope (Future)'
  ],

  futureResearch: [
    'Search for additional undiscovered planets',
    'Measure planetary atmospheres',
    'Study orbital stability',
    'Understand planetary migration',
    'Compare with the Solar System',
    'Improve AI-based planet detection',
    'Search for exomoons',
    'Investigate planetary compositions'
  ],

  interestingFacts: [
    'The entire planetary system fits inside the orbit of Earth.',
    'The planets orbit much faster than those in our Solar System.',
    'The discovery of Kepler-90i demonstrated the power of artificial intelligence in astronomy.',
    'The host star is slightly hotter and brighter than the Sun.',
    'The system likely formed very differently from our own Solar System.',
    'Several planets are larger than Earth but smaller than Neptune.',
    'Its compact architecture challenges traditional models of planetary formation.',
    'Kepler-90 is one of the best-studied multiple-planet systems discovered by the Kepler mission.'
  ]
},
{
        id: 'asteroids',
        name: 'Asteroids',
        category: 'asteroids',
        categoryLabel: 'Asteroids',
        embedPath: '/asteroids.html',
        distance: 'Main Asteroid Belt',
        mass: 'Millions of known bodies',
        constellation: 'Solar System',
        oneLiner:'Ancient rocky remnants from the formation of the Solar System, preserving clues about its earliest history.'
        
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
  },
];
