import React, { FC, FormEvent, useState } from 'react';
import classNames from 'classnames';

import { InputBar, InputContainer, Title, TitleContainer } from './style';

interface IInput {
  title: string;
  rules: any;
  placeholder: string;
  children: any;
}

const Input: FC<IInput> = ({ title, rules, placeholder, children }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <div>
      <form>
        <InputContainer>
          <TitleContainer>
            <Title
              className={classNames(
                { show: inputValue },

                'label'
              )}
              htmlFor={'input'}
            >
              {title}
            </Title>
            {children}
          </TitleContainer>
          <InputBar
            id={'input'}
            value={inputValue}
            className={classNames('inputLabel')}
            {...rules}
            onChange={handleChange}
            placeholder={placeholder}
          />
        </InputContainer>
      </form>
    </div>
  );
};

export default Input;
