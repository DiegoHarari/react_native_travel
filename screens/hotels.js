import React from 'react';
import {useQuery} from 'react-query';
import {View} from 'react-native';
import {CardContainer} from '../components/CardComponent/index';

export const Hotels = () => {
  const {isLoading, error, data} = useQuery('repoData', () =>
    fetch('https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507').then(
      res => res.json(),
    ),
  );
  return (
    <View>
      <CardContainer data={data} error={error} isLoading={isLoading} />
    </View>
  );
};
