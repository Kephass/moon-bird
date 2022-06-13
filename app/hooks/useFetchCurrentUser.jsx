import { gql, useQuery } from '@apollo/client';

const GET_CURRENT_USER = gql`
  query currentUser {
    currentUser {
      id
      name
      email
    }
  }
`;

export const useFetchCurrentUser = () => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER);
  const user = data ? data.currentUser : [];
  return { loading, error, data, user };
};
