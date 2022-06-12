import styled from 'styled-components';

interface PriceType {
  lineThrough: boolean;
  useDiscountColor: boolean;
}

export const ProductPrice = styled.p<PriceType>`
  font-size: 16px;
  color: ${(props) => props.useDiscountColor ? '#00C868' : '#000'};
  text-decoration: ${(props) => props.lineThrough ? 'line-through' : 'normal'};
`;

