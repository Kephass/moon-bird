import { Card } from 'react-native-ui-lib';
import LottieView from 'lottie-react-native';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native']);

export default function Home() {
  return (
    <Card flex center>
      <LottieView source={require('../assets/animations/breathing-lotus.json')} mode="bounce" loop autoplay />
    </Card>
  );
}
