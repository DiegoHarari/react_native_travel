import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Hotels} from './screens/hotels';

import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <QueryClientProvider client={queryClient}>
        <Hotels />
      </QueryClientProvider>
    </SafeAreaView>
  );
}
