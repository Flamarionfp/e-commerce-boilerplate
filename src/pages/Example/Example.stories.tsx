import { Example } from './Example';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'E-commerce Boilerplate'
};

export default {
  title: 'Pages/Example',
  component: Example,
} as ComponentMeta<typeof Example>;
