import React from 'react';
import { Price as PriceProps } from '@/types';
import { toCurrency } from '../../../helpers';
import {
  ProductPrice,
} from './styles';

export const Price: React.FC<PriceProps> = (props) => {
  const { salePrice = 0, listPrice = 0 } = props;

  return (
    <>
      {salePrice && listPrice > salePrice && (
        <ProductPrice
          lineThrough={listPrice > salePrice}
          useDiscountColor={false}
        >
          {toCurrency(listPrice).format()}
        </ProductPrice>
      )}

      <ProductPrice
        lineThrough={false}
        useDiscountColor={salePrice < listPrice}
      >
        {toCurrency(salePrice ? salePrice : listPrice).format()}
      </ProductPrice>
    </>
  );
}