import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Hotels} from './screens/hotels';

import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <QueryClientProvider client={queryClient}>
        <Hotels />
      </QueryClientProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
