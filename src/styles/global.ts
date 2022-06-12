import styled from 'styled-components';

interface CenterProps {
  column?: boolean;
}

export const Center = styled.div<CenterProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
`;
