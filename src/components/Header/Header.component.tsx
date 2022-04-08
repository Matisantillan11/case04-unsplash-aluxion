import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {Hamburguer} from './Hamburguer.component';

export const Header = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={[styles.header, {width, height: height * 0.1}]}>
      <Hamburguer />
      <Text
        style={{
          marginLeft: width * 0.2,
          color: 'black',
          textAlign: 'center',
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 24,
        }}>
        Discover
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    flexDirection: 'row',
    backgroundColor: 'transparent',

    alignItems: 'center',
  },
});
