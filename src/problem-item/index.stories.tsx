import * as React from 'react';

//import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import ProblemItem from './';

const fakeProblem = {
  image: require(`../image/pintura-mulher.jpg`),
  title: 'Pintura de parede',
  price: 300,
  type: 'painting'
}

const withPrice = false

storiesOf('Problem Item', module)
  .add('pintura', () => (
    <ProblemItem problem={fakeProblem} withPrice={withPrice}
    />
  ));