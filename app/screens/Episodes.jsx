import { useRoute } from '@react-navigation/native';
import { useGetEpisodesOfJourney } from '../hooks/';

import Check from '../assets/icons/check.svg';
import Lock from '../assets/icons/lock.svg';

import Colors from '../constants/Colors';
import { Badge, Button, ListItem, Text, View } from 'react-native-ui-lib';
import { ScrollView } from 'react-native';

const Episodes = () => {
  const { params } = useRoute();
  const { episodes } = useGetEpisodesOfJourney(params.id);
  const button = (
    <Button
      label="Continue"
      size={Button.sizes.small}
      labelStyle={{ fontWeight: 'bold' }}
      backgroundColor={Colors.light.blue}
      paddingH-30
    />
  );

  return (
    <View flex style={{ paddingHorizontal: 20, backgroundColor: 'white' }}>
      <View row spread width="100%" marginV-30>
        <Text text60 color={Colors.light.titleBlack}>
          {params.name}
        </Text>
        {button}
      </View>
      <View marginB-20>
        <Text text80 color={Colors.light.textGray}>
          {params.description}
          {'. '}
          {params.description}
          {'. '}
          {params.description}
          {'. '}
          {params.description}
          {'. '}
          {params.description}
          {'. '}
        </Text>
      </View>
      {params.progress > 0 && (
        <View marginB-25 style={{ width: '100%', height: 8, backgroundColor: '#f2f2f2', borderRadius: '15' }}>
          <View
            style={{
              backgroundColor: '#012fa7',
              width: `${params.progress}%`,
              height: '100%',
              borderRadius: 15,
            }}
          />
        </View>
      )}
      <ScrollView marginT-20>
        {episodes.map((episode) => (
          <View
            key={episode.id}
            style={episode.status === 'LOCKED' ? { opacity: '.4', pointerEvents: 'none' } : ''}
          >
            <ListItem marginVertical-10>
              <View flex row spread>
                <View centerV marginH-10>
                  <Badge
                    label={episode.id}
                    labelStyle={{ fontSize: 16 }}
                    backgroundColor={
                      episode.status === 'DONE'
                        ? Colors.light.blue
                        : episode.status === 'NEXT_UP'
                        ? '#b8c0d5'
                        : '#ccd5ed'
                    }
                    borderRadius={50}
                    size={40}
                  />
                </View>
                <View flex centerV marginL-10>
                  <Text marginV-5 text70 style={{ color: Colors.light.titleBlack, fontWeight: 'bold' }}>
                    {episode.name}
                  </Text>
                  <Text marginV-5 color={Colors.light.textGray}>
                    {episode.duration}
                  </Text>
                </View>
                <View centerV>
                  {episode.status === 'DONE' ? <Check /> : episode.status === 'NEXT_UP' ? button : <Lock />}
                </View>
              </View>
            </ListItem>
            <View marginV-6 style={{ width: '100%', height: 1, backgroundColor: '#f2f2f2' }} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Episodes;
