import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Price } from './Price';

const Template: ComponentStory<typeof Price> = function (args) {
  return <Price {...args} />;
};

export const _Price = Template.bind({});
_Price.args = {
  listPrice: 1059.65,
  salePrice: 989.33,
};

export default {
  title: 'componentes/product/Price',
  component: Price
} as ComponentMeta<typeof Price>;
