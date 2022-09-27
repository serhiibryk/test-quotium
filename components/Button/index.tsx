import React, { FC } from 'react';

import { Btn } from './style';

const Button: FC<IButton> = ({ title, onClick }) => {
  return <Btn onClick={onClick}>{title}</Btn>;
};

export default Button;
