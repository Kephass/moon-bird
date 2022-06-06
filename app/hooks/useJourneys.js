import { gql, useQuery } from '@apollo/client';

const GET_JOURNEYS = gql`
  query journeys {
    journeys {
      id
      name
      description
      type
      progress
      isComingSoon
    }
  }
`;

const useJourneys = () => {
  const { loading, error, data } = useQuery(GET_JOURNEYS);
  const journeys = data ? data.journeys : [];
  return { loading, error, data, journeys };
};

export default useJourneys;
