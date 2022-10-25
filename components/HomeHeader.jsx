import Link from 'next/link';
import styled from '../styles/Header.module.scss';
import Button from './Button';

const HomeHeader = ({ style }) => {
  return (
    <header className={styled.header} style={style}>
      <div className={`${styled.container} ${styled.box}`}>
        <h1>Skønhed for alle</h1>
        <p>
          Alt hvad du behøver... <br /> <span>Smuk nu</span>
        </p>

        <Link href='/produkter' passHref>
          <Button>Se udvalgte produkter</Button>
        </Link>
      </div>
    </header>
  );
};

export default HomeHeader;
