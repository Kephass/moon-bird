const currentUser = require('./currentUser');
const journeys = require('./journeys');
const journey = require('./journey');
const episodes = require('./episodes');

const resolvers = {
  Query: {
    journey,
    journeys,
    currentUser,
  },
  Journey: {
    episodes,
  },
};

module.exports = resolvers;
