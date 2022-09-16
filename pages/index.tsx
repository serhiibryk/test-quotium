import React from "react";
import type { NextPage } from "next";

import { CardContainer, TextBold, TextContainer, Thing } from "./style";
import Card from "../components/Card";

const Home: NextPage = () => {
  return (
    <Thing>
      <section>
        <h2>Making digital transformation a reality</h2>
        <h4>Discover new opportunities to improve your buisness execution</h4>
        <CardContainer>
          <Card
            src={"https://benzin.io/wp-content/uploads/2020/09/test-img.jpg"}
            title={"Title"}
            text={"text"}
          />
          <Card
            src={"https://benzin.io/wp-content/uploads/2020/09/test-img.jpg"}
            title={"Title"}
            text={"text"}
          />
          <Card
            src={"https://benzin.io/wp-content/uploads/2020/09/test-img.jpg"}
            title={"Title"}
            text={"text"}
          />
        </CardContainer>
        <br />
        <article>
          <title>Who we are</title>
          <TextContainer>
            <p>
              <TextBold>Blockquote </TextBold>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </TextContainer>
        </article>
      </section>
    </Thing>
  );
};

export default Home;
