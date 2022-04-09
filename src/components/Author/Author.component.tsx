import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Card} from '../Home/Card.component';
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
}

export const Author = ({navigation, photosOfUser, status, author}: Props) => {
  const {width, height} = useWindowDimensions();
  return (
    <>
      {status === 'fetching' ? (
        <Loader />
      ) : (
        <>
          <Header location="author" navigation={navigation} />
          <ScrollView>
            <View
              style={[
                styles.infoContainer,
                {width, height: height * 0.15, marginVertical: height * 0.02},
              ]}>
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
            </View>

            <View style={styles.carouselContainer}>
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
              {/* <CardController
             onPress={() => {
              navigation.navigate('PictureDetail', {
                pictures,
                pictureSelected: picture.id,
              });
            }}
            text={picture?.description}
            votes={picture?.likes.toString()}
            key={picture.id}
            index={index}
            image={picture?.urls?.regular}
            gradientColors={[colors.gray, colors.grayOpacity70]}
          /> */}
            </View>
          </ScrollView>
        </>
      )}
    </>
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
    justifyContent: 'space-between',
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
    marginVertical: 10,
    marginLeft: 10,
  },
});
