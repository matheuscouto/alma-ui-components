import * as React from 'react';

//import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import ProblemItem from './';

storiesOf('Problem Item', module)
  .add('pintura', () => (
    <ProblemItem
    />
  ));
