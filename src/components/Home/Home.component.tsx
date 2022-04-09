import React, {useEffect, useRef, useState} from 'react';

import {
  View,
  Animated,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Pressable,
  Image,
  ImageProps,
  ActivityIndicator,
} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

//library
import {colors} from '../../lib/theme/colors';
import {Picture} from '../../interfaces/interfaces';
import {Header} from '../Header/Header.component';
import {CardController} from '../../controllers/Home/Card.controller';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  pictures: Picture[];
  status: 'fetching' | 'fetched' | 'error' | 'initial';
}

export const Home = ({navigation, pictures, status}: Props) => {
  const {width} = useWindowDimensions();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      votes: '354',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      votes: '1852',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      votes: '200',
    },
  ];

  return (
    <>
      <Header />
      <ScrollView>
        <View style={[styles.root, {marginVertical: width * 0.2}]}>
          {pictures?.map((picture: Picture, index: number) => (
            <CardController
              onPress={() => {
                navigation.navigate('PictureDetail', {
                  pictures,
                  pictureSelected: picture.id,
                });
              }}
              text={picture?.description}
              votes={picture?.likes.toString()}
              key={picture.id}
              index={index}
              image={picture?.urls?.regular}
              gradientColors={[colors.gray, colors.grayOpacity70]}
            />
          ))}
        </View>
      </ScrollView>

      {/* <PictureDetailController
        opacity={fadeAnimation}
        navigation={navigation}
      /> */}
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    zIndex: 9,
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },

  animatedPicture: {},
});
