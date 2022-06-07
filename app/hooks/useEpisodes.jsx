import { gql, useQuery } from '@apollo/client';

const GET_EPISODES = gql`
  query journey($id: ID!) {
    journey(id: $id) {
      id
      episodes {
        id
        name
        duration
        status
      }
    }
  }
`;

const useEpisodes = (id = '') => {
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: {
      id,
    },
  });
  const episodes = data?.journey?.episodes || [];
  return { loading, error, data, episodes };
};

export default useEpisodes;
