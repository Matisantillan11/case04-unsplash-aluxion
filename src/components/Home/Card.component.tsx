import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//library
import {colors} from '../../lib/theme/colors';

export interface CardProps {
  text: string;
  votes: string;
  gradientColors: string[];
  onPress: () => void;
}

export const Card = ({text, votes, gradientColors, onPress}: CardProps) => {
  const {height} = useWindowDimensions();

  return (
    <>
      <Pressable onPress={onPress}>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={require('../../assets/tranquilidad-marina.png')}
          />
          <LinearGradient
            colors={gradientColors}
            style={[styles.gradient, {height: height * 0.1}]}>
            <Text style={styles.title}>{text}</Text>
            <Text style={styles.title}>{votes} votos</Text>
          </LinearGradient>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  card: {
    width: 151,
    height: 218,
    margin: 15,
    position: 'relative',
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  cardImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  gradient: {
    padding: 15,
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontSize: 12,
    lineHeight: 14,
    color: colors.white,
  },
  votes: {
    fontSize: 8,
    lineHeight: 9,
    color: colors.white,
  },
});
