import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rating } from './Rating';

export default {
    title: 'Rating',
    component: Rating,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Rating1 = Template.bind({});
Rating1.args = {
  value:1,
    onClick:(value)=>value,
};

export const Rating2 = Template.bind({});
Rating2.args = {};
