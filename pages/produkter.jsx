import GenericHeader from '../components/GenericHeader';
import ProductsList from '../components/ProductsList';
import TeaserBox from '../components/TeaserBox';
import produkterHeader from '../public/assets/headers/products.jpg';
import { produkterHeaderText } from '../constants/index';
import { products } from '../constants/index';
import styled from '../styles/Home.module.scss';

const Produkter = () => {
  return (
    <>
      <GenericHeader style={{ backgroundImage: `url(${produkterHeader.src})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} title={produkterHeaderText.title} text={produkterHeaderText.text} boxStyle='transparentBox' />
      <section className={styled.section}>
        <div className={styled.container}>
          <h1 className={styled.title}>
            Alt er <span>Skønhed</span>
          </h1>
          <ProductsList products={products} />
        </div>
      </section>
      <TeaserBox />
    </>
  );
};

export default Produkter;

//fetching
// export const getServerSideProps = async () => {
//   const resProducts = await fetch('https://smuknu.webmcdm.dk/products');
//   const products = await resProducts.json();

//   return {
//     props: {
//       products,
//     },
//   };
// };
