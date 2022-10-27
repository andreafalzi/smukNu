import Image from 'next/image';
import { useAppContext } from '../context/state';
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa';
import styled from '../styles/KassenProduct.module.scss';

const KassenProduct = ({ product }) => {
  const { addItemToCart, removeItemToCart, clearItemFromCart } = useAppContext();
  return (
    <div className={styled.kassenProduct}>
      <div className={styled.kassenProductImage}>
        <Image src={product.image} alt={product.title} layout='fill' objectFit='cover' />
      </div>
      <div className={styled.kassenProductText}>
        <p className={styled.kassenProductTitle}>{product.title}</p>
        <div className={styled.kassenProductQuantity}>
          <FaMinus onClick={() => removeItemToCart(product)} />
          {product.quantity}
          <FaPlus onClick={() => addItemToCart(product)} />
        </div>
        <p className={styled.kassenProductPrice}>{product.price} kr.</p>
      </div>
      <FaTimes onClick={() => clearItemFromCart(product)} className={styled.erase} />
    </div>
  );
};

export default KassenProduct;
