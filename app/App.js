import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/client';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import client from './services/apollo';
import Wrapper from './components/Wrapper';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <Wrapper>
          <Navigation />
          <StatusBar />
        </Wrapper>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}
