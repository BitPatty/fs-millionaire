import JokerState from './joker-state.interface';

interface TeamState {
  level: number;
  defeated: boolean;
  jokers: JokerState;
}

export default TeamState;
