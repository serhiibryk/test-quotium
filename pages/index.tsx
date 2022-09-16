import React from "react";
import type { NextPage } from "next";

import { TextContainer, Thing } from "./style";

const Home: NextPage = () => {
  return (
    <Thing>
      <div>
        <h2>Making digital transformation a reality</h2>
        <h4>Discover new opportunities to improve your buisness execution</h4>
        <br />
        <h4>Who we are</h4>
        <TextContainer>
          <p>
            <span>Blockquote</span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </TextContainer>
      </div>
    </Thing>
  );
};

export default Home;
