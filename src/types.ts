export type SpaceObjectCategory = 'all' | 'galaxy' | 'stellar-system' | 'black-hole' | 'gallery';

export interface QuickStat {
  label: string;
  value: string;
}

export interface SpaceObject {
  id: string;
  name: string;
  category: SpaceObjectCategory;
  categoryLabel: string;
  embedPath: string;
  distance: string;
  mass: string;
  constellation?: string;
  oneLiner: string;
  description: string;
  quickStats: QuickStat[];
  trivia: string[];
  themeColor: string; // Tailwind color class like 'cyan', 'rose', 'amber', 'purple'
  bgGradient: string; // Tailwind gradient like 'from-cyan-500/10 to-blue-500/10'
  interactiveFeatures: string[];
  scientificSignificance: string;
}
