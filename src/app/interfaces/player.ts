export interface Player {
  id: string;
  name: string;
  currentPhase: PhaseType;
  level: number;
  experience: number;
  health: number;
  maxHealth: number;
  stats: CharacterStats;
  team: TeamMember[];
  perksEquipped: string[];
  achievementsUnlocked: string[];
  runNumber: number;
  eventsCompleted: string[];
  isAlive: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  specialty: string;
  loyalty: number;
  potential: 'low' | 'medium' | 'high';
  health: number;
  isAlive: boolean;
}

export type PhaseType = 'academy' | 'genin' | 'chunin' | 'jonin' | 'kage' | 'warArc';

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
