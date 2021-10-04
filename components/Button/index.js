import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export const SortButton = ({onPress, buttonText, customStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.buttonContainer, ...customStyle}}>
      <Text
        testId="buttonText"
        accessibilityRole={'text'}
        style={styles.buttonText}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};
