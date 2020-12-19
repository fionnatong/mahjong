export enum SetupFields {
  PlayerOne = 'Player 1',
  PlayerTwo = 'Player 2',
  PlayerThree = 'Player 3',
  PlayerFour = 'Player 4',
  Bet = 'Bet'
}

export interface Player {
  name: string;
  score: number;
}