import Image from 'next/image';
import styled from '../styles/CartProduct.module.scss';

const CartProduct = ({ product }) => {
  return (
    <div className={styled.cartProduct}>
      <div className={styled.cartProductImage}>
        <Image src={product.image} alt={product.title} layout='fill' objectFit='cover' />
      </div>
      <div className={styled.cartProductText}>
        <p className={styled.cartProductTitle}>{product.title}</p>
        <p className={styled.cartProductPrice}>
          {product.quantity} x {product.price} kr.
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
