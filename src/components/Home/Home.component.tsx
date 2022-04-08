import React, {useRef, useState} from 'react';

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
} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Card} from './Card.component';
import LinearGradient from 'react-native-linear-gradient';

//library
import {colors} from '../../lib/theme/colors';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export const Home = ({navigation}: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  return (
    <>
      <ScrollView>
        <View style={styles.root}>
          <Card
            onPress={() => {
              navigation.navigate('PictureDetail');
            }}
            text="Tranquilidad Marina"
            votes="200"
            gradientColors={[colors.gray, colors.grayOpacity70]}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  animatedPicture: {},
});
