import Image from 'next/image';
import { useAppContext } from '../context/state';
import styled from '../styles/ProductCard.module.scss';
import Button from './Button';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useAppContext();
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className={styled.productCard}>
      <div className={styled.cardImage}>
        <Image src={product.image} layout='fill' objectFit='cover' alt={product.title} />
        {product.discountInPercent !== '' && (
          <p className={styled.discount}>
            Spar <span>{product.discountInPercent}%</span>
          </p>
        )}
      </div>
      <div className={styled.cardText}>
        <p>{product.title}</p>
        <h3>{product.price},00 kr.</h3>
        <Button onClick={addProductToCart} style={{ width: 'fit-content', position: 'absolute', bottom: '10%', right: '5%', padding: '0.3rem 2rem' }}>
          Køb
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
