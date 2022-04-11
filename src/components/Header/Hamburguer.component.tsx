import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../lib/theme/colors';

interface BurguerProps {
  location: 'home' | 'pictureDetail' | 'author';
}

export const Hamburguer = ({location}: BurguerProps) => {
  return (
    <>
      {location === 'pictureDetail' || location === 'author' ? (
        <View
          style={{
            borderRadius: 50,
            borderWidth: 3,
            padding: 4,
            borderColor: location === 'author' ? colors.dark : colors.white,
          }}>
          <View
            style={[
              styles.first,
              {
                backgroundColor:
                  location === 'author' ? colors.dark : colors.white,
                transform: [
                  {rotate: '-45deg'},
                  {translateX: 0.5},
                  {translateY: 7.5},
                ],
              },
            ]}
          />
          <View
            style={[
              styles.last,
              {
                backgroundColor:
                  location === 'author' ? colors.dark : colors.white,
                transform: [
                  {rotate: '45deg'},
                  {translateX: -10},
                  {translateY: -2.5},
                ],
              },
            ]}
          />
        </View>
      ) : (
        <View>
          <View style={[styles.first, {backgroundColor: colors.dark}]} />
          <View style={[styles.last, {backgroundColor: colors.dark}]} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  first: {
    marginVertical: 5,
    width: 21,
    height: 4,

    borderRadius: 20,
  },
  last: {
    marginVertical: 5,
    marginLeft: 10.5,
    width: 21,
    height: 4,

    borderRadius: 20,
  },
});
