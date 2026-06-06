import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player, TeamMember, PhaseType, CharacterStats } from '../interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private playerSubject = new BehaviorSubject<Player | null>(null);
  public player$ = this.playerSubject.asObservable();

  private runHistorySubject = new BehaviorSubject<any[]>([]);
  public runHistory$ = this.runHistorySubject.asObservable();

  constructor() {
    this.loadGame();
  }

  createNewGame(playerName?: string): Player {
    const player: Player = {
      id: Math.random().toString(36).substr(2, 9),
      name: playerName || this.generateShinobi(),
      currentPhase: 'academy',
      level: 1,
      experience: 0,
      health: 100,
      maxHealth: 100,
      stats: {
        ninjutsu: 15,
        taijutsu: 15,
        genjutsu: 10,
        intelligence: 20,
        strength: 15,
        speed: 15,
        stamina: 30,
        seals: 15
      },
      team: this.generateTeam(),
      perksEquipped: [],
      achievementsUnlocked: [],
      runNumber: (this.runHistorySubject.value.length || 0) + 1,
      eventsCompleted: [],
      isAlive: true
    };
    this.playerSubject.next(player);
    this.saveGame();
    return player;
  }

  private generateShinobi(): string {
    const firstNames = ['Kenji', 'Yuki', 'Takeshi', 'Hana', 'Masaru', 'Sakura', 'Daichi', 'Akira', 'Riku', 'Tomoe'];
    const lastNames = ['Tanaka', 'Yamamoto', 'Nakamura', 'Kobayashi', 'Kato', 'Yoshida', 'Suzuki', 'Watanabe', 'Ito'];
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
  }

  private generateTeam(): TeamMember[] {
    return [
      {
        id: 'teammate1',
        name: this.generateShinobi(),
        specialty: ['Ninjutsu', 'Taijutsu', 'Genjutsu'][Math.floor(Math.random() * 3)],
        loyalty: 70,
        potential: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as any,
        health: 100,
        isAlive: true
      },
      {
        id: 'teammate2',
        name: this.generateShinobi(),
        specialty: ['Ninjutsu', 'Taijutsu', 'Genjutsu'][Math.floor(Math.random() * 3)],
        loyalty: 70,
        potential: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as any,
        health: 100,
        isAlive: true
      }
    ];
  }

  getPlayer(): Player | null {
    return this.playerSubject.value;
  }

  updatePlayer(updates: Partial<Player>): void {
    const player = this.playerSubject.value;
    if (player) {
      const updated = { ...player, ...updates };
      this.playerSubject.next(updated);
      this.saveGame();
    }
  }

  progressPhase(): void {
    const player = this.playerSubject.value;
    if (!player) return;

    const phases: PhaseType[] = ['academy', 'genin', 'chunin', 'jonin', 'kage', 'warArc'];
    const currentIndex = phases.indexOf(player.currentPhase);
    if (currentIndex < phases.length - 1) {
      player.currentPhase = phases[currentIndex + 1];
      player.level += 1;
      player.eventsCompleted = [];
      this.playerSubject.next(player);
      this.saveGame();
    }
  }

  addExperience(amount: number): void {
    const player = this.playerSubject.value;
    if (player) {
      player.experience += amount;
      this.playerSubject.next(player);
      this.saveGame();
    }
  }

  takeDamage(amount: number): void {
    const player = this.playerSubject.value;
    if (player) {
      player.health = Math.max(0, player.health - amount);
      if (player.health <= 0) {
        player.isAlive = false;
      }
      this.playerSubject.next(player);
      this.saveGame();
    }
  }

  heal(amount: number): void {
    const player = this.playerSubject.value;
    if (player) {
      player.health = Math.min(player.maxHealth, player.health + amount);
      this.playerSubject.next(player);
      this.saveGame();
    }
  }

  completeEvent(eventId: string): void {
    const player = this.playerSubject.value;
    if (player && !player.eventsCompleted.includes(eventId)) {
      player.eventsCompleted.push(eventId);
      this.playerSubject.next(player);
      this.saveGame();
    }
  }

  endRun(): void {
    const player = this.playerSubject.value;
    if (player) {
      const history = this.runHistorySubject.value;
      history.push({
        runNumber: player.runNumber,
        playerName: player.name,
        finalPhase: player.currentPhase,
        finalLevel: player.level,
        survived: player.isAlive,
        timestamp: new Date(),
        eventsCompleted: player.eventsCompleted.length,
        experience: player.experience
      });
      this.runHistorySubject.next(history);
      this.playerSubject.next(null);
      this.saveGame();
    }
  }

  private saveGame(): void {
    const gameState = {
      player: this.playerSubject.value,
      history: this.runHistorySubject.value
    };
    localStorage.setItem('naruto-roulette-state', JSON.stringify(gameState));
  }

  private loadGame(): void {
    const saved = localStorage.getItem('naruto-roulette-state');
    if (saved) {
      try {
        const gameState = JSON.parse(saved);
        if (gameState.player) {
          this.playerSubject.next(gameState.player);
        }
        if (gameState.history) {
          this.runHistorySubject.next(gameState.history);
        }
      } catch (e) {
        console.error('Failed to load game state', e);
      }
    }
  }

  clearGame(): void {
    localStorage.removeItem('naruto-roulette-state');
    this.playerSubject.next(null);
    this.runHistorySubject.next([]);
  }
}
