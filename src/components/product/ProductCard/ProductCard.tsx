import React from 'react';
import { ProductCardProps, VariantType } from './ProductCard.types'
import { ProductCardShowcase } from './ProductCardShowcase'

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { variant } = props;

  function getProductCardToRender(variant: VariantType) {
    const variants = {
      showcase: <ProductCardShowcase {...props} />
    }
    return variants[variant] ?? <></>;
  }

  return getProductCardToRender(variant);
}