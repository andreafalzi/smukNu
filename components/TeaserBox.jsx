import Link from 'next/link';
import styled from '../styles/TeaserBox.module.scss';
import Button from './Button';

const TeaserBox = () => {
  return (
    <div className={`${styled.container} ${styled.box}`}>
      <h1>Medlem?</h1>
      <p>Vær med i kundeklubben for nye videoer, rabatkoder og mere!</p>
      <Button>
        <Link href='/medlem'>Bliv medlem af kundeklubben</Link>
      </Button>
    </div>
  );
};

export default TeaserBox;
