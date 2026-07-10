import React, { useState, useEffect } from 'react';
import { Compass, Search, Layers, Globe, ShieldAlert, Image, CircleDot } from 'lucide-react';
import { SpaceObjectCategory } from '../types';

interface NavbarProps {
  activeCategory: SpaceObjectCategory;
  setActiveCategory: (category: SpaceObjectCategory) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Navbar({
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
}: NavbarProps) {
  const [utcTime, setUtcTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const categories: { value: SpaceObjectCategory; label: string; icon: React.ReactNode }[] = [
    { value: 'all', label: 'All Cosmos', icon: <Compass className="w-4 h-4" /> },
    { value: 'galaxy', label: 'Galaxies', icon: <Layers className="w-4 h-4" /> },
    { value: 'stellar-system', label: 'Stellar Systems', icon: <Globe className="w-4 h-4" /> },
    { value: 'black-hole', label: 'Black Holes', icon: <CircleDot className="w-4 h-4" /> },
    { value: 'gallery', label: 'High-Res Gallery', icon: <Image className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#030510]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo Section */}
          <div
            className="flex items-center gap-3 flex-shrink-0 cursor-pointer"
            onClick={() => setActiveCategory('all')}
          >
            <img
              src="/logo.png"
              alt="SpaceVerse Logo"
              className="w-11 h-11 object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"
            />

            <div>
              <span className="font-sans font-semibold text-lg tracking-wider bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                SPACEVERSE
              </span>
              <span className="block text-[9px] text-cyan-400 font-mono tracking-widest leading-none">
                ENCYCLOPEDIA
              </span>
            </div>
          </div>

          {/* Navigation Categories */}
          <nav className="hidden md:flex items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat.value}
                id={`nav-cat-${cat.value}`}
                onClick={() => setActiveCategory(cat.value)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-white/10 text-white shadow-inner shadow-white/5 border border-white/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </nav>

          {/* Search Bar & Telemetry Section */}
          <div className="flex items-center gap-4 flex-1 md:flex-initial justify-end">
            <div className="relative w-full max-w-[200px] sm:max-w-[280px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="search-input"
                type="text"
                placeholder="Search the cosmos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-white/10 transition-all duration-300"
              />
            </div>

            {/* Premium UTC Clock */}
            <div className="hidden lg:flex flex-col items-end font-mono text-right border-l border-white/10 pl-4">
              <span className="text-[10px] text-slate-500 tracking-wider">SYSTEM TELEMETRY</span>
              <span className="text-xs text-cyan-400 font-medium tracking-wider">{utcTime || 'UTC CLOCK'}</span>
            </div>

          </div>
        </div>

        {/* Mobile Category Bar */}
        <div className="flex md:hidden items-center justify-start gap-1 py-2 overflow-x-auto no-scrollbar border-t border-white/5">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`nav-cat-mobile-${cat.value}`}
              onClick={() => setActiveCategory(cat.value)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.value
                  ? 'bg-white/10 text-white border border-white/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
