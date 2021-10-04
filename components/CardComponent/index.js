import React from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import styles from './styles';
import DefaultStyles from '../../constants/default-styles';

import {TextContainer} from '../TextContainer/index';
import {IconContainer} from '../IconContainer/index';
import {ImageContainer} from '../ImageContainer/index';
import {SortButton} from '../../components/Button/index';

export const CardContainer = ({isLoading, error, data}) => {
  const [hotelsData, setHotelsData] = React.useState();
  const [isSorted, setIsSorted] = React.useState(false);
  const sortBy = () => {
    setIsSorted(true);
    setHotelsData(hotelsData.sort((a, b) => a.name.localeCompare(b.name)));
  };

  React.useEffect(() => {
    if (!isSorted) {
      setHotelsData(data);
    }
  }, [isLoading]);

  console.log(hotelsData);
  return (
    <View style={styles.mainContainer}>
      {isLoading && <ActivityIndicator />}
      {error && (
        <View>
          <Text>{error.message}</Text>
        </View>
      )}
      {!isLoading && (
        <View>
          <SortButton
            buttonText={'Sort Hotels By Name'}
            onPress={sortBy}
            customStyle={{
              backgroundColor: DefaultStyles.primaryColor.backgroundColor,
            }}
          />
          <FlatList
            data={hotelsData}
            keyExtractor={item => item.id}
            renderItem={item => (
              <View style={styles.cardContainer}>
                <ImageContainer
                  source={item.item.gallery}
                  name={item.item.name}
                />

                <View style={styles.infoContainer}>
                  <TextContainer text={item.item.name} capitalize />
                  <View style={{flexDirection: 'row', paddingVertical: 5}}>
                    {[...Array(item.item.stars)].map((item, index) => (
                      <IconContainer width={15} height={15} key={index} />
                    ))}
                    <TextContainer
                      text={item.item.userRating}
                      capitalize={false}
                      textStyle={{fontSize: 12}}
                      style={{paddingLeft: 10}}
                    />
                  </View>
                  <TextContainer
                    text={item.item.location.city}
                    capitalize
                    textStyle={{fontSize: 12}}
                  />
                  <TextContainer
                    text={item.item.location.address}
                    capitalize
                    textStyle={{fontSize: 12}}
                  />
                  <TextContainer
                    text={`Check in: ${item.item.checkIn.from} to ${item.item.checkIn.to} `}
                    capitalize
                    textStyle={{fontSize: 12}}
                  />
                  <TextContainer
                    text={`check out: ${item.item.checkOut.from} to ${item.item.checkOut.to} `}
                    capitalize
                    textStyle={{fontSize: 12}}
                  />
                  <TextContainer
                    text={`Email: ${item.item.contact.email}`}
                    capitalize
                    textStyle={{fontSize: 12}}
                  />
                  <TextContainer
                    text={`Phone: ${item.item.contact.phoneNumber}`}
                    capitalize
                    textStyle={{fontSize: 12}}
                  />
                  <TextContainer
                    text={`${item.item.price} ${item.item.currency}  `}
                    capitalize
                    textStyle={{fontSize: 12}}
                  />
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};
