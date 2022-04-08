import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

export const Header = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={[styles.header, {width, height: height * 0.1}]}>
      <Text
        style={{
          color: '#ffffff',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 18,
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
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
