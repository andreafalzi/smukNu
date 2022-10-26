import Image from 'next/image';
import styled from '../styles/ProductCard.module.scss';

const ProductCard = ({ product }) => {
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
      <div className={styled.innerText}>
        <p>{product.title}</p>
        <h3>{product.price},00 kr.</h3>
      </div>
    </div>
  );
};

export default ProductCard;
