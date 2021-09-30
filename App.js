import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Hotels} from './screens/hotels';

import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaView
      style={{flex: 1, padding: 5, marginTop: 20, flexDirection: 'row'}}>
      <QueryClientProvider client={queryClient}>
        <Hotels />
      </QueryClientProvider>
    </SafeAreaView>
  );
}
