import styled from '../styles/AccordionList.module.scss';
import Accordion from './Accordion';

const AccordionList = ({ questions }) => {
  return (
    <div className={styled.accordionGrid}>
      {questions.map((question, index) => (
        <Accordion key={index} question={question} />
      ))}
      <span className={styled.bottomBorder}></span>
    </div>
  );
};

export default AccordionList;
