import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Card from '../components/Card';

import { CardContainer, TextBold, TextContainer, Thing } from './style';

export default function Home() {
  return (
    <Thing>
      <section>
        <h2>Making digital transformation a reality</h2>
        <h4>Discover new opportunities to improve your buisness execution</h4>
        <CardContainer>
          <Card src={'https://benzin.io/wp-content/uploads/2020/09/test-img.jpg'} title={'Title'} text={'text'} />
          <Card src={'https://benzin.io/wp-content/uploads/2020/09/test-img.jpg'} title={'Title'} text={'text'} />
          <Card src={'https://benzin.io/wp-content/uploads/2020/09/test-img.jpg'} title={'Title'} text={'text'} />
        </CardContainer>
        <br />
        <article>
          <title>Quotium</title>
          <TextContainer>
            <p>
              <TextBold>Blockquote </TextBold>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s.
            </p>
          </TextContainer>
        </article>
      </section>
    </Thing>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
