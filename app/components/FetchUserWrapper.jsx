import React from 'react';
import { LoaderScreen } from 'react-native-ui-lib';
import Colors from '../constants/Colors';
import { useFetchCurrentUser } from '../hooks';

export const FetchUserWrapper = ({ children }) => {
  const { loading } = useFetchCurrentUser();
  if (loading) return <LoaderScreen message={'Loading...'} color={Colors.light.green} />;
  return <>{children}</>;
};
