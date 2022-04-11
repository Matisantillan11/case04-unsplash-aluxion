import React from 'react';
import {Card} from '../../components/Home/Card.component';

interface CardPropsController {
  text: string | null;
  votes: string | null;
  image: string;
  gradientColors: string[];
  onPress: () => void;
  index: number;
}

export const CardController = (props: CardPropsController) => {
  const checkIndexIsOdd = (n: number): Boolean => {
    return n % 2 !== 0;
  };

  return <Card {...props} checkIndexIsOdd={checkIndexIsOdd} />;
};
