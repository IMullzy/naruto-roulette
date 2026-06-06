import { Injectable } from '@angular/core';
import { Character, PhaseType, CharacterStats } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characters: Character[] = [];

  constructor() {
    this.initializeCharacters();
  }

  private initializeCharacters(): void {
    // Naruto Uzumaki
    this.characters.push({
      id: 'naruto',
      name: 'Naruto Uzumaki',
      village: 'Leaf',
      rank: 'Hokage',
      isCanon: true,
      rarity: 'rare',
      statsByPhase: {
        academy: { ninjutsu: 25, taijutsu: 15, genjutsu: 5, intelligence: 10, strength: 15, speed: 15, stamina: 40, seals: 10 },
        genin: { ninjutsu: 35, taijutsu: 25, genjutsu: 10, intelligence: 15, strength: 25, speed: 25, stamina: 50, seals: 15 },
        chunin: { ninjutsu: 45, taijutsu: 35, genjutsu: 15, intelligence: 25, strength: 35, speed: 40, stamina: 60, seals: 25 },
        jonin: { ninjutsu: 60, taijutsu: 50, genjutsu: 20, intelligence: 40, strength: 50, speed: 55, stamina: 70, seals: 40 },
        kage: { ninjutsu: 85, taijutsu: 70, genjutsu: 30, intelligence: 60, strength: 75, speed: 80, stamina: 95, seals: 60 },
        warArc: { ninjutsu: 90, taijutsu: 75, genjutsu: 35, intelligence: 65, strength: 80, speed: 85, stamina: 100, seals: 70 }
      },
      specialties: ['Ninjutsu', 'Stamina', 'Determination'],
      description: 'The hero with Nine-Tails chakra. Grows exponentially through bonds.'
    });

    // Sasuke Uchiha
    this.characters.push({
      id: 'sasuke',
      name: 'Sasuke Uchiha',
      village: 'Leaf',
      rank: 'Kage-level',
      isCanon: true,
      rarity: 'rare',
      statsByPhase: {
        academy: { ninjutsu: 30, taijutsu: 25, genjutsu: 15, intelligence: 25, strength: 20, speed: 25, stamina: 25, seals: 20 },
        genin: { ninjutsu: 40, taijutsu: 35, genjutsu: 30, intelligence: 35, strength: 30, speed: 40, stamina: 30, seals: 35 },
        chunin: { ninjutsu: 50, taijutsu: 45, genjutsu: 45, intelligence: 45, strength: 40, speed: 50, stamina: 35, seals: 50 },
        jonin: { ninjutsu: 70, taijutsu: 60, genjutsu: 65, intelligence: 60, strength: 55, speed: 70, stamina: 45, seals: 70 },
        kage: { ninjutsu: 95, taijutsu: 75, genjutsu: 80, intelligence: 80, strength: 70, speed: 85, stamina: 55, seals: 85 },
        warArc: { ninjutsu: 100, taijutsu: 80, genjutsu: 85, intelligence: 85, strength: 75, speed: 90, stamina: 60, seals: 90 }
      },
      specialties: ['Genjutsu', 'Speed', 'Sharingan'],
      description: 'Prodigy with Sharingan and Rinnegan powers. Driven by ambition.'
    });

    // Kakashi Hatake
    this.characters.push({
      id: 'kakashi',
      name: 'Kakashi Hatake',
      village: 'Leaf',
      rank: 'Hokage',
      isCanon: true,
      rarity: 'rare',
      statsByPhase: {
        genin: { ninjutsu: 45, taijutsu: 35, genjutsu: 35, intelligence: 40, strength: 30, speed: 40, stamina: 35, seals: 40 },
        chunin: { ninjutsu: 60, taijutsu: 50, genjutsu: 50, intelligence: 55, strength: 40, speed: 55, stamina: 40, seals: 55 },
        jonin: { ninjutsu: 80, taijutsu: 65, genjutsu: 70, intelligence: 70, strength: 50, speed: 70, stamina: 50, seals: 80 },
        kage: { ninjutsu: 90, taijutsu: 75, genjutsu: 85, intelligence: 80, strength: 60, speed: 80, stamina: 60, seals: 90 },
        warArc: { ninjutsu: 95, taijutsu: 80, genjutsu: 90, intelligence: 85, strength: 65, speed: 85, stamina: 65, seals: 95 }
      },
      specialties: ['Sharingan', 'Intelligence', 'Teaching'],
      description: 'Copy Ninja Kakashi. Master of 1000+ jutsu.'
    });

    // Sakura Haruno
    this.characters.push({
      id: 'sakura',
      name: 'Sakura Haruno',
      village: 'Leaf',
      rank: 'Jonin',
      isCanon: true,
      rarity: 'uncommon',
      statsByPhase: {
        academy: { ninjutsu: 20, taijutsu: 15, genjutsu: 25, intelligence: 35, strength: 10, speed: 15, stamina: 20, seals: 25 },
        genin: { ninjutsu: 30, taijutsu: 25, genjutsu: 35, intelligence: 40, strength: 20, speed: 25, stamina: 25, seals: 35 },
        chunin: { ninjutsu: 40, taijutsu: 35, genjutsu: 45, intelligence: 45, strength: 30, speed: 35, stamina: 35, seals: 45 },
        jonin: { ninjutsu: 55, taijutsu: 50, genjutsu: 55, intelligence: 55, strength: 50, speed: 45, stamina: 50, seals: 55 },
        kage: { ninjutsu: 70, taijutsu: 70, genjutsu: 65, intelligence: 65, strength: 75, speed: 60, stamina: 80, seals: 65 },
        warArc: { ninjutsu: 75, taijutsu: 75, genjutsu: 70, intelligence: 70, strength: 80, speed: 65, stamina: 85, seals: 70 }
      },
      specialties: ['Medical Ninjutsu', 'Strength', 'Intelligence'],
      description: 'Medical genius. Her strength grows exponentially.'
    });

    // Rock Lee
    this.characters.push({
      id: 'rock-lee',
      name: 'Rock Lee',
      village: 'Leaf',
      rank: 'Jonin',
      isCanon: true,
      rarity: 'uncommon',
      statsByPhase: {
        academy: { ninjutsu: 5, taijutsu: 40, genjutsu: 5, intelligence: 20, strength: 25, speed: 35, stamina: 40, seals: 10 },
        genin: { ninjutsu: 10, taijutsu: 55, genjutsu: 5, intelligence: 25, strength: 40, speed: 50, stamina: 50, seals: 15 },
        chunin: { ninjutsu: 15, taijutsu: 70, genjutsu: 5, intelligence: 30, strength: 55, speed: 65, stamina: 60, seals: 20 },
        jonin: { ninjutsu: 20, taijutsu: 85, genjutsu: 5, intelligence: 35, strength: 70, speed: 80, stamina: 75, seals: 25 },
        kage: { ninjutsu: 25, taijutsu: 95, genjutsu: 5, intelligence: 40, strength: 80, speed: 90, stamina: 85, seals: 30 },
        warArc: { ninjutsu: 30, taijutsu: 100, genjutsu: 10, intelligence: 45, strength: 85, speed: 95, stamina: 80, seals: 35 }
      },
      specialties: ['Taijutsu', 'Gates', 'Hard Work'],
      description: 'Taijutsu specialist. Cannot use ninjutsu but reaches peak power through hard work.'
    });

    // Itachi Uchiha
    this.characters.push({
      id: 'itachi',
      name: 'Itachi Uchiha',
      village: 'Rogue',
      rank: 'ANBU Captain',
      isCanon: true,
      rarity: 'legendary',
      statsByPhase: {
        jonin: { ninjutsu: 90, taijutsu: 85, genjutsu: 95, intelligence: 100, strength: 75, speed: 100, stamina: 50, seals: 100 },
        kage: { ninjutsu: 95, taijutsu: 90, genjutsu: 100, intelligence: 105, strength: 80, speed: 105, stamina: 45, seals: 105 },
        warArc: { ninjutsu: 100, taijutsu: 95, genjutsu: 105, intelligence: 110, strength: 85, speed: 110, stamina: 100, seals: 110 }
      },
      specialties: ['Genjutsu', 'Speed', 'Sharingan'],
      description: 'Legendary prodigy with Mangekyō Sharingan. Master of genjutsu and manipulation.'
    });

    // Minato Namikaze
    this.characters.push({
      id: 'minato',
      name: 'Minato Namikaze',
      village: 'Leaf',
      rank: 'Fourth Hokage',
      isCanon: true,
      rarity: 'legendary',
      statsByPhase: {
        jonin: { ninjutsu: 95, taijutsu: 85, genjutsu: 65, intelligence: 95, strength: 75, speed: 100, stamina: 85, seals: 95 },
        kage: { ninjutsu: 100, taijutsu: 90, genjutsu: 70, intelligence: 100, strength: 80, speed: 105, stamina: 90, seals: 100 },
        warArc: { ninjutsu: 105, taijutsu: 95, genjutsu: 75, intelligence: 105, strength: 85, speed: 110, stamina: 100, seals: 105 }
      },
      specialties: ['Speed', 'Ninjutsu', 'Flying Thunder God'],
      description: 'The Yellow Flash. Fastest shinobi ever. Master of space-time jutsu.'
    });

    // Madara Uchiha
    this.characters.push({
      id: 'madara',
      name: 'Madara Uchiha',
      village: 'Rogue',
      rank: 'Founder',
      isCanon: true,
      rarity: 'mythical',
      statsByPhase: {
        kage: { ninjutsu: 105, taijutsu: 100, genjutsu: 100, intelligence: 110, strength: 100, speed: 105, stamina: 100, seals: 105 },
        warArc: { ninjutsu: 120, taijutsu: 115, genjutsu: 120, intelligence: 125, strength: 115, speed: 120, stamina: 120, seals: 120 }
      },
      specialties: ['All', 'Rinnegan', 'Wood Style'],
      description: 'Legendary founder. Nearly unstoppable god-like power.'
    });

    // Orochimaru
    this.characters.push({
      id: 'orochimaru',
      name: 'Orochimaru',
      village: 'Rogue',
      rank: 'Sannin',
      isCanon: true,
      rarity: 'legendary',
      statsByPhase: {
        jonin: { ninjutsu: 95, taijutsu: 70, genjutsu: 80, intelligence: 100, strength: 75, speed: 85, stamina: 85, seals: 100 },
        kage: { ninjutsu: 100, taijutsu: 75, genjutsu: 85, intelligence: 105, strength: 80, speed: 90, stamina: 100, seals: 105 },
        warArc: { ninjutsu: 105, taijutsu: 80, genjutsu: 90, intelligence: 110, strength: 85, speed: 95, stamina: 110, seals: 110 }
      },
      specialties: ['Forbidden Jutsu', 'Immortality', 'Edo Tensei'],
      description: 'Master of forbidden techniques. Effectively immortal.'
    });

    // Jiraiya
    this.characters.push({
      id: 'jiraiya',
      name: 'Jiraiya',
      village: 'Leaf',
      rank: 'Sannin',
      isCanon: true,
      rarity: 'rare',
      statsByPhase: {
        jonin: { ninjutsu: 85, taijutsu: 75, genjutsu: 60, intelligence: 80, strength: 75, speed: 75, stamina: 75, seals: 85 },
        kage: { ninjutsu: 95, taijutsu: 85, genjutsu: 70, intelligence: 85, strength: 85, speed: 80, stamina: 90, seals: 90 },
        warArc: { ninjutsu: 95, taijutsu: 85, genjutsu: 70, intelligence: 85, strength: 85, speed: 80, stamina: 90, seals: 90 }
      },
      specialties: ['Sage Mode', 'Summoning', 'Ninjutsu'],
      description: 'Legendary Sannin. Master of Sage Mode with powerful summoning abilities.'
    });

    // Tsunade
    this.characters.push({
      id: 'tsunade',
      name: 'Tsunade Senju',
      village: 'Leaf',
      rank: 'Fifth Hokage',
      isCanon: true,
      rarity: 'rare',
      statsByPhase: {
        jonin: { ninjutsu: 80, taijutsu: 95, genjutsu: 60, intelligence: 95, strength: 95, speed: 70, stamina: 85, seals: 80 },
        kage: { ninjutsu: 85, taijutsu: 100, genjutsu: 65, intelligence: 100, strength: 100, speed: 75, stamina: 95, seals: 80 },
        warArc: { ninjutsu: 85, taijutsu: 100, genjutsu: 65, intelligence: 100, strength: 100, speed: 75, stamina: 95, seals: 80 }
      },
      specialties: ['Medical Ninjutsu', 'Strength', 'Healing'],
      description: 'Legendary Sannin. Strongest taijutsu master. Expert medical ninja.'
    });

    // Neji Hyuga
    this.characters.push({
      id: 'neji',
      name: 'Neji Hyuga',
      village: 'Leaf',
      rank: 'Jonin',
      isCanon: true,
      rarity: 'uncommon',
      statsByPhase: {
        genin: { ninjutsu: 40, taijutsu: 50, genjutsu: 20, intelligence: 55, strength: 40, speed: 45, stamina: 40, seals: 40 },
        chunin: { ninjutsu: 55, taijutsu: 70, genjutsu: 25, intelligence: 65, strength: 55, speed: 60, stamina: 55, seals: 55 },
        jonin: { ninjutsu: 75, taijutsu: 85, genjutsu: 35, intelligence: 80, strength: 70, speed: 80, stamina: 75, seals: 75 },
        kage: { ninjutsu: 85, taijutsu: 95, genjutsu: 45, intelligence: 90, strength: 80, speed: 90, stamina: 85, seals: 85 },
        warArc: { ninjutsu: 85, taijutsu: 95, genjutsu: 45, intelligence: 90, strength: 80, speed: 90, stamina: 85, seals: 85 }
      },
      specialties: ['Byakugan', 'Gentle Fist', 'Taijutsu'],
      description: 'Hyuga prodigy. Powerful taijutsu specialist with Byakugan.'
    });

    // Hinata Hyuga
    this.characters.push({
      id: 'hinata',
      name: 'Hinata Hyuga',
      village: 'Leaf',
      rank: 'Jonin',
      isCanon: true,
      rarity: 'uncommon',
      statsByPhase: {
        genin: { ninjutsu: 35, taijutsu: 45, genjutsu: 15, intelligence: 40, strength: 35, speed: 40, stamina: 35, seals: 35 },
        chunin: { ninjutsu: 50, taijutsu: 60, genjutsu: 20, intelligence: 50, strength: 45, speed: 55, stamina: 50, seals: 50 },
        jonin: { ninjutsu: 80, taijutsu: 85, genjutsu: 30, intelligence: 70, strength: 75, speed: 80, stamina: 85, seals: 75 },
        kage: { ninjutsu: 90, taijutsu: 95, genjutsu: 40, intelligence: 80, strength: 85, speed: 90, stamina: 95, seals: 85 },
        warArc: { ninjutsu: 90, taijutsu: 95, genjutsu: 40, intelligence: 80, strength: 85, speed: 90, stamina: 95, seals: 85 }
      },
      specialties: ['Byakugan', 'Gentle Fist', 'Hamura'],
      description: 'Hyuga gentle fist master. Grows stronger through determination.'
    });

    // Shikamaru Nara
    this.characters.push({
      id: 'shikamaru',
      name: 'Shikamaru Nara',
      village: 'Leaf',
      rank: 'Jonin',
      isCanon: true,
      rarity: 'uncommon',
      statsByPhase: {
        genin: { ninjutsu: 35, taijutsu: 20, genjutsu: 15, intelligence: 80, strength: 15, speed: 20, stamina: 30, seals: 30 },
        chunin: { ninjutsu: 50, taijutsu: 30, genjutsu: 20, intelligence: 90, strength: 25, speed: 35, stamina: 40, seals: 45 },
        jonin: { ninjutsu: 70, taijutsu: 45, genjutsu: 30, intelligence: 100, strength: 40, speed: 50, stamina: 60, seals: 65 },
        kage: { ninjutsu: 85, taijutsu: 60, genjutsu: 40, intelligence: 105, strength: 55, speed: 65, stamina: 75, seals: 80 },
        warArc: { ninjutsu: 85, taijutsu: 60, genjutsu: 40, intelligence: 105, strength: 55, speed: 65, stamina: 75, seals: 80 }
      },
      specialties: ['Shadow Jutsu', 'Strategy', 'Intelligence'],
      description: 'Strategic genius. Powerful shadow techniques and tactical mind.'
    });

    // Might Guy
    this.characters.push({
      id: 'might-guy',
      name: 'Might Guy',
      village: 'Leaf',
      rank: 'Jonin',
      isCanon: true,
      rarity: 'uncommon',
      statsByPhase: {
        jonin: { ninjutsu: 55, taijutsu: 95, genjutsu: 15, intelligence: 45, strength: 90, speed: 90, stamina: 90, seals: 25 },
        kage: { ninjutsu: 65, taijutsu: 105, genjutsu: 20, intelligence: 55, strength: 105, speed: 105, stamina: 100, seals: 35 },
        warArc: { ninjutsu: 75, taijutsu: 120, genjutsu: 25, intelligence: 60, strength: 120, speed: 120, stamina: 50, seals: 40 }
      },
      specialties: ['Taijutsu', 'Gates', 'Youthfulness'],
      description: 'The Green Beast. Master of all Eight Gates with unmatched enthusiasm.'
    });

    // Pain (Nagato)
    this.characters.push({
      id: 'pain',
      name: 'Pain',
      village: 'Hidden Rain',
      rank: 'Akatsuki Leader',
      isCanon: true,
      rarity: 'legendary',
      statsByPhase: {
        jonin: { ninjutsu: 95, taijutsu: 80, genjutsu: 75, intelligence: 95, strength: 85, speed: 85, stamina: 90, seals: 90 },
        kage: { ninjutsu: 110, taijutsu: 90, genjutsu: 85, intelligence: 110, strength: 95, speed: 95, stamina: 105, seals: 105 },
        warArc: { ninjutsu: 115, taijutsu: 95, genjutsu: 90, intelligence: 115, strength: 100, speed: 100, stamina: 120, seals: 110 }
      },
      specialties: ['Rinnegan', 'All Paths', 'Gravity'],
      description: 'Akatsuki leader with Rinnegan. Godlike power through six paths.'
    });
  }

  getCharacterByPhase(phase: PhaseType): Character[] {
    return this.characters.filter(char => char.statsByPhase[phase]);
  }

  getRandomCharacter(phase: PhaseType, rarity?: string): Character | null {
    let available = this.getCharacterByPhase(phase);
    if (rarity) {
      available = available.filter(char => char.rarity === rarity);
    }
    return available.length > 0 ? available[Math.floor(Math.random() * available.length)] : null;
  }

  getCharacterStats(characterId: string, phase: PhaseType): CharacterStats | null {
    const character = this.characters.find(c => c.id === characterId);
    if (!character) return null;
    return character.statsByPhase[phase] || null;
  }

  getCharacterById(id: string): Character | null {
    return this.characters.find(c => c.id === id) || null;
  }

  getAllCharacters(): Character[] {
    return this.characters;
  }

  getCanonCharacters(): Character[] {
    return this.characters.filter(c => c.isCanon);
  }

  getTotalStats(stats: CharacterStats): number {
    return Object.values(stats).reduce((a, b) => a + b, 0);
  }
}
