import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Sparkles, Eye, ZoomIn, Aperture, Calendar, Layers, 
  MapPin, Radio, Compass, ArrowDown, HelpCircle, RefreshCw
} from 'lucide-react';

// Import high-resolution celestial images
import galaxyImg from '../assets/images/galaxy_gallery_1783173573878.jpg';
import starImg from '../assets/images/star_gallery_1783173587110.jpg';
import blackHoleImg from '../assets/images/black_hole_gallery_1783173601168.jpg';
import asteroidImg from '../assets/images/asteroid_gallery_1783173615121.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: 'galaxy' | 'star' | 'black-hole' | 'asteroid' | 'planet';
  categoryLabel: string;
  image: string;
  telescope: string;
  instrument: string;
  exposureTime: string;
  spectralBand: string;
  distance: string;
  observationalDate: string;
  description: string;
  scientificInsight: string;
  resolution: string;
  simulatedSpectrum: { wavelength: string; intensity: number }[];
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-spiral',
    title: 'Spiral Galaxy (NGC 4414)',
    category: 'galaxy',
    categoryLabel: 'Spiral Galaxy',
    image: galaxyImg,
    telescope: 'Hubble Space Telescope',
    instrument: 'WFC3 / Infrared Channel',
    exposureTime: '24.5 Hours Combined',
    spectralBand: 'Optical & Near-Infrared',
    distance: '62 Million Light-Years',
    observationalDate: 'May 14, 2026',
    resolution: '4096 x 2304 (9.4 MP)',
    description: 'An exceptional high-resolution deep space scan mapping the intricate, glowing stellar nurseries along the outer dust lanes of NGC 4414.',
    scientificInsight: 'The violet and cyan hues represent pockets of intense star formation (H II regions) ignited by pressure waves propagating through the galactic disk. These observations allow astrophysicists to trace the spiral wave patterns of dark matter.',
    simulatedSpectrum: [
      { wavelength: '380nm', intensity: 35 },
      { wavelength: '450nm', intensity: 78 },
      { wavelength: '550nm', intensity: 62 },
      { wavelength: '650nm', intensity: 90 },
      { wavelength: '750nm', intensity: 85 },
    ]
  },
  {
    id: 'gal-star',
    title: 'Blue Hypergiant (Rigel Prime)',
    category: 'star',
    categoryLabel: 'Stellar Body',
    image: starImg,
    telescope: 'James Webb Space Telescope',
    instrument: 'NIRCam / F444W Filter',
    exposureTime: '8.2 Hours Exposure',
    spectralBand: 'Near-Infrared (3.6 - 4.8 µm)',
    distance: '860 Light-Years',
    observationalDate: 'February 28, 2026',
    resolution: '4096 x 2304 (9.4 MP)',
    description: 'A close-up visualization capturing the violent, twisting coronal loops and magnetic fields glowing across the superheated plasma envelope of Rigel.',
    scientificInsight: 'Blue hypergiants undergo catastrophic mass-loss driven by immense radiation pressure. These extreme coronal loops carry ionized stellar wind directly into the interstellar medium, seeding future solar systems with heavy elements.',
    simulatedSpectrum: [
      { wavelength: '380nm', intensity: 95 },
      { wavelength: '450nm', intensity: 90 },
      { wavelength: '550nm', intensity: 50 },
      { wavelength: '650nm', intensity: 30 },
      { wavelength: '750nm', intensity: 15 },
    ]
  },
  {
    id: 'gal-bh',
    title: 'Event Horizon of TON 618',
    category: 'black-hole',
    categoryLabel: 'Singularity',
    image: blackHoleImg,
    telescope: 'Event Horizon Telescope Array',
    instrument: 'Submillimeter VLBI Correlator',
    exposureTime: '72 Hours Continuous VLBI',
    spectralBand: 'Millimeter Radio (230 GHz)',
    distance: '10.4 Billion Light-Years',
    observationalDate: 'November 12, 2025',
    resolution: '4096 x 2304 (9.4 MP)',
    description: 'A scientifically aligned rendering of the supermassive black hole TON 618, featuring extreme gravitational lensing and relativistic Doppler beaming.',
    scientificInsight: 'The asymmetry in the glowing accretion disk is caused by relativistic beaming; the side rotating towards us appears significantly brighter. Gravitational lensing warps the background light into a perfect Einstein Ring surrounding the singularity shadow.',
    simulatedSpectrum: [
      { wavelength: 'Radio', intensity: 98 },
      { wavelength: 'Infrared', intensity: 85 },
      { wavelength: 'X-Ray', intensity: 95 },
      { wavelength: 'Gamma', intensity: 75 },
    ]
  },
  {
    id: 'gal-asteroid',
    title: 'Metallic Asteroid (16 Psyche)',
    category: 'asteroid',
    categoryLabel: 'Asteroid Belt',
    image: asteroidImg,
    telescope: 'Psyche Orbiter Multispectral',
    instrument: 'Gamma-Ray & Neutron Spectrometer',
    exposureTime: 'Orbital Scan (120 min)',
    spectralBand: 'Multispectral UV-Vis',
    distance: '370 Million Kilometers',
    observationalDate: 'April 02, 2026',
    resolution: '4096 x 2304 (9.4 MP)',
    description: 'High-definition close-range geological telemetry of the metallic asteroid 16 Psyche, highlighting exposed nickel-iron structures.',
    scientificInsight: 'Unlike rocky asteroids, 16 Psyche is believed to be the exposed metallic core of a proto-planet that lost its rocky mantle in early solar collisions. Measuring crater depths reveals invaluable data regarding the planetary core formation process.',
    simulatedSpectrum: [
      { wavelength: '350nm', intensity: 20 },
      { wavelength: '480nm', intensity: 45 },
      { wavelength: '600nm', intensity: 70 },
      { wavelength: '800nm', intensity: 75 },
      { wavelength: '1000nm', intensity: 80 },
    ]
  },
  {
    id: 'planet-mercury',
    title: 'Planet Mercury (Marineris Mapping)',
    category: 'planet',
    categoryLabel: 'Terrestrial Planet',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
    telescope: 'MESSENGER Probe',
    instrument: 'MDIS Multispectral Camera',
    exposureTime: 'Orbital Scan',
    spectralBand: 'Optical & Near-UV',
    distance: '91.7 Million Kilometers',
    observationalDate: 'January 15, 2026',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'A high-contrast monochrome surface mapping of Mercury, revealing extensive impact craters and volcanic basaltic plains frozen in deep shade.',
    scientificInsight: 'The extreme temperature delta on Mercury (-173°C to 427°C) creates thermal stress fracturing on the regolith. MESSENGER spectral mapping detected high sulfur concentrations, suggesting volatile-rich ancient lava flows.',
    simulatedSpectrum: [
      { wavelength: '350nm', intensity: 15 },
      { wavelength: '450nm', intensity: 30 },
      { wavelength: '550nm', intensity: 40 },
      { wavelength: '650nm', intensity: 55 },
      { wavelength: '750nm', intensity: 60 },
    ]
  },
  {
    id: 'planet-venus',
    title: 'Atmospheric Shell of Venus',
    category: 'planet',
    categoryLabel: 'Terrestrial Planet',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&w=1200&q=80',
    telescope: 'Akatsuki Venus Orbiter',
    instrument: 'IR2 Infrared Camera',
    exposureTime: '12 Hours Combined',
    spectralBand: 'Infrared (2.26 µm)',
    distance: '41.4 Million Kilometers',
    observationalDate: 'March 11, 2026',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'Thermal imaging of Venus\'s superheated cloud deck, highlighting rapid convective wind patterns reflecting thermal heat from the surface.',
    scientificInsight: 'Venus experiences a runaway greenhouse effect. Its atmosphere is 96.5% carbon dioxide, producing surface pressures equivalent to 90 Earth atmospheres. The high wind speeds (up to 360 km/h) super-rotate the entire cloud deck every 4 days.',
    simulatedSpectrum: [
      { wavelength: '1.2µm', intensity: 90 },
      { wavelength: '1.7µm', intensity: 82 },
      { wavelength: '2.3µm', intensity: 95 },
      { wavelength: '3.1µm', intensity: 40 },
      { wavelength: '4.0µm', intensity: 10 },
    ]
  },
  {
    id: 'planet-earth',
    title: 'Earth: The Blue Marble',
    category: 'planet',
    categoryLabel: 'Habitable World',
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1200&q=80',
    telescope: 'DSCOVR Satellite',
    instrument: 'EPIC Telescope Camera',
    exposureTime: 'Instantaneous Sweep',
    spectralBand: 'Visible Spectrum RGB',
    distance: '1.5 Million Kilometers (L1)',
    observationalDate: 'June 21, 2026',
    resolution: '4000 x 4000 (16 MP)',
    description: 'A stunning geostationary profile of Earth, featuring dynamic tropical storm cells, deep oceanic basins, and the protective atmospheric haze.',
    scientificInsight: 'Earth is the only known planetary body with active plate tectonics and abundant liquid water. The nitrogen-oxygen atmosphere works in synergy with the planetary magnetic field to block harmful cosmic ray particles.',
    simulatedSpectrum: [
      { wavelength: '380nm (UV)', intensity: 12 },
      { wavelength: '450nm (Blue)', intensity: 85 },
      { wavelength: '550nm (Green)', intensity: 45 },
      { wavelength: '650nm (Red)', intensity: 30 },
      { wavelength: '750nm (NIR)', intensity: 50 },
    ]
  },
  {
    id: 'planet-mars',
    title: 'Mars: High Resolution Mosaic',
    category: 'planet',
    categoryLabel: 'Terrestrial Planet',
    image: 'https://images.unsplash.com/photo-1614726365955-467f3747cb98?auto=format&fit=crop&w=1200&q=80',
    telescope: 'Mars Reconnaissance Orbiter',
    instrument: 'HiRISE Imaging Sensor',
    exposureTime: 'Stitched Surface Scan',
    spectralBand: 'Visible & Near-IR',
    distance: '225 Million Kilometers',
    observationalDate: 'April 09, 2026',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'A global high-resolution mosaic of Mars, highlighting the rust-red iron-oxide dust dunes, ancient crater walls, and polar ice remnants.',
    scientificInsight: 'Mars\'s reddish color is caused by iron-oxide dust covering the surface. Spectral analyses indicate that Mars once hosted massive liquid water networks. Understanding how its atmosphere stripped away is a key goal of modern astrobiology.',
    simulatedSpectrum: [
      { wavelength: '380nm', intensity: 10 },
      { wavelength: '450nm', intensity: 20 },
      { wavelength: '550nm', intensity: 45 },
      { wavelength: '650nm', intensity: 88 },
      { wavelength: '750nm', intensity: 92 },
    ]
  },
  {
    id: 'planet-jupiter',
    title: 'Turbulent Banding of Jupiter',
    category: 'planet',
    categoryLabel: 'Gas Giant',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=1200&q=80',
    telescope: 'Juno Spacecraft',
    instrument: 'JunoCam Imager',
    exposureTime: 'Perijove Flyby Sequence',
    spectralBand: 'Optical RGB Filter',
    distance: '778 Million Kilometers',
    observationalDate: 'May 02, 2026',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'A breathtaking close-range pass capturing the chaotic ammonia-water cloud bands and majestic swirling cyclones of Jupiter.',
    scientificInsight: 'Jupiter\'s high-velocity belt system is driven by deep convective heat from the planet\'s interior. The Great Red Spot is a persistent anticyclonic storm wider than Earth, fueled by shear winds inside the southern hemisphere.',
    simulatedSpectrum: [
      { wavelength: '400nm', intensity: 30 },
      { wavelength: '480nm', intensity: 48 },
      { wavelength: '560nm', intensity: 72 },
      { wavelength: '640nm', intensity: 85 },
      { wavelength: '720nm', intensity: 75 },
    ]
  },
  {
    id: 'planet-saturn',
    title: 'Saturn: Backlit Ring Structure',
    category: 'planet',
    categoryLabel: 'Gas Giant',
    image: 'https://images.unsplash.com/photo-1614314169000-4cf229a1db33?auto=format&fit=crop&w=1200&q=80',
    telescope: 'Cassini Orbiter Archive',
    instrument: 'Narrow Angle Camera (NAC)',
    exposureTime: 'Mosaic Integration',
    spectralBand: 'Visible Spectrum Range',
    distance: '1.4 Billion Kilometers',
    observationalDate: 'October 15, 2025',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'A spectacular backlit exposure of Saturn\'s rings, casting delicate, geometric shadows across the golden-hued gas giant.',
    scientificInsight: 'Saturn\'s rings are 99% pure water ice, with sizes ranging from tiny dust grains to mountain-sized boulders. This backlit view highlights the dusty F-ring and Cassini Division, revealing fine gravitational resonance structures.',
    simulatedSpectrum: [
      { wavelength: '380nm', intensity: 20 },
      { wavelength: '450nm', intensity: 40 },
      { wavelength: '550nm', intensity: 68 },
      { wavelength: '650nm', intensity: 72 },
      { wavelength: '750nm', intensity: 65 },
    ]
  },
  {
    id: 'planet-uranus',
    title: 'Pale Blue Haze of Uranus',
    category: 'planet',
    categoryLabel: 'Ice Giant',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    telescope: 'Keck II Observatory',
    instrument: 'NIRC2 Adaptive Optics',
    exposureTime: '4.5 Hours Exposure',
    spectralBand: 'Near-Infrared H-Band',
    distance: '2.87 Billion Kilometers',
    observationalDate: 'April 22, 2026',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'A pristine profile of Uranus showing its uniform, pastel cyan-blue methane cloud deck and subtle ring system.',
    scientificInsight: 'Uranus is unique for its extreme 97.7-degree axial tilt, likely caused by a massive protoplanetary collision. This severe tilt causes radical, decades-long seasonal shifts where one pole receives direct sunlight for 42 Earth years.',
    simulatedSpectrum: [
      { wavelength: '380nm', intensity: 10 },
      { wavelength: '450nm', intensity: 70 },
      { wavelength: '550nm', intensity: 65 },
      { wavelength: '650nm', intensity: 15 },
      { wavelength: '750nm', intensity: 5 },
    ]
  },
  {
    id: 'planet-neptune',
    title: 'Storm Swept Neptune',
    category: 'planet',
    categoryLabel: 'Ice Giant',
    image: 'https://images.unsplash.com/photo-1504333631130-c8139a7592fb?auto=format&fit=crop&w=1200&q=80',
    telescope: 'Hubble Space Telescope',
    instrument: 'WFC3 / Visible Channel',
    exposureTime: '6.0 Hours Combined',
    spectralBand: 'Optical Spectral Band',
    distance: '4.5 Billion Kilometers',
    observationalDate: 'May 18, 2026',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'An exceptional deep-field scan mapping the active, supersonic white cirrus storms circling Neptunes cobalt-blue methane ocean.',
    scientificInsight: 'Neptune possesses the most violent winds in the solar system, reaching speeds up to 2,100 km/h. Its striking blue hue results from atmospheric methane absorbing red light while reflecting blue light back into space.',
    simulatedSpectrum: [
      { wavelength: '380nm', intensity: 15 },
      { wavelength: '450nm', intensity: 90 },
      { wavelength: '550nm', intensity: 50 },
      { wavelength: '650nm', intensity: 10 },
      { wavelength: '750nm', intensity: 2 },
    ]
  },
  {
    id: 'planet-kepler',
    title: 'Exoplanet Kepler-186f',
    category: 'planet',
    categoryLabel: 'Exoplanet',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
    telescope: 'Kepler Space Telescope',
    instrument: 'Photometer Cluster array',
    exposureTime: 'Transit Survey Combined',
    spectralBand: 'Optical Photometry',
    distance: '582 Light-Years',
    observationalDate: 'December 04, 2025',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'An artist\'s simulation showing the potential atmospheric structures of Kepler-186f, the first Earth-sized planet discovered in a distant star\'s habitable zone.',
    scientificInsight: 'Kepler-186f orbits an M-dwarf star every 130 days. It receives about 32% of the solar energy that Earth gets, placing it on the outer edge of its habitable zone. Liquid water could potentially exist on its rocky crust.',
    simulatedSpectrum: [
      { wavelength: 'Visible', intensity: 60 },
      { wavelength: 'H-Alpha', intensity: 75 },
      { wavelength: 'Water Vapor', intensity: 30 },
      { wavelength: 'CO2 Band', intensity: 45 },
    ]
  },
  {
    id: 'planet-proximab',
    title: 'Proxima Centauri b Telemetry',
    category: 'planet',
    categoryLabel: 'Exoplanet',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    telescope: 'VLT ESPRESSO Spectrograph',
    instrument: 'Radial Velocity Sensor',
    exposureTime: '140 Hours Integrated',
    spectralBand: 'High-Precision Spectroscopy',
    distance: '4.24 Light-Years',
    observationalDate: 'June 01, 2026',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'A scientifically aligned visualization of the rocky planet Proxima b, located in the habitable zone of our closest stellar neighbor.',
    scientificInsight: 'Proxima b is a rocky planet with a mass roughly 1.17 times that of Earth. It orbits very close to its host red dwarf star, meaning it is tidally locked with one side permanently baking in stellar wind and the other in perpetual dark freeze.',
    simulatedSpectrum: [
      { wavelength: '400nm', intensity: 15 },
      { wavelength: '600nm', intensity: 55 },
      { wavelength: '800nm', intensity: 85 },
      { wavelength: '1000nm', intensity: 90 },
      { wavelength: '1200nm', intensity: 75 },
    ]
  },
  {
    id: 'planet-titan',
    title: 'Titan: Methane Sea Profile',
    category: 'planet',
    categoryLabel: 'Saturnian Moon',
    image: 'https://images.unsplash.com/photo-1528722485519-aa535c4d4fe4?auto=format&fit=crop&w=1200&q=80',
    telescope: 'James Webb Space Telescope',
    instrument: 'MIRI / Medium Resolution',
    exposureTime: '5.4 Hours Integrated',
    spectralBand: 'Mid-Infrared (5.0 - 12.0 µm)',
    distance: '1.4 Billion Kilometers',
    observationalDate: 'March 05, 2026',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'An atmospheric penetration profile of Titan, exposing the thick orange nitrogen haze shielding liquid methane lakes.',
    scientificInsight: 'Titan is the only planetary moon known to have a dense atmosphere and stable surface liquid bodies. Methane and ethane play the role of water on Titan, cycling through evaporation, cloud condensation, and torrential rainstorms.',
    simulatedSpectrum: [
      { wavelength: 'Methane', intensity: 95 },
      { wavelength: 'Nitrogen', intensity: 70 },
      { wavelength: 'Ethane', intensity: 40 },
      { wavelength: 'Water Ice', intensity: 10 },
    ]
  },
  {
    id: 'planet-europa',
    title: 'Europa: Frozen Ice Fractures',
    category: 'planet',
    categoryLabel: 'Jovian Moon',
    image: 'https://images.unsplash.com/photo-1570535111037-04669566a33f?auto=format&fit=crop&w=1200&q=80',
    telescope: 'Galileo Mission Archive',
    instrument: 'Solid State Imaging (SSI)',
    exposureTime: 'Close-Up Capture',
    spectralBand: 'Visible & Near-UV',
    distance: '628 Million Kilometers',
    observationalDate: 'November 22, 2025',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'High-contrast geologic scan mapping the reddish fracture lines (lineae) crisscrossing Europas global water-ice crust.',
    scientificInsight: 'Underneath Europas global ice sheet lies a saltwater ocean containing more liquid water than all of Earths oceans combined. The fractures are created by tidal shearing forces generated by Jupiter\'s immense gravitational pull.',
    simulatedSpectrum: [
      { wavelength: '380nm', intensity: 15 },
      { wavelength: '480nm', intensity: 35 },
      { wavelength: '580nm', intensity: 60 },
      { wavelength: '680nm', intensity: 65 },
      { wavelength: '780nm', intensity: 70 },
    ]
  },
  {
    id: 'gal-andromeda',
    title: 'Andromeda Galaxy (M31)',
    category: 'galaxy',
    categoryLabel: 'Spiral Galaxy',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80',
    telescope: 'Subaru Telescope',
    instrument: 'Hyper Suprime-Cam (HSC)',
    exposureTime: '40 Hours Over 5 Nights',
    spectralBand: 'Visible Broad-Band',
    distance: '2.53 Million Light-Years',
    observationalDate: 'October 11, 2025',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'An incredibly detailed wide-field mosaic of our neighboring Andromeda Galaxy, capturing its bright active nucleus and millions of individual stars.',
    scientificInsight: 'M31 is the largest galaxy in our Local Group. It is currently hurtling toward the Milky Way at 110 kilometers per second; the two stellar systems are expected to merge in roughly 4.5 billion years to form a giant elliptical galaxy.',
    simulatedSpectrum: [
      { wavelength: '380nm', intensity: 40 },
      { wavelength: '450nm', intensity: 65 },
      { wavelength: '550nm', intensity: 70 },
      { wavelength: '650nm', intensity: 80 },
      { wavelength: '750nm', intensity: 75 },
    ]
  },
  {
    id: 'gal-sombrero',
    title: 'Sombrero Galaxy (M104)',
    category: 'galaxy',
    categoryLabel: 'Spiral Galaxy',
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1200&q=80',
    telescope: 'Hubble Space Telescope',
    instrument: 'ACS / Wide Field Channel',
    exposureTime: '12.4 Hours Combined',
    spectralBand: 'Optical & Near-IR',
    distance: '28 Million Light-Years',
    observationalDate: 'February 19, 2026',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'Ultra-clear survey mapping of M104, highlighting its massive central bulge and the sharp, dense dust ring crossing its equatorial plane.',
    scientificInsight: 'The Sombrero Galaxy is famous for its massive central black hole (1 billion solar masses) and an extraordinarily rich system of globular clusters. Its outer ring is the primary stellar nursery where interstellar gas constantly collapses.',
    simulatedSpectrum: [
      { wavelength: '380nm', intensity: 25 },
      { wavelength: '450nm', intensity: 55 },
      { wavelength: '550nm', intensity: 80 },
      { wavelength: '650nm', intensity: 85 },
      { wavelength: '750nm', intensity: 90 },
    ]
  },
  {
    id: 'gal-whirlpool',
    title: 'The Whirlpool Galaxy (M51)',
    category: 'galaxy',
    categoryLabel: 'Grand-Design Spiral',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1200&q=80',
    telescope: 'Hubble Space Telescope',
    instrument: 'WFC3 / Planetary Camera',
    exposureTime: '18.5 Hours Combined',
    spectralBand: 'Visible & Near-IR',
    distance: '23 Million Light-Years',
    observationalDate: 'May 05, 2026',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'A classic face-on grand design spiral galaxy, showing pristine winding dust arms interacting with the companion dwarf galaxy NGC 5195.',
    scientificInsight: 'M51s prominent spiral arms are density waves compressing interstellar hydrogen gas to trigger new star formation. The gravitational pull of its companion galaxy NGC 5195 is the main driver behind this hyperactive starburst phase.',
    simulatedSpectrum: [
      { wavelength: '380nm', intensity: 30 },
      { wavelength: '450nm', intensity: 75 },
      { wavelength: '550nm', intensity: 60 },
      { wavelength: '650nm', intensity: 88 },
      { wavelength: '750nm', intensity: 80 },
    ]
  },
  {
    id: 'gal-magellanic',
    title: 'Large Magellanic Cloud Peak',
    category: 'galaxy',
    categoryLabel: 'Dwarf Irregular',
    image: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=1200&q=80',
    telescope: 'VLT / Paranal Observatory',
    instrument: 'MUSE Integral Field Spectrograph',
    exposureTime: '10.2 Hours Exposure',
    spectralBand: 'Optical Spectral Band',
    distance: '163,000 Light-Years',
    observationalDate: 'January 28, 2026',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'Deep sky integration mapping the chaotic stellar clusters and superheated hydrogen filaments of the Large Magellanic Cloud.',
    scientificInsight: 'The LMC is a satellite dwarf galaxy gravitationally bound to the Milky Way. Its proximity allows astronomers to inspect active star clusters and supernovae (like SN 1987A) with extreme spatial resolution, refining cosmic expansion values.',
    simulatedSpectrum: [
      { wavelength: '380nm', intensity: 50 },
      { wavelength: '450nm', intensity: 80 },
      { wavelength: '550nm', intensity: 55 },
      { wavelength: '650nm', intensity: 95 },
      { wavelength: '750nm', intensity: 85 },
    ]
  },
  {
    id: 'neb-orion',
    title: 'Orion Nebula Filaments',
    category: 'star',
    categoryLabel: 'Stellar Nursery',
    image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=1200&q=80',
    telescope: 'James Webb Space Telescope',
    instrument: 'NIRCam / F212N Filter',
    exposureTime: '7.4 Hours Integration',
    spectralBand: 'Near-Infrared / Molecular Hydrogen',
    distance: '1,344 Light-Years',
    observationalDate: 'December 18, 2025',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'Highly detailed near-infrared visualization tracking superheated molecular hydrogen structures colliding with cosmic dust lanes inside M42.',
    scientificInsight: 'The Orion Nebula is the closest massive star-forming region to Earth. The intense stellar winds from the central Trapezium Cluster compress the gas wall, driving the collapse of raw interstellar matter into young protostars.',
    simulatedSpectrum: [
      { wavelength: 'H-Alpha', intensity: 98 },
      { wavelength: 'Oxygen III', intensity: 85 },
      { wavelength: 'Sulfur II', intensity: 70 },
      { wavelength: 'Helium I', intensity: 30 },
    ]
  },
  {
    id: 'neb-pillars',
    title: 'Pillars of Creation Scan',
    category: 'star',
    categoryLabel: 'Stellar Nursery',
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=1200&q=80',
    telescope: 'James Webb Space Telescope',
    instrument: 'MIRI / Mid-Infrared Instrument',
    exposureTime: '14.8 Hours Combined',
    spectralBand: 'Mid-Infrared (7.7 - 15 µm)',
    distance: '6,500 Light-Years',
    observationalDate: 'November 05, 2025',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'A stellar mid-infrared sweep penetrating the thick, colossal dust pillars in the Eagle Nebula to expose hidden, glowing protostars.',
    scientificInsight: 'Mid-infrared light bypasses dense interstellar dust grains, allowing astronomers to see newly formed stars directly inside the dense columns of gas. The pillars are slowly being eroded by intense ultraviolet light from nearby massive hot stars.',
    simulatedSpectrum: [
      { wavelength: '5.6µm', intensity: 65 },
      { wavelength: '7.7µm', intensity: 92 },
      { wavelength: '11.3µm', intensity: 85 },
      { wavelength: '15.0µm', intensity: 40 },
    ]
  },
  {
    id: 'neb-helix',
    title: 'The Helix Nebula Eye',
    category: 'star',
    categoryLabel: 'Planetary Nebula',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    telescope: 'VISTA Infrared Telescope',
    instrument: 'VIRCAM Deep Array',
    exposureTime: '9.0 Hours Integrated',
    spectralBand: 'Infrared Z, Y, J, Ks Filters',
    distance: '650 Light-Years',
    observationalDate: 'February 12, 2026',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'A striking planetary nebula capturing the final red giant stage of a Sun-like star ejecting its superheated atmospheric envelopes into space.',
    scientificInsight: 'The central white dwarf star radiates intense UV light, ionizing the ejected gas shells and causing them to glow. The outer radial dust structures are formed by fast stellar winds colliding with ancient slow-moving dust clouds.',
    simulatedSpectrum: [
      { wavelength: '380nm', intensity: 15 },
      { wavelength: '450nm', intensity: 50 },
      { wavelength: '550nm', intensity: 72 },
      { wavelength: '650nm', intensity: 88 },
      { wavelength: '750nm', intensity: 60 },
    ]
  },
  {
    id: 'star-betelgeuse',
    title: 'Betelgeuse: Red Supergiant',
    category: 'star',
    categoryLabel: 'Stellar Body',
    image: 'https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&w=1200&q=80',
    telescope: 'ALMA Radio Array',
    instrument: 'Band 7 High-Res Receiver',
    exposureTime: '22 Hours Combined interferometry',
    spectralBand: 'Submillimeter Radio (345 GHz)',
    distance: '640 Light-Years',
    observationalDate: 'January 29, 2026',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'Submillimeter radio profiling of the red supergiant Betelgeuse, mapping its colossal, asymmetric gas convection shells.',
    scientificInsight: 'Betelgeuse is a hyper-giant star nearing the end of its life. Its convection cells are larger than Earths orbit, creating rapid brightness dips as dust blocks the stellar surface. It is expected to explode as a Type II Supernova within the next 100,000 years.',
    simulatedSpectrum: [
      { wavelength: 'Radio', intensity: 95 },
      { wavelength: 'Far-IR', intensity: 80 },
      { wavelength: 'Visible', intensity: 45 },
      { wavelength: 'UV Band', intensity: 12 },
    ]
  },
  {
    id: 'star-sirius',
    title: 'Sirius A: Intense Refraction',
    category: 'star',
    categoryLabel: 'Stellar Body',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80',
    telescope: 'Hubble Space Telescope',
    instrument: 'STIS Spectrograph',
    exposureTime: '2.5 Hours Integration',
    spectralBand: 'Far-Ultraviolet (115 - 170 nm)',
    distance: '8.6 Light-Years',
    observationalDate: 'June 04, 2026',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'Spectroscopic scan of Sirius A, showcasing extreme stellar brilliance and high UV radiation profiles.',
    scientificInsight: 'Sirius A is an A-type main-sequence star, roughly twice as massive as the Sun. It orbits with a tiny white dwarf companion star, Sirius b, which has a density so high that one teaspoon of its material would weigh over 5 tons on Earth.',
    simulatedSpectrum: [
      { wavelength: '115nm', intensity: 90 },
      { wavelength: '135nm', intensity: 85 },
      { wavelength: '155nm', intensity: 65 },
      { wavelength: '175nm', intensity: 40 },
    ]
  },
  {
    id: 'bh-sagittarius',
    title: 'Sagittarius A* Accretion Disk',
    category: 'black-hole',
    categoryLabel: 'Singularity',
    image: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?auto=format&fit=crop&w=1200&q=80',
    telescope: 'Event Horizon Telescope Array',
    instrument: 'Millimeter VLBI Array',
    exposureTime: '120 Hours Continuous Scan',
    spectralBand: 'Submillimeter Radio (1.3 mm)',
    distance: '26,673 Light-Years',
    observationalDate: 'May 12, 2026',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'A detailed radio-wave reconstructive scan of the supermassive black hole Sagittarius A* at the center of the Milky Way.',
    scientificInsight: 'Sgr A* contains roughly 4.1 million solar masses crammed into a sphere smaller than Mercurys orbit. Its accretion disk glows as orbiting matter rubs together at near-light speeds, producing extreme frictional heat and X-ray bursts.',
    simulatedSpectrum: [
      { wavelength: 'Radio 1.3mm', intensity: 98 },
      { wavelength: 'Far-IR', intensity: 70 },
      { wavelength: 'X-Ray Band', intensity: 92 },
      { wavelength: 'Gamma-Ray', intensity: 85 },
    ]
  },
  {
    id: 'ast-halley',
    title: 'Tail Profiles of Halley\'s Comet',
    category: 'asteroid',
    categoryLabel: 'Cometary Body',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    telescope: 'SOFIA Airborne Observatory',
    instrument: 'FORCAST Infrared Spectrometer',
    exposureTime: 'High Altitude Flight (4.5 hr)',
    spectralBand: 'Mid-to-Far Infrared',
    distance: '180 Million Kilometers',
    observationalDate: 'November 18, 2025',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'High-altitude mapping of the vaporizing ice, silicate grains, and organic dust trail streaming behind Halley\'s Comet.',
    scientificInsight: 'As Halleys Comet approaches the Sun, solar radiation vaporizes water-ice in its nucleus, ejecting a glowing tail of gas and dust. Analyzing comet dust composition yields primitive material from the primordial solar nebula.',
    simulatedSpectrum: [
      { wavelength: 'Silicates', intensity: 75 },
      { wavelength: 'Carbon Monoxide', intensity: 88 },
      { wavelength: 'Water Vapor', intensity: 92 },
      { wavelength: 'Methane Band', intensity: 30 },
    ]
  },
  {
    id: 'ast-ceres',
    title: 'Dwarf Planet Ceres Map',
    category: 'asteroid',
    categoryLabel: 'Dwarf Planet',
    image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1200&q=80',
    telescope: 'Dawn Spacecraft Probe',
    instrument: 'Framing Camera (FC)',
    exposureTime: 'Orbital Reconnaissance Map',
    spectralBand: 'Optical Multi-Filters',
    distance: '413 Million Kilometers',
    observationalDate: 'December 11, 2025',
    resolution: '3840 x 2160 (8.3 MP)',
    description: 'A global geographic profile of the dwarf planet Ceres, highlighting the prominent reflective sodium carbonate deposits in Occator Crater.',
    scientificInsight: 'Ceres is the largest object in the Asteroid Belt. Its mysterious bright spots are saltwater reservoirs that seeped up from an underground muddy ocean and evaporated, leaving behind bright, reflective sodium carbonate minerals.',
    simulatedSpectrum: [
      { wavelength: '380nm', intensity: 20 },
      { wavelength: '480nm', intensity: 45 },
      { wavelength: '580nm', intensity: 65 },
      { wavelength: '680nm', intensity: 68 },
      { wavelength: '780nm', intensity: 70 },
    ]
  }
];

export default function CelestialGallery() {
  const [filter, setFilter] = useState<'all' | 'galaxy' | 'star' | 'black-hole' | 'asteroid' | 'planet'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [spectralAnalysisActive, setSpectralAnalysisActive] = useState<boolean>(false);

  const filteredItems = GALLERY_ITEMS.filter(
    item => filter === 'all' || item.category === filter
  );

  return (
    <div className="py-8" id="celestial-observatory-panel">
      {/* Title block */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
          <Aperture className="w-3.5 h-3.5 animate-spin-slow" />
          <span>High-Resolution Photographic Vault</span>
        </div>
        <h2 className="text-3xl font-display font-light text-white tracking-wide">
          Deep Space <span className="font-semibold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Telescope Observatory</span>
        </h2>
        <p className="text-slate-400 text-sm mt-2 max-w-2xl">
          Browse scientifically simulated, high-resolution photographs captured by advanced space-based telescopes. Click any plate to initialize structural analysis and inspect cosmic spectral telemetry.
        </p>
      </div>

      {/* Gallery Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center sm:justify-start" id="gallery-filters">
        {(['all', 'galaxy', 'star', 'black-hole', 'asteroid', 'planet'] as const).map((cat) => (
          <button
            key={cat}
            id={`gallery-filter-${cat}`}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 border ${
              filter === cat
                ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                : 'bg-[#060a1f]/80 text-slate-300 border-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            {cat === 'all' ? 'All Plates' : cat + 's'}
          </button>
        ))}
      </div>

      {/* Grid of high quality image cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="gallery-grid">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => {
                setSelectedItem(item);
                setSpectralAnalysisActive(false);
              }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#060a1f]/85 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with high contrast ratios */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#020306]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Dark overlay gradient for readable labels */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90"></div>

                {/* Quick stats floating bar */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2.5 py-1 rounded text-[9px] font-mono uppercase tracking-widest bg-slate-900/80 border border-white/10 text-slate-300 backdrop-blur-md">
                    {item.telescope}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-950/80 border border-cyan-500/20 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Overlay with details */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[9px] text-cyan-400 font-mono uppercase tracking-widest block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h3 className="text-lg font-display font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="text-right font-mono text-[10px] text-slate-400 hidden sm:block">
                    <div>DIST: {item.distance}</div>
                    <div className="text-[9px] text-slate-500">RES: {item.resolution}</div>
                  </div>
                </div>
              </div>

              {/* Text Description Block */}
              <div className="p-5 border-t border-white/5">
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-4 pt-4 border-t border-white/[0.03] flex items-center justify-between">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1">
                    <Layers className="w-3 h-3" />
                    {item.spectralBand}
                  </span>
                  <span className="text-xs text-cyan-400 group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1 font-mono text-[10px]">
                    INSPECT TELEMETRY <Eye className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal with Technical Space-Telemetry Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-8 overflow-y-auto bg-slate-950/90 backdrop-blur-xl">
            {/* Modal backdrop closer */}
            <div className="absolute inset-0 cursor-default" onClick={() => setSelectedItem(null)}></div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl rounded-3xl bg-[#04060e] border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row z-10"
              id={`lightbox-modal-${selectedItem.id}`}
            >
              {/* Close Button */}
              <button
                id="btn-close-lightbox"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-slate-950/60 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-pointer backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Massive Image View */}
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden aspect-video lg:aspect-auto lg:h-[600px]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Image Specs Overlay watermark */}
                <div className="absolute bottom-6 left-6 font-mono text-left select-none pointer-events-none text-white/50 bg-slate-950/40 p-3 rounded-lg border border-white/5 backdrop-blur-md hidden sm:block">
                  <div className="text-[10px] text-cyan-400/80 tracking-widest font-bold">OBSERVATION WATERMARK</div>
                  <div className="text-xs font-semibold text-slate-100 mt-1">{selectedItem.title}</div>
                  <div className="text-[10px] text-slate-400 mt-1">LAT/LONG: COORD SYTEM ALIGNED</div>
                  <div className="text-[10px] text-slate-400">EXP: {selectedItem.exposureTime}</div>
                </div>
              </div>

              {/* Right Side: Deep Telemetry Specifications Panel */}
              <div className="w-full lg:w-[380px] p-6 lg:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 h-auto lg:h-[600px] overflow-y-auto">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-widest bg-cyan-950/50 border border-cyan-500/20 text-cyan-400">
                      {selectedItem.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">PLATE #{selectedItem.id.toUpperCase()}</span>
                  </div>

                  <h3 className="text-2xl font-display font-semibold text-white tracking-wide mb-3">
                    {selectedItem.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  {/* Tabs/Toggles inside Telemetry panel */}
                  <div className="flex border-b border-white/5 mb-5 font-mono text-[10px]">
                    <button 
                      id="lightbox-tab-telemetry"
                      onClick={() => setSpectralAnalysisActive(false)}
                      className={`flex-1 pb-2 text-center border-b transition-colors ${!spectralAnalysisActive ? 'border-cyan-500 text-cyan-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
                    >
                      TELESCOPE DATA
                    </button>
                    <button 
                      id="lightbox-tab-spectral"
                      onClick={() => setSpectralAnalysisActive(true)}
                      className={`flex-1 pb-2 text-center border-b transition-colors ${spectralAnalysisActive ? 'border-cyan-500 text-cyan-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
                    >
                      SPECTRAL GRAPH
                    </button>
                  </div>

                  <AnimatePresence mode="wait">
                    {!spectralAnalysisActive ? (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3.5"
                        key="telemetry-data"
                      >
                        <div className="flex justify-between items-center py-1.5 border-b border-white/[0.03]">
                          <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider flex items-center gap-1">
                            <Compass className="w-3.5 h-3.5 text-slate-600" /> Observatory
                          </span>
                          <span className="text-xs text-slate-200 font-medium text-right">{selectedItem.telescope}</span>
                        </div>
                        <div className="flex justify-between items-center py-1.5 border-b border-white/[0.03]">
                          <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider flex items-center gap-1">
                            <Aperture className="w-3.5 h-3.5 text-slate-600" /> Instrument
                          </span>
                          <span className="text-xs text-slate-200 font-medium text-right">{selectedItem.instrument}</span>
                        </div>
                        <div className="flex justify-between items-center py-1.5 border-b border-white/[0.03]">
                          <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider flex items-center gap-1">
                            <Radio className="w-3.5 h-3.5 text-slate-600" /> Spectral Band
                          </span>
                          <span className="text-xs text-cyan-400 font-medium font-mono text-[11px] text-right">{selectedItem.spectralBand}</span>
                        </div>
                        <div className="flex justify-between items-center py-1.5 border-b border-white/[0.03]">
                          <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-600" /> Est. Distance
                          </span>
                          <span className="text-xs text-slate-200 font-medium text-right">{selectedItem.distance}</span>
                        </div>
                        <div className="flex justify-between items-center py-1.5 border-b border-white/[0.03]">
                          <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-slate-600" /> Observational Date
                          </span>
                          <span className="text-xs text-slate-200 font-medium text-right">{selectedItem.observationalDate}</span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                        key="spectral-graph"
                      >
                        <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest block">
                          Spectral Intensity Analysis (Excluding Atmos Scattering)
                        </span>
                        
                        {/* Interactive spectral chart bar visualization */}
                        <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-white/5">
                          {selectedItem.simulatedSpectrum.map((data, idx) => (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between text-[9px] font-mono text-slate-500">
                                <span>{data.wavelength}</span>
                                <span>{data.intensity}% Intensity</span>
                              </div>
                              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                <div 
                                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" 
                                  style={{ width: `${data.intensity}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <p className="text-[11px] text-slate-400 leading-relaxed italic">
                          *Observations aligned using the telescope calibration index. Real-time emission spikes indicate hot ionized interstellar gas columns.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                  <div className="bg-cyan-950/20 border border-cyan-500/10 p-3.5 rounded-xl">
                    <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest block mb-1 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> SCIENTIFIC INSIGHT
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {selectedItem.scientificInsight}
                    </p>
                  </div>
                  
                  {/* Download wallpaper simulated link */}
                  <a
                    href={selectedItem.image}
                    download={`${selectedItem.title.replace(/\s+/g, '_')}_HQ.jpg`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white text-slate-950 text-xs font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    <ArrowDown className="w-4 h-4" /> Download High-Res Plate
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
