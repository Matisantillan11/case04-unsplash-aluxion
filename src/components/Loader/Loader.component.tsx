import React from 'react';
import {ActivityIndicator, useWindowDimensions, View} from 'react-native';
import {colors} from '../../lib/theme/colors';

export const Loader = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={{
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
      }}>
      <ActivityIndicator size="large" color={colors.dark} />
    </View>
  );
};
