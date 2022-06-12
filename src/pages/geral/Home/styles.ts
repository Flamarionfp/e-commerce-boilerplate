import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 50px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.theme.colors.gray['900']};
  margin-bottom: 25px;
`;

export const AuthorText = styled.p`
  font-size: 1.2em;
`

export const AuthorLink = styled.a`
  text-decoration: none;
  color: #00d2ff;
  margin-left: 3px;
  margin-right: 3px;
`;

export const ProductCardWrapper = styled.div`
  margin-top: 30px;
`;
