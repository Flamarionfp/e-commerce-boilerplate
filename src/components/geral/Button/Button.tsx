import React from 'react';
import { ButtonProps } from './Button.types';
import { ButtonContainer, ButtonText } from './styles';

export const Button: React.FC<ButtonProps> = (props) => {
  const { displayName } = props;
  return (
    <ButtonContainer {...props}>
      <ButtonText {...props}>{displayName}</ButtonText>
    </ButtonContainer>
  );
}