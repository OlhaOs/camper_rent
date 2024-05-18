import { useParams } from 'react-router-dom';
import { BookingForm } from '../BookingForm/BookingForm';
import css from './Reviews.module.css';
import { useEffect, useState } from 'react';
import { getCamperById } from '../../api/Catalog';
import icons from '../../icon/icons.svg';

export const Reviews = () => {
  const { itemId } = useParams();
  const [camperData, setCamperData] = useState(null);

  useEffect(() => {
    const getItemDetails = async () => {
      try {
        const data = await getCamperById(itemId);
        setCamperData(data);
      } catch (error) {
        console.error('Error In CАtalogList', error);
      }
    };

    getItemDetails();
  }, [itemId]);

  const { reviews } = camperData || {};
  // const { reviewer_name, reviewer_rating, comment } = reviews || {};
  console.log(reviews);

  return (
    <section className={css.reviewsSection}>
      <div className={css.reviewsContainer}>
        <ul className={css.reviewsList}>
          {reviews &&
            reviews.map(review => (
              <li key={review.reviewer_name} className={css.reviewItem}>
                <div className={css.avatar}>
                  {review.reviewer_name.charAt(0)}
                </div>
                <div className={css.rateContainer}>
                  <p>{review.reviewer_name}</p>
                  <p className={css.rate}>
                    {[...Array(review.reviewer_rating)].map((_, index) => (
                      <svg key={index} className={css.icon}>
                        <use href={icons + '#icon-Rating'} />
                      </svg>
                    ))}
                  </p>
                </div>

                <p className={css.comment}>{review.comment}</p>
              </li>
            ))}
        </ul>
      </div>
      <BookingForm />
    </section>
  );
};
