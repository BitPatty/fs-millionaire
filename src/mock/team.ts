import Team from '../interfaces/team.interface';
import jokerState from './joker-state';

const team: Team = {
  identifier: 'asdf',
  name: 'Team Name',
  avatarUrl:
    'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
  state: {
    level: 3,
    defeated: false,
    jokers: jokerState,
  },
};

export default team;
