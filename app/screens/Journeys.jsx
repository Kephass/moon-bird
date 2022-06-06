import { Card, Text } from 'react-native-ui-lib';
import useJourneys from '../hooks/useJourneys';

export default function Journeys() {
  const { journeys } = useJourneys();

  return (
    <Card>
      {journeys.map((journey) => (
        <Text key={journey.id}>{journey.name}</Text>
      ))}
    </Card>
  );
}
