import React from 'react';
import { Product } from '@/types';
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  PriceContainer
} from './styles';
import { Center } from '../../../../styles';
import _ from 'lodash';
import { RateStars } from '../../RateStars';
import { Price } from '../../Price'
import { PurchaseButton } from '../../../geral';

export const ProductCardShowcase: React.FC<Product> = (props) => {
  const { primaryImageUrl, displayName, rate = 0, salePrice = 0, listPrice = 0 } = props;

  return (
    <ProductCard>
      <Center>
        <ProductImage src={primaryImageUrl} alt={`Imagem do produto ${displayName}`} />
      </Center>
      <RateStars rate={rate} />
      <ProductTitle>{_.truncate(displayName, { length: 45 })}</ProductTitle>
      <PriceContainer>
        <Price listPrice={listPrice} salePrice={salePrice} />
      </PriceContainer>
      <PurchaseButton displayName="Comprar" />
    </ProductCard>
  );
}