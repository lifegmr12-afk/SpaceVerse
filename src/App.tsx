/// <reference types="react" />
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { spaceObjects } from './data';
import { SpaceObject, SpaceObjectCategory } from './types';
import CelestialGallery from './components/CelestialGallery';
import EmbedViewer from './components/EmbedViewer';
import ExploreGrid from './components/ExploreGrid';
import galaxyImg from './assets/images/galaxy_gallery_1783173573878.jpg';
import { 
  Home, Compass, Orbit, Layers, Sun, Globe, Zap, Users, Rocket, Box, Image, 
  Newspaper, Info, Heart, Moon, Search, Bell, ChevronRight, ChevronLeft, X, 
  Check, ExternalLink, Eye, Star, Menu, ArrowRight, Clock, Sparkles, Cpu, 
  ArrowUpRight, Activity, Share2, BookOpen, AlertCircle
} from 'lucide-react';

declare module 'react/jsx-runtime' {
  export function jsx(type: any, props?: any, key?: string | number | null): any;
  export function jsxs(type: any, props?: any, key?: string | number | null): any;
  export function jsxDEV(
    type: any,
    props?: any,
    key?: string | number | null,
    isStaticChildren?: boolean,
    source?: any,
    self?: any
  ): any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Scientists Data
interface Scientist {
  name: string;
  era: string;
  quote: string;
  discovery: string;
  bio: string;
  contribution: string;
  image: string;
}

const scientistsData: Scientist[] = [
  {
    name: 'Nicolaus Copernicus',
    era: '1473 – 1543',
    quote: 'Finally we shall place the Sun himself at the center of the Universe.',
    discovery: 'Heliocentric Model',
    contribution:
      'Developed the heliocentric model in which Earth and the other planets orbit the Sun. His work fundamentally changed humanity’s understanding of Earth’s place in the cosmos and helped launch the Scientific Revolution.',
    bio:
      'Polish Renaissance mathematician and astronomer whose heliocentric model replaced the dominant Earth-centered Ptolemaic system. His ideas became a foundation for the astronomical revolution that followed.',
    image: 'https://space-verse-alpha.vercel.app/images/Nicolaus_Copernicus.png'
  },

  {
    name: 'Galileo Galilei',
    era: '1564 – 1642',
    quote:
      'We cannot teach people anything; we can only help them discover it within themselves.',
    discovery: 'Telescopic Astronomy',
    contribution:
      'Used the telescope to make groundbreaking observations including the moons of Jupiter, the phases of Venus, sunspots, and the detailed surface of the Moon. These observations provided powerful evidence against the traditional geocentric model.',
    bio:
      'Italian astronomer, physicist, and mathematician often called the father of observational astronomy. His systematic use of the telescope transformed astronomy from naked-eye observation into an observational science.',
    image: 'https://space-verse-alpha.vercel.app/images/Galileo_Galilei.png'
  },

  {
    name: 'Johannes Kepler',
    era: '1571 – 1630',
    quote:
      'I am merely thinking God’s thoughts after Him.',
    discovery: 'Laws of Planetary Motion',
    contribution:
      'Discovered that planets travel in elliptical orbits rather than perfect circles, move at varying speeds, and follow a precise mathematical relationship between orbital period and distance from the Sun.',
    bio:
      'German mathematician, astronomer, and natural philosopher whose three laws of planetary motion provided the mathematical foundation that Isaac Newton later used to formulate universal gravitation.',
    image: 'https://space-verse-alpha.vercel.app/images/Johannes_Kepler.png'
  },

  {
    name: 'Isaac Newton',
    era: '1643 – 1727',
    quote:
      'If I have seen further it is by standing on the shoulders of Giants.',
    discovery: 'Universal Gravitation',
    contribution:
      'Formulated the laws of motion and universal gravitation, explaining the motion of planets, moons, comets, and objects on Earth within one mathematical framework. His work established classical celestial mechanics.',
    bio:
      'English mathematician, physicist, and astronomer whose Principia Mathematica transformed our understanding of motion and gravity. Newton’s framework dominated physics for centuries and remains highly useful today.',
    image: 'https://space-verse-alpha.vercel.app/images/Isaac_Newton.png'
  },

  {
    name: 'William Herschel',
    era: '1738 – 1822',
    quote:
      'The undevout astronomer must be mad.',
    discovery: 'Discovery of Uranus',
    contribution:
      'Discovered Uranus in 1781, the first planet discovered with a telescope. He also catalogued thousands of nebulae and star clusters and conducted pioneering studies of the structure of the Milky Way.',
    bio:
      'German-born British astronomer and composer who became one of the most productive observers in astronomical history. His discovery of Uranus expanded the known Solar System.',
    image: 'https://space-verse-alpha.vercel.app/images/William_Herschel.png'
  },

  {
    name: 'Henrietta Swan Leavitt',
    era: '1868 – 1921',
    quote:
      'A star that pulsates regularly can be used as a cosmic measuring tool.',
    discovery: 'Cepheid Period–Luminosity Relation',
    contribution:
      'Discovered the relationship between the pulsation period and intrinsic brightness of Cepheid variable stars. This became a fundamental method for measuring distances across the Universe.',
    bio:
      'American astronomer who worked at Harvard College Observatory. Her discovery provided one of the most important cosmic distance indicators and later enabled astronomers to establish the enormous scale of the Universe.',
    image: 'https://space-verse-alpha.vercel.app/images/Henrietta_Leavitt.png'
  },

  {
    name: 'Albert Einstein',
    era: '1879 – 1955',
    quote:
      'The most incomprehensible thing about the world is that it is comprehensible.',
    discovery: 'General Theory of Relativity',
    contribution:
      'Developed general relativity, describing gravity as the curvature of spacetime caused by matter and energy. The theory predicted phenomena including gravitational lensing, gravitational time dilation, black holes, and gravitational waves.',
    bio:
      'German-born theoretical physicist whose theories of special and general relativity transformed our understanding of space, time, gravity, and the Universe. His equations remain central to modern cosmology and astrophysics.',
    image: 'https://space-verse-alpha.vercel.app/images/Albert_Einstein.png'
  },

  {
    name: 'Edwin Hubble',
    era: '1889 – 1953',
    quote:
      'Equipped with his five senses, man explores the universe around him and calls the adventure Science.',
    discovery: 'Galaxies Beyond the Milky Way',
    contribution:
      'Established that many objects previously classified as nebulae were actually separate galaxies far beyond the Milky Way. His observations also revealed a relationship between galaxy distance and recession velocity, contributing to our understanding of cosmic expansion.',
    bio:
      'American astronomer who transformed humanity’s view of the Universe by demonstrating its immense scale. The Hubble Space Telescope was named in his honor.',
    image: 'https://space-verse-alpha.vercel.app/images/Edwin_Hubble.png'
  },

  {
    name: 'Cecilia Payne-Gaposchkin',
    era: '1900 – 1979',
    quote:
      'The reward of the young scientist is the emotional thrill of being the first person in history to see something.',
    discovery: 'Chemical Composition of Stars',
    contribution:
      'Demonstrated that stars are composed predominantly of hydrogen and helium by applying ionization physics to stellar spectra. Her work fundamentally changed the understanding of stellar composition.',
    bio:
      'British-born American astronomer whose pioneering doctoral research established the basic chemical composition of stars. She later became the first woman to head a department at Harvard College Observatory.',
    image: 'https://space-verse-alpha.vercel.app/images/Cecilia_Payne-Gaposchkin.png'
  },

  {
    name: 'Subrahmanyan Chandrasekhar',
    era: '1910 – 1995',
    quote:
      'The pursuit of science is a beautiful journey into the unknown.',
    discovery: 'Chandrasekhar Limit',
    contribution:
      'Calculated the maximum mass of a stable white dwarf, now known as the Chandrasekhar limit. His work helped establish the physical processes governing stellar evolution and the formation of neutron stars and black holes.',
    bio:
      'Indian-American astrophysicist and Nobel Prize winner whose mathematical work on stellar structure and evolution profoundly influenced modern astrophysics.',
    image: 'https://space-verse-alpha.vercel.app/images/Subrahmanyan_Chandrasekhar.png'
  },

  {
    name: 'George Gamow',
    era: '1904 – 1968',
    quote:
      'Science is a process of discovery, not a collection of facts.',
    discovery: 'Early Big Bang Cosmology',
    contribution:
      'Developed important theoretical ideas about the hot early Universe and predicted that the Universe should contain relic radiation left over from its early stages. This work helped lay foundations for modern Big Bang cosmology.',
    bio:
      'Ukrainian-American theoretical physicist and cosmologist known for influential work on nuclear physics, cosmology, and the early Universe.',
    image: 'https://space-verse-alpha.vercel.app/images/George_Gamow.png'
  },

  {
    name: 'Fred Hoyle',
    era: '1915 – 2001',
    quote:
      'We are all in the gutter, but some of us are looking at the stars.',
    discovery: 'Stellar Nucleosynthesis',
    contribution:
      'Made major contributions to understanding how chemical elements are produced inside stars. His work, together with other researchers, helped establish stellar nucleosynthesis as the origin of many elements heavier than hydrogen and helium.',
    bio:
      'British astronomer and mathematician who made major contributions to stellar evolution and nucleosynthesis. He also coined the term "Big Bang" while discussing the competing cosmological model.',
    image: 'https://space-verse-alpha.vercel.app/images/Fred_Hoyle.png'
  },

  {
    name: 'Vera Rubin',
    era: '1928 – 2016',
    quote:
      'In a spiral galaxy, the ratio of dark-to-light matter is about ten to one.',
    discovery: 'Evidence for Dark Matter',
    contribution:
      'Careful measurements of galaxy rotation demonstrated that stars and gas in the outer regions of galaxies move much faster than expected from visible matter alone. Her work provided some of the strongest observational evidence for dark matter.',
    bio:
      'American astronomer whose pioneering observations of galaxy rotation transformed our understanding of the invisible mass that dominates galaxies. Her work became a cornerstone of modern dark-matter research.',
    image: 'https://space-verse-alpha.vercel.app/images/Vera_Rubin.png'
  },

  {
    name: 'Stephen Hawking',
    era: '1942 – 2018',
    quote:
      'However difficult life may seem, there is always something you can do and succeed at.',
    discovery: 'Hawking Radiation',
    contribution:
      'Showed theoretically that black holes should emit thermal radiation because of quantum effects near their event horizons. This discovery connected black-hole physics, quantum theory, thermodynamics, and general relativity.',
    bio:
      'British theoretical physicist and cosmologist who made major contributions to black-hole physics and cosmology. His books and public lectures also brought difficult ideas about the Universe to a global audience.',
    image: 'https://space-verse-alpha.vercel.app/images/Stephen_Hawking.png'
  },

  {
    name: 'Jocelyn Bell Burnell',
    era: '1943 – Present',
    quote:
      'Science is a collaborative enterprise.',
    discovery: 'Discovery of Pulsars',
    contribution:
      'Discovered the first radio pulsars as a graduate student in 1967. Pulsars are rapidly rotating neutron stars that emit highly regular beams of electromagnetic radiation and have become powerful tools for studying extreme physics.',
    bio:
      'Northern Irish astrophysicist whose discovery of pulsars opened an entirely new field of neutron-star astronomy. She has also been a major advocate for diversity and inclusion in science.',
    image: 'https://space-verse-alpha.vercel.app/images/Jocelyn_Bell_Burnell.png'
  },

  {
    name: 'Carl Sagan',
    era: '1934 – 1996',
    quote:
      'Somewhere, something incredible is waiting to be known.',
    discovery: 'Planetary Science & Astrobiology',
    contribution:
      'Made major contributions to planetary science, including research into the atmospheres of Venus and Mars. He helped establish modern astrobiology and was a prominent advocate for the scientific search for life beyond Earth.',
    bio:
      'American astronomer, planetary scientist, author, and science communicator. Through research and popular programs such as Cosmos, he inspired generations to explore the Universe scientifically.',
    image: 'https://space-verse-alpha.vercel.app/images/Carl_Sagan.png'
  },

  {
    name: 'Neil deGrasse Tyson',
    era: '1958 – Present',
    quote:
      'The Universe is under no obligation to make sense to you.',
    discovery: 'Modern Science Communication',
    contribution:
      'Contributed to research and public understanding of stellar formation, galactic structure, and planetary science while becoming one of the most prominent science communicators of the modern era.',
    bio:
      'American astrophysicist, author, and science communicator. He has played a major role in making astronomy and astrophysics accessible to the general public through books, television, lectures, and educational programs.',
    image: 'https://space-verse-alpha.vercel.app/images/Neil_deGrasse_Tyson.png'
  },

  {
    name: 'Katherine Johnson',
    era: '1918 – 2020',
    quote:
      'Everything is possible. You just have to work for it.',
    discovery: 'Orbital Flight Calculations',
    contribution:
      'Performed critical trajectory and orbital calculations for early American human-spaceflight missions, including Alan Shepard’s Freedom 7 mission and John Glenn’s orbital flight. Her mathematical work helped ensure the accuracy of NASA missions.',
    bio:
      'American mathematician whose calculations were crucial to NASA’s early space program. She became an enduring symbol of mathematical excellence and perseverance in space exploration.',
    image: 'https://space-verse-alpha.vercel.app/images/Katherine_Johnson.png'
  },

  {
    name: 'Margaret Hamilton',
    era: '1936 – Present',
    quote:
      'There was no choice but to be pioneers.',
    discovery: 'Apollo Flight Software Engineering',
    contribution:
      'Led the team responsible for developing the Apollo spacecraft guidance software. Her engineering practices helped create highly reliable software capable of prioritizing critical tasks during unexpected system overloads.',
    bio:
      'American computer scientist and software engineer who pioneered software engineering practices. Her work was essential to the success of NASA’s Apollo missions and helped establish software engineering as a discipline.',
    image: 'https://space-verse-alpha.vercel.app/images/Margaret_Hamilton.png'
  },

  {
    name: 'Roger Penrose',
    era: '1931 – Present',
    quote:
      'The Universe is not only stranger than we imagine, it is stranger than we can imagine.',
    discovery: 'Black-Hole Singularity Theorems',
    contribution:
      'Developed mathematical techniques showing that singularities are an unavoidable consequence of gravitational collapse under general relativity. His work fundamentally advanced the mathematical understanding of black holes and spacetime.',
    bio:
      'British mathematical physicist and Nobel Prize winner whose work revolutionized our understanding of black holes, spacetime, and gravitational collapse.',
    image: 'https://space-verse-alpha.vercel.app/images/Roger_Penrose.png'
  },

  {
    name: 'Andrea Ghez',
    era: '1965 – Present',
    quote:
      'The center of our galaxy is a laboratory for extreme physics.',
    discovery: 'Supermassive Black Hole at the Galactic Center',
    contribution:
      'Led decades of observations tracking stars orbiting the center of the Milky Way. These measurements provided compelling evidence for a supermassive black hole, Sagittarius A*, at the heart of our galaxy.',
    bio:
      'American astronomer and Nobel Prize winner whose high-resolution observations of the Galactic Center helped establish the existence of the Milky Way’s central supermassive black hole.',
    image: 'https://space-verse-alpha.vercel.app/images/Andrea_Ghez.png'
  },

  {
    name: 'John Mather',
    era: '1946 – Present',
    quote:
      'The Universe is a wonderful place to explore.',
    discovery: 'Cosmic Microwave Background Spectrum',
    contribution:
      'Led the COBE satellite team whose measurements provided precise evidence that the cosmic microwave background has the spectrum expected from a hot early Universe. This work strongly supported Big Bang cosmology.',
    bio:
      'American astrophysicist and Nobel Prize winner who made fundamental contributions to observational cosmology and later played a leading role in the James Webb Space Telescope project.',
    image: 'https://space-verse-alpha.vercel.app/images/John_Mather.png'
  },

  {
    name: 'George Smoot',
    era: '1945 – Present',
    quote:
      'The Universe is a laboratory we cannot reproduce on Earth.',
    discovery: 'Cosmic Microwave Background Anisotropies',
    contribution:
      'Used observations from the COBE satellite to detect tiny temperature variations in the cosmic microwave background. These fluctuations correspond to the seeds from which galaxies and large-scale cosmic structures developed.',
    bio:
      'American astrophysicist and Nobel Prize winner whose work on cosmic background radiation provided crucial evidence about the early structure and evolution of the Universe.',
    image: 'https://space-verse-alpha.vercel.app/images/George_Smoot.png'
  }
];
// Space Missions Data
interface Mission {
  name: string;
  launched: string;
  agency: string;
  type: string;
  telemetry: string;
  status: string;
  description: string;
  achievements: string[];
  image: string;
}

const missionsData: Mission[] = [
  {
    name: 'James Webb Space Telescope (JWST)',
    launched: 'December 25, 2021',
    agency: 'NASA / ESA / CSA',
    type: 'Infrared Space Observatory',
    telemetry: 'L2 Lagrange Point (1.5 Million km from Earth)',
    status: 'Active / Operational',
    description: 'The premier space-based infrared telescope in the world, designed to peer back 13.5 billion years to inspect the first stars and galaxies forming in the early universe, and analyze exoplanet atmospheres.',
    achievements: [
      'Captured the deepest, sharpest infrared images of the distant universe to date.',
      'Detected water vapour, carbon dioxide, and methane on exoplanets orbiting distant red stars.',
      'Imaged ancient spiral galaxies that formed just 350 million years after the Big Bang.'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Hubble Space Telescope (HST)',
    launched: 'April 24, 1990',
    agency: 'NASA / ESA',
    type: 'Optical & Ultraviolet Observatory',
    telemetry: 'Low Earth Orbit (540 km Altitude)',
    status: 'Active / Extended Life',
    description: 'One of the most valuable scientific instruments in human history. Operating above Earth\'s atmospheric distortion, Hubble has provided pristine visible and ultraviolet images that redefined cosmic age.',
    achievements: [
      'Accurately pin-pointed the age of the universe at 13.8 billion years.',
      'Captured the iconic "Pillars of Creation" and "Hubble Deep Field" images.',
      'Discovered that the expansion of the universe is accelerating, proving dark energy exists.'
    ],
    image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Voyager 1 & 2 Probes',
    launched: 'August/September 1977',
    agency: 'NASA / JPL',
    type: 'Interstellar Flyby Probe',
    telemetry: 'Interstellar Space (Over 24 Billion km from Earth)',
    status: 'Operational (Low Power)',
    description: 'The furthest man-made objects in existence. After conducting a historic grand tour of the outer planets (Jupiter, Saturn, Uranus, Neptune), they crossed the heliopause into interstellar space.',
    achievements: [
      'First spacecraft to enter interstellar space, measuring cosmic radiation outside solar winds.',
      'Discovered active volcanic moons (Io) and rings of Jupiter, Saturn, Uranus, and Neptune.',
      'Carrying the Golden Records, containing sounds, images, and greetings from Earth.'
    ],
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Gaia Star Mapping Mission',
    launched: 'December 19, 2013',
    agency: 'European Space Agency (ESA)',
    type: 'Astrometry Surveyor',
    telemetry: 'L2 Lagrange Point',
    status: 'Active / Gathering Data',
    description: 'ESA\'s astrometric surveyor tracking over 1.8 billion stars in the Milky Way with extreme precision. It records stellar distances, radial velocities, positions, and orbital paths.',
    achievements: [
      'Created the most detailed 3D map of our galaxy, exposing spiral stellar currents.',
      'Discovered multiple dormant stellar black holes including Gaia BH1 and BH2.',
      'Aided astronomers in understanding the historical mergers of the Milky Way.'
    ],
    image: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=600&q=80'
  }
];

export default function App() {
  // Navigation tabs
  // 'home', 'explore', 'scientists', 'missions', 'explorer3d', 'gallery', 'news', 'about'
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [activeCategory, setActiveCategory] = useState<SpaceObjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedObject, setSelectedObject] = useState<SpaceObject | null>(null);
  
  // Immersive States
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('spaceverse_favorites');
    return saved ? JSON.parse(saved) : ['solar-system', 'milky-way', 'sagittarius-a'];
  });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [showLiveEvents, setShowLiveEvents] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Sync favorites
  useEffect(() => {
    localStorage.setItem('spaceverse_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev): any => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // Filter objects for the main Catalog
  const filteredObjects = useMemo(() => {
    return spaceObjects.filter((obj) => {
      const matchesCategory = activeCategory === 'all' || obj.category === activeCategory;
      const matchesSearch = 
        obj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        obj.oneLiner.toLowerCase().includes(searchQuery.toLowerCase()) ||
        obj.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Navigate within the currently active (filtered) list of objects inside simulator modal
  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedObject) return;
    const currentIndex = filteredObjects.findIndex((o) => o.id === selectedObject.id);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % filteredObjects.length;
    } else {
      nextIndex = (currentIndex - 1 + filteredObjects.length) % filteredObjects.length;
    }
    setSelectedObject(filteredObjects[nextIndex]);
  };

  // Featured targets on Home screen
  const featuredDestinations = useMemo(() => {
    return spaceObjects.filter(obj => 
      ['solar-system', 'milky-way', 'trappist-1', 'alpha-centauri', 'sagittarius-a'].includes(obj.id)
    );
  }, []);

  const getFeaturedImage = (id: string) => {
    switch(id) {
      case 'solar-system':
        return 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80';
      case 'milky-way':
        return 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80';
      case 'trappist-1':
        return 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=600&q=80';
      case 'alpha-centauri':
        return 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=600&q=80';
      case 'sagittarius-a':
      default:
        return 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?auto=format&fit=crop&w=600&q=80';
    }
  };

  // Switch tabs & trigger scroll/reset
  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (tabId === 'explore') {
      setActiveCategory('all');
    }
  };

  // Sidebar Menu Items definition
  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'explore', label: 'Explore', icon: <Compass className="w-4 h-4" /> },
    { id: 'solar-system-link', label: 'Solar System', icon: <Orbit className="w-4 h-4" />, action: () => { setCurrentTab('explore'); setActiveCategory('stellar-system'); setSearchQuery(''); } },
    { id: 'galaxies-link', label: 'Galaxies', icon: <Layers className="w-4 h-4" />, action: () => { setCurrentTab('explore'); setActiveCategory('galaxy'); setSearchQuery(''); } },
    { id: 'star-systems-link', label: 'Star Systems', icon: <Sun className="w-4 h-4" />, action: () => { setCurrentTab('explore'); setActiveCategory('stellar-system'); setSearchQuery(''); } },
    { id: 'exoplanets-link', label: 'Exoplanets', icon: <Globe className="w-4 h-4" />, action: () => { setCurrentTab('explore'); setActiveCategory('stellar-system'); setSearchQuery('kepler-90'); } },
    { id: 'black-holes-link', label: 'Black Holes', icon: <Zap className="w-4 h-4" />, action: () => { setCurrentTab('explore'); setActiveCategory('black-hole'); setSearchQuery(''); } },

  // ASTEROIDS
  {
    id: 'asteroids-link',
    label: 'Asteroids',
    icon: <Orbit className="w-4 h-4" />,
    action: () => {
      window.location.href = '/asteroids.html';
    }
  },
  ];

  const secondaryMenuItems = [
    { id: 'scientists', label: 'Scientists', icon: <Users className="w-4 h-4" /> },
    { id: 'missions', label: 'Space Missions', icon: <Rocket className="w-4 h-4" /> },
    { id: 'explorer3d', label: '3D Explorer', icon: <Box className="w-4 h-4" /> },
    { id: 'gallery', label: 'Gallery', icon: <Image className="w-4 h-4" /> },
    { id: 'news', label: 'News & Updates', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'about', label: 'About Us', icon: <Info className="w-4 h-4" /> },
  ];

  // News Items Data
  const newsItems = [
    {
      source: 'NASA',
      time: '2h ago',
      title: 'Water Vapor Signatures Detected in Kepler-186f Atmosphere',
      desc: 'The James Webb Space Telescope has successfully completed a deep spectrographic transit sweep of the exoplanet Kepler-186f, confirming the existence of ozone and atmospheric water vapor cycles.',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=400&q=80'
    },
    {
      source: 'ESA',
      time: '5h ago',
      title: 'Gaia Astrometry Unveils Primordial Black Hole Clusters',
      desc: 'ESA astronomers have mapped a strange gravitational wobble inside the Omega Centauri cluster, revealing a tightly packed swarm of stellar-mass black holes dating back to the primordial universe.',
      image: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=400&q=80'
    },
    {
      source: 'JWST',
      time: '8h ago',
      title: 'Milky Way twin observed in infant universe',
      desc: 'Deep field scanning has exposed a massive barred spiral galaxy with structural dimensions matching our home Milky Way, located at redshift z=8.3. This discovery challenges current cosmological models.',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80'
    },
    {
      source: 'NASA',
      time: '1d ago',
      title: 'Voyager 1 restores telemetry from outer heliopause',
      desc: 'Using a legacy primary thruster command, NASA engineers have successfully aligned the low-gain antenna on Voyager 1, bringing online a critical stream of interstellar magnetic field values.',
      image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=400&q=80'
    }
  ];

  // System Notifications
  const notifications = [
    { id: 1, title: 'Spectra update', message: 'JWST completed high-resolution multispectral scanning of TRAPPIST-1e.', time: 'Just now', type: 'info' },
    { id: 2, title: 'Coronal Peak', message: 'Severe solar flare event projected to peak in 4 hours. Magnetosphere monitoring active.', time: '2 hours ago', type: 'warning' },
    { id: 3, title: 'EHT Release', message: 'Event Horizon Telescope released new polarized magnetic field maps of Sagittarius A*.', time: '1 day ago', type: 'success' }
  ];

  // Dynamic Theme Colors
  const themeBg = isDarkMode 
    ? "bg-[#020308] text-slate-50 font-sans" 
    : "bg-[#f8fafc] text-slate-900 font-sans";
  
  const sidebarBg = isDarkMode 
    ? "bg-[#040612]/95 border-white/10 text-slate-100 shadow-2xl" 
    : "bg-white border-slate-200 text-slate-800 shadow-lg";

  const cardBg = isDarkMode 
    ? "bg-[#060a1f]/85 backdrop-blur-md border-white/10 hover:bg-[#0a0f2d]/95 hover:border-cyan-500/35 shadow-xl shadow-black/40 text-slate-100" 
    : "bg-white border-slate-200 hover:shadow-lg hover:border-slate-300";

  const textMuted = isDarkMode 
    ? "text-slate-300" 
    : "text-slate-600";

  const bannerBg = isDarkMode
    ? "bg-[#060a1f]/90 backdrop-blur-lg border-white/10"
    : "bg-gradient-to-br from-cyan-500/5 via-indigo-500/5 to-transparent border-slate-200";

  return (
    <div className={`min-h-screen ${themeBg} flex relative overflow-x-hidden transition-colors duration-500 selection:bg-cyan-500/20 selection:text-cyan-200`}>
      
      {/* Majestic Immersive Spiral Galaxy Background (Top Right) */}
      {isDarkMode && (
        <>
          {/* Top Right Galaxy */}
          <div 
            className="absolute top-[-80px] right-[-100px] w-full max-w-[1300px] h-[800px] pointer-events-none select-none z-0 overflow-hidden opacity-85 mix-blend-screen hidden lg:block"
            style={{
              backgroundImage: `url('${galaxyImg}')`,
              backgroundSize: '100% auto',
              backgroundPosition: 'top right',
              backgroundRepeat: 'no-repeat',
              maskImage: 'radial-gradient(circle at 75% 35%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'radial-gradient(circle at 75% 35%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0) 100%)'
            }}
          />
          {/* Orbital Planet Limb Horizon on Left Side (glowing thin atmosphere) */}
          <div 
            className="absolute top-[80px] left-[-300px] w-[1000px] h-[900px] pointer-events-none select-none z-0 overflow-hidden opacity-75 mix-blend-screen hidden lg:block"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1600&q=80')`,
              backgroundSize: '100% auto',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
              maskImage: 'radial-gradient(circle at 25% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 55%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'radial-gradient(circle at 25% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 55%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)'
            }}
          />
        </>
      )}

      {/* MOBILE HEADER TOP-BAR */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 h-16 ${isDarkMode ? 'bg-[#03050c]/90 border-white/5' : 'bg-white/90 border-slate-200'} border-b flex items-center justify-between px-4 z-40 backdrop-blur-md`}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
            <Orbit className="w-4.5 h-4.5 text-cyan-200" />
          </div>
          <div>
            <span className="font-sans font-semibold text-sm tracking-wider">SPACEVERSE</span>
            <span className="block text-[8px] text-cyan-400 font-mono tracking-widest leading-none">DASHBOARD</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-full hover:bg-white/5 relative"
          >
            <Bell className="w-4.5 h-4.5 text-slate-400" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500"></span>
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-white/5"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* STATIC SIDEBAR (DESKTOP) & OVERLAY MENU (MOBILE) */}
      <aside className={`
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        fixed lg:sticky top-0 left-0 bottom-0 z-50 w-72 ${sidebarBg} border-r flex flex-col justify-between transition-transform duration-300 h-screen overflow-y-auto no-scrollbar
      `}>
        
        <div className="p-6 flex flex-col gap-6">
          {/* Logo Brand Block */}
          <div className="flex items-center gap-3 relative">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/20">
              <Orbit className="w-5.5 h-5.5 text-cyan-200 animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-0 rounded-xl border border-white/20"></div>
            </div>
            <div>
              <span className="font-sans font-bold text-base tracking-wider bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                SPACEVERSE
              </span>
              <span className="block text-[9px] text-cyan-400 font-mono tracking-widest leading-none mt-0.5">
                EXPLORE THE UNIVERSE
              </span>
            </div>
            
            {/* Mobile close button */}
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden absolute right-0 p-1 rounded hover:bg-white/5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Primary Navigation */}
          <nav className="flex flex-col gap-1 mt-4">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest pl-3 mb-1">NAVIGATION</span>
            {menuItems.map((item) => {
              const isActive = (currentTab === 'explore' && item.id.includes(activeCategory) && activeCategory !== 'all') || 
                               (currentTab === item.id);
              return (
                <button
                  key={item.id}
                  onClick={item.action ? item.action : () => handleTabChange(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-250 text-left ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600/15 to-indigo-600/10 text-cyan-400 border border-blue-500/20 font-semibold shadow-inner' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? 'text-cyan-400' : 'text-slate-500'}>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  {item.id.includes('-link') && <ChevronRight className="w-3 h-3 text-slate-600" />}
                </button>
              );
            })}
          </nav>

          {/* Scientific Navigation Section */}
          <nav className="flex flex-col gap-1 border-t border-white/5 pt-4">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest pl-3 mb-1">SCIENCES & OBSERVATORIES</span>
            {secondaryMenuItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-250 text-left ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600/15 to-indigo-600/10 text-cyan-400 border border-blue-500/20 font-semibold' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] border border-transparent'
                  }`}
                >
                  <span className={isActive ? 'text-cyan-400' : 'text-slate-500'}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* My Space (Bookmarks) Drawer */}
          <div className="border-t border-white/5 pt-4">
            <div className="flex items-center justify-between px-3 mb-2">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">MY SPACE</span>
              <span className="text-[9px] font-mono text-cyan-400">{favorites.length} Saved</span>
            </div>
            
            <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-[#020308]/90 border-white/10' : 'bg-slate-50 border-slate-200'} border flex flex-col gap-2`}>
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-[10px] font-mono font-medium tracking-wider">Favorites & History</span>
              </div>
              
              {favorites.length === 0 ? (
                <p className="text-[9px] text-slate-400 leading-relaxed pl-1">
                  No bookmarks yet. Click stars on space objects to save.
                </p>
              ) : (
                <div className="flex flex-col gap-1.5 max-h-32 overflow-y-auto pr-1">
                  {spaceObjects.filter(obj => favorites.includes(obj.id)).map(obj => (
                    <div 
                      key={obj.id}
                      onClick={() => setSelectedObject(obj)}
                      className="group/item flex items-center justify-between p-1.5 rounded-lg bg-white/[0.05] hover:bg-cyan-500/15 cursor-pointer transition-colors"
                    >
                      <span className="text-[10px] truncate text-slate-300 font-medium group-hover/item:text-cyan-300">{obj.name}</span>
                      <button 
                        onClick={(e) => toggleFavorite(obj.id, e)}
                        className="opacity-0 group-hover/item:opacity-100 p-0.5 hover:bg-white/10 rounded transition-opacity"
                        title="Remove bookmark"
                      >
                        <X className="w-2.5 h-2.5 text-slate-400 hover:text-rose-400" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Profile / Setting Block */}
        <div className="p-6 border-t border-white/5 flex flex-col gap-4 mt-auto">
          {/* Dark Mode toggle pill */}
          <div className="flex items-center justify-between bg-white/[0.02] p-1.5 rounded-xl border border-white/5">
            <span className="text-[10px] font-mono text-slate-500 pl-2">DARK MODE</span>
            <div className="flex items-center gap-1">
              <button 
                onClick={() => setIsDarkMode(false)}
                className={`p-1 rounded-lg ${!isDarkMode ? 'bg-white text-slate-900 shadow' : 'text-slate-500 hover:text-slate-300'}`}
                title="Light Theme"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => setIsDarkMode(true)}
                className={`p-1 rounded-lg ${isDarkMode ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/20' : 'text-slate-500 hover:text-slate-300'}`}
                title="Cosmic Dark Theme"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-5 text-slate-500 text-xs">
            <a href="#facebook" className="hover:text-cyan-400 transition-colors" title="SpaceVerse Facebook">fb</a>
            <a href="#twitter" className="hover:text-cyan-400 transition-colors" title="SpaceVerse Twitter">tw</a>
            <a href="#instagram" className="hover:text-cyan-400 transition-colors" title="SpaceVerse Instagram">ig</a>
            <a href="#youtube" className="hover:text-cyan-400 transition-colors" title="SpaceVerse YouTube">yt</a>
          </div>
        </div>
      </aside>

      {/* MOBILE INTERACTIVE BACKDROP */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 z-45 backdrop-blur-sm"
        />
      )}

      {/* MAIN RIGHT COLUMN CONTAINER */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto pt-16 lg:pt-0 relative z-10">
        
        {/* DESKTOP TOP BAR */}
        <header className={`sticky top-0 z-30 h-16 border-b ${isDarkMode ? 'bg-[#03050c]/85 border-white/5' : 'bg-white/85 border-slate-200'} backdrop-blur-xl px-6 lg:px-8 flex items-center justify-between gap-4 transition-colors duration-300`}>
          {/* Universal Search */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search planets, galaxies, stars..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (currentTab !== 'explore' && currentTab !== 'home') {
                  setCurrentTab('explore');
                }
              }}
              className={`w-full pl-9 pr-4 py-1.5 rounded-xl ${isDarkMode ? 'bg-white/5 border-white/10 text-white placeholder-slate-400' : 'bg-slate-100 border-slate-200 text-slate-900 placeholder-slate-500'} border text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all`}
            />
          </div>

          {/* Widgets & Live Events & Notifications */}
          <div className="flex items-center gap-4">
            
            {/* Live Events Button */}
            <button 
              onClick={() => setShowLiveEvents(!showLiveEvents)}
              className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium cursor-pointer hover:bg-emerald-500/10 transition-colors relative"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Live Events</span>
            </button>

            {/* Notifications Button */}
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className={`p-2 rounded-xl border ${isDarkMode ? 'border-white/5 hover:bg-white/5' : 'border-slate-200 hover:bg-slate-100'} text-slate-400 hover:text-white transition-all relative`}
            >
              <Bell className="w-4 h-4 text-slate-400" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            </button>

            {/* Astronaut profile avatar */}
            <div className={`flex items-center gap-2 border-l ${isDarkMode ? 'border-white/10' : 'border-slate-200'} pl-4`}>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-400/30 bg-slate-800 flex items-center justify-center text-[10px]">
                🚀
              </div>
              <span className="text-xs font-mono font-semibold hidden md:inline-block">CDR. ASTRONAUT</span>
            </div>

          </div>
        </header>

        {/* NOTIFICATION FLOATING MENU */}
        <AnimatePresence>
          {showNotifications && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`absolute right-6 top-16 w-80 p-4 rounded-2xl border ${isDarkMode ? 'bg-[#050816]/95 border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'} shadow-2xl z-50 backdrop-blur-md`}
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                <span className="text-xs font-mono font-bold tracking-wider">SYSTEM LOGS</span>
                <button onClick={() => setShowNotifications(false)} className="text-slate-500 hover:text-slate-200">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="space-y-3">
                {notifications.map(notif => (
                  <div key={notif.id} className="p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] text-[11px] leading-relaxed">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-cyan-400">{notif.title}</span>
                      <span className="text-[9px] text-slate-500">{notif.time}</span>
                    </div>
                    <p className="text-slate-400">{notif.message}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LIVE EVENTS FLOATING PANEL */}
        <AnimatePresence>
          {showLiveEvents && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`absolute right-6 sm:right-24 top-16 w-96 p-5 rounded-2xl border ${isDarkMode ? 'bg-[#050816]/95 border-emerald-500/20 text-white' : 'bg-white border-emerald-500 text-slate-900'} shadow-2xl z-50 backdrop-blur-md`}
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" /> Cosmic Live Events Telemetry
                </span>
                <button onClick={() => setShowLiveEvents(false)} className="text-slate-500 hover:text-slate-200">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                  <span className="text-[10px] font-mono text-emerald-400">JULY 2026 EVENT</span>
                  <h4 className="text-xs font-semibold mt-0.5">Perseid Meteor Shower Peak</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Projected dust trail peak intensity: 100 meteors/hr. Radiating from constellation Perseus.</p>
                </div>
                <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <span className="text-[10px] font-mono text-blue-400">ASTRONOMETRY EVENT</span>
                  <h4 className="text-xs font-semibold mt-0.5">Mercury Transit across Solar Disk</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Solar projection filters active on orbital simulations in the Terrestrial Wing.</p>
                </div>
                <div className="p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                  <span className="text-[10px] font-mono text-indigo-400">ORBITAL OVERHEAD PASS</span>
                  <h4 className="text-xs font-semibold mt-0.5">ISS Telemetry Overhead Coordinate</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Next visual alignment: RA 12h 42m / Dec -11° 15m. Peak visibility 6 minutes.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TAB SWITCHED CONTENT CANVAS */}
        <main className="flex-1 p-6 lg:p-8">
          
          <AnimatePresence mode="wait">
            
            {/* 1. HOME TAB */}
            {currentTab === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-12"
              >
                {/* Immersive Title Hero Block */}
                <section className={`p-8 sm:p-12 rounded-3xl ${bannerBg} border relative overflow-hidden group`}>
                  {/* Decorative background nebula glow */}
                  <div className="absolute -top-12 -right-12 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-600/15 transition-all duration-700"></div>
                  <div className="absolute -bottom-12 -left-12 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-purple-600/15 transition-all duration-700"></div>

                  <div className="relative z-10 max-w-3xl">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-6">
                      <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                      <span>Next-Gen Interactive Space Portal</span>
                    </span>
                    
                    <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-4">
                      Explore the <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">Universe</span>
                    </h1>
                    
                    <p className={`text-sm sm:text-base ${textMuted} leading-relaxed mb-8 max-w-xl`}>
                      SpaceVerse is an interactive 3D astronomy website that helps users explore the universe through immersive visualizations and educational content. Discover the Solar System, planets, stars, galaxies, nebulae, black holes, and exoplanets with interactive 3D models, scientific facts, and space exploration resources. SpaceVerse combines astronomy education with modern web technology to make learning about the universe engaging for students, educators, and space enthusiasts.
                    </p>

                    {/* Integrated Telemetry Quick Stats directly beneath */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/5 pt-8 mb-8">
                      <div>
                        <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-mono uppercase tracking-widest">
                          <Globe className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Planets</span>
                        </div>
                        <span className="text-xl sm:text-2xl font-bold mt-1 block">8 Cataloged</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-mono uppercase tracking-widest">
                          <Sun className="w-3.5 h-3.5 text-amber-400" />
                          <span>Stars</span>
                        </div>
                        <span className="text-xl sm:text-2xl font-bold mt-1 block">100B+</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-mono uppercase tracking-widest">
                          <Layers className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Galaxies</span>
                        </div>
                        <span className="text-xl sm:text-2xl font-bold mt-1 block">2T+</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-mono uppercase tracking-widest">
                          <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                          <span>Possibilities</span>
                        </div>
                        <span className="text-xl sm:text-2xl font-bold mt-1 block">∞ Infinite</span>
                      </div>
                    </div>

                    {/* Action buttons directly below stats */}
                    <div className="flex flex-wrap gap-4">
                      <button 
                        onClick={() => handleTabChange('explore')}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold tracking-wider uppercase shadow-lg shadow-blue-600/10 hover:shadow-blue-600/25 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                      >
                        <Compass className="w-4 h-4 text-cyan-200" />
                        <span>Start Exploring</span>
                      </button>
                      <button 
                        onClick={() => setSelectedObject(spaceObjects[0])}
                        className="px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white text-xs font-semibold tracking-wider uppercase border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                      >
                        <Box className="w-4 h-4 text-cyan-400" />
                        <span>3D Explorer</span>
                      </button>
                    </div>

                  </div>
                </section>

                {/* Grid of Six Interactive Compact Category Cards */}
                <section>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div 
                      onClick={() => { setCurrentTab('explore'); setActiveCategory('stellar-system'); setSearchQuery(''); }}
                      className={`p-4 rounded-2xl border ${cardBg} cursor-pointer transition-all duration-300 group`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                        <Sun className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold font-sans">Solar System</h4>
                      <p className="text-[10px] text-slate-500 mt-1">Explore 8 planets and beyond</p>
                    </div>

                    <div 
                      onClick={() => { setCurrentTab('explore'); setActiveCategory('galaxy'); setSearchQuery(''); }}
                      className={`p-4 rounded-2xl border ${cardBg} cursor-pointer transition-all duration-300 group`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold font-sans">Galaxies</h4>
                      <p className="text-[10px] text-slate-500 mt-1">Discover billions of galaxies</p>
                    </div>

                    <div 
                      onClick={() => { setCurrentTab('explore'); setActiveCategory('stellar-system'); setSearchQuery(''); }}
                      className={`p-4 rounded-2xl border ${cardBg} cursor-pointer transition-all duration-300 group`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold font-sans">Star Systems</h4>
                      <p className="text-[10px] text-slate-500 mt-1">Explore nearby star systems</p>
                    </div>

                    <div 
                      onClick={() => { setCurrentTab('explore'); setActiveCategory('stellar-system'); setSearchQuery('kepler-90'); }}
                      className={`p-4 rounded-2xl border ${cardBg} cursor-pointer transition-all duration-300 group`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                        <Globe className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold font-sans">Exoplanets</h4>
                      <p className="text-[10px] text-slate-500 mt-1">Find worlds beyond our sun</p>
                    </div>

                    <div 
                      onClick={() => { setCurrentTab('explore'); setActiveCategory('black-hole'); setSearchQuery(''); }}
                      className={`p-4 rounded-2xl border ${cardBg} cursor-pointer transition-all duration-300 group`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-3 group-hover:scale-110 transition-transform">
                        <Zap className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold font-sans">Black Holes</h4>
                      <p className="text-[10px] text-slate-500 mt-1">Journey into the unknown</p>
                    </div>

                    <div 
                      onClick={() => { setCurrentTab('gallery'); }}
                      className={`p-4 rounded-2xl border ${cardBg} cursor-pointer transition-all duration-300 group`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                        <Image className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold font-sans">Nebulae</h4>
                      <p className="text-[10px] text-slate-500 mt-1">Witness cosmic cloud beauty</p>
                    </div>
                  </div>
                </section>

                {/* Featured Destinations Section with "View All" */}
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-sans font-bold tracking-tight">Featured Destinations</h3>
                      <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                    </div>
                    <button 
                      onClick={() => handleTabChange('explore')}
                      className="px-4 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>View All</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {featuredDestinations.map((obj) => (
                      <div 
                        key={obj.id}
                        onClick={() => setSelectedObject(obj)}
                        className={`group relative rounded-2xl overflow-hidden border ${isDarkMode ? 'border-white/5' : 'border-slate-200'} bg-[#02040d] aspect-[4/5] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]`}
                      >
                        {/* High res background image */}
                        <img 
                          src={getFeaturedImage(obj.id)} 
                          alt={obj.name}
                          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        {/* Gradient shade overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#02040d] via-black/10 to-transparent"></div>
                        
                        {/* Dynamic Bookmarking star overlay */}
                        <button 
                          onClick={(e) => toggleFavorite(obj.id, e)}
                          className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/40 border border-white/10 hover:bg-black/60 transition-colors z-20"
                        >
                          <Star className={`w-3.5 h-3.5 ${favorites.includes(obj.id) ? 'text-amber-400 fill-amber-400' : 'text-slate-400'}`} />
                        </button>

                        <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col justify-end h-1/2">
                          <span className="text-[9px] font-mono text-cyan-400 tracking-widest uppercase">{obj.categoryLabel}</span>
                          <h4 className="text-base font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">{obj.name}</h4>
                          <p className="text-[10px] text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">{obj.oneLiner}</p>
                          
                          <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500 mt-3 group-hover:text-white transition-colors">
                            <span>LAUNCH 3D ORBIT</span>
                            <ArrowRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Cosmic Metrics Bar */}
                <section className={`p-6 rounded-2xl ${isDarkMode ? 'bg-[#060a1f]/85 backdrop-blur-md border-white/10' : 'bg-slate-100 border-slate-200'} border grid grid-cols-2 md:grid-cols-6 gap-6`}>
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-blue-500/10 text-blue-400"><Cpu className="w-5 h-5" /></span>
                    <div>
                      <span className="text-lg font-extrabold block">13.8B</span>
                      <span className="text-[9px] text-slate-500 font-mono">YEARS OLD UNIVERSE</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-purple-500/10 text-purple-400"><Layers className="w-5 h-5" /></span>
                    <div>
                      <span className="text-lg font-extrabold block">93B</span>
                      <span className="text-[9px] text-slate-500 font-mono">LIGHT YEARS DIA.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-orange-500/10 text-orange-400"><Globe className="w-5 h-5" /></span>
                    <div>
                      <span className="text-lg font-extrabold block">8</span>
                      <span className="text-[9px] text-slate-500 font-mono">PLANETS IN SYSTEM</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400"><Compass className="w-5 h-5" /></span>
                    <div>
                      <span className="text-lg font-extrabold block">5,656</span>
                      <span className="text-[9px] text-slate-500 font-mono">EXOPLANETS CONFIRMED</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-fuchsia-500/10 text-fuchsia-400"><Rocket className="w-5 h-5" /></span>
                    <div>
                      <span className="text-lg font-extrabold block">1,000+</span>
                      <span className="text-[9px] text-slate-500 font-mono">ONGOING MISSIONS</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400"><Clock className="w-5 h-5" /></span>
                    <div>
                      <span className="text-lg font-extrabold block">24/7</span>
                      <span className="text-[9px] text-slate-500 font-mono">UNIVERSE TO EXPLORE</span>
                    </div>
                  </div>
                </section>

                {/* Latest Discoveries Section with View All */}
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-sans font-bold tracking-tight">Latest Discoveries</h3>
                      <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                    </div>
                    <button 
                      onClick={() => handleTabChange('news')}
                      className="px-4 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>View All News</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {newsItems.map((article, i) => (
                      <div 
                        key={i}
                        className={`p-4 rounded-2xl border ${cardBg} transition-all duration-300 flex flex-col justify-between h-full`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 text-[9px] font-mono font-semibold tracking-wider">{article.source}</span>
                            <span className="text-[10px] text-slate-500 font-mono">{article.time}</span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-100 hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">{article.title}</h4>
                          <p className="text-[10px] text-slate-400 mt-2 line-clamp-3 leading-relaxed">{article.desc}</p>
                        </div>
                        <div className="border-t border-white/5 pt-3 mt-4 flex items-center justify-between text-[10px] text-slate-500">
                          <span className="font-mono">READ ARTICLE</span>
                          <ArrowRight className="w-3 h-3 text-cyan-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </motion.div>
            )}

            {/* 2. EXPLORE VIEW (Dynamic Catalog) */}
            {currentTab === 'explore' && (
              <motion.div
                key="explore"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-8"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-white">Celestial Targets Catalog</h2>
                    <p className="text-slate-500 text-xs mt-1">Select any stellar cluster or singularity to active diagnostic telemetry sensors and launch the 3D Interactive Simulator.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-950/40 text-cyan-400 border border-cyan-500/10 text-[10px] font-mono uppercase tracking-widest whitespace-nowrap">
                    Telemetry: ONLINE
                  </span>
                </div>

                {/* Sub-Filters Pill Bar */}
                <div className="flex flex-wrap items-center gap-2 bg-[#060a1f]/80 backdrop-blur-md border border-white/10 p-2 rounded-2xl max-w-fit">
                  {(['all', 'galaxy', 'stellar-system', 'black-hole'] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all ${
                        activeCategory === cat
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-[#0a0f2d]/90'
                      }`}
                    >
                      {cat === 'all' ? 'All Objects' : cat === 'stellar-system' ? 'Stellar Systems' : cat === 'galaxy' ? 'Galaxies' : 'Black Holes'}
                    </button>
                  ))}
                </div>

                {/* Search / Result Metrics */}
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Showing {filteredObjects.length} of {spaceObjects.length} matching items
                </div>

                {/* Interactive Grid */}
                <ExploreGrid 
                  objects={filteredObjects}
                  onSelectObject={(obj) => setSelectedObject(obj)}
                />
              </motion.div>
            )}

            {/* 3. LEGENDARY SCIENTISTS */}
            {currentTab === 'scientists' && (
              <motion.div
                key="scientists"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">Legendary Space Minds</h2>
                  <p className="text-slate-500 text-xs mt-1">Discover the legendary theoretical physicists, astronomers, and astrobiologists who gathered the scientific measurements underlying SpaceVerse models.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {scientistsData.map((sci, idx) => (
                    <div 
                      key={idx}
                      className={`p-6 rounded-3xl border ${cardBg} relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.05)]`}
                    >
                      <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-3xl rounded-full"></div>
                      
                      <div className="flex flex-col sm:flex-row gap-5 items-start">
                        <img 
                          src={sci.image} 
                          alt={sci.name}
                          className="w-20 h-20 rounded-2xl object-cover border border-white/15"
                          referrerPolicy="no-referrer"
                        />
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">{sci.era}</span>
                          <h3 className="text-lg font-bold text-white">{sci.name}</h3>
                          <span className="inline-block px-2 py-0.5 rounded-lg bg-blue-950/40 text-blue-300 border border-blue-500/10 text-[10px] font-mono mt-1 font-semibold">{sci.discovery}</span>
                        </div>
                      </div>

                      <div className="mt-5 border-t border-white/5 pt-4">
                        <p className="text-xs italic text-slate-300 pl-3 border-l border-cyan-500/40 font-serif">
                          "{sci.quote}"
                        </p>
                        <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                          {sci.contribution}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
                          {sci.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 4. SPACE MISSIONS */}
            {currentTab === 'missions' && (
              <motion.div
                key="missions"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">Observational Space Missions</h2>
                  <p className="text-slate-500 text-xs mt-1">Inspect the active telescopes, orbital satellites, and deep interstellar probes providing physical telemetry and spectral readings.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {missionsData.map((mis, idx) => (
                    <div 
                      key={idx}
                      className={`p-6 rounded-3xl border ${cardBg} relative overflow-hidden group transition-all duration-300 flex flex-col justify-between`}
                    >
                      <div>
                        {/* Status / Launch Badge */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{mis.agency}</span>
                          <span className={`px-2.5 py-0.5 rounded-full ${mis.status.includes('Active') ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-500/20' : 'bg-amber-950/50 text-amber-400 border border-amber-500/20'} text-[9px] font-mono font-semibold`}>
                            {mis.status}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">{mis.name}</h3>
                        
                        {/* Diagnostic Metadata */}
                        <div className="grid grid-cols-2 gap-4 py-3 border-y border-white/5 my-4 text-[10px] font-mono text-slate-400">
                          <div>
                            <span className="block text-slate-500">LAUNCHED</span>
                            <span className="text-slate-200 mt-0.5 block font-sans">{mis.launched}</span>
                          </div>
                          <div>
                            <span className="block text-slate-500">TELEMETRY LOCATION</span>
                            <span className="text-slate-200 mt-0.5 block font-sans truncate" title={mis.telemetry}>{mis.telemetry}</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed mb-5">{mis.description}</p>
                        
                        {/* Achievements */}
                        <div className="space-y-2.5">
                          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">KEY DISCOVERIES</span>
                          {mis.achievements.map((ach, aIdx) => (
                            <div key={aIdx} className="flex gap-2 items-start text-xs text-slate-400 leading-relaxed">
                              <span className="p-0.5 rounded-full bg-cyan-950 text-cyan-400 mt-0.5"><Check className="w-3 h-3" /></span>
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
                        <span className="font-mono">MISSION TELEMETRY CHANNELS</span>
                        <div className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer">
                          <span>Open NASA Log</span>
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 5. 3D EXPLORER HUB */}
            {currentTab === 'explorer3d' && (
              <motion.div
                key="explorer3d"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-white">3D Immersive Telemetry Hub</h2>
                    <p className="text-slate-500 text-xs mt-1">Instantly bypass the encyclopedia catalog to boot high-precision physical orbital simulations directly.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {spaceObjects.map((obj) => (
                    <div 
                      key={obj.id}
                      onClick={() => setSelectedObject(obj)}
                      className={`p-5 rounded-2xl border ${cardBg} cursor-pointer hover:border-cyan-500/30 group transition-all duration-300 relative overflow-hidden`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 text-[9px] font-mono font-semibold uppercase border border-cyan-500/10">
                          {obj.categoryLabel}
                        </span>
                        <Box className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                      </div>
                      
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">{obj.name}</h3>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">{obj.oneLiner}</p>

                      <div className="border-t border-white/5 pt-3 mt-4 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">LAUNCH SIMULATOR</span>
                        <div className="w-6 h-6 rounded-full bg-cyan-950 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 6. HIGH-RES PHOTO GALLERY (CelestialGallery) */}
            {currentTab === 'gallery' && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
              >
                <CelestialGallery />
              </motion.div>
            )}

            {/* 7. DETAILED ASTROPHYSICAL NEWS FEED */}
            {currentTab === 'news' && (
              <motion.div
                key="news"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">Astrophysical News & Telescope Breakthroughs</h2>
                  <p className="text-slate-500 text-xs mt-1">Real-time reports detailing spectral findings, exoplanetary atmospheric discoveries, and gravitational wave detection logs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {newsItems.map((article, i) => (
                    <div 
                      key={i}
                      className={`p-6 rounded-3xl border ${cardBg} relative overflow-hidden group transition-all duration-300 flex flex-col justify-between`}
                    >
                      <div>
                        {/* Background subtle cover */}
                        <div className="h-44 rounded-2xl overflow-hidden mb-5 border border-white/5 relative">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                          <span className="absolute bottom-3 left-3 px-3 py-1 rounded bg-black/60 border border-white/10 text-[9px] font-mono text-cyan-300 font-semibold uppercase">{article.source}</span>
                        </div>

                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] text-slate-500 font-mono">PUBLICATION DATE: {article.time}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">{article.title}</h3>
                        <p className="text-xs text-slate-400 mt-3 leading-relaxed">{article.desc}</p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                        <span className="font-mono text-[10px] text-slate-500">EXPAND SCIENTIFIC ARTICLE</span>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <span>Read Full Log</span>
                          <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 8. ABOUT US (SpaceVerse Math & Mechanics) */}
            {currentTab === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-8"
              >
                <div>
             <h2 className="text-4xl font-extrabold tracking-tight text-white">
                    About SpaceVerse
            </h2>

                  <p className="text-cyan-400 text-sm uppercase tracking-[0.25em] mt-2">
                 Interactive Astronomy • Space Encyclopedia • 3D Universe Simulator
                </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="mt-6 max-w-5xl">

<p className="text-slate-400 mt-3 max-w-4xl leading-relaxed">
SpaceVerse is a next-generation interactive astronomy encyclopedia and 3D universe simulator built for students, educators, researchers, and space enthusiasts. Explore scientifically accurate models of the Solar System, galaxies, black holes, nebulae, exoplanets, and space missions through immersive 3D visualization, verified astronomical data, and educational articles that make complex space science easy to understand.
</p>
<div className="mt-6 p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
  <p className="text-sm leading-8 text-slate-300">
    <strong className="text-cyan-300">SpaceVerse</strong> is a next-generation interactive 3D astronomy platform designed to explore the universe through immersive scientific visualization. The website features realistic simulations of the Solar System, Milky Way Galaxy, black holes, exoplanets, nebulae, star systems, and space missions using modern web technologies and accurate astronomical information.
  </p>
</div>

<p className="text-slate-400 mt-6 leading-8">
Our platform allows visitors to explore planets, stars, galaxies, black holes, nebulae, exoplanets, and space missions using modern web technologies. Every article combines educational content, interactive visualization, and verified scientific knowledge to inspire curiosity about the cosmos.
</p>

<div className="mt-8 rounded-2xl border border-cyan-500/20 bg-slate-900/50 p-6">

<h3 className="text-2xl font-bold text-cyan-300">
🚀 What You'll Discover
</h3>

<ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-slate-300">

<li>🌍 Solar System</li>
<li>🌌 Milky Way Galaxy</li>
<li>⭐ Stars</li>
<li>🪐 Exoplanets</li>
<li>🕳 Black Holes</li>
<li>☄️ Comets</li>
<li>🌠 Nebulae</li>
<li>🚀 Space Missions</li>
<li>📚 Astronomy Articles</li>

</ul>

</div>

<div className="grid md:grid-cols-4 gap-6 mt-10">

<div className="rounded-xl bg-slate-900/40 p-5 text-center">
<h2 className="text-3xl font-bold text-cyan-400">20+</h2>
<p className="text-slate-400 mt-2">Interactive Simulations</p>
</div>

<div className="rounded-xl bg-slate-900/40 p-5 text-center">
<h2 className="text-3xl font-bold text-cyan-400">5656+</h2>
<p className="text-slate-400 mt-2">Confirmed Exoplanets</p>
</div>

<div className="rounded-xl bg-slate-900/40 p-5 text-center">
<h2 className="text-3xl font-bold text-cyan-400">8+</h2>
<p className="text-slate-400 mt-2">Scientific Categories</p>
</div>

<div className="rounded-xl bg-slate-900/40 p-5 text-center">
<h2 className="text-3xl font-bold text-cyan-400">100%</h2>
<p className="text-slate-400 mt-2">Educational Content</p>
</div>

</div>

</div>
<div className="mt-14 rounded-3xl border border-cyan-500/20 bg-slate-900/40 p-8">

<h2 className="text-3xl font-bold text-white mb-6">
🚀 Our Mission
</h2>

<p className="text-slate-300 leading-8">
Our mission is to make astronomy accessible to everyone through immersive
3D technology, scientifically accurate information, and engaging educational
experiences. We believe learning about the universe should be inspiring,
interactive, and free for everyone.
</p>

</div>
<div className="mt-8 rounded-3xl border border-indigo-500/20 bg-slate-900/40 p-8">

<h2 className="text-3xl font-bold text-white mb-6">
🌌 Our Vision
</h2>

<p className="text-slate-300 leading-8">
Our vision is to become one of the world's largest interactive
astronomy platforms by bringing together immersive 3D visualization,
scientifically accurate information, and educational content for
students, educators, researchers, and space enthusiasts worldwide.
</p>

</div>

<div className="rounded-3xl border border-cyan-500/20 bg-slate-900/40 p-8 mt-8">
  <h2 className="text-4xl font-bold text-white mb-6">
🚀 Why Choose SpaceVerse?
</h2>

<p className="text-slate-300 leading-8">

Unlike traditional astronomy websites, SpaceVerse combines
interactive 3D simulations, verified scientific information,
beautiful visual design, and educational articles into one
modern learning platform.

Whether you're a student, educator, researcher, or simply curious
about the universe, SpaceVerse makes complex astronomy easy
to understand through immersive visualization.

</p>
</div>
<div className="rounded-3xl border border-cyan-500/20 bg-slate-900/40 p-8 mt-8">

<h2 className="text-3xl font-bold text-white mb-5">
⭐ What Makes SpaceVerse Unique?
</h2>

<ul className="space-y-3 text-slate-300">

<li>✔ Interactive 3D Solar System</li>

<li>✔ Realistic Galaxy Models</li>

<li>✔ Black Hole Visualizations</li>

<li>✔ Verified Scientific Information</li>

<li>✔ Educational Astronomy Articles</li>

<li>✔ Responsive Across All Devices</li>

<li>✔ Constantly Updated Space Data</li>

</ul>

</div>

<div className="rounded-3xl border border-indigo-500/20 bg-slate-900/40 p-8 mt-8">

<h2 className="text-3xl font-bold text-white mb-6">
🌠 Did You Know?
</h2>

<ul className="space-y-4 text-slate-300">

<li>⭐ The Milky Way contains over 100 billion stars.</li>

<li>🪐 More than 5,656 exoplanets have been confirmed.</li>

<li>🌌 The observable universe spans about 93 billion light-years.</li>

<li>🕳 Sagittarius A* is the supermassive black hole at the center of our galaxy.</li>

<li>🚀 New space discoveries are made every year using advanced telescopes.</li>

</ul>

</div>

                          {/* Physics & Formulas */}
  <div className={`p-6 rounded-3xl border ${cardBg} relative overflow-hidden`}>

    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
        TRUSTED SOURCES
    </span>

    <h3 className="text-3xl font-bold text-white mt-2 mb-6">
        Scientific Sources We Trust
    </h3>

    <div className="space-y-4">

        <div className="rounded-xl bg-slate-900/40 p-4 border border-cyan-500/20">
            🚀 NASA — Space missions, astronomy and planetary science
        </div>

        <div className="rounded-xl bg-slate-900/40 p-4 border border-cyan-500/20">
            🌍 ESA — European Space Agency research
        </div>

        <div className="rounded-xl bg-slate-900/40 p-4 border border-cyan-500/20">
            🔭 Hubble Space Telescope
        </div>

        <div className="rounded-xl bg-slate-900/40 p-4 border border-cyan-500/20">
            ✨ James Webb Space Telescope
        </div>

        <div className="rounded-xl bg-slate-900/40 p-4 border border-cyan-500/20">
            🌌 International Astronomical Union (IAU)
        </div>

    </div>

</div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </main>

        {/* Global Footer */}
        <footer className={`border-t ${isDarkMode ? 'border-white/5 bg-[#010207]' : 'border-slate-200 bg-slate-50'} py-8 text-center text-slate-500 text-xs transition-colors duration-300`}>
  <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-sans font-normal">
        &copy; {new Date().getFullYear()} SpaceVerse Encyclopedia &bull; Professional Astrophysical Simulators.
      </p>

      <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
        <span>POWERED BY THREE.JS COGNITIVE GRAPHICS</span>
      </p>
    </div>

    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] uppercase tracking-widest">
      <a href="/privacy-policy.html" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
      <a href="/terms.html" className="hover:text-cyan-400 transition-colors">Terms</a>
      <a href="/contact.html" className="hover:text-cyan-400 transition-colors">Contact</a>
      <a href="/disclaimer.html" className="hover:text-cyan-400 transition-colors">Disclaimer</a>
    </div>
     </div>
     </footer>
     </div>

      {/* FULL-SCREEN IMMERSIVE 3D SIMULATOR CANVAS MODAL */}
      <AnimatePresence>
        {selectedObject && (
          <EmbedViewer 
            object={selectedObject} 
            onClose={() => setSelectedObject(null)}
            onNavigate={handleNavigate}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
