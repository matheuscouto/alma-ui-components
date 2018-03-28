import * as React from 'react';

//import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Sample from './';

storiesOf('CategoryButton', module)
  .add('eletrico', () => (
    <Sample
    type="electric"
    />
  ))
  .add('hidraulico', () => (
    <Sample
      type="hidraulic"
    />
  ))
  .add('pintura', () => (
    <Sample
      type="painting"
    />
  ))
  .add('categoria', () => (
    <Sample
      type="category"
    />
  ));
