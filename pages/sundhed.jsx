import Head from 'next/head';
import GenericHeader from '../components/GenericHeader';
import TeaserBox from '../components/TeaserBox';
import sundhedHeader from '../public/assets/headers/abouthealth.jpg';
import styled from '../styles/Sundhed.module.scss';

const Sundhed = () => {
  return (
    <>
      <Head>
        <title>Smuk.Nu</title>
        <meta name='description' content='Din sted to beauty' />
        <link rel='icon' href='/smuknu_logo.png' />
      </Head>
      <GenericHeader style={{ backgroundImage: `url(${sundhedHeader.src})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} title='SPØRG OM SUNDHED' text='Herunder har vi samlet spørgsmål og svar om sundhed.' text2='Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion' />
      <TeaserBox />
    </>
  );
};

export default Sundhed;
