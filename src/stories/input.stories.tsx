import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;


export default {
    title: 'input'
};

const Template: ComponentStory<any> = (args) => <input {...args} />;

export const Rating1 = Template.bind({});
Rating1.args = {
    value:1
};

export const Rating2 = Template.bind({});
Rating2.args = {};
