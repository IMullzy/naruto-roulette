import { Injectable } from '@angular/core';
import { PhaseType } from '../interfaces/player';

export interface WheelEvent {
  id: string;
  title: string;
  description: string;
  phase: PhaseType;
  eventType: 'normal' | 'phaseEnd' | 'boss' | 'rare' | 'character';
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';
  outcomes: EventOutcome[];
  removed?: boolean;
}

export interface EventOutcome {
  type: 'success' | 'mixed' | 'failure' | 'critical';
  probability: number;
  xpReward: number;
  healthChange: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class WheelEventService {
  private events: Map<PhaseType, WheelEvent[]> = new Map();

  constructor() {
    this.initializeEvents();
  }

  private initializeEvents(): void {
    // Academy Phase Events
    this.events.set('academy', [
      {
        id: 'academy-1',
        title: 'Taijutsu Practice',
        description: 'Train basic hand-to-hand combat techniques',
        phase: 'academy',
        eventType: 'normal',
        difficulty: 'easy',
        outcomes: [
          { type: 'success', probability: 0.7, xpReward: 10, healthChange: 0, description: 'You master the basics!' },
          { type: 'failure', probability: 0.3, xpReward: 5, healthChange: -5, description: 'You get knocked down.' }
        ]
      },
      {
        id: 'academy-2',
        title: 'Clone Jutsu Training',
        description: 'Learn to create shadow clones',
        phase: 'academy',
        eventType: 'normal',
        difficulty: 'easy',
        outcomes: [
          { type: 'success', probability: 0.6, xpReward: 15, healthChange: 0, description: 'You create a perfect clone!' },
          { type: 'mixed', probability: 0.3, xpReward: 8, healthChange: 0, description: 'You manage an unstable clone.' },
          { type: 'failure', probability: 0.1, xpReward: 2, healthChange: -10, description: 'The chakra overwhelms you.' }
        ]
      },
      {
        id: 'academy-3',
        title: 'Chakra Control Test',
        description: 'Test your chakra control on the training leaves',
        phase: 'academy',
        eventType: 'normal',
        difficulty: 'medium',
        outcomes: [
          { type: 'success', probability: 0.6, xpReward: 20, healthChange: 0, description: 'Excellent chakra control demonstrated!' },
          { type: 'mixed', probability: 0.3, xpReward: 10, healthChange: -5, description: 'Decent control, but room for improvement.' },
          { type: 'failure', probability: 0.1, xpReward: 2, healthChange: -15, description: 'Your chakra goes wild!' }
        ]
      },
      {
        id: 'academy-4',
        title: 'Classroom Lecture',
        description: 'Study shinobi history and ninja rules',
        phase: 'academy',
        eventType: 'normal',
        difficulty: 'easy',
        outcomes: [
          { type: 'success', probability: 0.8, xpReward: 8, healthChange: 0, description: 'You absorb the knowledge.' },
          { type: 'failure', probability: 0.2, xpReward: 2, healthChange: 0, description: 'You barely stay awake.' }
        ]
      },
      {
        id: 'academy-5',
        title: 'Dodge Training',
        description: 'Practice evasion techniques',
        phase: 'academy',
        eventType: 'normal',
        difficulty: 'easy',
        outcomes: [
          { type: 'success', probability: 0.7, xpReward: 12, healthChange: 0, description: 'Quick reflexes developing!' },
          { type: 'failure', probability: 0.3, xpReward: 5, healthChange: -8, description: 'You get hit multiple times.' }
        ]
      },
      {
        id: 'academy-6',
        title: 'Kunai Throwing',
        description: 'Perfect your kunai accuracy',
        phase: 'academy',
        eventType: 'normal',
        difficulty: 'medium',
        outcomes: [
          { type: 'success', probability: 0.6, xpReward: 15, healthChange: 0, description: 'Bullseye! Perfect accuracy!' },
          { type: 'mixed', probability: 0.3, xpReward: 8, healthChange: 0, description: 'Several hits, a few misses.' },
          { type: 'failure', probability: 0.1, xpReward: 2, healthChange: -5, description: 'You almost hit yourself.' }
        ]
      },
      {
        id: 'academy-7',
        title: 'Survival Training',
        description: 'Navigate through the forest',
        phase: 'academy',
        eventType: 'normal',
        difficulty: 'medium',
        outcomes: [
          { type: 'success', probability: 0.5, xpReward: 20, healthChange: -5, description: 'You survive with minimal injuries!' },
          { type: 'mixed', probability: 0.4, xpReward: 12, healthChange: -15, description: 'You make it, but badly hurt.' },
          { type: 'failure', probability: 0.1, xpReward: 5, healthChange: -30, description: 'You barely crawl out.' }
        ]
      },
      {
        id: 'academy-end',
        title: 'Graduation Exam',
        description: 'Pass the academy graduation exam',
        phase: 'academy',
        eventType: 'phaseEnd',
        difficulty: 'hard',
        outcomes: [
          { type: 'success', probability: 0.7, xpReward: 50, healthChange: -10, description: 'You pass with flying colors! Ready for Genin!' },
          { type: 'mixed', probability: 0.2, xpReward: 30, healthChange: -20, description: 'You barely pass... but you pass.' },
          { type: 'failure', probability: 0.1, xpReward: 10, healthChange: -30, description: 'You fail. Try again next year.' }
        ]
      }
    ]);

    // Genin Phase Events
    this.events.set('genin', [
      {
        id: 'genin-1',
        title: 'Team Formation',
        description: 'Meet your randomly assigned genin team and sensei',
        phase: 'genin',
        eventType: 'normal',
        difficulty: 'easy',
        outcomes: [
          { type: 'success', probability: 0.6, xpReward: 10, healthChange: 0, description: 'Great team chemistry!' },
          { type: 'mixed', probability: 0.3, xpReward: 7, healthChange: 0, description: 'The team has potential.' },
          { type: 'failure', probability: 0.1, xpReward: 3, healthChange: 0, description: 'Awkward team dynamics.' }
        ]
      },
      {
        id: 'genin-2',
        title: 'D-Rank Mission: Find Lost Cat',
        description: 'Complete a simple retrieval mission',
        phase: 'genin',
        eventType: 'normal',
        difficulty: 'easy',
        outcomes: [
          { type: 'success', probability: 0.8, xpReward: 15, healthChange: 0, description: 'Mission complete! Cat is safe.' },
          { type: 'failure', probability: 0.2, xpReward: 5, healthChange: -5, description: 'Mission succeeded but barely.' }
        ]
      },
      {
        id: 'genin-3',
        title: 'C-Rank Mission: Escort Merchant',
        description: 'Escort a merchant safely to the next town',
        phase: 'genin',
        eventType: 'normal',
        difficulty: 'medium',
        outcomes: [
          { type: 'success', probability: 0.6, xpReward: 30, healthChange: -5, description: 'Merchant arrives safely. Reward doubled!' },
          { type: 'mixed', probability: 0.3, xpReward: 18, healthChange: -15, description: 'Minor issues but mission complete.' },
          { type: 'failure', probability: 0.1, xpReward: 8, healthChange: -30, description: 'Barely made it through.' }
        ]
      },
      {
        id: 'genin-4',
        title: 'Encounter: Rival Team',
        description: 'Spar with another genin team in training',
        phase: 'genin',
        eventType: 'normal',
        difficulty: 'medium',
        outcomes: [
          { type: 'success', probability: 0.5, xpReward: 25, healthChange: -20, description: 'Your team dominates the sparring match!' },
          { type: 'mixed', probability: 0.4, xpReward: 15, healthChange: -30, description: 'It was close, but you had the edge.' },
          { type: 'failure', probability: 0.1, xpReward: 8, healthChange: -50, description: 'You got soundly beaten.' }
        ]
      },
      {
        id: 'genin-5',
        title: 'Bandit Encounter',
        description: 'Fight bandits attacking travelers',
        phase: 'genin',
        eventType: 'boss',
        difficulty: 'hard',
        outcomes: [
          { type: 'success', probability: 0.5, xpReward: 50, healthChange: -30, description: 'Bandits defeated! You\'re getting strong!' },
          { type: 'mixed', probability: 0.35, xpReward: 30, healthChange: -50, description: 'Bandits flee after heavy fighting.' },
          { type: 'failure', probability: 0.15, xpReward: 15, healthChange: -80, description: 'You barely survive the encounter.' }
        ]
      },
      {
        id: 'genin-6',
        title: 'Chunin Exam Qualifying Tournament',
        description: 'Prove yourself in the tournament preliminaries',
        phase: 'genin',
        eventType: 'phaseEnd',
        difficulty: 'hard',
        outcomes: [
          { type: 'success', probability: 0.6, xpReward: 60, healthChange: -40, description: 'You advance to Chunin Exams!' },
          { type: 'mixed', probability: 0.25, xpReward: 35, healthChange: -60, description: 'You barely qualify for the next round.' },
          { type: 'failure', probability: 0.15, xpReward: 15, healthChange: -80, description: 'Eliminated. You\'ll train harder next year.' }
        ]
      }
    ]);

    // Chunin Phase Events
    this.events.set('chunin', [
      {
        id: 'chunin-1',
        title: 'Written Exam',
        description: 'Pass the knowledge portion of Chunin Exams',
        phase: 'chunin',
        eventType: 'normal',
        difficulty: 'medium',
        outcomes: [
          { type: 'success', probability: 0.7, xpReward: 25, healthChange: 0, description: 'You ace the written exam!' },
          { type: 'mixed', probability: 0.2, xpReward: 15, healthChange: 0, description: 'You pass with a decent score.' },
          { type: 'failure', probability: 0.1, xpReward: 5, healthChange: 0, description: 'You barely make the cutoff.' }
        ]
      },
      {
        id: 'chunin-2',
        title: 'Forest Survival Trial',
        description: 'Survive and gather scrolls in the forest of death',
        phase: 'chunin',
        eventType: 'normal',
        difficulty: 'hard',
        outcomes: [
          { type: 'success', probability: 0.5, xpReward: 45, healthChange: -40, description: 'You collect both scrolls and advance!' },
          { type: 'mixed', probability: 0.35, xpReward: 28, healthChange: -60, description: 'You barely escape with the scrolls.' },
          { type: 'failure', probability: 0.15, xpReward: 10, healthChange: -80, description: 'You don\'t make it through the forest.' }
        ]
      },
      {
        id: 'chunin-3',
        title: 'Chunin Exam Finals: Battle',
        description: 'Compete in the final tournament bracket',
        phase: 'chunin',
        eventType: 'boss',
        difficulty: 'hard',
        outcomes: [
          { type: 'success', probability: 0.5, xpReward: 60, healthChange: -50, description: 'Victory! You advance to the next round!' },
          { type: 'mixed', probability: 0.3, xpReward: 35, healthChange: -70, description: 'Hard-fought victory.' },
          { type: 'failure', probability: 0.2, xpReward: 15, healthChange: -90, description: 'Defeat. But you showed promise.' }
        ]
      },
      {
        id: 'chunin-4',
        title: 'Chunin Promotion',
        description: 'Final test: prove your worth as a Chunin',
        phase: 'chunin',
        eventType: 'phaseEnd',
        difficulty: 'hard',
        outcomes: [
          { type: 'success', probability: 0.6, xpReward: 80, healthChange: -50, description: 'Promoted to Chunin! You\'ve grown strong!' },
          { type: 'mixed', probability: 0.3, xpReward: 45, healthChange: -70, description: 'Promoted to Chunin, but with reservations.' },
          { type: 'failure', probability: 0.1, xpReward: 20, healthChange: -100, description: 'Not promoted yet. Train harder.' }
        ]
      }
    ]);

    // Jonin Phase Events
    this.events.set('jonin', [
      {
        id: 'jonin-1',
        title: 'Jonin Leadership Trials',
        description: 'Prove yourself worthy of Jonin rank',
        phase: 'jonin',
        eventType: 'normal',
        difficulty: 'hard',
        outcomes: [
          { type: 'success', probability: 0.6, xpReward: 70, healthChange: -50, description: 'You pass the trials brilliantly!' },
          { type: 'mixed', probability: 0.3, xpReward: 40, healthChange: -80, description: 'You pass, but barely.' },
          { type: 'failure', probability: 0.1, xpReward: 15, healthChange: -100, description: 'You fail. Try again later.' }
        ]
      },
      {
        id: 'jonin-2',
        title: 'S-Rank Mission',
        description: 'Undertake an extremely dangerous mission',
        phase: 'jonin',
        eventType: 'boss',
        difficulty: 'extreme',
        outcomes: [
          { type: 'success', probability: 0.4, xpReward: 100, healthChange: -60, description: 'Mission success! You\'re a true Jonin now!' },
          { type: 'mixed', probability: 0.35, xpReward: 60, healthChange: -90, description: 'Mission complete but at great cost.' },
          { type: 'failure', probability: 0.25, xpReward: 30, healthChange: -120, description: 'Mission failure. You barely survived.' }
        ]
      },
      {
        id: 'jonin-3',
        title: 'Rogue Ninja Hunter',
        description: 'Track and capture rogue shinobi',
        phase: 'jonin',
        eventType: 'boss',
        difficulty: 'hard',
        outcomes: [
          { type: 'success', probability: 0.5, xpReward: 80, healthChange: -70, description: 'Rogue captured! Justice served!' },
          { type: 'mixed', probability: 0.3, xpReward: 50, healthChange: -100, description: 'Rogue escaped but wounded.' },
          { type: 'failure', probability: 0.2, xpReward: 25, healthChange: -120, description: 'You were forced to retreat.' }
        ]
      },
      {
        id: 'jonin-4',
        title: 'Jonin Promotion',
        description: 'Achieve Jonin rank officially',
        phase: 'jonin',
        eventType: 'phaseEnd',
        difficulty: 'hard',
        outcomes: [
          { type: 'success', probability: 0.7, xpReward: 120, healthChange: 0, description: 'Promoted to Jonin! Elite shinobi status achieved!' },
          { type: 'failure', probability: 0.3, xpReward: 50, healthChange: 0, description: 'Promotion delayed. Prove yourself further.' }
        ]
      }
    ]);

    // Kage Phase Events
    this.events.set('kage', [
      {
        id: 'kage-1',
        title: 'Kage Selection Trial',
        description: 'Compete to become Kage of your village',
        phase: 'kage',
        eventType: 'boss',
        difficulty: 'extreme',
        outcomes: [
          { type: 'success', probability: 0.5, xpReward: 150, healthChange: -80, description: 'You\'ve become Kage! Lead your village!' },
          { type: 'failure', probability: 0.5, xpReward: 80, healthChange: -150, description: 'You were not selected. Continue your journey.' }
        ]
      },
      {
        id: 'kage-2',
        title: 'Protect the Village',
        description: 'Defend against a major threat',
        phase: 'kage',
        eventType: 'boss',
        difficulty: 'extreme',
        outcomes: [
          { type: 'success', probability: 0.6, xpReward: 140, healthChange: -100, description: 'Village saved! Your people are grateful!' },
          { type: 'mixed', probability: 0.3, xpReward: 90, healthChange: -150, description: 'Threat contained with casualties.' },
          { type: 'failure', probability: 0.1, xpReward: 40, healthChange: -200, description: 'Barely prevented catastrophe.' }
        ]
      },
      {
        id: 'kage-3',
        title: 'Kage Summit',
        description: 'Participate in alliance discussions with other Kage',
        phase: 'kage',
        eventType: 'normal',
        difficulty: 'hard',
        outcomes: [
          { type: 'success', probability: 0.7, xpReward: 80, healthChange: 0, description: 'Secured favorable alliances for your village.' },
          { type: 'failure', probability: 0.3, xpReward: 40, healthChange: 0, description: 'Negotiations were difficult.' }
        ]
      },
      {
        id: 'kage-4',
        title: 'Kage Challenge: Fight Madara Uchiha',
        description: 'Face the legendary Madara',
        phase: 'kage',
        eventType: 'phaseEnd',
        difficulty: 'extreme',
        outcomes: [
          { type: 'success', probability: 0.3, xpReward: 200, healthChange: -150, description: 'Impossible victory! You\'ve surpassed legends!' },
          { type: 'mixed', probability: 0.4, xpReward: 120, healthChange: -200, description: 'Stalemate with the legendary Madara.' },
          { type: 'failure', probability: 0.3, xpReward: 60, healthChange: -300, description: 'Defeated by overwhelming power. The war begins...' }
        ]
      }
    ]);

    // War Arc Events
    this.events.set('warArc', [
      {
        id: 'war-1',
        title: 'Fourth Shinobi War Begins',
        description: 'The Fourth Shinobi War erupts across all nations',
        phase: 'warArc',
        eventType: 'normal',
        difficulty: 'extreme',
        outcomes: [
          { type: 'success', probability: 0.5, xpReward: 200, healthChange: -150, description: 'You rally your forces successfully!' },
          { type: 'failure', probability: 0.5, xpReward: 100, healthChange: -200, description: 'War is devastating but you survive.' }
        ]
      },
      {
        id: 'war-2',
        title: 'Reanimated Enemies',
        description: 'Face legendary shinobi brought back to life',
        phase: 'warArc',
        eventType: 'boss',
        difficulty: 'extreme',
        outcomes: [
          { type: 'success', probability: 0.4, xpReward: 180, healthChange: -180, description: 'You seal the reanimated shinobi!' },
          { type: 'mixed', probability: 0.3, xpReward: 120, healthChange: -240, description: 'Hard-won victory against the undead.' },
          { type: 'failure', probability: 0.3, xpReward: 60, healthChange: -300, description: 'You barely survive the encounter.' }
        ]
      },
      {
        id: 'war-3',
        title: 'Final Battle: Infinite Tsukuyomi',
        description: 'The ultimate technique threatens the world',
        phase: 'warArc',
        eventType: 'boss',
        difficulty: 'extreme',
        outcomes: [
          { type: 'critical', probability: 0.3, xpReward: 300, healthChange: -200, description: 'You helped save the world! Peace is restored!' },
          { type: 'success', probability: 0.4, xpReward: 250, healthChange: -250, description: 'World saved at great personal cost.' },
          { type: 'failure', probability: 0.3, xpReward: 100, healthChange: -400, description: 'The world fell into darkness. Your journey ends.' }
        ]
      }
    ]);
  }

  getEventsByPhase(phase: PhaseType): WheelEvent[] {
    const phaseEvents = this.events.get(phase) || [];
    return phaseEvents.filter(e => !e.removed);
  }

  getRandomEvent(phase: PhaseType): WheelEvent | null {
    const available = this.getEventsByPhase(phase);
    if (available.length === 0) return null;
    return available[Math.floor(Math.random() * available.length)];
  }

  resolveEvent(event: WheelEvent): EventOutcome {
    const rand = Math.random();
    let cumulative = 0;
    
    for (const outcome of event.outcomes) {
      cumulative += outcome.probability;
      if (rand <= cumulative) {
        return outcome;
      }
    }
    
    return event.outcomes[event.outcomes.length - 1];
  }

  markEventAsRemoved(eventId: string, phase: PhaseType): void {
    const phaseEvents = this.events.get(phase);
    if (phaseEvents) {
      const event = phaseEvents.find(e => e.id === eventId);
      if (event) {
        event.removed = true;
      }
    }
  }

  resetPhaseEvents(phase: PhaseType): void {
    const phaseEvents = this.events.get(phase);
    if (phaseEvents) {
      phaseEvents.forEach(e => e.removed = false);
    }
  }

  getTotalEvents(phase: PhaseType): number {
    return this.getEventsByPhase(phase).length;
  }
}
