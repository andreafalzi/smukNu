import Head from 'next/head';
import HomeHeader from '../components/HomeHeader';
import ProductsList from '../components/ProductsList';
import ReviewsList from '../components/ReviewsList';
import TeaserBox from '../components/TeaserBox';
import header from '../public/assets/headers/front.jpg';
import styled from '../styles/Home.module.scss';

export default function Home({ products, reviews }) {
  return (
    <>
      <Head>
        <title>Smuk.Nu</title>
        <meta name='description' content='Din sted to beauty' />
        <link rel='icon' href='/smuknu_logo.png' />
      </Head>
      <HomeHeader style={{ backgroundImage: `url(${header.src})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
      <section className={styled.section}>
        <div className={styled.container}>
          <h1 className={styled.title}>
            Udvalgt <span>Skønhed</span>
          </h1>
          <ProductsList products={products} />
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

//fetch on build time
export const getStaticProps = async () => {
  const resProducts = await fetch('https://smuknu.webmcdm.dk/products');
  const products = await resProducts.json();

  const resReviews = await fetch('https://smuknu.webmcdm.dk/reviews');
  const reviews = await resReviews.json();

  return {
    props: {
      products,
      reviews,
    },
  };
};