import React from 'react';
import { motion } from 'motion/react';
import { SpaceObject } from '../types';
import { Star, Orbit, ArrowRight, Activity, Compass, Flame } from 'lucide-react';

interface ExploreGridProps {
  objects: SpaceObject[];
  onSelectObject: (obj: SpaceObject) => void;
}

export default function ExploreGrid({ objects, onSelectObject }: ExploreGridProps) {
  // Map Tailwind color strings to actual color classes for custom theme styles
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'amber':
        return {
          text: 'text-amber-400',
          border: 'border-amber-500/20 group-hover:border-amber-500/50',
          bg: 'bg-amber-500/5',
          pill: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
          glow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
        };
      case 'cyan':
        return {
          text: 'text-cyan-400',
          border: 'border-cyan-500/20 group-hover:border-cyan-500/50',
          bg: 'bg-cyan-500/5',
          pill: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
          glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
        };
      case 'rose':
        return {
          text: 'text-rose-400',
          border: 'border-rose-500/20 group-hover:border-rose-500/50',
          bg: 'bg-rose-500/5',
          pill: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
          glow: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]',
        };
      case 'emerald':
        return {
          text: 'text-emerald-400',
          border: 'border-emerald-500/20 group-hover:border-emerald-500/50',
          bg: 'bg-emerald-500/5',
          pill: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
        };
      case 'fuchsia':
        return {
          text: 'text-fuchsia-400',
          border: 'border-fuchsia-500/20 group-hover:border-fuchsia-500/50',
          bg: 'bg-fuchsia-500/5',
          pill: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30',
          glow: 'group-hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]',
        };
      case 'violet':
        return {
          text: 'text-violet-400',
          border: 'border-violet-500/20 group-hover:border-violet-500/50',
          bg: 'bg-violet-500/5',
          pill: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
          glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
        };
      case 'orange':
        return {
          text: 'text-orange-400',
          border: 'border-orange-500/20 group-hover:border-orange-500/50',
          bg: 'bg-orange-500/5',
          pill: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
          glow: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]',
        };
      case 'purple':
      default:
        return {
          text: 'text-purple-400',
          border: 'border-purple-500/20 group-hover:border-purple-500/50',
          bg: 'bg-purple-500/5',
          pill: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
          glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
        };
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'galaxy':
        return <Compass className="w-3.5 h-3.5" />;
      case 'stellar-system':
        return <Star className="w-3.5 h-3.5" />;
      case 'black-hole':
      default:
        return <Orbit className="w-3.5 h-3.5" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  if (objects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center border border-white/5 bg-[#050816]/50 rounded-2xl backdrop-blur-md">
        <Activity className="w-12 h-12 text-slate-500 mb-4 animate-pulse" />
        <h3 className="font-sans text-lg font-medium text-slate-300 mb-1">No cosmic targets found</h3>
        <p className="text-slate-500 text-xs max-w-sm">
          Try adjusting your search query or selecting a different cosmological classification tab.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {objects.map((obj) => {
        const style = getColorClasses(obj.themeColor);
        return (
          <motion.div
            key={obj.id}
            variants={cardVariants}
            onClick={() => onSelectObject(obj)}
            id={`card-${obj.id}`}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border ${style.border} bg-[#060a1f]/80 backdrop-blur-md p-6 hover:bg-[#080d26]/90 transition-all duration-300 cursor-pointer ${style.glow}`}
          >
            {/* Top decorative gradient mesh */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${obj.bgGradient} blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-300`}></div>
            
            <div>
              {/* Category Pill */}
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border ${style.pill}`}>
                  {getCategoryIcon(obj.category)}
                  {obj.categoryLabel}
                </span>
                <span className="text-[10px] text-slate-500 font-mono tracking-wider uppercase">
                  {obj.distance === '0 light-years' || obj.distance.includes('Our Home') ? 'LOCAL' : 'DEEP SPACE'}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-sans font-medium text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                {obj.name}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6 line-clamp-2">
                {obj.oneLiner}
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="border-t border-white/5 pt-4">
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div>
                  <span className="block text-[9px] text-slate-500 font-mono uppercase tracking-widest">DISTANCE</span>
                  <span className="text-xs text-slate-200 font-medium truncate block">{obj.distance}</span>
                </div>
                <div>
                  <span className="block text-[9px] text-slate-500 font-mono uppercase tracking-widest">MASS</span>
                  <span className="text-xs text-slate-200 font-medium truncate block">{obj.mass}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center justify-between text-xs font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                <span className="font-mono text-[10px] text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
                  ACTIVATE SENSORS
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-slate-400 group-hover:text-white group-hover:mr-1 transition-all duration-300 text-[11px]">
                    Open Explorer
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
