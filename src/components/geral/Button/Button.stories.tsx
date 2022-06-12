import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

const Template: ComponentStory<typeof Button> = function (args) {
  return <Button {...args} />;
};

export const _Button = Template.bind({});
_Button.args = {
  displayName: 'Example Button',
};

export default {
  title: 'componentes/geral/Button',
  component: _Button
} as ComponentMeta<typeof Button>;
