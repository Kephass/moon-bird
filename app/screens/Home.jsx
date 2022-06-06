import { Card } from 'react-native-ui-lib';

import LottieView from 'lottie-react-native';

export default function Home() {
  return (
    <Card flex center>
      <LottieView source={require('../assets/animations/breathing-lotus.json')} mode="bounce" loop autoplay />
    </Card>
  );
}
