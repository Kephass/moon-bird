import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/client';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import client from './services/apollo';
import { FetchUserWrapper } from './components';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <FetchUserWrapper>
          <Navigation />
          <StatusBar />
        </FetchUserWrapper>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}
