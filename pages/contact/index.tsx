import React from "react";

import Input from "../../components/Input";

import { Button, MainContainer, Thing } from "./style";

const Contact = () => {
  const handleClick = () => {
    return 0;
  };
  return (
    <Thing>
      <MainContainer>
        <Input title={"Name"} rules={""} placeholder={""}>
          {}
        </Input>
        <Input title={"Company"} rules={""} placeholder={""}>
          {}
        </Input>
        <Input title={"Email"} rules={""} placeholder={""}>
          {}
        </Input>
        <Input title={"Phone"} rules={""} placeholder={""}>
          {}
        </Input>
        <Button onClick={handleClick}>
          Contact me back for a free project evaluation
        </Button>
      </MainContainer>
    </Thing>
  );
};

export default Contact;
