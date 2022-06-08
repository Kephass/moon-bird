import React from 'react';
import { LoaderScreen } from 'react-native-ui-lib';
import Colors from '../constants/Colors';
import useCurrentUser from '../hooks/useCurrentUser';

const Wrapper = ({ children }) => {
  const { loading } = useCurrentUser();
  if (loading) return <LoaderScreen message={'Loading...'} color={Colors.light.green} />;
  return <>{children}</>;
};

export default Wrapper;
