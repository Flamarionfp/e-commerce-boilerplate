import React from 'react';
import { PurchaseButtonProps } from './PurchaseButton.types';
import { ButtonContainer, ButtonText } from './styles';

export const PurchaseButton: React.FC<PurchaseButtonProps> = (props) => {
  const { displayName } = props;
  return (
    <ButtonContainer {...props}>
      <ButtonText {...props}>{displayName}</ButtonText>
    </ButtonContainer>
  );
}