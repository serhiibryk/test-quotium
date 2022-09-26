import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import HexagonOfNeeds from "../../components/HexagonOfNeeds";
import { Thing } from "./style";

const Info = () => {
  return (
    <Thing>
      <title>Quotium-who we are</title>
      <HexagonOfNeeds />
    </Thing>
  );
};

export default Info;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
