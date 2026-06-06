export interface CharacterStats {
  ninjutsu: number;
  taijutsu: number;
  genjutsu: number;
  intelligence: number;
  strength: number;
  speed: number;
  stamina: number;
  seals: number;
}

export type PhaseType = 'academy' | 'genin' | 'chunin' | 'jonin' | 'kage' | 'warArc';

export interface Character {
  id: string;
  name: string;
  village: string;
  rank: string;
  isCanon: boolean;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary' | 'mythical';
  statsByPhase: {
    academy?: CharacterStats;
    genin: CharacterStats;
    chunin: CharacterStats;
    jonin: CharacterStats;
    kage: CharacterStats;
    warArc: CharacterStats;
  };
  specialties: string[];
  description: string;
}
