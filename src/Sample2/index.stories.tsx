import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Sample from './';

storiesOf('Sample2', module)
  .add('teste', () => (
    <Sample
      label="option 1"
    />
  ))
  .add('teste2', () => (
    <Sample
      label="Label"
      onClick={action('clicked')}
    />
  ));
