import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PurchaseButton } from './PurchaseButton';

const Template: ComponentStory<typeof PurchaseButton> = function (args) {
  return <PurchaseButton {...args} />;
};

export const _PurchaseButton = Template.bind({});
_PurchaseButton.args = {
  displayName: 'Example Purchase Button',
};

export default {
  title: 'componentes/geral/PurchaseButtonProps',
  component: PurchaseButton
} as ComponentMeta<typeof PurchaseButton>;
