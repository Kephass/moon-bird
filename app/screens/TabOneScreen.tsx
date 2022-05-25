import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Felix</Text>
      <Text style={styles.title}>Email: {user?.email}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
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
