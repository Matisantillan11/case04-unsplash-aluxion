import React from 'react';
import {
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

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export const Author = ({navigation}: Props) => {
  const {width, height} = useWindowDimensions();
  return (
    <>
      <Header />
      <ScrollView>
        <View
          style={[
            styles.infoContainer,
            {width, height: height * 0.15, marginTop: height * 0.1},
          ]}>
          <Image
            style={styles.imageProfile}
            source={{
              uri: 'https://images.unsplash.com/photo-1649359929082-df0ab123036c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
            }}
          />
          <View style={[styles.authorContainer, {width: width * 0.7}]}>
            <Text style={styles.authorName}>Norman Foster</Text>
            <Text style={styles.biography}>
              British architect whose company, Foster + Partners, maintains an
              international design practice famous for high-tech architecture.
            </Text>
          </View>
        </View>

        <View style={styles.carouselContainer}>
          <Text style={styles.title}>My photos</Text>

          <Card
            onPress={() => {
              navigation.navigate('PictureDetail');
            }}
            text="Tranquilidad Marina"
            votes="200"
            gradientColors={[colors.gray, colors.grayOpacity70]}
          />
          <Card
            onPress={() => {
              navigation.navigate('PictureDetail');
            }}
            text="Tranquilidad Marina"
            votes="200"
            gradientColors={[colors.gray, colors.grayOpacity70]}
          />
        </View>
      </ScrollView>
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
