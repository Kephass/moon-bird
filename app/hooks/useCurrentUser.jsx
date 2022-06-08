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

const useCurrentUser = () => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER);
  const user = data ? data.currentUser : [];
  return { loading, error, data, user };
};

export default useCurrentUser;
