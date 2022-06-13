import { ListItem, Text, View } from 'react-native-ui-lib';
import Colors from '../constants/Colors';
import { journeyColors } from '../constants/Colors';

import { useGetJourneys } from '../hooks';

import ArrowRight from '../assets/icons/chevron-right.svg';

import FocusBlob from '../assets/icons/focus-blob.svg';
import FocusIcon from '../assets/icons/focus.svg';

import SleepBlob from '../assets/icons/sleep-blob.svg';
import SleepIcon from '../assets/icons/sleep.svg';

import HappyBlob from '../assets/icons/happy-blob.svg';
import HappyIcon from '../assets/icons/happy.svg';

import PersonalBlob from '../assets/icons/personal-blob.svg';
import PersonalIcon from '../assets/icons/personal.svg';
import { ScrollView } from 'react-native';

const journeyIcons = [
  {
    id: '1',
    color: '#002FA7',
    blob: <FocusBlob />,
    Icon: <FocusIcon />,
  },
  {
    id: '2',
    color: '#2A5741',
    blob: <SleepBlob />,
    Icon: <SleepIcon />,
  },
  {
    id: '3',
    color: '#E8A455',
    blob: <HappyBlob />,
    Icon: <HappyIcon />,
  },
  {
    id: '4',
    color: '#002FA7',
    blob: <PersonalBlob />,
    Icon: <PersonalIcon />,
  },
  {
    id: '5',
    color: '#2A5741',
    blob: <SleepBlob />,
    Icon: <SleepIcon />,
  },
  {
    id: '6',
    color: '#2A5741',
    blob: <SleepBlob />,
    Icon: <SleepIcon />,
  },
];

export default function Journeys({ navigation }) {
  const { journeys } = useGetJourneys();

  return (
    <ScrollView flex borderRadius="0" paddingHorizontal={20} backgroundColor="white">
      {journeys.map((journey) => (
        <View key={journey.id} style={journey.isComingSoon ? { opacity: '.4', pointerEvents: 'none' } : ''}>
          <ListItem
            onPress={() =>
              navigation.navigate('Episodes', {
                id: journey.id,
                name: journey.name,
                description: journey.description,
                progress: journey.progress,
              })
            }
            style={{ marginVertical: 10 }}
          >
            <View flex row spread>
              <View style={{ position: 'relative' }}>
                {journeyIcons[journey?.id - 1].blob}

                <View
                  style={{
                    position: 'absolute',
                    top: 25,
                    left: 22,
                    alignItems: 'center',
                  }}
                >
                  {journeyIcons[journey?.id - 1].Icon}
                </View>
              </View>
              <View flex>
                <Text marginV-5 text70 style={{ color: Colors.light.titleBlack, fontWeight: 'bold' }}>
                  {journey.name}
                </Text>
                <Text text80 marginB-5 color={Colors.light.textGray} fon>
                  {journey.description}
                </Text>
                {journey.progress > 0 && (
                  <View
                    marginV-5
                    style={{ width: '100%', height: 8, backgroundColor: '#f2f2f2', borderRadius: '15' }}
                  >
                    <View
                      style={{
                        backgroundColor: journeyIcons[journey.id - 1].color,
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
    </ScrollView>
  );
}
