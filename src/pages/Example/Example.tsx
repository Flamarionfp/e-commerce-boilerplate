import React from 'react';
import { ExampleProps } from './Example.types';
import { Title } from './style';

export const Example: React.FC<ExampleProps> = function (props) {
  const { title } = props;
  return (
    <div>
      <Title>{title}</Title>
    </div>
  );
};
