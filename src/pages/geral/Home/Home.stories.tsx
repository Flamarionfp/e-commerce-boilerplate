import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Home } from './Home';

const Template: ComponentStory<typeof Home> = function (args) {
  return <Home {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to E-commerce Boilerplate',
};

export default {
  title: 'Pages/geral/Home',
  component: Home
} as ComponentMeta<typeof Home>;
