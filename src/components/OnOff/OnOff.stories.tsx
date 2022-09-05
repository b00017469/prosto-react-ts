import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {OnOff} from './OnOff';

export default {
    title: 'OnOff',
    component: OnOff,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
 isOn:true,
    onClick:isOn => isOn
};

export const OffMode = Template.bind({});
OffMode.args = {
 isOn:false
};

export const ModeChanging = Template.bind({});
ModeChanging.args = {};
