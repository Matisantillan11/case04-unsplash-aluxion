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
          height: height * 0.1,
          position: location === 'pictureDetail' ? 'absolute' : 'relative',
        },
      ]}>
      <Pressable onPress={() => location !== 'home' && navigation.goBack()}>
        <Hamburguer location={location} />
      </Pressable>
      <Text
        style={{
          marginLeft: width * 0.2,
          color: 'black',
          textAlign: 'center',
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 24,
        }}>
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
    padding: 25,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
});
