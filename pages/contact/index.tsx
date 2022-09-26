import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Input from "../../components/Input";

import { Button, ButtonContainer, MainContainer, Thing } from "./style";

const Contact = () => {
  const handleClick = () => {
    return 0;
  };
  return (
    <Thing>
      <MainContainer>
        <title>Contact</title>
        <h2>Contact us</h2>
        <p>Needed implementation</p>
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
        <ButtonContainer>
          <Button onClick={handleClick}>
            Contact me back for a free project evaluation
          </Button>
        </ButtonContainer>
      </MainContainer>
    </Thing>
  );
};

export default Contact;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
