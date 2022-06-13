const currentUser = require('./currentUserResolver');
const journeys = require('./journeysResolver');
const journey = require('./journeyResolver');
const episodes = require('./episodesResolver');

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
