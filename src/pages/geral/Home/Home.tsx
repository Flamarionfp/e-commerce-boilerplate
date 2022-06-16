import React from 'react';
import { HomeProps } from './Home.types';
import { MainContainer, Title, AuthorText, AuthorLink, ProductCardWrapper } from './styles';
import { ProductCard } from '@/components';
import { Center } from '../../../styles';

export const Home: React.FC<HomeProps> = function (props) {
  const products = [
    {
      id: '1',
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
    }
  ]

  const { title } = props;
  return (
    <MainContainer>
      <Title>{title}</Title>
      <Center column>
        <AuthorText>Authors:
          <AuthorLink href="https://www.linkedin.com/in/flamarion-fagundes-pinto-0b037b210/" target="_blank">
            Flamarion Fagundes Pinto
          </AuthorLink>
          &&
          <AuthorLink href="https://www.linkedin.com/in/bruno-domingues-da-silva/" target="_blank">
            Bruno Domingues da Silva
          </AuthorLink>
        </AuthorText>
        <ProductCardWrapper>
          {products.map(product => (
            <ProductCard key={product.id} variant="showcase" {...product} />
          ))}
        </ProductCardWrapper>
      </Center>
    </MainContainer>
  );
};
