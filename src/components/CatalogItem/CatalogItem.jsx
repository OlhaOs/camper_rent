import { ShowMoreButton } from '../ShowMoreButton/ShowMoreButton';
import css from './CatalogItem.module.css';
import icons from '../../icon/icons.svg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favorites/slice';

export const CatalogItem = ({ listItem }) => {
  const locationPath = useLocation();
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details,
    gallery,
    reviews,
  } = listItem;

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.some(favorite => favorite._id === _id));
  }, [favorites, _id]);

  const handleFavorites = () => {
    if (isFavorite) {
      dispatch(removeFavorite(listItem));
    } else {
      dispatch(addFavorite(listItem));
    }
  };

  const favoriteClass = isFavorite
    ? `${css.iconHeart} ${css.favorite}`
    : css.iconHeart;

  return (
    <>
      <li className={css.cardContainer}>
        <div className={css.imageContainer}>
          <img src={gallery[0]} alt={name} className={css.imgGallery} />
        </div>
        <div className={css.cardInfo}>
          <div className={css.cardHeader}>
            <h2 className={css.title}> {name}</h2>
            <p className={css.price}>€{price.toFixed(2)}</p>
            <svg className={favoriteClass} onClick={handleFavorites}>
              <use href={icons + '#icon-heart'} />
            </svg>
          </div>

          <div className={css.rateContainer}>
            <svg className={css.icon}>
              <use href={icons + '#icon-Rating'} />
            </svg>
            <p className={css.rate}>
              {rating}({reviews.length} Reviews)
            </p>

            <svg className={css.icon}>
              <use href={icons + '#icon-map-pin'} />
            </svg>
            <p className={css.location}>{location} </p>
          </div>
          <p className={css.description}> {description}</p>
          <ul className={css.equipmentList}>
            <li className={css.equipmentBtn}>
              <svg className={css.iconAc}>
                <use href={icons + '#icon-adults'} />
              </svg>
              <p className={css.listName}>{adults} adults</p>
            </li>
            <li className={css.equipmentBtn}>
              <svg className={css.icon}>
                <use href={icons + '#icon-transmission'} />
              </svg>
              <p className={css.listName}>{transmission}</p>
            </li>
            <li className={css.equipmentBtn}>
              <svg className={css.iconAc}>
                <use href={icons + '#icon-petrol'} />
              </svg>
              <p className={css.listName}>{engine}</p>
            </li>
            <li className={css.equipmentBtn}>
              <svg className={css.icon}>
                <use href={icons + '#icon-kitchen'} />
              </svg>
              <p className={css.listName}>
                {details.kitchen ? 'kitchen' : 'no kitchen'}
              </p>
            </li>
            <li className={css.equipmentBtn}>
              <svg className={css.icon}>
                <use href={icons + '#icon-bed'} />
              </svg>
              <p className={css.listName}>{details.beds} beds</p>
            </li>
            <li className={css.equipmentBtn}>
              <svg className={css.iconAc}>
                <use href={icons + '#icon-ac'} />
              </svg>
              <p className={css.listName}>
                {details.airConditioner ? 'AC' : 'no AC'}
              </p>
            </li>
          </ul>

          <ShowMoreButton
            itemId={_id}
            text='Show more'
            state={locationPath.state}
          />
        </div>
      </li>
    </>
  );
};
