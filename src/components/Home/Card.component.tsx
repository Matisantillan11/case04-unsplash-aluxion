import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//library
import {colors} from '../../lib/theme/colors';

export interface CardProps {
  text: string | null;
  votes: string | null;
  image: string;
  gradientColors: string[];
  onPress: () => void;
  index: number;
  checkIndexIsOdd: (n: number) => Boolean;
}

export const Card = ({
  text,
  votes,
  image,
  gradientColors,
  onPress,
  index,
  checkIndexIsOdd,
}: CardProps) => {
  const {height} = useWindowDimensions();
  const odd = checkIndexIsOdd(index);

  return (
    <>
      <Pressable onPress={onPress}>
        <View style={[styles.card, {marginTop: odd ? 35 : 0}]}>
          <Animated.Image style={[styles.cardImage]} source={{uri: image}} />
          <LinearGradient
            colors={gradientColors}
            style={[styles.gradient, {height: height * 0.1}]}>
            <Text style={styles.title} numberOfLines={1}>
              {text}
            </Text>
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
    marginHorizontal: 15,
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    borderRadius: 10,
  },

  cardImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  gradient: {
    width: '100%',
    padding: 15,
    justifyContent: 'flex-end',
    alignContent: 'flex-start',
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
