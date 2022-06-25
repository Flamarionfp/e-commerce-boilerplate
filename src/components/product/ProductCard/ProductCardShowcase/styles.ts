import styled from 'styled-components';

export const ProductCard = styled.div`
  min-height: ${props => props.theme.sizes[71.5]};
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 4px;
  padding: 20px 15px 15px 15px;
  width: ${props => props.theme.sizes[50]};
  height:  ${props => props.theme.sizes[77.5]};
`;

export const ProductImage = styled.img`
  width: ${props => props.theme.sizes[26]};
  height: ${props => props.theme.sizes[26]};
  object-fit: contain;
`;

export const ProductTitle = styled.p`
  font-size: ${props => props.theme.fonts['sm']};
  line-height: 15.6px;
`;

export const PriceContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

