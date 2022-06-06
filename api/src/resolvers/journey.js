const journeys = [
  {
    id: '1',
    name: 'Focus',
    description: 'Get some sleep and sweet dreams',
    type: 'FOCUS',
    progress: 20,
    isComingSoon: false,
  },
  {
    id: '2',
    name: 'Sleep',
    description: 'Get some sleep and sweet dreams',
    type: 'SLEEP',
    progress: 0,
    isComingSoon: false,
  },
  {
    id: '3',
    name: 'Happy',
    description: 'Get some sleep and sweet dreams',
    type: 'HAPPY',
    progress: 90,
    isComingSoon: false,
  },
  {
    id: '4',
    name: 'Personal',
    description: 'Get some sleep and sweet dreams',
    type: 'PERSONAL',
    progress: 0,
    isComingSoon: false,
  },
  {
    id: '5',
    name: 'Energy',
    description: 'Get some sleep and sweet dreams',
    type: 'SLEEP',
    progress: 0,
    isComingSoon: true,
  },
  {
    id: '6',
    name: 'Energy',
    description: 'Get some sleep and sweet dreams',
    type: 'SLEEP',
    progress: 0,
    isComingSoon: true,
  },
];

const journey = (_, args) => {
  const journey = journeys.find((j) => j.id === args.id);
  return journey;
};

module.exports = journey;
