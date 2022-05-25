const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    currentUser: User
    journey(id: ID!): Journey
    journeys: [Journey]
  }

  type User {
    id: ID
    email: String
  }

  type Journey {
    id: ID
    name: String
    description: String
    type: JourneyType
    progress: Int # Between 0 - 100
    isComingSoon: Boolean
    episodes: [Episode]
  }

  type Episode {
    id: ID
    name: String
    duration: String
    status: EpisodeStatus
  }

  enum JourneyType {
    SLEEP
    FOCUS
    HAPPY
    PERSONAL
  }

  enum EpisodeStatus {
    DONE
    NEXT_UP
    LOCKED
  }
`;

const resolvers = {
  Query: {
    currentUser: () => ({ id: '2', email: 'test@test.com' }),
    journey: () => ({}),
    journeys: () => [],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
