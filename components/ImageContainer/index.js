import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';

export const ImageContainer = ({source}) => {
  const renderItem = ({item}) => {
    return (
      <Image
        style={styles.container}
        source={{
          uri: item,
        }}
      />
    );
  };

  return (
    <Carousel
      layout={'tinder'}
      data={source}
      sliderWidth={100}
      itemWidth={170}
      itemHeight={170}
      renderItem={renderItem}
    />
  );
};
