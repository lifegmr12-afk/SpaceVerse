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
  field: string;
  nationality: string;
  majorDiscoveries: string[];
  spaceFindings: string[];
  methods: string[];
  discoveryYears?: string[];
  relatedObjects?: string[];
  relatedMissions?: string[];
  evidence?: string[];
  whyItMatters: string;
  laterConfirmation: string[];
  legacy: string;
}

const scientistsData: Scientist[] = [
  {
    name: 'Nicolaus Copernicus',
    era: '1473 – 1543',
    quote: 'In the middle of all sits the Sun.',
    discovery: 'Heliocentric Model',
    contribution:
      'Proposed that Earth and the other planets orbit the Sun rather than placing Earth at the center of the universe.',
    bio:
      'Polish astronomer whose heliocentric model transformed humanity’s understanding of the Solar System and helped begin the Scientific Revolution.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Nicolaus_Copernicus.png',

    field: 'Astronomy & Cosmology',
    nationality: 'Polish',

    majorDiscoveries: [
      'Heliocentric model of the Solar System',
      'Earth rotates on its axis',
      'Earth revolves around the Sun',
      'Earth is one of several planets orbiting the Sun'
    ],

    spaceFindings: [
      'Placed the Sun near the center of the planetary system.',
      'Explained the apparent daily motion of the sky through Earth’s rotation.',
      'Explained the apparent annual motion of the Sun through Earth’s orbit.',
      'Provided a simpler framework for understanding planetary motions.'
    ],

    methods: [
      'Mathematical astronomy',
      'Geometrical modeling',
      'Careful analysis of astronomical observations'
    ],

    discoveryYears: [
      '1543'
    ],

    relatedObjects: [
      'Sun',
      'Earth',
      'Planets',
      'Solar System'
    ],

    relatedMissions: [],

    evidence: [
      'Planetary observations showed that a heliocentric model could reproduce observed planetary motions.',
      'Later telescopic discoveries provided evidence inconsistent with a simple Earth-centered universe.'
    ],

    laterConfirmation: [
      'Galileo’s telescopic observations supported the heliocentric model.',
      'Kepler’s laws provided a much more accurate mathematical description of planetary orbits.',
      'Newton’s laws of motion and gravity provided the physical explanation for planetary orbits.'
    ],

    whyItMatters:
      'The heliocentric model fundamentally changed humanity’s position in the cosmos and became a foundation for modern astronomy.',

    legacy:
      'Copernicus helped initiate a transformation from an Earth-centered cosmic model to the modern scientific understanding of the Solar System.'
  },

  {
    name: 'Tycho Brahe',
    era: '1546 – 1601',
    quote:
      'The mathematicians are in error when they think that the stars are fixed.',
    discovery: 'Precision Pre-Telescopic Astronomy',
    contribution:
      'Produced exceptionally accurate naked-eye measurements of stars and planets that later enabled Johannes Kepler to discover the laws of planetary motion.',
    bio:
      'Danish astronomer who constructed sophisticated instruments and accumulated some of the most precise astronomical observations available before the invention of the telescope.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Tycho_Brahe.png',

    field: 'Observational Astronomy',
    nationality: 'Danish',

    majorDiscoveries: [
      'Precise stellar positions',
      'Detailed planetary observations',
      'Supernova of 1572',
      'Comet of 1577'
    ],

    spaceFindings: [
      'Observed the 1572 stellar explosion now recognized as a supernova.',
      'Demonstrated that the 1572 object was far beyond Earth’s atmosphere.',
      'Observed the 1577 comet and found evidence against the traditional idea of solid celestial spheres.',
      'Created extensive records of planetary positions.'
    ],

    methods: [
      'Large precision instruments',
      'Naked-eye observations',
      'Repeated positional measurements',
      'Astronomical cataloging'
    ],

    discoveryYears: [
      '1572',
      '1577'
    ],

    relatedObjects: [
      'SN 1572',
      'Great Comet of 1577',
      'Mars',
      'Stars'
    ],

    relatedMissions: [],

    evidence: [
      'His observations showed extremely small stellar and planetary positional differences.',
      'His measurements became critical input for Kepler’s later mathematical work.'
    ],

    laterConfirmation: [
      'Modern observations identify the 1572 event as a Type Ia supernova.',
      'Kepler used Brahe’s planetary observations to derive his laws of planetary motion.'
    ],

    whyItMatters:
      'Accurate observations are the foundation of astronomy. Brahe demonstrated how precision measurement could reveal fundamental truths about the cosmos.',

    legacy:
      'His observations became one of the most important astronomical datasets of the pre-telescope era.'
  },

  {
    name: 'Galileo Galilei',
    era: '1564 – 1642',
    quote:
      'All truths are easy to understand once they are discovered; the point is to discover them.',
    discovery: 'Telescopic Discoveries',
    contribution:
      'Used the telescope to observe mountains on the Moon, sunspots, the phases of Venus, Jupiter’s four largest moons, and countless previously unseen stars.',
    bio:
      'Italian astronomer, physicist, and mathematician whose telescopic observations revolutionized astronomy and provided major evidence for the Copernican model.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Galileo_Galilei.png',

    field: 'Astronomy & Physics',
    nationality: 'Italian',

    majorDiscoveries: [
      'Four largest moons of Jupiter',
      'Phases of Venus',
      'Sunspots',
      'Lunar mountains and craters',
      'Thousands of previously unseen stars'
    ],

    spaceFindings: [
      'Discovered Io, Europa, Ganymede, and Callisto.',
      'Observed that Venus passes through a complete sequence of phases.',
      'Observed mountains and craters on the Moon.',
      'Observed sunspots and demonstrated that the Sun is not a perfect unchanging sphere.',
      'Revealed that the Milky Way contains enormous numbers of stars.'
    ],

    methods: [
      'Telescopic observation',
      'Repeated observations',
      'Geometrical analysis',
      'Experimental physics'
    ],

    discoveryYears: [
      '1609',
      '1610'
    ],

    relatedObjects: [
      'Moon',
      'Jupiter',
      'Io',
      'Europa',
      'Ganymede',
      'Callisto',
      'Venus',
      'Sun'
    ],

    relatedMissions: [
      'Galileo spacecraft',
      'Juno'
    ],

    evidence: [
      'Telescopic observations directly revealed previously invisible structures.',
      'The phases of Venus were difficult to explain with the traditional Ptolemaic model.',
      'Jupiter’s moons demonstrated that not everything revolves around Earth.'
    ],

    laterConfirmation: [
      'Spacecraft have extensively studied Jupiter’s four Galilean moons.',
      'Modern missions have confirmed the complex geology and potential subsurface oceans of several Galilean moons.'
    ],

    whyItMatters:
      'Galileo helped establish telescopic astronomy and demonstrated that observation could overturn long-standing assumptions about the universe.',

    legacy:
      'He is widely regarded as one of the founders of modern observational astronomy and experimental science.'
  },

  {
    name: 'Johannes Kepler',
    era: '1571 – 1630',
    quote:
      'I am stealing the golden vessels of the Egyptians to build a temple to my God.',
    discovery: 'Three Laws of Planetary Motion',
    contribution:
      'Used Tycho Brahe’s observations to discover that planets travel in elliptical orbits and move at varying speeds according to precise mathematical laws.',
    bio:
      'German mathematician and astronomer whose laws of planetary motion transformed astronomy from geometric description into predictive mathematical science.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Johannes_Kepler.png',

    field: 'Astronomy & Mathematics',
    nationality: 'German',

    majorDiscoveries: [
      'Elliptical planetary orbits',
      'Law of equal areas',
      'Harmonic law of planetary motion'
    ],

    spaceFindings: [
      'Showed that planets orbit the Sun in ellipses.',
      'Established that planets move faster when closer to the Sun.',
      'Found a mathematical relationship between orbital period and distance from the Sun.'
    ],

    methods: [
      'Mathematical modeling',
      'Analysis of Tycho Brahe’s observations',
      'Geometrical calculations'
    ],

    discoveryYears: [
      '1609',
      '1619'
    ],

    relatedObjects: [
      'Sun',
      'Mercury',
      'Venus',
      'Earth',
      'Mars',
      'Jupiter',
      'Saturn'
    ],

    relatedMissions: [
      'Kepler Space Telescope'
    ],

    evidence: [
      'Brahe’s high-precision observations of Mars could not be accurately explained by circular orbits.',
      'Elliptical orbital calculations matched observations much more closely.'
    ],

    laterConfirmation: [
      'Newton’s theory of gravity provided the physical explanation for Kepler’s laws.',
      'Modern spacecraft navigation uses Keplerian orbital mechanics as a fundamental approximation.'
    ],

    whyItMatters:
      'Kepler’s laws are still fundamental tools for understanding and calculating planetary and spacecraft orbits.',

    legacy:
      'His mathematical description of planetary motion became one of the foundations of celestial mechanics.'
  },

  {
    name: 'Isaac Newton',
    era: '1643 – 1727',
    quote:
      'If I have seen further it is by standing on the shoulders of giants.',
    discovery: 'Universal Gravitation',
    contribution:
      'Developed the laws of motion and universal gravitation, providing the physical explanation for planetary orbits and many other celestial motions.',
    bio:
      'English physicist and mathematician whose laws of motion and universal gravitation established the foundation of classical celestial mechanics.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Isaac_Newton.png',

    field: 'Physics, Mathematics & Astronomy',
    nationality: 'English',

    majorDiscoveries: [
      'Law of universal gravitation',
      'Three laws of motion',
      'Foundations of celestial mechanics',
      'Reflecting telescope'
    ],

    spaceFindings: [
      'Explained why planets orbit the Sun.',
      'Explained why moons remain gravitationally bound to planets.',
      'Showed that the same gravity governing falling objects on Earth governs celestial bodies.',
      'Provided mathematical tools for predicting orbital motion.'
    ],

    methods: [
      'Mathematical physics',
      'Calculus',
      'Observation',
      'Experimental investigation'
    ],

    discoveryYears: [
      '1687'
    ],

    relatedObjects: [
      'Sun',
      'Planets',
      'Moons',
      'Comets'
    ],

    relatedMissions: [],

    evidence: [
      'Newtonian predictions successfully reproduced known planetary motions.',
      'The theory accurately described many gravitational systems for centuries.'
    ],

    laterConfirmation: [
      'Spacecraft trajectories are routinely calculated using Newtonian mechanics.',
      'General relativity later refined Newtonian gravity under extreme conditions.'
    ],

    whyItMatters:
      'Newton unified terrestrial and celestial mechanics under the same physical laws.',

    legacy:
      'Newton’s framework dominated physics for centuries and remains essential for most ordinary orbital calculations.'
  },

  {
    name: 'Henrietta Swan Leavitt',
    era: '1868 – 1921',
    quote:
      'A relation between the brightness and the period of variable stars.',
    discovery: 'Cepheid Period–Luminosity Relation',
    contribution:
      'Discovered the relationship between the pulsation period and intrinsic brightness of Cepheid variable stars, creating a powerful cosmic distance-measuring tool.',
    bio:
      'American astronomer whose work enabled astronomers to measure distances far beyond the immediate stellar neighborhood.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Henrietta_Swan_Leavitt.png',

    field: 'Stellar Astronomy & Cosmology',
    nationality: 'American',

    majorDiscoveries: [
      'Cepheid period–luminosity relation',
      'Standard-candle method'
    ],

    spaceFindings: [
      'Demonstrated that Cepheid variables have predictable intrinsic brightnesses.',
      'Provided a method for determining distances to stars and galaxies.',
      'Made it possible to establish the enormous scale of the universe beyond nearby stars.'
    ],

    methods: [
      'Photographic astronomy',
      'Variable-star observations',
      'Brightness measurements',
      'Statistical analysis'
    ],

    discoveryYears: [
      '1908',
      '1912'
    ],

    relatedObjects: [
      'Cepheid variable stars',
      'Nearby galaxies',
      'Andromeda Galaxy'
    ],

    relatedMissions: [
      'Hubble Space Telescope',
      'James Webb Space Telescope'
    ],

    evidence: [
      'Cepheid periods correlate strongly with their intrinsic luminosities.',
      'Known distances within the Milky Way calibrated the relationship.'
    ],

    laterConfirmation: [
      'Hubble used Cepheids to determine distances to galaxies.',
      'Cepheids remain an important part of the cosmic distance ladder.',
      'Modern space telescopes continue to refine Cepheid measurements.'
    ],

    whyItMatters:
      'Leavitt’s discovery gave astronomers a cosmic measuring stick and helped make extragalactic astronomy possible.',

    legacy:
      'Her period–luminosity relation remains fundamental to measuring astronomical distances and determining the expansion rate of the universe.'
  },

  {
    name: 'Arthur Eddington',
    era: '1882 – 1944',
    quote:
      'Not only is the universe stranger than we imagine, it is stranger than we can imagine.',
    discovery: 'Stellar Structure & Early Test of General Relativity',
    contribution:
      'Developed major theories of stellar interiors and helped demonstrate the validity of Einstein’s general relativity through observations of the 1919 solar eclipse.',
    bio:
      'British astrophysicist who connected theoretical physics with observations of stars and played an important role in the early testing of general relativity.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Arthur_Eddington.png',

    field: 'Astrophysics & Relativity',
    nationality: 'British',

    majorDiscoveries: [
      'Stellar structure theory',
      'Mass–luminosity relationship',
      'Eddington luminosity',
      '1919 gravitational-deflection observations'
    ],

    spaceFindings: [
      'Explained how pressure and gravity interact inside stars.',
      'Showed that stellar luminosity depends strongly on stellar mass.',
      'Helped establish that starlight can be deflected by gravity.',
      'Developed the concept of a maximum luminosity related to radiation pressure.'
    ],

    methods: [
      'Mathematical modeling',
      'Stellar observations',
      'Spectroscopy',
      'Solar eclipse observations'
    ],

    discoveryYears: [
      '1919',
      '1920s'
    ],

    relatedObjects: [
      'Stars',
      'Sun',
      'Binary stars'
    ],

    relatedMissions: [],

    evidence: [
      'The 1919 eclipse expedition measured apparent shifts in stars near the Sun.',
      'Stellar models matched observed relationships between mass and luminosity.'
    ],

    laterConfirmation: [
      'Modern gravitational lensing observations provide much stronger tests of Einstein’s prediction.',
      'Modern stellar models continue to use principles developed from Eddington’s work.'
    ],

    whyItMatters:
      'Eddington helped establish astrophysics as a field where physical laws can explain the internal structure and behavior of stars.',

    legacy:
      'His work connected relativity, stellar physics, and observational astronomy.'
  },

  {
    name: 'Albert Einstein',
    era: '1879 – 1955',
    quote:
      'The most incomprehensible thing about the world is that it is comprehensible.',
    discovery: 'General Theory of Relativity',
    contribution:
      'Developed general relativity, describing gravity as the curvature of spacetime produced by mass and energy.',
    bio:
      'German-born theoretical physicist whose theories transformed our understanding of space, time, gravity, light, and the universe.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Albert_Einstein.png',

    field: 'Theoretical Physics & Cosmology',
    nationality: 'German-born Swiss-American',

    majorDiscoveries: [
      'Special relativity',
      'General relativity',
      'Mass–energy equivalence',
      'Photoelectric effect',
      'Brownian motion'
    ],

    spaceFindings: [
      'Predicted gravitational lensing.',
      'Provided the theoretical basis for black-hole solutions.',
      'Predicted gravitational waves.',
      'Predicted gravitational time dilation.',
      'Changed the theoretical understanding of the expanding universe.'
    ],

    methods: [
      'Mathematical modeling',
      'Thought experiments',
      'Theoretical physics'
    ],

    discoveryYears: [
      '1905',
      '1915'
    ],

    relatedObjects: [
      'Black holes',
      'Neutron stars',
      'Galaxies',
      'Gravitational waves'
    ],

    relatedMissions: [
      'LIGO',
      'Virgo',
      'Event Horizon Telescope',
      'Gravity Probe B'
    ],

    evidence: [
      'Light deflection by gravity',
      'Mercury’s anomalous orbital precession',
      'Gravitational redshift',
      'Gravitational waves'
    ],

    laterConfirmation: [
      'LIGO directly detected gravitational waves in 2015.',
      'The Event Horizon Telescope observed a black-hole shadow.',
      'Modern gravitational-lensing observations confirm spacetime curvature.'
    ],

    whyItMatters:
      'General relativity is one of the central theories used to understand black holes, gravitational waves, neutron stars, cosmology, and precision satellite navigation.',

    legacy:
      'Einstein fundamentally changed humanity’s understanding of space and time.'
  },

  {
    name: 'Cecilia Payne-Gaposchkin',
    era: '1900 – 1979',
    quote:
      'The reward of the young scientist is the emotional thrill of being the first person in history to see something.',
    discovery: 'Chemical Composition of Stars',
    contribution:
      'Established that stars are composed predominantly of hydrogen and helium and connected stellar spectra with temperature and ionization.',
    bio:
      'British-born American astronomer whose research fundamentally changed our understanding of stellar composition.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Cecilia_Payne-Gaposchkin.png',

    field: 'Stellar Astrophysics',
    nationality: 'British-born American',

    majorDiscoveries: [
      'Hydrogen and helium dominate stellar composition',
      'Stellar spectral interpretation',
      'Ionization-based stellar analysis'
    ],

    spaceFindings: [
      'Established hydrogen as the dominant element in stars.',
      'Showed that spectral differences are strongly related to stellar temperature.',
      'Used ionization theory to interpret stellar atmospheres.'
    ],

    methods: [
      'Spectroscopy',
      'Ionization theory',
      'Stellar atmosphere modeling'
    ],

    discoveryYears: [
      '1925'
    ],

    relatedObjects: [
      'Stars',
      'Stellar atmospheres',
      'Hydrogen',
      'Helium'
    ],

    relatedMissions: [
      'Hubble Space Telescope',
      'James Webb Space Telescope'
    ],

    evidence: [
      'Stellar spectra contain strong hydrogen and helium signatures.',
      'Spectral models matched observed stellar temperatures and compositions.'
    ],

    laterConfirmation: [
      'Modern stellar spectroscopy confirms hydrogen and helium dominate ordinary stars.',
      'Stellar evolution theory explains how stars convert hydrogen into heavier elements.'
    ],

    whyItMatters:
      'Understanding stellar composition is essential for explaining how stars form, shine, evolve, and manufacture heavier elements.',

    legacy:
      'Her work established a foundation for modern stellar astrophysics.'
  },

  {
    name: 'Subrahmanyan Chandrasekhar',
    era: '1910 – 1995',
    quote:
      'The pursuit of science is a journey into the unknown.',
    discovery: 'Chandrasekhar Limit',
    contribution:
      'Demonstrated that a white dwarf cannot remain stable above a critical mass of roughly 1.4 times the mass of the Sun.',
    bio:
      'Indian-American astrophysicist whose theoretical work explained important aspects of stellar evolution and the fate of massive stars.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Subrahmanyan_Chandrasekhar.png',

    field: 'Astrophysics & Stellar Evolution',
    nationality: 'Indian-American',

    majorDiscoveries: [
      'Chandrasekhar limit',
      'Theory of white dwarfs',
      'Stellar structure',
      'Black-hole mathematical theory'
    ],

    spaceFindings: [
      'Established the maximum mass of a stable electron-degenerate white dwarf.',
      'Showed how stellar mass influences the final state of stars.',
      'Contributed mathematical descriptions of black holes and radiative transfer.'
    ],

    methods: [
      'Quantum mechanics',
      'Relativistic physics',
      'Mathematical modeling',
      'Stellar structure calculations'
    ],

    discoveryYears: [
      '1930s'
    ],

    relatedObjects: [
      'White dwarfs',
      'Neutron stars',
      'Supernovae',
      'Black holes'
    ],

    relatedMissions: [
      'Chandra X-ray Observatory'
    ],

    evidence: [
      'Observed white-dwarf masses are consistent with the predicted mass limit.',
      'Supernova theory depends strongly on the relationship between stellar mass and compact remnants.'
    ],

    laterConfirmation: [
      'Observations of white dwarfs confirm the importance of electron degeneracy pressure.',
      'Type Ia supernova models are connected to white-dwarf mass limits.',
      'Modern compact-object observations continue to validate relativistic stellar models.'
    ],

    whyItMatters:
      'The Chandrasekhar limit helps determine whether a dying star becomes a white dwarf or proceeds toward more extreme outcomes.',

    legacy:
      'His work became fundamental to modern stellar evolution and compact-object astrophysics.'
  },

  {
    name: 'Georges Lemaître',
    era: '1894 – 1966',
    quote:
      'The evolution of the world can be compared to a display of fireworks that has just begun.',
    discovery: 'Expanding Universe & Primordial Cosmic Model',
    contribution:
      'Independently derived an expanding-universe solution from general relativity and developed an early version of the idea that the universe began from a much denser initial state.',
    bio:
      'Belgian physicist, astronomer, and priest who made foundational contributions to modern cosmology.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Georges_Lemaitre.png',

    field: 'Cosmology & General Relativity',
    nationality: 'Belgian',

    majorDiscoveries: [
      'Expanding-universe solution',
      'Relationship between galaxy distance and velocity',
      'Early hot dense universe model'
    ],

    spaceFindings: [
      'Showed mathematically that the universe could be expanding.',
      'Connected galaxy recession velocities with cosmic expansion.',
      'Proposed that the universe originated from a much denser primordial state.'
    ],

    methods: [
      'General relativity',
      'Mathematical cosmology',
      'Astronomical observations'
    ],

    discoveryYears: [
      '1927',
      '1931'
    ],

    relatedObjects: [
      'Galaxies',
      'Cosmic microwave background',
      'Observable universe'
    ],

    relatedMissions: [
      'COBE',
      'WMAP',
      'Planck'
    ],

    evidence: [
      'Galaxy redshifts increase with distance.',
      'The cosmic microwave background indicates a hot early universe.'
    ],

    laterConfirmation: [
      'Cosmic microwave background observations strongly support the hot Big Bang model.',
      'Modern cosmological surveys precisely measure cosmic expansion.'
    ],

    whyItMatters:
      'Lemaître helped establish the modern view that the universe evolves over time rather than remaining static.',

    legacy:
      'His ideas became central to modern Big Bang cosmology.'
  },

  {
    name: 'Fritz Zwicky',
    era: '1898 – 1974',
    quote:
      'The universe is not only stranger than we imagine, it is stranger than we can imagine.',
    discovery: 'Dark Matter Evidence in Galaxy Clusters',
    contribution:
      'Used galaxy velocities in the Coma Cluster to infer that far more mass was present than could be seen in visible galaxies.',
    bio:
      'Swiss-American astronomer and physicist who pioneered the study of supernovae, galaxy clusters, and unseen mass.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Fritz_Zwicky.png',

    field: 'Astronomy & Astrophysics',
    nationality: 'Swiss-American',

    majorDiscoveries: [
      'Early evidence for dark matter',
      'Supernova classification',
      'Galaxy clusters',
      'Gravitational lensing prediction'
    ],

    spaceFindings: [
      'Found unexpectedly high galaxy velocities in the Coma Cluster.',
      'Proposed the existence of unseen matter to explain cluster dynamics.',
      'Helped establish supernovae as distinct astronomical phenomena.',
      'Predicted that galaxies could act as gravitational lenses.'
    ],

    methods: [
      'Spectroscopy',
      'Galaxy velocity measurements',
      'Statistical astronomy',
      'Theoretical modeling'
    ],

    discoveryYears: [
      '1933',
      '1930s'
    ],

    relatedObjects: [
      'Coma Cluster',
      'Supernovae',
      'Galaxy clusters',
      'Dark matter'
    ],

    relatedMissions: [
      'Hubble Space Telescope',
      'James Webb Space Telescope'
    ],

    evidence: [
      'Galaxy velocities within clusters indicate more gravitational mass than visible matter provides.',
      'Gravitational lensing independently reveals unseen mass.'
    ],

    laterConfirmation: [
      'Vera Rubin’s galaxy rotation measurements provided further evidence for dark matter.',
      'Modern gravitational-lensing surveys map dark matter throughout galaxy clusters.'
    ],

    whyItMatters:
      'Zwicky was among the first scientists to recognize that a large fraction of cosmic matter may be invisible.',

    legacy:
      'His work helped establish dark matter as one of modern astronomy’s most important mysteries.'
  },

  {
    name: 'Edwin Hubble',
    era: '1889 – 1953',
    quote:
      'Equipped with his five senses, man explores the universe around him and calls the adventure Science.',
    discovery: 'Galaxies Beyond the Milky Way & Cosmic Expansion',
    contribution:
      'Demonstrated that many objects once called nebulae were separate galaxies and found a relationship between galaxy distance and recession velocity.',
    bio:
      'American astronomer whose observations transformed humanity’s understanding of the scale of the universe.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Edwin_Hubble.png',

    field: 'Observational Astronomy & Cosmology',
    nationality: 'American',

    majorDiscoveries: [
      'Galaxies beyond the Milky Way',
      'Galaxy distance measurements',
      'Galaxy classification',
      'Evidence for cosmic expansion'
    ],

    spaceFindings: [
      'Established that Andromeda is a separate galaxy.',
      'Showed that the universe contains enormous numbers of galaxies.',
      'Found a relationship between distance and galaxy recession velocity.',
      'Developed an influential classification scheme for galaxies.'
    ],

    methods: [
      'Large optical telescopes',
      'Cepheid variables',
      'Photographic plates',
      'Spectroscopy'
    ],

    discoveryYears: [
      '1923',
      '1929'
    ],

    relatedObjects: [
      'Andromeda Galaxy',
      'Galaxies',
      'Milky Way'
    ],

    relatedMissions: [
      'Hubble Space Telescope',
      'James Webb Space Telescope'
    ],

    evidence: [
      'Cepheid variable stars provided distance measurements.',
      'Galaxy spectral redshifts revealed recession velocities.'
    ],

    laterConfirmation: [
      'Modern observations confirm cosmic expansion.',
      'The Hubble Space Telescope greatly improved extragalactic distance measurements.',
      'Modern surveys show billions of galaxies across the observable universe.'
    ],

    whyItMatters:
      'Hubble helped reveal that the Milky Way is only one galaxy in an enormous universe.',

    legacy:
      'The Hubble Space Telescope bears his name and has transformed observational cosmology.'
  },

  {
    name: 'Vera Rubin',
    era: '1928 – 2016',
    quote:
      'In a spiral galaxy, the ratio of dark-to-light matter is about ten to one.',
    discovery: 'Galaxy Rotation Curves & Dark Matter',
    contribution:
      'Measured the rotation of spiral galaxies and found that their outer regions rotate much faster than expected from visible matter alone.',
    bio:
      'American astronomer whose observations provided some of the strongest evidence for dark matter on galactic scales.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Vera_Rubin.png',

    field: 'Observational Cosmology',
    nationality: 'American',

    majorDiscoveries: [
      'Flat galaxy rotation curves',
      'Evidence for galactic dark-matter halos'
    ],

    spaceFindings: [
      'Stars far from galaxy centers orbit at unexpectedly high speeds.',
      'Visible matter alone cannot explain observed galaxy rotation.',
      'Galaxies appear to be surrounded by massive invisible halos.'
    ],

    methods: [
      'Optical spectroscopy',
      'Doppler measurements',
      'Galaxy rotation studies'
    ],

    discoveryYears: [
      '1970s'
    ],

    relatedObjects: [
      'Spiral galaxies',
      'Dark matter halos'
    ],

    relatedMissions: [
      'Vera C. Rubin Observatory'
    ],

    evidence: [
      'Flat rotation curves',
      'Galaxy-cluster dynamics',
      'Gravitational lensing'
    ],

    laterConfirmation: [
      'Cosmic microwave background measurements support dark matter.',
      'Gravitational lensing independently maps unseen mass.',
      'Large-scale structure simulations require dark matter.'
    ],

    whyItMatters:
      'Dark matter is essential for explaining the formation and structure of galaxies and the large-scale universe.',

    legacy:
      'The Vera C. Rubin Observatory honors her legacy and will survey billions of astronomical objects.'
  },

  {
    name: 'Stephen Hawking',
    era: '1942 – 2018',
    quote:
      'We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe.',
    discovery: 'Hawking Radiation',
    contribution:
      'Predicted that black holes should emit thermal radiation because of quantum effects near their event horizons.',
    bio:
      'British theoretical physicist and cosmologist whose work connected black-hole physics, quantum mechanics, thermodynamics, and cosmology.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Stephen_Hawking.png',

    field: 'Theoretical Physics & Cosmology',
    nationality: 'British',

    majorDiscoveries: [
      'Hawking radiation',
      'Black-hole thermodynamics',
      'Black-hole entropy',
      'Singularity theorems'
    ],

    spaceFindings: [
      'Black holes can have a temperature.',
      'Black holes can lose energy through Hawking radiation.',
      'Black holes can theoretically evaporate over extremely long timescales.',
      'Black-hole entropy is related to the area of the event horizon.'
    ],

    methods: [
      'Quantum field theory',
      'General relativity',
      'Mathematical physics',
      'Thermodynamics'
    ],

    discoveryYears: [
      '1974'
    ],

    relatedObjects: [
      'Black holes',
      'Event horizons',
      'Early universe'
    ],

    relatedMissions: [
      'Chandra X-ray Observatory',
      'Event Horizon Telescope'
    ],

    evidence: [
      'Hawking radiation remains primarily a theoretical prediction.',
      'Black-hole thermodynamics has extensive theoretical support.'
    ],

    laterConfirmation: [
      'Direct astrophysical detection of Hawking radiation has not yet been achieved.',
      'Laboratory analog experiments have produced Hawking-like radiation phenomena.'
    ],

    whyItMatters:
      'Hawking radiation exposes a deep connection between gravity, quantum mechanics, and thermodynamics.',

    legacy:
      'Hawking became one of the most influential theoretical physicists and science communicators of the modern era.'
  },

  {
    name: 'Roger Penrose',
    era: '1931 – present',
    quote:
      'The laws of nature are extraordinarily mathematical.',
    discovery: 'Mathematical Theory of Black-Hole Formation',
    contribution:
      'Developed powerful mathematical methods showing that gravitational collapse can inevitably produce singularities under realistic conditions.',
    bio:
      'British mathematical physicist whose work transformed the mathematical understanding of black holes and spacetime.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Roger_Penrose.png',

    field: 'Mathematical Physics & Relativity',
    nationality: 'British',

    majorDiscoveries: [
      'Singularity theorems',
      'Black-hole geometry',
      'Penrose diagrams',
      'Cosmic censorship ideas'
    ],

    spaceFindings: [
      'Demonstrated mathematically that singularities can arise from gravitational collapse.',
      'Developed methods for representing complex spacetime geometry.',
      'Explored the structure of rotating black holes.'
    ],

    methods: [
      'Differential geometry',
      'General relativity',
      'Mathematical analysis'
    ],

    discoveryYears: [
      '1965',
      '1960s–1970s'
    ],

    relatedObjects: [
      'Black holes',
      'Singularities',
      'Spacetime'
    ],

    relatedMissions: [
      'Event Horizon Telescope',
      'LIGO',
      'Virgo'
    ],

    evidence: [
      'General relativity predicts gravitational collapse under appropriate conditions.',
      'Astronomical observations reveal objects consistent with black holes.'
    ],

    laterConfirmation: [
      'Black-hole gravitational-wave detections strongly support the existence of astrophysical black holes.',
      'Event Horizon Telescope observations provide visual evidence of black-hole environments.'
    ],

    whyItMatters:
      'Penrose’s mathematical work established that black holes are not merely mathematical curiosities but natural consequences of general relativity.',

    legacy:
      'His methods remain central to modern relativity and black-hole physics.'
  },

  {
    name: 'John Archibald Wheeler',
    era: '1911 – 2008',
    quote:
      'We are participators in bringing into being the universe.',
    discovery: 'Modern Black-Hole Concept & Relativity',
    contribution:
      'Made major contributions to general relativity and popularized the term “black hole.” He also developed influential ideas about spacetime, quantum gravity, and the nature of physical reality.',
    bio:
      'American theoretical physicist who played a major role in developing modern black-hole physics.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/John_Archibald_Wheeler.png',

    field: 'Theoretical Physics & Relativity',
    nationality: 'American',

    majorDiscoveries: [
      'Black-hole physics',
      'Geometrodynamics',
      'Gravitational collapse',
      'Quantum gravity concepts'
    ],

    spaceFindings: [
      'Helped develop the modern theoretical description of black holes.',
      'Popularized the term black hole in the 1960s.',
      'Investigated the relationship between matter and spacetime geometry.'
    ],

    methods: [
      'General relativity',
      'Mathematical physics',
      'Thought experiments'
    ],

    discoveryYears: [
      '1950s–1970s'
    ],

    relatedObjects: [
      'Black holes',
      'Neutron stars',
      'Spacetime'
    ],

    relatedMissions: [
      'LIGO',
      'Event Horizon Telescope'
    ],

    evidence: [
      'Black-hole candidates are observed through gravitational effects and radiation from surrounding matter.'
    ],

    laterConfirmation: [
      'LIGO observations confirmed binary black-hole mergers.',
      'The Event Horizon Telescope imaged the environment surrounding a supermassive black hole.'
    ],

    whyItMatters:
      'Wheeler helped turn black holes into one of the central subjects of modern theoretical and observational astrophysics.',

    legacy:
      'His students and collaborators became leading figures across relativity, cosmology, and quantum gravity.'
  },

  {
    name: 'Carl Sagan',
    era: '1934 – 1996',
    quote:
      'Somewhere, something incredible is waiting to be known.',
    discovery: 'Planetary Atmospheres & Astrobiology',
    contribution:
      'Made major contributions to planetary science, atmospheric modeling, the study of Venus and Mars, and the scientific search for extraterrestrial life.',
    bio:
      'American astronomer, planetary scientist, astrophysicist, and science communicator who helped establish modern planetary science and popularized the search for life beyond Earth.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Carl_Sagan.png',

    field: 'Planetary Science & Astrobiology',
    nationality: 'American',

    majorDiscoveries: [
      'Venus greenhouse-effect research',
      'Planetary atmospheric chemistry',
      'Mars climate research',
      'Titan atmospheric research',
      'Contributions to SETI'
    ],

    spaceFindings: [
      'Explained Venus’s extreme heat through its dense atmosphere and greenhouse effect.',
      'Studied possible climate changes on Mars.',
      'Investigated the chemistry of Titan’s atmosphere.',
      'Contributed to scientific discussions about extraterrestrial life.'
    ],

    methods: [
      'Atmospheric modeling',
      'Spectroscopy',
      'Planetary science',
      'Spacecraft data analysis'
    ],

    discoveryYears: [
      '1960s–1990s'
    ],

    relatedObjects: [
      'Venus',
      'Mars',
      'Titan',
      'Earth'
    ],

    relatedMissions: [
      'Mariner',
      'Viking',
      'Voyager',
      'Pioneer Venus'
    ],

    evidence: [
      'Spacecraft measurements confirmed the extreme conditions on Venus.',
      'Mars missions provided data supporting long-term climate change on Mars.'
    ],

    laterConfirmation: [
      'Modern Venus missions continue to study its powerful greenhouse environment.',
      'Mars missions continue to investigate ancient habitability.',
      'Titan missions have confirmed the complex organic chemistry of its atmosphere.'
    ],

    whyItMatters:
      'Sagan connected planetary science, climate science, and the search for extraterrestrial life.',

    legacy:
      'His scientific work and communication inspired generations of people to explore the cosmos.'
  },

  {
    name: 'Michel Mayor',
    era: '1942 – present',
    quote:
      'The discovery of the first planet orbiting a solar-type star changed our view of the universe.',
    discovery: '51 Pegasi b',
    contribution:
      'Co-discovered 51 Pegasi b, the first confirmed exoplanet orbiting a Sun-like star.',
    bio:
      'Swiss astronomer whose discovery of the first confirmed exoplanet around a Sun-like star opened a new era of exoplanet astronomy.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Michel_Mayor.png',

    field: 'Exoplanet Astronomy',
    nationality: 'Swiss',

    majorDiscoveries: [
      '51 Pegasi b',
      'Radial-velocity exoplanet detection'
    ],

    spaceFindings: [
      'Demonstrated that planets exist around Sun-like stars.',
      'Showed that planetary systems can be very different from our Solar System.',
      'Helped launch modern observational exoplanet science.'
    ],

    methods: [
      'High-resolution spectroscopy',
      'Radial velocity measurements',
      'Precision Doppler spectroscopy'
    ],

    discoveryYears: [
      '1995'
    ],

    relatedObjects: [
      '51 Pegasi',
      '51 Pegasi b',
      'Exoplanets'
    ],

    relatedMissions: [
      'CHEOPS',
      'Gaia',
      'James Webb Space Telescope'
    ],

    evidence: [
      'The star’s spectrum showed periodic Doppler shifts caused by the planet’s gravitational influence.'
    ],

    laterConfirmation: [
      'Thousands of additional exoplanets have since been discovered.',
      'Transit, direct-imaging, microlensing, and other techniques independently confirm planetary systems.'
    ],

    whyItMatters:
      'The discovery proved that planets around other Sun-like stars are real and common enough to study systematically.',

    legacy:
      'Mayor shared the 2019 Nobel Prize in Physics for the discovery of an exoplanet orbiting a solar-type star.'
  },

  {
    name: 'Didier Queloz',
    era: '1966 – present',
    quote:
      'We opened a new window on the universe.',
    discovery: '51 Pegasi b',
    contribution:
      'Co-discovered the first confirmed exoplanet orbiting a Sun-like star together with Michel Mayor.',
    bio:
      'Swiss astronomer whose work helped establish exoplanet science as a major branch of astronomy.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Didier_Queloz.png',

    field: 'Exoplanet Science',
    nationality: 'Swiss',

    majorDiscoveries: [
      '51 Pegasi b',
      'Exoplanet detection through stellar radial velocity'
    ],

    spaceFindings: [
      'Confirmed that planets can orbit stars similar to the Sun.',
      'Helped reveal the extraordinary diversity of planetary systems.'
    ],

    methods: [
      'Precision spectroscopy',
      'Radial velocity measurements'
    ],

    discoveryYears: [
      '1995'
    ],

    relatedObjects: [
      '51 Pegasi',
      '51 Pegasi b'
    ],

    relatedMissions: [
      'CHEOPS',
      'TESS',
      'James Webb Space Telescope'
    ],

    evidence: [
      'Periodic stellar velocity variations indicated gravitational influence from an orbiting planet.'
    ],

    laterConfirmation: [
      'Thousands of exoplanets have now been confirmed.',
      'Space telescopes have detected planets using transit measurements.'
    ],

    whyItMatters:
      'The discovery transformed the search for planets outside the Solar System into a major observational science.',

    legacy:
      'Queloz shared the 2019 Nobel Prize in Physics for the discovery of 51 Pegasi b.'
  },

  {
    name: 'Aleksander Wolszczan',
    era: '1946 – present',
    quote:
      'The discovery showed that planetary systems can exist around exotic stars.',
    discovery: 'First Confirmed Exoplanets Around a Pulsar',
    contribution:
      'Co-discovered planets orbiting the pulsar PSR B1257+12, providing the first confirmed evidence of planets beyond the Solar System.',
    bio:
      'Polish astronomer whose pulsar observations revealed one of the first known planetary systems beyond our Solar System.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Aleksander_Wolszczan.png',

    field: 'Radio Astronomy & Exoplanets',
    nationality: 'Polish',

    majorDiscoveries: [
      'Pulsar planets',
      'PSR B1257+12 planetary system'
    ],

    spaceFindings: [
      'Found planets orbiting a rapidly rotating neutron star.',
      'Demonstrated that planetary systems can survive or form around stellar remnants.'
    ],

    methods: [
      'Radio astronomy',
      'Pulsar timing',
      'Precision timing measurements'
    ],

    discoveryYears: [
      '1992'
    ],

    relatedObjects: [
      'PSR B1257+12',
      'Pulsars',
      'Neutron stars'
    ],

    relatedMissions: [],

    evidence: [
      'Regular variations in pulsar timing revealed the gravitational influence of orbiting planets.'
    ],

    laterConfirmation: [
      'Additional pulsar planets have been discovered.',
      'Modern exoplanet surveys demonstrate that planetary systems are widespread.'
    ],

    whyItMatters:
      'The discovery showed that planets can exist in environments radically different from our Solar System.',

    legacy:
      'His work opened the study of planets around neutron stars and pulsars.'
  },

  {
    name: 'Sara Seager',
    era: '1971 – present',
    quote:
      'The search for life beyond Earth is one of humanity’s greatest scientific adventures.',
    discovery: 'Exoplanet Atmospheres & Biosignature Theory',
    contribution:
      'Developed theoretical methods for studying exoplanet atmospheres and identifying possible chemical signatures of life.',
    bio:
      'Canadian-American astrophysicist known for pioneering work on exoplanets, planetary atmospheres, and the search for habitable worlds.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Sara_Seager.png',

    field: 'Exoplanets & Astrobiology',
    nationality: 'Canadian-American',

    majorDiscoveries: [
      'Exoplanet atmospheric models',
      'Biosignature research',
      'Exoplanet characterization methods'
    ],

    spaceFindings: [
      'Developed methods for analyzing gases in distant planetary atmospheres.',
      'Investigated which atmospheric chemicals could indicate planetary processes or possible life.',
      'Advanced methods for identifying potentially habitable planets.'
    ],

    methods: [
      'Atmospheric modeling',
      'Spectroscopy',
      'Transit spectroscopy',
      'Astrobiological modeling'
    ],

    discoveryYears: [
      '2000s–present'
    ],

    relatedObjects: [
      'Exoplanets',
      'Planetary atmospheres',
      'Habitable zones'
    ],

    relatedMissions: [
      'James Webb Space Telescope',
      'TESS',
      'PLATO'
    ],

    evidence: [
      'Transit spectroscopy can reveal atmospheric absorption signatures.',
      'Modern telescopes can identify molecules in some exoplanet atmospheres.'
    ],

    laterConfirmation: [
      'JWST has begun detailed studies of exoplanet atmospheres.',
      'Future missions may search for stronger biosignature candidates.'
    ],

    whyItMatters:
      'Understanding exoplanet atmospheres is essential for determining whether distant worlds could support life.',

    legacy:
      'Seager is one of the leading scientists in modern exoplanet characterization and astrobiology.'
  },

  {
    name: 'Andrea Ghez',
    era: '1965 – present',
    quote:
      'Black holes are one of the most fascinating objects in the universe.',
    discovery: 'Supermassive Black Hole at the Center of the Milky Way',
    contribution:
      'Led observations of stars orbiting the center of the Milky Way and provided compelling evidence for a supermassive black hole known as Sagittarius A*.',
    bio:
      'American astronomer whose high-resolution observations of the Galactic Center transformed our understanding of the object at the heart of the Milky Way.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Andrea_Ghez.png',

    field: 'Observational Astronomy & Black Holes',
    nationality: 'American',

    majorDiscoveries: [
      'Stellar orbits around Sagittarius A*',
      'Evidence for the Milky Way’s central supermassive black hole'
    ],

    spaceFindings: [
      'Measured stars orbiting an extremely compact massive object.',
      'Tracked stellar motions over decades.',
      'Established the mass and compactness of Sagittarius A*.'
    ],

    methods: [
      'Adaptive optics',
      'Infrared astronomy',
      'High-resolution imaging',
      'Stellar orbital measurements'
    ],

    discoveryYears: [
      '1990s–present'
    ],

    relatedObjects: [
      'Sagittarius A*',
      'Milky Way Galactic Center'
    ],

    relatedMissions: [
      'Keck Observatory',
      'Very Large Telescope',
      'Event Horizon Telescope'
    ],

    evidence: [
      'Rapid stellar orbits around an extremely compact massive object.',
      'Measurements of stellar accelerations near Sagittarius A*.'
    ],

    laterConfirmation: [
      'The Event Horizon Telescope produced an image of the environment around Sagittarius A* in 2022.',
      'Independent observations by Reinhard Genzel’s team reached similar conclusions.'
    ],

    whyItMatters:
      'The Galactic Center provides one of the strongest observational cases for a supermassive black hole.',

    legacy:
      'Ghez shared the 2020 Nobel Prize in Physics for the discovery of the supermassive compact object at the center of our galaxy.'
  },

  {
    name: 'Reinhard Genzel',
    era: '1952 – present',
    quote:
      'The center of our galaxy contains an extraordinary object.',
    discovery: 'Sagittarius A* and the Galactic Center',
    contribution:
      'Led independent long-term observations of stars orbiting Sagittarius A*, providing compelling evidence for a supermassive black hole at the center of the Milky Way.',
    bio:
      'German astrophysicist whose infrared observations of the Galactic Center helped establish the presence of a supermassive black hole at the heart of the Milky Way.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Reinhard_Genzel.png',

    field: 'Infrared Astronomy & Black Holes',
    nationality: 'German',

    majorDiscoveries: [
      'Stellar motions around Sagittarius A*',
      'Mass of the Galactic Center object'
    ],

    spaceFindings: [
      'Tracked stars moving at extraordinary velocities around Sagittarius A*.',
      'Demonstrated that the central mass is extremely compact.',
      'Measured stellar orbits to determine the black hole’s mass.'
    ],

    methods: [
      'Infrared astronomy',
      'Adaptive optics',
      'High-resolution spectroscopy',
      'Long-term stellar tracking'
    ],

    discoveryYears: [
      '1990s–present'
    ],

    relatedObjects: [
      'Sagittarius A*',
      'Milky Way'
    ],

    relatedMissions: [
      'Very Large Telescope',
      'Keck Observatory',
      'Event Horizon Telescope'
    ],

    evidence: [
      'Fast stellar orbits',
      'Stellar accelerations',
      'Compact central mass'
    ],

    laterConfirmation: [
      'Event Horizon Telescope observations provided independent visual evidence of the Galactic Center black-hole environment.',
      'Measurements agree with general-relativistic predictions.'
    ],

    whyItMatters:
      'Understanding Sagittarius A* helps astronomers understand how supermassive black holes interact with their host galaxies.',

    legacy:
      'Genzel shared the 2020 Nobel Prize in Physics for work revealing the supermassive compact object at the center of the Milky Way.'
  },

  {
    name: 'Sheperd Doeleman',
    era: '1967 – present',
    quote:
      'We are trying to see the unseeable.',
    discovery: 'First Horizon-Scale Image of a Black Hole',
    contribution:
      'Led the Event Horizon Telescope collaboration that produced the first image of a black-hole shadow, M87*.',
    bio:
      'American astronomer and astrophysicist who helped develop the global Very Long Baseline Interferometry network required to image black-hole-scale structures.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Sheperd_Doeleman.png',

    field: 'Radio Astronomy & Black-Hole Imaging',
    nationality: 'American',

    majorDiscoveries: [
      'First image of a black-hole shadow',
      'M87* horizon-scale structure',
      'Event Horizon Telescope'
    ],

    spaceFindings: [
      'Observed a ring-like structure surrounding the shadow of M87*.',
      'Measured a size consistent with the expected scale of a supermassive black hole.',
      'Demonstrated that Earth-sized virtual radio telescopes can image black-hole environments.'
    ],

    methods: [
      'Very Long Baseline Interferometry',
      'Millimeter-wave radio astronomy',
      'Global telescope synchronization',
      'Computational imaging'
    ],

    discoveryYears: [
      '2019'
    ],

    relatedObjects: [
      'M87*',
      'Sagittarius A*',
      'Black holes'
    ],

    relatedMissions: [
      'Event Horizon Telescope'
    ],

    evidence: [
      'The observed ring size and shape match predictions for emission surrounding a black hole.',
      'Multiple independent imaging methods produced consistent results.'
    ],

    laterConfirmation: [
      'The EHT produced an image of Sagittarius A* in 2022.',
      'Polarization observations have revealed magnetic-field structure around black holes.'
    ],

    whyItMatters:
      'The EHT transformed black holes from objects inferred indirectly into objects whose immediate environments can be directly imaged.',

    legacy:
      'Doeleman helped establish a new era of horizon-scale black-hole astronomy.'
  },

  {
    name: 'Katie Bouman',
    era: '1989 – present',
    quote:
      'We had to build a new way of seeing the universe.',
    discovery: 'Computational Imaging of Black Holes',
    contribution:
      'Developed algorithms and computational techniques used in the Event Horizon Telescope imaging process.',
    bio:
      'American computer scientist and astronomer whose work contributed to reconstructing images from the sparse data collected by the global EHT network.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Katie_Bouman.png',

    field: 'Computational Imaging & Astronomy',
    nationality: 'American',

    majorDiscoveries: [
      'Black-hole computational imaging',
      'EHT imaging algorithms',
      'Interferometric reconstruction techniques'
    ],

    spaceFindings: [
      'Helped reconstruct the image of M87* from distributed radio telescope data.',
      'Developed methods to test whether reconstructed structures were robust.',
      'Contributed to computational techniques used for black-hole imaging.'
    ],

    methods: [
      'Computational imaging',
      'Machine learning',
      'Interferometry',
      'Mathematical reconstruction'
    ],

    discoveryYears: [
      '2017–2019'
    ],

    relatedObjects: [
      'M87*',
      'Sagittarius A*'
    ],

    relatedMissions: [
      'Event Horizon Telescope'
    ],

    evidence: [
      'Independent imaging pipelines produced consistent ring-like structures around M87*.'
    ],

    laterConfirmation: [
      'EHT observations of Sagittarius A* provided another major demonstration of the imaging techniques.',
      'Polarization imaging added further information about magnetic fields near black holes.'
    ],

    whyItMatters:
      'Astronomical instruments often collect incomplete data. Computational imaging makes it possible to reconstruct scientifically meaningful structures from those measurements.',

    legacy:
      'Her work helped demonstrate the critical role of computational science in modern astronomy.'
  },

  {
    name: 'Rainer Weiss',
    era: '1932 – present',
    quote:
      'The universe is sending us signals in gravitational waves.',
    discovery: 'Gravitational-Wave Detection Technology',
    contribution:
      'Developed foundational concepts and technologies for laser interferometers capable of detecting extremely small changes in distance caused by gravitational waves.',
    bio:
      'German-American physicist and one of the principal architects of the LIGO gravitational-wave detector.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Rainer_Weiss.png',

    field: 'Experimental Physics & Gravitational Waves',
    nationality: 'German-American',

    majorDiscoveries: [
      'Laser interferometric gravitational-wave detection',
      'LIGO detector design'
    ],

    spaceFindings: [
      'Developed methods capable of measuring distortions far smaller than atomic scales.',
      'Helped make direct gravitational-wave astronomy possible.'
    ],

    methods: [
      'Laser interferometry',
      'Precision measurement',
      'Vacuum systems',
      'Noise reduction'
    ],

    discoveryYears: [
      '1970s–2010s'
    ],

    relatedObjects: [
      'Black holes',
      'Neutron stars',
      'Gravitational waves'
    ],

    relatedMissions: [
      'LIGO',
      'Virgo',
      'KAGRA'
    ],

    evidence: [
      'LIGO detected a characteristic gravitational-wave signal from merging black holes in 2015.'
    ],

    laterConfirmation: [
      'LIGO and Virgo have detected many black-hole mergers.',
      'The 2017 neutron-star merger was detected in both gravitational waves and electromagnetic light.'
    ],

    whyItMatters:
      'Gravitational waves provide an entirely new way to observe violent events that may be difficult or impossible to study using light alone.',

    legacy:
      'Weiss shared the 2017 Nobel Prize in Physics for decisive contributions to LIGO and gravitational-wave observation.'
  },

  {
    name: 'Kip Thorne',
    era: '1940 – present',
    quote:
      'The universe is full of surprises.',
    discovery: 'Theoretical Gravitational-Wave Astrophysics',
    contribution:
      'Made major theoretical contributions to gravitational waves, black holes, relativistic astrophysics, and the predictions needed to interpret gravitational-wave signals.',
    bio:
      'American theoretical physicist who helped establish the theoretical framework behind gravitational-wave astronomy.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Kip_Thorne.png',

    field: 'Relativity & Gravitational-Wave Physics',
    nationality: 'American',

    majorDiscoveries: [
      'Gravitational-wave theory',
      'Black-hole astrophysics',
      'Relativistic astrophysics'
    ],

    spaceFindings: [
      'Predicted gravitational-wave signatures from compact-object mergers.',
      'Developed models describing how black holes and neutron stars produce gravitational waves.',
      'Helped establish theoretical tools for interpreting LIGO observations.'
    ],

    methods: [
      'General relativity',
      'Numerical relativity',
      'Mathematical modeling',
      'Computational physics'
    ],

    discoveryYears: [
      '1970s–present'
    ],

    relatedObjects: [
      'Black holes',
      'Neutron stars',
      'Gravitational waves'
    ],

    relatedMissions: [
      'LIGO',
      'Virgo',
      'KAGRA'
    ],

    evidence: [
      'The waveform of GW150914 matched theoretical predictions for merging black holes.'
    ],

    laterConfirmation: [
      'Numerous gravitational-wave events have matched relativistic merger models.',
      'Multi-messenger observations have confirmed predictions for neutron-star mergers.'
    ],

    whyItMatters:
      'Without theoretical waveform models, gravitational-wave signals would be extremely difficult to interpret.',

    legacy:
      'Thorne shared the 2017 Nobel Prize in Physics and helped shape modern gravitational-wave astronomy.'
  },

  {
    name: 'Barry Barish',
    era: '1936 – present',
    quote:
      'We have opened a new window on the universe.',
    discovery: 'Advanced LIGO',
    contribution:
      'Led major organizational and engineering efforts that transformed LIGO from a challenging experimental concept into a functioning observatory capable of detecting gravitational waves.',
    bio:
      'American experimental physicist who played a crucial leadership role in building the Advanced LIGO detector.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Barry_Barish.png',

    field: 'Experimental Physics',
    nationality: 'American',

    majorDiscoveries: [
      'Advanced LIGO',
      'Gravitational-wave observatory development'
    ],

    spaceFindings: [
      'Helped create instruments sensitive enough to detect spacetime ripples.',
      'Supported the transition from prototype gravitational-wave detection to gravitational-wave astronomy.'
    ],

    methods: [
      'Laser interferometry',
      'Large-scale experimental engineering',
      'Precision instrumentation'
    ],

    discoveryYears: [
      '1990s–2010s'
    ],

    relatedObjects: [
      'Black holes',
      'Neutron stars'
    ],

    relatedMissions: [
      'LIGO',
      'Virgo',
      'KAGRA'
    ],

    evidence: [
      'Advanced LIGO detected gravitational waves from black-hole mergers.'
    ],

    laterConfirmation: [
      'Dozens of compact-object mergers have since been detected.',
      'Gravitational-wave astronomy is now an established observational field.'
    ],

    whyItMatters:
      'Barish helped make direct gravitational-wave observation technically and scientifically possible.',

    legacy:
      'He shared the 2017 Nobel Prize in Physics for decisive contributions to LIGO and gravitational-wave detection.'
  },

  {
    name: 'Saul Perlmutter',
    era: '1959 – present',
    quote:
      'The universe is accelerating.',
    discovery: 'Accelerating Expansion of the Universe',
    contribution:
      'Led a team studying distant Type Ia supernovae and found evidence that cosmic expansion is accelerating rather than slowing under gravity alone.',
    bio:
      'American astrophysicist whose supernova observations revealed the unexpected acceleration of the universe.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Saul_Perlmutter.png',

    field: 'Cosmology',
    nationality: 'American',

    majorDiscoveries: [
      'Accelerating cosmic expansion',
      'Observational evidence for dark energy'
    ],

    spaceFindings: [
      'Distant supernovae appeared dimmer than expected in a decelerating universe.',
      'The observations indicated that cosmic expansion is accelerating.',
      'The discovery implied the existence of a component now called dark energy.'
    ],

    methods: [
      'Type Ia supernova observations',
      'CCD imaging',
      'Cosmological distance measurements'
    ],

    discoveryYears: [
      '1998'
    ],

    relatedObjects: [
      'Type Ia supernovae',
      'Galaxies',
      'Dark energy'
    ],

    relatedMissions: [
      'Hubble Space Telescope',
      'DESI',
      'Euclid'
    ],

    evidence: [
      'Distant Type Ia supernovae were systematically fainter than expected.'
    ],

    laterConfirmation: [
      'Independent supernova teams found the same accelerating expansion.',
      'Cosmic microwave background and large-scale structure observations support dark energy.'
    ],

    whyItMatters:
      'Most of the energy density of the present universe appears to be associated with dark energy, whose physical nature remains unknown.',

    legacy:
      'Perlmutter shared the 2011 Nobel Prize in Physics for the discovery of the accelerating expansion of the universe.'
  },

  {
    name: 'Brian Schmidt',
    era: '1967 – present',
    quote:
      'The universe is not just expanding; its expansion is accelerating.',
    discovery: 'Accelerating Cosmic Expansion',
    contribution:
      'Led the High-Z Supernova Search Team, independently discovering that the expansion of the universe is accelerating.',
    bio:
      'Australian-American astrophysicist whose supernova research independently revealed cosmic acceleration.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Brian_Schmidt.png',

    field: 'Observational Cosmology',
    nationality: 'Australian-American',

    majorDiscoveries: [
      'Accelerating universe',
      'Evidence for dark energy'
    ],

    spaceFindings: [
      'Observed distant Type Ia supernovae.',
      'Found that the universe is expanding faster today than it did in the past.'
    ],

    methods: [
      'Supernova surveys',
      'CCD imaging',
      'Redshift measurements',
      'Cosmological modeling'
    ],

    discoveryYears: [
      '1998'
    ],

    relatedObjects: [
      'Type Ia supernovae',
      'Galaxies',
      'Dark energy'
    ],

    relatedMissions: [
      'Hubble Space Telescope',
      'Euclid',
      'DESI'
    ],

    evidence: [
      'Distant supernova brightness measurements showed unexpected cosmic acceleration.'
    ],

    laterConfirmation: [
      'Independent teams reproduced the result.',
      'Multiple cosmological observations support an accelerating universe.'
    ],

    whyItMatters:
      'The discovery fundamentally changed the standard model of cosmology.',

    legacy:
      'Schmidt shared the 2011 Nobel Prize in Physics for discovering the accelerating expansion of the universe.'
  },

  {
    name: 'Adam Riess',
    era: '1969 – present',
    quote:
      'The universe is expanding faster than we expected.',
    discovery: 'Accelerating Universe',
    contribution:
      'Played a leading role in the discovery that the expansion of the universe is accelerating through observations of distant Type Ia supernovae.',
    bio:
      'American astrophysicist whose precision cosmological measurements have also contributed to the modern Hubble-tension problem.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Adam_Riess.png',

    field: 'Observational Cosmology',
    nationality: 'American',

    majorDiscoveries: [
      'Cosmic acceleration',
      'Precision measurements of the Hubble constant'
    ],

    spaceFindings: [
      'Used Type Ia supernovae as cosmic distance indicators.',
      'Found evidence for accelerating cosmic expansion.',
      'Led later efforts to precisely measure the present-day expansion rate.'
    ],

    methods: [
      'Supernova cosmology',
      'Cepheid calibration',
      'Space-telescope observations'
    ],

    discoveryYears: [
      '1998',
      '2000s–present'
    ],

    relatedObjects: [
      'Type Ia supernovae',
      'Cepheid stars',
      'Galaxies'
    ],

    relatedMissions: [
      'Hubble Space Telescope',
      'James Webb Space Telescope'
    ],

    evidence: [
      'Supernova distances reveal cosmic acceleration.',
      'Cepheid-calibrated distance measurements provide an independent route to the Hubble constant.'
    ],

    laterConfirmation: [
      'Multiple surveys confirm accelerated expansion.',
      'JWST observations are being used to improve the cosmic distance ladder.'
    ],

    whyItMatters:
      'Precision measurements of cosmic expansion help determine the composition and evolution of the universe.',

    legacy:
      'Riess shared the 2011 Nobel Prize in Physics and continues to investigate the expansion rate of the universe.'
  },

  {
    name: 'Katherine Johnson',
    era: '1918 – 2020',
    quote:
      'Everything is physics and math.',
    discovery: 'Orbital Trajectory Calculations',
    contribution:
      'Performed critical mathematical calculations for early American human-spaceflight missions, including orbital trajectories and re-entry calculations.',
    bio:
      'American mathematician whose calculations contributed to the success of several NASA human-spaceflight missions.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Katherine_Johnson.png',

    field: 'Orbital Mechanics & Applied Mathematics',
    nationality: 'American',

    majorDiscoveries: [
      'Spaceflight trajectory calculations',
      'Orbital mechanics applications',
      'Re-entry trajectory calculations'
    ],

    spaceFindings: [
      'Calculated spacecraft trajectories.',
      'Verified orbital calculations for human spaceflight.',
      'Worked on trajectory calculations for lunar missions.'
    ],

    methods: [
      'Analytical mathematics',
      'Orbital mechanics',
      'Trajectory calculations',
      'Computational mathematics'
    ],

    discoveryYears: [
      '1950s–1960s'
    ],

    relatedObjects: [
      'Earth orbit',
      'Moon',
      'Spacecraft'
    ],

    relatedMissions: [
      'Mercury',
      'Apollo 11',
      'Space Shuttle'
    ],

    evidence: [
      'Her calculations were used in mission planning and trajectory verification.'
    ],

    laterConfirmation: [
      'Successful orbital and lunar missions validated the trajectory calculations used by NASA.'
    ],

    whyItMatters:
      'Accurate orbital mathematics is essential for safely navigating spacecraft through space.',

    legacy:
      'Johnson became an important symbol of mathematical excellence and helped open doors for women and African Americans in NASA’s scientific workforce.'
  },

  {
    name: 'Margaret Hamilton',
    era: '1936 – present',
    quote:
      'There was no second chance. We had to get it right.',
    discovery: 'Apollo Flight Software Engineering',
    contribution:
      'Led development of software systems for NASA’s Apollo lunar missions, including software designed to handle unexpected computer workloads during landing.',
    bio:
      'American computer scientist and systems engineer whose work helped establish software engineering as a disciplined field and contributed to Apollo mission reliability.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Margaret_Hamilton.png',

    field: 'Computer Science & Spaceflight',
    nationality: 'American',

    majorDiscoveries: [
      'Apollo guidance software',
      'Priority-based software architecture',
      'Software engineering practices'
    ],

    spaceFindings: [
      'Developed software capable of prioritizing critical spacecraft tasks.',
      'Helped create reliable software for navigation and lunar landing.',
      'Demonstrated how robust software architecture can protect spacecraft during unexpected conditions.'
    ],

    methods: [
      'Software engineering',
      'Real-time computing',
      'Systems engineering',
      'Fault-tolerant design'
    ],

    discoveryYears: [
      '1960s'
    ],

    relatedObjects: [
      'Apollo spacecraft',
      'Moon'
    ],

    relatedMissions: [
      'Apollo 11',
      'Apollo lunar missions'
    ],

    evidence: [
      'Apollo 11 successfully landed on the Moon despite computer overload warnings during descent.'
    ],

    laterConfirmation: [
      'Modern spacecraft continue to use fault-tolerant and priority-based software principles.'
    ],

    whyItMatters:
      'Reliable software is as important as hardware when operating spacecraft where errors can be catastrophic.',

    legacy:
      'Hamilton helped establish modern software engineering and became an iconic figure in the history of space computing.'
  },

  {
    name: 'Nancy Grace Roman',
    era: '1925 – 2018',
    quote:
      'Astronomy is a science that gives us perspective.',
    discovery: 'Foundation of NASA Space Astronomy',
    contribution:
      'Played a major leadership role in establishing NASA’s space astronomy program and was instrumental in developing the Hubble Space Telescope.',
    bio:
      'American astronomer and NASA executive widely known as the “Mother of Hubble” for her leadership in making a major space telescope program possible.',
    image: 'https://space-verse-alpha.vercel.app/scientists-images/Nancy_Grace_Roman.png',

    field: 'Astronomy & Space Science Leadership',
    nationality: 'American',

    majorDiscoveries: [
      'Stellar population studies',
      'Space-based astronomy programs',
      'Hubble Space Telescope development leadership'
    ],

    spaceFindings: [
      'Studied stellar populations and the Milky Way.',
      'Helped establish the scientific case for observing astronomy from space.',
      'Led NASA efforts that eventually produced the Hubble Space Telescope.'
    ],

    methods: [
      'Observational astronomy',
      'Space telescope planning',
      'Astronomical surveys'
    ],

    discoveryYears: [
      '1950s–1970s'
    ],

    relatedObjects: [
      'Stars',
      'Milky Way',
      'Galaxies'
    ],

    relatedMissions: [
      'Hubble Space Telescope',
      'Nancy Grace Roman Space Telescope'
    ],

    evidence: [
      'Space-based telescopes avoid atmospheric distortion and absorb less atmospheric radiation.'
    ],

    laterConfirmation: [
      'Hubble transformed observations of galaxies, stars, exoplanets, and cosmology.',
      'NASA’s Roman Space Telescope carries her name and continues her vision for wide-field space astronomy.'
    ],

    whyItMatters:
      'Space telescopes allow astronomers to observe wavelengths and structures that Earth’s atmosphere can obscure.',

    legacy:
      'The Nancy Grace Roman Space Telescope is named in her honor and will conduct major surveys of dark energy, exoplanets, and the infrared universe.'
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
    image: 'https://space-verse-alpha.vercel.app/images/James_Webb_Space_Telescope.png'
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
    image: 'https://space-verse-alpha.vercel.app/images/Hubble_Space_Telescope.png'
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
    image: 'https://space-verse-alpha.vercel.app/images/Voyager_1_&_2_Probes.png'
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
    image: 'https://space-verse-alpha.vercel.app/images/Gaia_Star_Mapping_Mission.png'
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
    setFavorites((prev: string[]): string[] => 
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
  {/* Mission Image */}
  <div className="w-full aspect-square sm:aspect-video rounded-2xl overflow-hidden mb-4 bg-slate-900/60 border border-white/5">
    <img
      src={mis.image}
      alt={mis.name}
      loading="lazy"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = 'none';
      }}
    />
  </div>
</div>
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

           /* ============================================================
   ENHANCED "ABOUT US" SECTION + FOOTER — drop-in replacement
   ============================================================
   Requires these additional lucide-react icons (add to your
   existing import block at the top of App.tsx):

   import {
     ... your existing icons ...,
     CircleDot, Cloud, ShieldCheck, RefreshCw, Smartphone,
     Infinity as InfinityIcon, GraduationCap, Telescope, Satellite
   } from 'lucide-react';

   Everything below assumes `motion`, `AnimatePresence`, `cardBg`,
   and `isDarkMode` already exist in your App.tsx scope (they do).
   ============================================================ */

/* ---------------------------------------------------------
   1) Small reusable "advanced" building blocks
   Paste these ABOVE your default export component (e.g. right
   after your existing interfaces/consts near the top of the file).
--------------------------------------------------------- */

// Animated number counter — ticks up when it scrolls into view
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const [display, setDisplay] = useState('0');
  const ref = React.useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const numeric = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
    const suffix = value.replace(/[0-9.]/g, '');
    const duration = 1200;
    const startTime = performance.now();

    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      const current = Math.floor(numeric * eased);
      setDisplay(
        numeric % 1 === 0
          ? `${current.toLocaleString()}${suffix}`
          : `${(numeric * eased).toFixed(1)}${suffix}`
      );
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value]);

  return (
    <div
      ref={ref}
      className="relative rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-5 text-center overflow-hidden group hover:border-cyan-400/50 transition-colors duration-300"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent tabular-nums">
        {display}
      </p>
      <p className="text-slate-400 mt-2 text-xs md:text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
}

// Stagger container/item variants for scroll-triggered grids
const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};
const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/* ---------------------------------------------------------
   2) The section itself — replace your existing
   `{currentTab === 'about' && (...)}` block with this.
--------------------------------------------------------- */

{currentTab === 'about' && (
  <motion.div
    key="about"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    className="space-y-12"
  >
    {/* ---------- HERO ---------- */}
    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900/40 to-indigo-500/10 p-8 md:p-12">
      {/* ambient glow orbs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative flex items-center gap-3 mb-4">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
        </span>
        <span className="text-cyan-300 text-xs font-mono uppercase tracking-[0.3em]">
          Interactive Astronomy • 3D Universe Simulator
        </span>
      </div>

      <h2 className="relative text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
        About SpaceVerse
      </h2>

      <p className="relative text-slate-300 leading-8 max-w-3xl mt-6 text-base md:text-lg">
        <strong className="text-cyan-300 font-semibold">SpaceVerse</strong> is a
        next-generation interactive astronomy encyclopedia and 3D universe
        simulator built for students, educators, researchers, and space
        enthusiasts — turning the Solar System, black holes, exoplanets, and
        deep-sky objects into something you can explore, not just read about.
      </p>

      <div className="relative flex flex-wrap gap-3 mt-8">
        {['NASA-verified data', 'Real-time 3D physics', '100% free forever'].map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium text-cyan-200 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* ---------- ANIMATED STATS ---------- */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <AnimatedStat value="20+" label="Interactive Simulations" />
      <AnimatedStat value="5656+" label="Confirmed Exoplanets" />
      <AnimatedStat value="8+" label="Scientific Categories" />
      <AnimatedStat value="100%" label="Educational Content" />
    </div>

    {/* ---------- WHAT YOU'LL DISCOVER ---------- */}
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
          <Compass className="w-5 h-5 text-cyan-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">What You'll Discover</h3>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-3"
      >
        {[
          { icon: Sun, label: 'Solar System' },
          { icon: Sparkles, label: 'Milky Way Galaxy' },
          { icon: Star, label: 'Stars' },
          { icon: Globe, label: 'Exoplanets' },
          { icon: Orbit, label: 'Black Holes' },
          { icon: Zap, label: 'Comets' },
          { icon: Layers, label: 'Nebulae' },
          { icon: Rocket, label: 'Space Missions' },
          { icon: BookOpen, label: 'Astronomy Articles' },
        ].map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={staggerItem}
            className={`flex items-center gap-3 p-4 rounded-xl border ${cardBg} hover:border-cyan-400/50 hover:-translate-y-0.5 transition-all duration-300 cursor-default`}
          >
            <Icon className="w-4 h-4 text-cyan-400 flex-shrink-0" strokeWidth={1.75} />
            <span className="text-slate-300 text-sm font-medium">{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* ---------- MISSION & VISION ---------- */}
    <div className="grid md:grid-cols-2 gap-5">
      <div className="relative rounded-2xl border border-cyan-500/20 bg-slate-900/40 p-7 overflow-hidden group hover:border-cyan-400/40 transition-colors duration-300">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
        <div className="relative flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
            <Rocket className="w-5 h-5 text-cyan-400" />
          </div>
          <h3 className="text-xl font-bold text-white">Our Mission</h3>
        </div>
        <p className="relative text-slate-300 leading-7 text-sm">
          Make astronomy accessible to everyone through immersive 3D
          technology, scientifically accurate information, and engaging
          educational experiences that are inspiring, interactive, and free.
        </p>
      </div>

      <div className="relative rounded-2xl border border-indigo-500/20 bg-slate-900/40 p-7 overflow-hidden group hover:border-indigo-400/40 transition-colors duration-300">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500" />
        <div className="relative flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30">
            <Sparkles className="w-5 h-5 text-indigo-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Our Vision</h3>
        </div>
        <p className="relative text-slate-300 leading-7 text-sm">
          To become one of the world's largest interactive astronomy
          platforms — bringing immersive visualization, verified science,
          and education to learners worldwide.
        </p>
      </div>
    </div>

    {/* ---------- WHY CHOOSE SPACEVERSE ---------- */}
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/40 p-7 md:p-9">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Why Choose SpaceVerse?</h3>
      <p className="text-slate-400 mb-8 max-w-2xl text-sm">
        Unlike traditional astronomy sites, SpaceVerse combines interactive 3D
        simulation, verified scientific information, and clean design into one
        modern learning platform.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {[
          { icon: Layers, title: 'True 3D Simulation', desc: 'Explore orbits, scale, and structure in real time.' },
          { icon: Check, title: 'Verified Science', desc: 'Every figure checked against NASA, ESA, and IAU data.' },
          { icon: Activity, title: 'Always Current', desc: 'Exoplanet counts update as new discoveries confirm.' },
          { icon: Cpu, title: 'Works Anywhere', desc: 'Smooth on desktop, tablet, and phone alike.' },
          { icon: Heart, title: 'Free, Always', desc: 'No paywall on any simulation, article, or dataset.' },
          { icon: Users, title: 'Built for Learning', desc: 'For classrooms and self-study, first orbit to final year.' },
        ].map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={staggerItem}
            className="p-5 rounded-xl bg-slate-950/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
          >
            <Icon className="w-5 h-5 text-cyan-400 mb-3" strokeWidth={1.75} />
            <p className="text-white font-semibold text-sm mb-1.5">{title}</p>
            <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* ---------- DID YOU KNOW ---------- */}
    <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/40 p-7 md:p-9">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
          <AlertCircle className="w-5 h-5 text-indigo-300" />
        </div>
        <h3 className="text-2xl font-bold text-white">Did You Know?</h3>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid sm:grid-cols-2 gap-3"
      >
        {[
          'The Milky Way contains over 100 billion stars.',
          'More than 5,656 exoplanets have been confirmed.',
          'The observable universe spans about 93 billion light-years.',
          'Sagittarius A* is the supermassive black hole at our galaxy\u2019s center.',
        ].map((fact) => (
          <motion.div
            key={fact}
            variants={staggerItem}
            className="flex items-start gap-3 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/15 hover:border-indigo-400/40 transition-colors duration-300"
          >
            <Star className="w-4 h-4 text-indigo-300 mt-0.5 flex-shrink-0" strokeWidth={1.75} />
            <span className="text-slate-300 text-sm leading-relaxed">{fact}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* ---------- TRUSTED SOURCES ---------- */}
    <div className={`p-7 md:p-9 rounded-2xl border ${cardBg}`}>
      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
        Trusted Sources
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-6">
        Scientific Sources We Trust
      </h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { icon: Rocket, name: 'NASA', desc: 'Space missions, astronomy and planetary science' },
          { icon: Globe, name: 'ESA', desc: 'European Space Agency research' },
          { icon: Eye, name: 'Hubble Space Telescope', desc: 'Deep-field imaging and observation' },
          { icon: Sparkles, name: 'James Webb Space Telescope', desc: 'Infrared imaging of the early universe' },
          { icon: Orbit, name: 'International Astronomical Union', desc: 'Official naming and classification' },
        ].map(({ icon: Icon, name, desc }) => (
          <div
            key={name}
            className="flex items-start gap-3 rounded-xl bg-slate-900/40 p-4 border border-cyan-500/20 hover:border-cyan-400/40 transition-colors duration-300"
          >
            <Icon className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" strokeWidth={1.75} />
            <div>
              <p className="text-slate-200 font-medium text-sm">{name}</p>
              <p className="text-slate-500 text-xs mt-1">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
)}

/* ---------------------------------------------------------
   3) Enhanced footer — replace your existing <footer> with this
--------------------------------------------------------- */

<footer className={`relative border-t ${isDarkMode ? 'border-white/5 bg-[#010207]' : 'border-slate-200 bg-slate-50'} py-10 text-center text-slate-500 text-xs transition-colors duration-300 overflow-hidden`}>
  {/* faint top glow line */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

  <div className="max-w-7xl mx-auto px-6 flex flex-col gap-5">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-sans font-normal">
        &copy; {new Date().getFullYear()} SpaceVerse Encyclopedia &bull; Professional Astrophysical Simulators.
      </p>

      <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest flex items-center gap-1.5">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500" />
        </span>
        <span>POWERED BY THREE.JS COGNITIVE GRAPHICS</span>
      </p>
    </div>

    <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-[11px] uppercase tracking-widest">
      {[
        { label: 'Privacy Policy', href: '/privacy-policy.html' },
        { label: 'Terms', href: '/terms.html' },
        { label: 'Contact', href: '/contact.html' },
        { label: 'Disclaimer', href: '/disclaimer.html' },
      ].map((link, i) => (
        <React.Fragment key={link.label}>
          <a
            href={link.href}
            className="relative px-3 py-1 text-slate-500 hover:text-cyan-300 transition-colors duration-300 after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
          >
            {link.label}
          </a>
          {i < 3 && <span className="text-slate-700">•</span>}
        </React.Fragment>
      ))}
    </div>
  </div>
</footer>