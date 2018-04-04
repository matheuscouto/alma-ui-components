import * as React from 'react';

//import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import CategoryType from './';

storiesOf('Category Type', module)
  .add('eletrico', () => (
    <CategoryType
    type="electric"
    />
  ))
  .add('hidraulico', () => (
    <CategoryType
      type="hidraulic"
    />
  ))
  .add('pintura', () => (
    <CategoryType
      type="painting"
    />
  ))
  .add('categoria', () => (
    <CategoryType
      type="category"
    />
  ));
