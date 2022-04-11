import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Hamburguer} from './Hamburguer.component';

export interface HeaderProps {
  location: 'home' | 'pictureDetail' | 'author';
  navigation: NavigationProp<ParamListBase>;
}

export const Header = ({location, navigation}: HeaderProps) => {
  const {width, height} = useWindowDimensions();

  return (
    <View
      style={[
        styles.header,
        {
          width,
          height: height * 0.15,
          position: location === 'pictureDetail' ? 'absolute' : 'relative',
          marginTop: location === 'pictureDetail' ? 45 : 0,
        },
      ]}>
      <Pressable onPress={() => location !== 'home' && navigation.goBack()}>
        <Hamburguer location={location} />
      </Pressable>
      <Text
        style={[styles.titleHeader, { marginLeft: width * 0.2}]}>
        {location === 'home' && 'Discover'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    top: 0,
    left: 0,
    zIndex: 2,
    paddingHorizontal: 25,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  titleHeader:
    {
     
      color: 'black',
      textAlign: 'center',
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: 24,
    }
  
});
