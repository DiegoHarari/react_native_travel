import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export const TextContainer = ({text, style, textStyle, capitalize}) => {
  const capitalizeFirstLetter = str =>
    str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <View style={{...styles.container, ...style}}>
      <Text
        numberOfLines={2}
        adjustsFontSizeToFit
        ellipsizeMode={'head'}
        style={{...styles.mainTitle, ...textStyle}}>
        {capitalize ? capitalizeFirstLetter(text) : text.toString()}
      </Text>
    </View>
  );
};
