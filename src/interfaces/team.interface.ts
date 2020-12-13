import TeamState from './team-state.interface';

interface Team {
  identifier: string;
  name: string;
  avatarUrl: string;
  state: TeamState;
}

export default Team;
