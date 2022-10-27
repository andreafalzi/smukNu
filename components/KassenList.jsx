import Link from 'next/link';
import Button from './Button';
import KassenProduct from './KassenProduct';
import { useAppContext } from '../context/state';

import styled from '../styles/Kassen.module.scss';

const KassenList = () => {
  const { cartItems, cartTotal, clearAll } = useAppContext();
  return (
    <div className={styled.kassenItems}>
      {cartItems.length > 0 ? cartItems.map((item) => <KassenProduct key={item.id} product={item} />) : <p style={{ textAlign: 'center' }}>Der er ingen produkter i kurven</p>}
      {cartItems.length > 0 && (
        <p>
          Ialt <span>{cartTotal} kr.</span>
        </p>
      )}
      {cartItems.length > 0 && (
        <Link href='/kvittering' passHref>
          <Button onClick={clearAll} style={{ width: 'fit-content', marginLeft: 'auto' }}>
            Betal
          </Button>
        </Link>
      )}
    </div>
  );
};

export default KassenList;
