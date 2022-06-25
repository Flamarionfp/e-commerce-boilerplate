import styled from 'styled-components';

export const ButtonContainer = styled.button`
  cursor: pointer;
  outline: none;
  transition: 0.2s all;
  padding: 10px;
  background-image: linear-gradient(to right, #00d2ff 0%, #3a7bd5 51%, #00d2ff 100%);
  width: 100%;
  border-radius: 4px;
  border: none;
  padding: 10px;
  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonText = styled.span`
   color: #fff;
   font-size: ${props => props.theme.fonts['xs']};
   font-weight: bold;
`;

