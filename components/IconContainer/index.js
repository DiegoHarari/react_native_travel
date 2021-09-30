import React from 'react';
import {View, Image} from 'react-native';

export const IconContainer = ({width, height, top, bottom, left, right}) => (
  <View>
    <Image
      style={{width, height, top, bottom, left, right}}
      source={require('../../assets/9-93808_golden-stars-png-golden-star-transparent.png')}
    />
  </View>
);
