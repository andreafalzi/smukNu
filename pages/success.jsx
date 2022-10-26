import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import productImage from '../public/assets/products/product_1213213211.jpg';
import { useAppContext } from '../context/state';
import styled from '../styles/Success.module.scss';

const Success = () => {
  const { medlemName } = useAppContext();
  return (
    <div className={styled.success}>
      <div className={`${styled.container} ${styled.successFlex}`}>
        <h1 className={styled.title}>Tak!</h1>
        <p className={styled.span}>{medlemName}</p>
        <p>Vi er enormt glade for at få dig som medlem.</p>
        <div className={styled.imageCircle}>
          <Image src={productImage} alt='product gold' layout='fill' objectFit='cover' priority />
        </div>
        <p>Kig I din inbox vi har sendt en lille velkomst gave.</p>

        <Link href='/' passHref>
          <Button>Til Forsiden</Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
