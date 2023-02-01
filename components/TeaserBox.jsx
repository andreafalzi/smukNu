import Image from 'next/image';
import Link from 'next/link';
// import { useEffect, useState } from 'react';
import styled from '../styles/TeaserBox.module.scss';
import Button from './Button';

const TeaserBox = ({ reviewsProp }) => {
  // const [reviews, setReviews] = useState(reviewsProp);
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch('https://smuknu.webmcdm.dk/reviews')
  //     .then((res) => res.json())
  //     .then((reviews) => {
  //       setReviews(reviews);
  //       setLoading(false);
  //     });
  // }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (!reviews) return <p>No profile data</p>;

  return (
    <div className={styled.teaserBox}>
      <div className={`${styled.container} ${styled.box}`}>
        <div className={styled.boxText}>
          <h1>Medlem?</h1>
          <p>Vær med i kundeklubben for nye videoer, rabatkoder og mere!</p>

          <Link href='/medlem' passHref>
            <Button>Bliv medlem af kundeklubben</Button>
          </Link>
        </div>
        <div className={styled.boxImages}>
          {reviewsProp.slice(0, 4).map((review, index) => (
            <div key={index} className={styled.boxImage}>
              <Image src={review.image} alt={review.name} layout='fill' objectFit='contain' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeaserBox;

// export const getStaticProps = async () => {
//   const resReviews = await fetch('https://smuknu.webmcdm.dk/reviews');
//   const reviews = await resReviews.json();

//   return {
//     props: {
//       reviews,
//     },
//   };
// };
