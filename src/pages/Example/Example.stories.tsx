import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Example } from './Example';

const Template: ComponentStory<typeof Example> = function (args) {
  return <Example {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: 'E-commerce Boilerplate'
};

export default {
  title: 'Pages/Example',
  component: Example
} as ComponentMeta<typeof Example>;
