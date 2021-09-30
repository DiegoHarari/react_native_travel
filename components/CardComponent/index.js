import React from 'react';
import {View, Text, ActivityIndicator, FlatList, Image} from 'react-native';
import styles from './styles';

import {TextContainer} from '../TextContainer/index';
import {IconContainer} from '../IconContainer/index';

export const CardContainer = ({isLoading, error, data}) => {
  console.log(data);
  return (
    <View style={styles.mainContainer}>
      {isLoading && <ActivityIndicator />}
      {error && (
        <View>
          <Text>{error.message}</Text>
        </View>
      )}
      {data && (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={item => (
            <View style={styles.cardContainer}>
              <Image
                style={{width: 150, height: 170}}
                source={{
                  uri: item.item.gallery[0],
                }}
              />
              <View>
                <TextContainer text={item.item.name} capitalize />
                <View style={{flexDirection: 'row', paddingVertical: 5}}>
                  {[...Array(item.item.stars)].map(() => (
                    <IconContainer width={15} height={15} left={10} />
                  ))}
                  <TextContainer
                    text={item.item.userRating}
                    capitalize={false}
                    textStyle={{fontSize: 12}}
                    style={{paddingLeft: 10, top: 2}}
                  />
                </View>
                <TextContainer
                  text={item.item.location.city}
                  capitalize
                  textStyle={{fontSize: 12}}
                  style={{margin: 0, padding: 0}}
                />
                <TextContainer
                  text={item.item.location.address}
                  capitalize
                  textStyle={{fontSize: 12}}
                  style={{margin: 0, padding: 0}}
                />
                <TextContainer
                  text={`Check in: ${item.item.checkIn.from} to ${item.item.checkIn.to} `}
                  capitalize
                  textStyle={{fontSize: 12}}
                  style={{margin: 0, padding: 0}}
                />
                <TextContainer
                  text={`check out: ${item.item.checkOut.from} to ${item.item.checkOut.to} `}
                  capitalize
                  textStyle={{fontSize: 12}}
                  style={{margin: 0, padding: 0}}
                />
                <TextContainer
                  text={`Email: ${item.item.contact.email}`}
                  capitalize
                  textStyle={{fontSize: 12}}
                  style={{margin: 0, padding: 0}}
                />
                <TextContainer
                  text={`Phone: ${item.item.contact.phoneNumber}`}
                  capitalize
                  textStyle={{fontSize: 12}}
                  style={{margin: 0, padding: 0}}
                />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};
