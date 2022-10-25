import Image from 'next/image';
import styled from '../styles/ReviewCard.module.scss';

const ReviewCard = ({ review }) => {
  return (
    <div className={styled.reviewCard}>
      <div className={styled.imageCircle}>
        <Image src={review.image} alt={review.name} layout='fill' objectFit='cover' />
      </div>
      <p>{review.description}</p>
      <p>
        <span>{review.name}</span>
      </p>
      <p>{review.byline}</p>
    </div>
  );
};

export default ReviewCard;
