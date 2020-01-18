import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import UIExample from '../src/components/UIExample';
import UITable from '../src/components/UITable';

export default {
  title: 'Button',
  component: Button,
};

export const UIExampleStory = () => 
  <UIExample 
    onChange={action('onChange')}
  />;

export const UITableStory = () => <UITable />;