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
        <Button>
          <Link href='/produkter'>Se udvalgte produkter</Link>
        </Button>
      </div>
    </header>
  );
};

export default HomeHeader;
