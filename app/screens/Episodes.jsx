import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import useEpisodes from '../hooks/useEpisodes';

const Episodes = () => {
  const { params } = useRoute();
  const { episodes } = useEpisodes(params.id);
  return (
    <View backgroundColor="white">
      {episodes.map((episode) => (
        <Text key={episode.id}>{episode.status}</Text>
      ))}
    </View>
  );
};

export default Episodes;
