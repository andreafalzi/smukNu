import styled from '../styles/ReviewsList.module.scss';
import ReviewCard from './ReviewCard';

const ReviewsList = ({ reviews }) => {
  return (
    <div className={styled.reviewsGrid}>
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewsList;
