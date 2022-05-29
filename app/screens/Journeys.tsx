import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Text, View } from '../components/Themed';
import Journey from '../components/Journey';
import { RootTabScreenProps } from '../types';

const journeyArray = [
  {
    id: 'focus',
    title: 'Focus',
    description: 'Get some sleep and sweet dreams',
    progress: '20%',
  },
  {
    id: 'goodnight',
    title: 'Goodnight',
    description: 'Get some sleep and sweet dreams',
    progress: '50%',
  },
  {
    id: 'happiness',
    title: 'Happiness',
    description: 'Get some sleep and sweet dreams',
    progress: '80%',
  },
  {
    id: 'breathing',
    title: 'Personalised breathing',
    description: 'Get some sleep and sweet dreams',
    progress: '10%',
  },
  {
    id: 'energy',
    title: 'Energy',
    description: 'Get some sleep and sweet dreams',
    progress: '50%',
  },
  {
    id: 'energ',
    title: 'Energy',
    description: 'Get some sleep and sweet dreams',
    progress: '50%',
  },
];

export default function Journeys({ navigation }: RootTabScreenProps<'Journeys'>) {
  const [user, setUser] = React.useState<{ id: string; email: string } | null>(null);

  React.useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:4000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              currentUser {
                id
                email
              }
            } 
            `,
        }),
      });
      const { data } = await response.json();
      console.log('🚀 ~ file: TabOneScreen.tsx ~ line 30 ~ data', data);

      setUser(data.currentUser);
    })();
  }, []);

  console.log('user', user);

  return <FlatList data={journeyArray} renderItem={({ item }) => <Journey {...item} />} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
