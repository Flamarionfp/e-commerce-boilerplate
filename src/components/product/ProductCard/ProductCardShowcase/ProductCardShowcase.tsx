import React from 'react';
import { Product } from '@/types';
import { Box, ProductImage, ProductTitle } from './styles';
import { Center } from '../../../../styles';
// import { MdStar, MdStarBorder } from "react-icons/md";
import _ from 'lodash';
import { RateStars } from '../../RateStars';

export const ProductCardShowcase: React.FC<Product> = (props) => {
  const { primaryImageUrl, displayName, rate } = props;

  return (
    <Box>
      <Center>
        <ProductImage src={primaryImageUrl} alt={`Imagem do produto ${displayName}`} />
      </Center>
      <RateStars rate={rate} />
      <ProductTitle>{_.truncate(displayName, { length: 45 })}</ProductTitle>
    </Box>
  );
}