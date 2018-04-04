import * as React from 'react';

//import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import CategoryButton from './';

storiesOf('Category Button', module)
  .add('eletrico', () => (
    <CategoryButton
    type="electric"
    />
  ))
  .add('hidraulico', () => (
    <CategoryButton
      type="hidraulic"
    />
  ))
  .add('pintura', () => (
    <CategoryButton
      type="painting"
    />
  ))
  .add('categoria', () => (
    <CategoryButton
      type="category"
    />
  ));
