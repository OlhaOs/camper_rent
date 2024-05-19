import css from './Features.module.css';
import icons from '../../icon/icons.svg';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectCamperById } from '../../store/campers/selectors';
import { BookingForm } from '../BookingForm/BookingForm';
import { getCamperById } from '../../api/operation';

export const Features = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const camperData = useSelector(state => selectCamperById(state, itemId));

  useEffect(() => {
    if (!camperData && itemId) {
      dispatch(getCamperById(itemId));
    }
  }, [dispatch, itemId, camperData]);

  const {
    adults,
    engine,
    transmission,
    details,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = camperData || {};

  const vehicleDetails = { form, length, width, height, tank, consumption };

  return (
    <section className={css.featuresContainer}>
      {camperData && (
        <div className={css.featuresList}>
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
                <use href={icons + '#icon-ac'} />
              </svg>
              <p className={css.listName}>
                {details.airConditioner ? 'AC' : 'no AC'}
              </p>
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
              <svg className={css.icon}>
                <use href={icons + '#icon-streamline_hotel-air-conditioner'} />
              </svg>
              <p className={css.listName}>
                {details.airConditioner
                  ? 'air conditioner'
                  : 'no air conditioner'}
              </p>
            </li>
            <li className={css.equipmentBtn}>
              <svg className={css.icon}>
                <use href={icons + '#icon-park-outline_cd'} />
              </svg>
              <p className={css.listName}>{details.CD ? 'CD' : 'no CD'}</p>
            </li>
            <li className={css.equipmentBtn}>
              <svg className={css.icon}>
                <use href={icons + '#icon-solar_radio-linear'} />
              </svg>
              <p className={css.listName}>
                {details.radio ? 'Radio' : 'no radio'}
              </p>
            </li>
            <li className={css.equipmentBtn}>
              <svg className={css.icon}>
                <use href={icons + '#icon-park-outline_hand-painted-plate'} />
              </svg>
              <p className={css.listName}>{details.hob} hob</p>
            </li>
          </ul>
          <h2 className={css.detailsTitle}>Vehicle details</h2>
          <ul className={css.vehicleDetails}>
            {Object.entries(vehicleDetails).map(([key, value]) => (
              <li key={key} className={css.detailsItem}>
                <p className={css.detailsText}>{key}</p>
                <p className={css.detailsText}>{value}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <BookingForm />
    </section>
  );
};
