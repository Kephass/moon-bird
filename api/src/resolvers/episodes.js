const episode = [
  {
    id: '1',
    episodes: [
      {
        id: '1',
        name: 'Get started',
        duration: '12min',
        status: 'DONE',
      },
      {
        id: '2',
        name: 'Be one',
        duration: '12min',
        status: 'NEXT_UP',
      },
      {
        id: '3',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
      {
        id: '4',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
      {
        id: '5',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
    ],
  },
  {
    id: '2',
    episodes: [
      {
        id: '1',
        name: 'Get started',
        duration: '12min',
        status: 'DONE',
      },
      {
        id: '2',
        name: 'Be one',
        duration: '12min',
        status: 'NEXT_UP',
      },
      {
        id: '3',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
      {
        id: '4',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
      {
        id: '5',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
    ],
  },
  {
    id: '3',
    episodes: [
      {
        id: '1',
        name: 'Get started',
        duration: '12min',
        status: 'DONE',
      },
      {
        id: '2',
        name: 'Be one',
        duration: '12min',
        status: 'NEXT_UP',
      },
      {
        id: '3',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
      {
        id: '4',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
      {
        id: '5',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
    ],
  },
  {
    id: '4',
    episodes: [
      {
        id: '1',
        name: 'Get started',
        duration: '12min',
        status: 'DONE',
      },
      {
        id: '2',
        name: 'Be one',
        duration: '12min',
        status: 'NEXT_UP',
      },
      {
        id: '3',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
      {
        id: '4',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
      {
        id: '5',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
    ],
  },
  {
    id: '5',
    episodes: [
      {
        id: '1',
        name: 'Get started',
        duration: '12min',
        status: 'DONE',
      },
      {
        id: '2',
        name: 'Be one',
        duration: '12min',
        status: 'NEXT_UP',
      },
      {
        id: '3',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
      {
        id: '4',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
      {
        id: '5',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
    ],
  },
  {
    id: '6',
    episodes: [
      {
        id: '1',
        name: 'Get started',
        duration: '12min',
        status: 'DONE',
      },
      {
        id: '2',
        name: 'Be one',
        duration: '12min',
        status: 'NEXT_UP',
      },
      {
        id: '3',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
      {
        id: '4',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
      {
        id: '5',
        name: 'Good night',
        duration: '12min',
        status: 'LOCKED',
      },
    ],
  },
];

const episodes = (_journey) => {
  const j = episode.find((journey) => journey.id === _journey.id);
  return j.episodes;
};

module.exports = episodes;
