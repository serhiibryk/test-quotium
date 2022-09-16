import React, { FC } from "react";

import { Figure, ImgCard, Сaption } from "./style";

interface ICard {
  src: string;
  title: string;
  text: string;
}

const Card: FC<ICard> = ({ src, title, text }) => {
  return (
    <Figure>
      <div>
        <ImgCard src={src}></ImgCard>
      </div>
      <Сaption>
        <h4>{title}</h4>
        <p>{text}</p>
      </Сaption>
    </Figure>
  );
};

export default Card;
