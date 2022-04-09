import React, {useRef} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../lib/theme/colors';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Picture} from '../../interfaces/interfaces';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  picture: Picture;
}

export const PictureFullPage = ({navigation, picture}: Props) => {
  const {width, height} = useWindowDimensions();
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  return (
    <>
      <Pressable onPress={fadeIn}>
        <Animated.View
          style={[
            styles.container,
            {
              width,
              height,
            },
          ]}>
          <Image
            style={{width, height}}
            source={{
              uri: picture?.urls?.regular,
            }}
          />
          <Animated.View style={{opacity: fadeAnimation}}>
            <LinearGradient
              colors={[colors.grayOpacity20, colors.grayOpacity70]}
              style={[styles.gradient, {width, height: height * 0.35}]}>
              <View style={[styles.textContainer, {width: width * 0.7}]}>
                <Text style={styles.title} numberOfLines={2}>
                  {picture?.description}
                </Text>
                <Text style={styles.votes}>
                  {picture?.likes.toString()} votos
                </Text>
              </View>

              <View style={styles.authorContainer}>
                <Image
                  style={styles.authorImage}
                  source={{
                    uri: picture?.user?.profile_image?.medium,
                  }}
                />

                <View>
                  <Text style={styles.authorName}>{picture?.user?.name}</Text>
                  <Pressable
                    onPress={() =>
                      navigation.navigate('Author', {author: picture?.user})
                    }>
                    <Text style={styles.viewButton}>View Profile</Text>
                  </Pressable>
                </View>
              </View>
            </LinearGradient>
          </Animated.View>
        </Animated.View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    borderRadius: 10,
    position: 'relative',
  },
  gradient: {
    padding: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  textContainer: {marginLeft: '5%', marginRight: '20%', marginVertical: 15},
  title: {
    fontSize: 42,
    lineHeight: 49,
    fontWeight: 'bold',
    color: colors.white,
  },
  votes: {
    fontSize: 14,
    lineHeight: 16,
    color: colors.white,
  },
  authorContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '5%',
    marginVertical: 15,
  },
  authorImage: {width: 37, height: 37, borderRadius: 50, marginRight: 10},
  authorName: {
    fontSize: 12,
    lineHeight: 14,
    color: colors.white,
    marginBottom: 5,
  },
  viewButton: {
    fontSize: 10,
    lineHeight: 12,
    color: colors.white,
  },
});
