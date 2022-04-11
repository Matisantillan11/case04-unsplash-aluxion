import React from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {colors} from '../../lib/theme/colors';
import {Header} from '../Header/Header.component';
import {CardController} from '../../controllers/Home/Card.controller';
import {Photo, User} from '../../interfaces/interfaces';
import {Loader} from '../Loader/Loader.component';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  photosOfUser: Photo[];
  author: User;
  status: 'fetching' | 'fetched' | 'error' | 'initial';
  positionAnimationY: Animated.Value;
  positionAnimationX: Animated.Value;
}

export const Author = ({navigation, photosOfUser, status, author, positionAnimationY, positionAnimationX}: Props) => {
  const {width, height} = useWindowDimensions();
  return (
    <SafeAreaView>
      {status === 'fetching' ? (
        <Loader />
      ) : (
        <>
          <Header location="author" navigation={navigation} />
          <ScrollView>
            <Animated.View
              style={[styles.infoContainer, {width, height: height * 0.15, left: positionAnimationX}]}>
              <Image
                style={styles.imageProfile}
                source={{
                  uri: author?.profile_image.medium,
                }}
              />
              <View style={[styles.authorContainer, {width: width * 0.7}]}>
                <Text style={styles.authorName}>{author?.name}</Text>
                <Text style={styles.biography} numberOfLines={3}>
                  {author?.bio}
                </Text>
              </View>
            </Animated.View>

            <Animated.View style={[styles.carouselContainer, { top: positionAnimationY}]}>
              <Text style={styles.title}>My photos</Text>

              {photosOfUser?.map((photo: Photo, index: number) => (
                <CardController
                  onPress={() => {
                    navigation.navigate('PictureDetail', {
                      pictures: photosOfUser,
                      pictureSelected: photo.id,
                    });
                  }}
                  text={photo?.description}
                  votes={photo?.likes.toString()}
                  key={photo.id}
                  index={index}
                  image={photo?.urls?.regular}
                  gradientColors={[colors.gray, colors.grayOpacity70]}
                />
              ))}
            </Animated.View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  imageProfile: {width: 63, height: 63, borderRadius: 50},
  authorContainer: {
    marginHorizontal: 10,
    justifyContent: 'space-evenly',
  },
  authorName: {
    fontSize: 22,
    lineHeight: 25,
    fontWeight: 'bold',
    color: colors.dark,
  },
  biography: {
    fontSize: 12,
    lineHeight: 14,
    color: colors.darkOpacity,
  },
  carouselContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 42,
    lineHeight: 49,
    color: colors.dark,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 10,
  },
});
