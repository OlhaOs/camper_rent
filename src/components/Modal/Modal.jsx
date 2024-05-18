import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import css from './Modal.module.css';
import { useEffect, useState, useCallback } from 'react';
import { getCamperById } from '../../api/Catalog';
import icons from '../../icon/icons.svg';

export const Modal = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [camperData, setCamperData] = useState(null);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  console.log('location In MOdal', location.state);

  useEffect(() => {
    const getItemDetails = async () => {
      try {
        const data = await getCamperById(itemId);
        setCamperData(data);
        setShowModal(true);
      } catch (error) {
        console.error('Error In CАtalogList', error);
      }
    };
    getItemDetails();
  }, [itemId]);

  const handleLinkClick = link => {
    setActiveLink(link);
  };

  
  const onCloseModal = useCallback(() => {
    setShowModal(false);
    if (location.state && location.state.from) {
      navigate(location.state.from);
    }
  }, [navigate, location.state]);

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onCloseModal]);

  const {
    name,
    price,
    location: locationCamper,
    reviews,
    rating,
    gallery,
    description,
  } = camperData || {};
  return (
    <>
      {showModal && (
        <div className={css.overlay} onClick={onCloseModal}>
          <div className={css.modal} onClick={e => e.stopPropagation()}>
            <div className={css.camperName}>
              <h2>{name}</h2>
              <svg className={css.iconClose} onClick={onCloseModal}>
                <use href={icons + '#icon-close'} />
              </svg>
            </div>
            <div className={css.camperDetails}>
              <svg className={css.icon} onClick={onCloseModal}>
                <use href={icons + '#icon-Rating'} />
              </svg>
              <p className={css.rating}>{rating}</p>
              <p className={css.reviews}>({reviews.length} Reviews)</p>
              <svg className={css.icon}>
                <use href={icons + '#icon-map-pin'} />
              </svg>
              <p className={css.location}>{locationCamper}</p>
            </div>
            <p className={css.price}>€{price.toFixed(2)}</p>
            <div className={css.imgContainer}>
              {gallery.map((img, index) => (
                <img
                  key={index}
                  className={css.imgModal}
                  src={img}
                  alt={name}
                />
              ))}
            </div>
            <p className={css.description}>{description}</p>
            <ul className={css.addInfoContainer}>
              <li
                className={`${css.link} ${
                  activeLink === 'features' ? css.active : ''
                }`}
              >
                <Link
                  to='features'
                  onClick={() => handleLinkClick('features')}
                  state={location.state}
                >
                  Features
                </Link>
              </li>
              <li
                className={`${css.link} ${
                  activeLink === 'reviews' ? css.active : ''
                }`}
              >
                <Link
                  to='reviews'
                  onClick={() => handleLinkClick('reviews')}
                  state={location.state}
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};
