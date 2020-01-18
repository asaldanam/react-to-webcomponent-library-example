import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import UIExample from '../src/components/UIExample';

export default {
  title: 'Button',
  component: Button,
};

export const UIExampleStory = () => 
  <UIExample 
    onChange={action('onChange')}
  />;