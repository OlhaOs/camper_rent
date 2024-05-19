import { useParams } from 'react-router-dom';
import { BookingForm } from '../BookingForm/BookingForm';
import css from './Reviews.module.css';
import { useEffect} from 'react';
import { getCamperById } from '../../api/Catalog';
import icons from '../../icon/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectCamperById } from '../../store/campers/selectors';

export const Reviews = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const camperData = useSelector(state => selectCamperById(state, itemId));

  useEffect(() => {
    if (!camperData && itemId) {
      dispatch(getCamperById(itemId));
    }
  }, [dispatch, itemId, camperData]);

  const { reviews } = camperData || {};

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
