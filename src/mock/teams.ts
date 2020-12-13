import Team from '../interfaces/team.interface';

const teams: Team[] = [
  {
    identifier: 't01',
    name: 'Team Name 1',
    avatarUrl:
      'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
    state: {
      level: 3,
      defeated: false,
      jokers: {
        half: {
          used: true,
        },
        audience: {
          used: false,
        },
        switchQuestion: {
          used: true,
        },
        search: {
          used: false,
        },
      },
    },
  },
  {
    identifier: 't02',
    name: 'Team Name 2',
    avatarUrl:
      'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
    state: {
      level: 5,
      defeated: true,
      jokers: {
        half: {
          used: false,
        },
        audience: {
          used: false,
        },
        switchQuestion: {
          used: true,
        },
        search: {
          used: false,
        },
      },
    },
  },
  {
    identifier: 't03',
    name: 'Team Name 3',
    avatarUrl:
      'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
    state: {
      level: 3,
      defeated: false,
      jokers: {
        half: {
          used: true,
        },
        audience: {
          used: false,
        },
        switchQuestion: {
          used: true,
        },
        search: {
          used: false,
        },
      },
    },
  },
  {
    identifier: 't04',
    name: 'Team Name 4',
    avatarUrl:
      'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
    state: {
      level: 3,
      defeated: false,
      jokers: {
        half: {
          used: true,
        },
        audience: {
          used: false,
        },
        switchQuestion: {
          used: true,
        },
        search: {
          used: false,
        },
      },
    },
  },
  {
    identifier: 't05',
    name: 'Team Name 5',
    avatarUrl:
      'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
    state: {
      level: 3,
      defeated: false,
      jokers: {
        half: {
          used: true,
        },
        audience: {
          used: false,
        },
        switchQuestion: {
          used: true,
        },
        search: {
          used: false,
        },
      },
    },
  },
];

export default teams;
