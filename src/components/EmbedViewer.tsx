import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SpaceObject } from '../types';
import { 
  X, Info, Star, Compass, RefreshCw, Maximize2, 
  ChevronLeft, ChevronRight, CheckCircle2, AlertCircle 
} from 'lucide-react';

interface EmbedViewerProps {
  object: SpaceObject;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export default function EmbedViewer({ object, onClose, onNavigate }: EmbedViewerProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const getThemeAccent = (color: string) => {
    switch (color) {
      case 'amber': return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
      case 'cyan': return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10';
      case 'rose': return 'text-rose-400 border-rose-500/30 bg-rose-500/10';
      case 'emerald': return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
      case 'fuchsia': return 'text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-500/10';
      case 'violet': return 'text-violet-400 border-violet-500/30 bg-violet-500/10';
      case 'orange': return 'text-orange-400 border-orange-500/30 bg-orange-500/10';
      case 'purple':
      default: return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
    }
  };

  const accentColor = getThemeAccent(object.themeColor);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col bg-[#02040d]"
    >
      {/* Top Header Controls bar */}
      <div className="flex items-center justify-between h-14 px-4 sm:px-6 border-b border-white/5 bg-[#040714]/90 backdrop-blur-md">
        
        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button 
            id="btn-prev-object"
            onClick={() => { setIframeLoaded(false); onNavigate('prev'); }}
            className="p-1.5 rounded-lg border border-white/10 hover:border-cyan-500/40 hover:bg-white/5 transition-all duration-300 text-slate-300 hover:text-white"
            title="Previous Celestial Object"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h2 className="text-xs font-sans font-semibold tracking-wider text-white uppercase">{object.name}</h2>
              <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-widest border ${accentColor}`}>
                {object.categoryLabel}
              </span>
            </div>
            <p className="text-[10px] text-slate-400 hidden sm:block truncate max-w-xs">{object.oneLiner}</p>
          </div>

          <button 
            id="btn-next-object"
            onClick={() => { setIframeLoaded(false); onNavigate('next'); }}
            className="p-1.5 rounded-lg border border-white/10 hover:border-cyan-500/40 hover:bg-white/5 transition-all duration-300 text-slate-300 hover:text-white"
            title="Next Celestial Object"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Action icons / Close Button */}
        <div className="flex items-center gap-3">
          <span className="hidden md:flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 bg-cyan-950/20 px-2.5 py-1 rounded-full border border-cyan-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            SIMULATOR ONLINE
          </span>

          <button 
            id="close-simulator"
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 text-xs text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
          >
            <X className="w-3.5 h-3.5 text-cyan-400" />
            <span>Close Simulator</span>
          </button>
        </div>
      </div>

      {/* Main Split Screen Area */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Column: The 3D Canvas Iframe */}
        <div className="flex-1 relative bg-black flex items-center justify-center min-h-[40vh] lg:min-h-0">
          <iframe 
            src={object.embedPath}
            title={object.name}
            className="w-full h-full border-none"
            onLoad={() => setIframeLoaded(true)}
            allowFullScreen
          />

          {/* Spinner Overlay */}
          <AnimatePresence>
            {!iframeLoaded && (
              <motion.div 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#02040d] flex flex-col items-center justify-center gap-4 z-10"
              >
                <RefreshCw className="w-10 h-10 text-cyan-400 animate-spin" />
                <p className="text-xs font-mono tracking-widest text-slate-400">LOADING COGNITIVE 3D ENGINE...</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Information, Specs, Trivia Sidebar */}
        <div className="w-full lg:w-[420px] bg-[#040714] border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col overflow-y-auto">
          
          {/* Quick Stats Banner */}
          <div className="p-6 border-b border-white/5">
            <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest">COSMIC TELEMETRY</span>
            <h3 className="text-2xl font-sans font-medium text-white tracking-tight mt-1 mb-3">{object.name}</h3>
            <p className="text-slate-300 text-xs leading-relaxed">{object.description}</p>
          </div>

          {/* Scientific Specifications */}
          <div className="p-6 border-b border-white/5">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase mb-4 flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              Scientific Specifications
            </h4>
            
            <div className="space-y-3">
              {object.quickStats.map((stat, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/[0.03]">
                  <span className="text-[11px] text-slate-500 font-mono uppercase tracking-wider">{stat.label}</span>
                  <span className="text-xs text-slate-100 font-medium font-sans text-right">{stat.value}</span>
                </div>
              ))}
              {object.constellation && object.constellation !== 'Not Applicable' && (
                <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
                  <span className="text-[11px] text-slate-500 font-mono uppercase tracking-wider">Constellation</span>
                  <span className="text-xs text-slate-100 font-medium font-sans text-right">{object.constellation}</span>
                </div>
              )}
            </div>
          </div>

          {/* Core Interactive Simulation Features */}
          <div className="p-6 border-b border-white/5 bg-slate-900/10">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase mb-4 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              Simulator Features
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {object.interactiveFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curated Scientific Fact / Trivia */}
          <div className="p-6 flex-1">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase mb-4 flex items-center gap-2">
              <Star className="w-3.5 h-3.5 text-cyan-400" />
              Cosmology Bulletins & Trivia
            </h4>
            <div className="space-y-4">
              {object.trivia.map((triv, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/10 bg-[#060a1f]/75 hover:bg-[#0a0f2d]/90 transition-colors duration-300">
                  <div className="flex gap-2 items-start">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 font-mono text-[10px] shrink-0 font-bold">
                      {i + 1}
                    </span>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-sans">{triv}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl border border-dashed border-cyan-500/20 bg-cyan-950/5">
              <h5 className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1.5">ASTRONOMICAL IMPACT</h5>
              <p className="text-[11px] text-slate-400 leading-relaxed">{object.scientificSignificance}</p>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
