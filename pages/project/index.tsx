import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HexagonOfSuccessfulProjects from "../../components/HexagonOfSuccessfulProjects";

import { MainContainer, Thing } from "./style";

const Project = () => {
  return (
    <MainContainer>
      <title>AI Project</title>
      <Thing>
        <HexagonOfSuccessfulProjects />
      </Thing>
    </MainContainer>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default Project;
