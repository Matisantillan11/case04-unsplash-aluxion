import React from 'react';
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
import {Header} from '../Header/Header.component';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export const PictureDetail = ({navigation}: Props) => {
  const {width, height} = useWindowDimensions();
  return (
    <>
      <Header />
      <View
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
            uri: 'https://images.unsplash.com/photo-1649359929082-df0ab123036c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
          }}
        />
        <LinearGradient
          colors={[colors.grayOpacity20, colors.grayOpacity70]}
          style={[styles.gradient, {width, height: height * 0.35}]}>
          <View style={[styles.textContainer, {width: width * 0.7}]}>
            <Text style={styles.title}>Huitarra Canchera</Text>
            <Text style={styles.votes}>200 votos</Text>
          </View>

          <View style={styles.authorContainer}>
            <Image
              style={styles.authorImage}
              source={{
                uri: 'https://images.unsplash.com/profile-1639054208491-784e0fa32f1e?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
              }}
            />

            <View>
              <Text style={styles.authorName}>Norman Foster</Text>
              <Pressable onPress={() => navigation.navigate('Author')}>
                <Text style={styles.viewButton}>View Profile</Text>
              </Pressable>
            </View>
          </View>
        </LinearGradient>
      </View>
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
