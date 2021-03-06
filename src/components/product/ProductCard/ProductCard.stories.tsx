import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductCard } from './ProductCard';

const Template: ComponentStory<typeof ProductCard> = function (args) {
  return <ProductCard {...args} />;
};

export const Showcase = Template.bind({});
Showcase.args = {
  variant: 'showcase',
  primaryImageUrl: 'https://www.zema.com/ccstore/v1/images/?source=/file/v1620769305099664296/products/1488821_02.jpg&height=475&width=475',
  displayName: 'Samsung Galaxy S21+ 5G Dual SIM 128 GB',
  hasFreeDelivere: true,
  isDesired: true,
  rate: 5,
  listPrice: 1059.65,
  salePrice: 989.33,
  numberOfInstallments: 10,
  installmentsPrice: 262.50,
  percentageOff: 0
};

export default {
  title: 'componentes/product/ProductCard',
  component: ProductCard
} as ComponentMeta<typeof ProductCard>;
