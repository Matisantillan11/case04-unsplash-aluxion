import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../lib/theme/colors';

export const Hamburguer = () => {
  return (
    <>
      <View style={{marginLeft: 30}}>
        <View style={styles.first} />
        <View style={styles.last} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  first: {
    marginVertical: 5,
    width: 21,
    height: 4,
    backgroundColor: colors.dark,
    borderRadius: 20,
  },
  last: {
    marginVertical: 5,
    marginLeft: 10.5,
    width: 21,
    height: 4,
    backgroundColor: colors.dark,
    borderRadius: 20,
  },
});
