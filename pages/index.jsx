import HomeHeader from '../components/HomeHeader';
import ProductsList from '../components/ProductsList';
import ReviewsList from '../components/ReviewsList';
import TeaserBox from '../components/TeaserBox';
import header from '../public/assets/headers/front.jpg';
import { products, reviews } from '../constants/index';
import styled from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <HomeHeader style={{ backgroundImage: `url(${header.src})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
      <section className={styled.section}>
        <div className={styled.container}>
          <h1 className={styled.title}>
            Udvalgt <span>Skønhed</span>
          </h1>
          <ProductsList products={products.filter((product) => product.recommended === true)} />
        </div>
      </section>
      <section className={styled.section}>
        <div className={styled.container}>
          <h1 className={styled.title}>
            <span>Skønheder</span> udtaler
          </h1>
          <ReviewsList reviews={reviews} />
        </div>
      </section>
      <TeaserBox />
    </>
  );
}

//fetching
// export const getServerSideProps = async () => {
//   const resProducts = await fetch('https://smuknu.webmcdm.dk/products');
//   const products = await resProducts.json();

//   const resReviews = await fetch('https://smuknu.webmcdm.dk/reviews');
//   const reviews = await resReviews.json();

//   return {
//     props: {
//       products,
//       reviews,
//     },
//   };
// };

// {
//   products, reviews;
// }
