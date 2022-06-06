import React from 'react';
import { ExampleProps } from './Example.types';
import { Title } from './style';
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export const Example: React.FC<ExampleProps> = (props) => {
  const { isAuth } = useSelector((state: RootState) => state.user)
  const { title } = props;
  return (
    <div>
      <Title>{title}</Title>
      {isAuth ? 'Usuário autenticado' : 'Usuário não autenticado'}
    </div>
  );
}