import React from 'react';

import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Animated,
} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {CardController} from '../../controllers/Home/Card.controller';
import {Header} from '../Header/Header.component';
import { Loader } from '../Loader/Loader.component';

//library
import {colors} from '../../lib/theme/colors';

//interfaces 

import {Picture} from '../../interfaces/interfaces';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  pictures: Picture[];
  status: 'fetching' | 'fetched' | 'error' | 'initial';
  positionAnimationY: Animated.Value
}

export const Home = ({navigation, pictures, status, positionAnimationY}: Props) => {

  return (
    <SafeAreaView>
      {status === 'fetching' ? (
        <Loader />
      ) : (
        <>
          <ScrollView>
            <Header location="home" navigation={navigation} />
            <Animated.View style={[styles.root, {top: positionAnimationY}]}>
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
            </Animated.View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
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
    marginBottom: 20,
  },

  animatedPicture: {},
});
