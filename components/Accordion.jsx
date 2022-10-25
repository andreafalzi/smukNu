import { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
import styled from '../styles/Accordion.module.scss';

const Accordion = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styled.accordion}>
      <div className={styled.accordionRow} onClick={() => setIsOpen((prev) => !prev)}>
        <FaQuestion className={`${styled.icon} ${isOpen ? styled.fill : ''}`} />
        <h4 className={` ${isOpen ? styled.bold : ''}`}>{question.question}</h4>
      </div>
      <div className={`${styled.accordionBox} ${isOpen ? styled.show : ''}`}>
        <p>{question.answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
