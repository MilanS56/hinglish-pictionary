import { Injectable } from '@nestjs/common';
import { GamePhase } from '@hinglish-pictionary/shared';

@Injectable()
export class AppService {
  getHello(): string {
    const phase: GamePhase = GamePhase.WAITING;

    return `Hinglish Pictionary API is running. Game phase: ${phase}`;
  }
}