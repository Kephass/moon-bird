import { StyleSheet, Text, View } from 'react-native';

import LottieView from 'lottie-react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <LottieView source={require('../assets/animations/breathing-lotus.json')} mode="bounce" loop autoplay />
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
