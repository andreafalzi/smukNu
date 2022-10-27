import Head from 'next/head';
import GenericHeader from '../components/GenericHeader';
import kassenHeader from '../public/assets/headers/kassen.jpg';
import { kassenHeaderText } from '../constants/index';
import KassenList from '../components/KassenList';
import styled from '../styles/Home.module.scss';

const Kassen = () => {
  return (
    <>
      <Head>
        <title>Smuk.Nu</title>
        <meta name='description' content='Din sted to beauty' />
        <link rel='icon' href='/smuknu_logo.png' />
      </Head>
      <GenericHeader style={{ backgroundImage: `url(${kassenHeader.src})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} title={kassenHeaderText.title} text={kassenHeaderText.text} boxStyle='invertedBox' />
      <section className={styled.section}>
        <div className={styled.container}>
          <h1 className={styled.title}>Din indkøb listen</h1>
          <KassenList />
        </div>
      </section>
    </>
  );
};

export default Kassen;
