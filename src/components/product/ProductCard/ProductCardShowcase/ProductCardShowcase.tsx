import React from 'react';
import { Product } from '@/types';
import {
  ProductCard,
  ProductImage,
  ProductTitle,
} from './styles';
import { Center } from '../../../../styles';
import _ from 'lodash';
import { RateStars } from '../../RateStars';
import { Price } from '../../Price'
import { Button } from '../../../geral';

export const ProductCardShowcase: React.FC<Product> = (props) => {
  const { primaryImageUrl, displayName, rate = 0, salePrice = 0, listPrice = 0 } = props;

  return (
    <ProductCard>
      <Center>
        <ProductImage src={primaryImageUrl} alt={`Imagem do produto ${displayName}`} />
      </Center>
      <RateStars rate={rate} />
      <ProductTitle>{_.truncate(displayName, { length: 45 })}</ProductTitle>
      <Price listPrice={listPrice} salePrice={salePrice} />
      <Button displayName="Comprar" />
    </ProductCard>
  );
}