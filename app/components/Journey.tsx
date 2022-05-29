import { TouchableOpacity, StyleSheet } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from './Themed';
import { journeyColors } from '../constants/Colors';

interface Props {
  Icon?: React.ReactNode;
  title: string;
  description: string;
  progress: string;
  id: string;
}

const Journey = (props: Props) => {
  const { Icon, title, description, progress, id } = props;
  const color = journeyColors[id] || '#2A5741';
  const style = { backgroundColor: color, width: progress, height: '100%' };

  return (
    <TouchableOpacity>
      <MaterialIcons name="center-focus-strong" size={24} color="black" />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.progress}>
          <View style={style} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
  description: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  progress: {
    width: '100%',
    height: 8,
    backgroundColor: '#718096',
    borderRadius: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default Journey;
