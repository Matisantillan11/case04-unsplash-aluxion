import React, {useRef, useState} from 'react';
import {Pressable, Animated, useWindowDimensions} from 'react-native';
export const PictureAnimated = () => {
  const {width, height} = useWindowDimensions();
  const [imageToShow, setImageToShow] = useState(
    'https://images.unsplash.com/photo-1649393153856-c4929d8e309f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  );

  /* const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }; */

  return {
    /* <Pressable onPress={fadeOut}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          width,
          height,
        }}>
        <Image style={{width, height}} source={{uri: imageToShow}} />
      </Animated.View>
    </Pressable> */
  };
};
