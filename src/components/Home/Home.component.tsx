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
import {Loader} from '../Loader/Loader.component';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  pictures: Picture[];
  status: 'fetching' | 'fetched' | 'error' | 'initial';
}

export const Home = ({navigation, pictures, status}: Props) => {
  const {width} = useWindowDimensions();

  return (
    <>
      {status === 'fetching' ? (
        <ActivityIndicator size="large" color={colors.gray} />
      ) : (
        <>
          <ScrollView>
            <Header location="home" navigation={navigation} />
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
        </>
      )}
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
