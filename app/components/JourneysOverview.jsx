import React from 'react';
import useSWR from 'swr';

import { ListItem, Text } from 'react-native-ui-lib';

const JourneysOverview = () => {
  return (
    <ListItem onPress={() => console.log('pressed')}>
      <Text grey10 text60 marginL-10>
        The item
      </Text>
    </ListItem>
  );
};

export default JourneysOverview;

then((res) => {
  res?.data?.results;
});
