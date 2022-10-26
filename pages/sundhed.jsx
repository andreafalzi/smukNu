import Head from 'next/head';
import AccordionList from '../components/AccordionList';
import GenericHeader from '../components/GenericHeader';
import TeaserBox from '../components/TeaserBox';
import sundhedHeader from '../public/assets/headers/abouthealth.jpg';
import { sundhedHeaderText } from '../constants/index';
import styled from '../styles/Sundhed.module.scss';

const Sundhed = ({ questions }) => {
  return (
    <>
      <Head>
        <title>Smuk.Nu</title>
        <meta name='description' content='Din sted to beauty' />
        <link rel='icon' href='/smuknu_logo.png' />
      </Head>
      <GenericHeader style={{ backgroundImage: `url(${sundhedHeader.src})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} title={sundhedHeaderText.title} text={sundhedHeaderText.text} text2={sundhedHeaderText.text2} />
      <div className={styled.container}>
        <AccordionList questions={questions} />
      </div>
      <TeaserBox />
    </>
  );
};

export default Sundhed;

//fetch on build time
export const getStaticProps = async () => {
  const resQuestions = await fetch('https://smuknu.webmcdm.dk/questions');
  const questions = await resQuestions.json();

  return {
    props: {
      questions,
    },
  };
};
