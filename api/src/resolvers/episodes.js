const journeys = [
  {
    id: '1',
    episodes: [
      {
        id: '1',
        name: 'Episode 1',
        duration: '1:00',
        status: 'DONE',
      },
      {
        id: '2',
        name: 'Episode 2',
        duration: '1:00',
        status: 'NEXT_UP',
      },
    ],
  },
  {
    id: '2',
    episodes: [
      {
        id: '1',
        name: 'Episode 1',
        duration: '1:00',
        status: 'DONE',
      },
      {
        id: '2',
        name: 'Episode 2',
        duration: '1:00',
        status: 'NEXT_UP',
      },
    ],
  },
  {
    id: '3',
    episodes: [
      {
        id: '1',
        name: 'Episode 1',
        duration: '1:00',
        status: 'DONE',
      },
      {
        id: '2',
        name: 'Episode 2',
        duration: '1:00',
        status: 'NEXT_UP',
      },
    ],
  },
  {
    id: '4',
    episodes: [
      {
        id: '1',
        name: 'Episode 1',
        duration: '1:00',
        status: 'DONE',
      },
      {
        id: '2',
        name: 'Episode 2',
        duration: '1:00',
        status: 'NEXT_UP',
      },
    ],
  },
  {
    id: '5',
    episodes: [
      {
        id: '1',
        name: 'Episode 1',
        duration: '1:00',
        status: 'DONE',
      },
      {
        id: '2',
        name: 'Episode 2',
        duration: '1:00',
        status: 'NEXT_UP',
      },
    ],
  },
  {
    id: '6',
    episodes: [
      {
        id: '1',
        name: 'Episode 1',
        duration: '1:00',
        status: 'DONE',
      },
      {
        id: '2',
        name: 'Episode 2',
        duration: '1:00',
        status: 'NEXT_UP',
      },
    ],
  },
];

const episodes = (_journey) => {
  const j = journeys.find((journey) => journey.id === _journey.id);
  return j.episodes;
};

export default episodes;
