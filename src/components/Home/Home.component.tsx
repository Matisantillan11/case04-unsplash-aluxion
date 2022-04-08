import React, {useEffect, useRef, useState} from 'react';

import {
  View,
  Text,
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
import {Card} from './Card.component';
import EStyleSheet from 'react-native-extended-stylesheet';

//library
import {colors} from '../../lib/theme/colors';
import {Picture} from '../../interfaces/interfaces';
import {Header} from '../Header/Header.component';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  pictures: Picture[];
  status: 'fetching' | 'fetched' | 'error' | 'initial';
}

export const Home = ({navigation, pictures, status}: Props) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const {width} = useWindowDimensions();
  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      <Header />
      <ScrollView>
        <View style={[styles.root, {marginVertical: width * 0.2}]}>
          {/*{pictures?.map((picture: Picture) => (*/}
          <Card
            onPress={() => fadeIn}
            text="Tranquilidad Marina"
            votes="200"
            index={0}
            gradientColors={[colors.gray, colors.grayOpacity70]}
          />
          <Card
            onPress={() => {
              navigation.navigate('PictureDetail');
            }}
            text="Tranquilidad Marina"
            votes="200"
            index={1}
            gradientColors={[colors.gray, colors.grayOpacity70]}
          />

          <Card
            onPress={() => fadeIn}
            text="Tranquilidad Marina"
            votes="200"
            index={2}
            gradientColors={[colors.gray, colors.grayOpacity70]}
          />
          <Card
            onPress={() => {
              navigation.navigate('PictureDetail');
            }}
            text="Tranquilidad Marina"
            votes="200"
            index={3}
            gradientColors={[colors.gray, colors.grayOpacity70]}
          />

          <Card
            onPress={() => fadeIn}
            text="Tranquilidad Marina"
            votes="200"
            index={4}
            gradientColors={[colors.gray, colors.grayOpacity70]}
          />
          <Card
            onPress={() => {
              navigation.navigate('PictureDetail');
            }}
            text="Tranquilidad Marina"
            votes="200"
            index={5}
            gradientColors={[colors.gray, colors.grayOpacity70]}
          />
          {/*}))}*/}
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
