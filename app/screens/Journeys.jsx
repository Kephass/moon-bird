import { Card, ListItem, Text, View, Assets, Image } from 'react-native-ui-lib';

import useJourneys from '../hooks/useJourneys';

import Blob from '../assets/icons/blobs.svg';
import ArrowRight from '../assets/icons/chevron-right.svg';
import FocusIcon from '../assets/icons/focus.svg';
import SleepIcon from '../assets/icons/sleep.svg';
import HappyIcon from '../assets/icons/happy.svg';
import BreathingIcon from '../assets/icons/personal.svg';
import { TouchableOpacity } from 'react-native';

export default function Journeys({ navigation }) {
  const { journeys } = useJourneys();

  Assets.loadAssetsGroup('icons', {
    focus: require('../assets/icons/focus.svg'),
  });

  return (
    <View flex borderRadius="0" style={{ paddingHorizontal: 20, backgroundColor: 'white' }}>
      {journeys.map((journey) => (
        <View key={journey.id}>
          <ListItem
            onPress={() => navigation.navigate('Episodes', { id: journey.id })}
            style={{ marginVertical: 10 }}
          >
            <View flex row spread>
              <View>
                <Blob>
                  <Image assetName="focus" assetGroup="icons" />
                </Blob>
              </View>
              <View flex>
                <Text marginV-5 text70 style={{ color: '#343A40', fontWeight: 'bold' }}>
                  {journey.name}
                </Text>
                <Text marginV-5 style={{ color: '#718096' }}>
                  {journey.description}
                </Text>
                {journey.progress > 0 && (
                  <View
                    marginV-5
                    style={{ width: '100%', height: 8, backgroundColor: '#f2f2f2', borderRadius: '15' }}
                  >
                    <View
                      style={{
                        backgroundColor: '#012fa7',
                        width: `${journey.progress}%`,
                        height: '100%',
                        borderRadius: 15,
                      }}
                    />
                  </View>
                )}
              </View>
              <View centerV>
                <ArrowRight />
              </View>
            </View>
          </ListItem>
          <View marginV-6 style={{ width: '100%', height: 1, backgroundColor: '#f2f2f2' }} />
        </View>
      ))}
    </View>
  );
}
