import React from 'react';
import { StyleSheet, useWindowDimensions} from 'react-native';
import {colors} from '../../lib/theme/colors';
import {Header} from '../Header/Header.component';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import {PictureFullPage} from './PictureFullpage.component';
import {Picture} from '../../interfaces/interfaces';
import Carousel from 'react-native-snap-carousel';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  pictures: Picture[];
  picture: number;
}

export const PictureDetail = ({navigation, pictures, picture}: Props) => {
  const {width} = useWindowDimensions();
  return (
    <>
      <Header location="pictureDetail" navigation={navigation} />
      <Carousel
        layout="tinder"
        data={pictures}
        renderItem={item => (
          <PictureFullPage navigation={navigation} picture={item.item} />
        )}
        sliderWidth={width}
        firstItem={picture}
        itemWidth={width}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    borderRadius: 10,
    position: 'relative',
  },
  gradient: {
    padding: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  textContainer: {marginLeft: '5%', marginRight: '20%', marginVertical: 15},
  title: {
    fontSize: 42,
    lineHeight: 49,
    fontWeight: 'bold',
    color: colors.white,
  },
  votes: {
    fontSize: 14,
    lineHeight: 16,
    color: colors.white,
  },
  authorContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '5%',
    marginVertical: 15,
  },
  authorImage: {width: 37, height: 37, borderRadius: 50, marginRight: 10},
  authorName: {
    fontSize: 12,
    lineHeight: 14,
    color: colors.white,
    marginBottom: 5,
  },
  viewButton: {
    fontSize: 10,
    lineHeight: 12,
    color: colors.white,
  },
});
