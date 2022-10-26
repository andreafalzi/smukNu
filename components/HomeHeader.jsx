import Link from 'next/link';
import Button from './Button';
import { homeHeaderText } from '../constants/index';
import styled from '../styles/Header.module.scss';

const HomeHeader = ({ style }) => {
  return (
    <header className={styled.header} style={style}>
      <div className={`${styled.container} ${styled.box}`}>
        <h1>{homeHeaderText.title}</h1>
        <p>
          {homeHeaderText.text} <br /> <span>{homeHeaderText.span}</span>
        </p>

        <Link href='/produkter' passHref>
          <Button>{homeHeaderText.button}</Button>
        </Link>
      </div>
    </header>
  );
};

export default HomeHeader;
