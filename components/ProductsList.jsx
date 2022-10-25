import styled from '../styles/ProductsList.module.scss';
import ProductCard from './ProductCard';

const ProductsList = ({ products }) => {
  return (
    <div className={styled.productsGrid}>
      {products
        .filter((product) => product.recommended === true)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductsList;
