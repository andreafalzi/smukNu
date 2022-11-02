import AccordionList from '../components/AccordionList';
import GenericHeader from '../components/GenericHeader';
import TeaserBox from '../components/TeaserBox';
import sundhedHeader from '../public/assets/headers/abouthealth.jpg';
import { sundhedHeaderText } from '../constants/index';
// Only if API is broken
// import { questions } from '../constants/index';
import styled from '../styles/Sundhed.module.scss';

const Sundhed = ({ questions }) => {
  return (
    <>
      <GenericHeader style={{ backgroundImage: `url(${sundhedHeader.src})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} title={sundhedHeaderText.title} text={sundhedHeaderText.text} text2={sundhedHeaderText.text2} />
      <div className={styled.container}>
        <div className={styled.sundhedContainer}>
          <div className={styled.sundhedAccordion}>
            <AccordionList questions={questions} />
          </div>
          <div className={styled.sundhedShapes}>
            <div className={styled.shapeOne}>Vi</div>
            <div className={styled.shapeTwo}>Hjælper</div>
            <div className={styled.shapeThree}>Dig</div>
          </div>
        </div>
      </div>
      <TeaserBox />
    </>
  );
};

export default Sundhed;

//fetching
export const getServerSideProps = async () => {
  const resQuestions = await fetch('https://smuknu.webmcdm.dk/questions');
  const questions = await resQuestions.json();

  return {
    props: {
      questions,
    },
  };
};
