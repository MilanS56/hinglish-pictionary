export enum GamePhase {
  WAITING = 'WAITING',
  STARTING = 'STARTING',
  PLAYING = 'PLAYING',
  ROUND_END = 'ROUND_END',
  GAME_END = 'GAME_END',
}

export enum RoomVisibility {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export interface Player {
  id: string;
  displayName: string;
  score: number;
  isHost: boolean;
}

export interface GameRoom {
  id: string;
  name: string;
  visibility: RoomVisibility;
  phase: GamePhase;
  players: Player[];
  maxPlayers: number;
} 