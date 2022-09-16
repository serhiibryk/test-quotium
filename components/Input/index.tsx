import React, { FC, FormEvent, useState } from "react";
import classNames from "classnames";

interface IInput {
  title: string;
  rules: any;
  placeholder: string;
  children: any;
}

const Input: FC<IInput> = ({ title, rules, placeholder, children }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <div>
      <form>
        <div>
          <input
            id={"input"}
            value={inputValue}
            className={classNames("inputLabel")}
            {...rules}
            onChange={handleChange}
            placeholder={placeholder}
          />
          <label
            className={classNames(
              { show: inputValue },

              "label"
            )}
            htmlFor={"input"}
          >
            {title}
          </label>
          {children}
        </div>
      </form>
    </div>
  );
};

export default Input;
