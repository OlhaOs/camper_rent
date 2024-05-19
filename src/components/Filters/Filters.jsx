import React from 'react';
import css from './Filters.module.css';
import icons from '../../icon/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getFiltered } from '../../store/filters/selectors';
import {
  findCampers,
  typeCampers,
  toggleEquipment,
} from '../../store/filters/slice';
import { ResetFiltersBtn } from '../ResetFiltersBtn/ResetFiltersBtn';

export const Filters = () => {
  const dispatch = useDispatch();
  const { locationQuery, type, equipment } = useSelector(getFiltered);

  const handleLocationChange = e => {
    dispatch(findCampers(e.target.value));
  };

  const handleCheckboxChange = event => {
    dispatch(toggleEquipment(event.target.id));
  };

  const handleRadioChange = event => {
    dispatch(typeCampers(event.target.value));
  };

  return (
    <div className={css.sectionFilters}>
      <p className={css.locationTitle}>Location</p>
      <input
        type='text'
        className={css.inputFilter}
        placeholder='Enter location'
        value={locationQuery}
        onChange={handleLocationChange}
      />

      <p className={css.filtersTitle}>Filters</p>
      <h3 className={css.equipmentTitle}>Vehicle equipment</h3>
      <ul className={css.equipmentList}>
        <li
          className={`${css.equipmentContainer} ${
            equipment.includes('airConditioner') ? css.checked : ''
          }`}
        >
          <input
            type='checkbox'
            id='airConditioner'
            className={css.equipmentBtn}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='airConditioner'>
            <svg className={css.iconAc}>
              <use href={icons + '#icon-ac'} />
            </svg>
            AC
          </label>
        </li>
        <li
          className={`${css.equipmentContainer} ${
            equipment.includes('Automatic') ? css.checked : ''
          }`}
        >
          <input
            type='checkbox'
            id='Automatic'
            className={css.equipmentBtn}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='Automatic'>
            <svg className={css.icon}>
              <use href={icons + '#icon-transmission'} />
            </svg>
            Automatic
          </label>
        </li>
        <li
          className={`${css.equipmentContainer} ${
            equipment.includes('Kitchen') ? css.checked : ''
          }`}
        >
          <input
            type='checkbox'
            id='Kitchen'
            className={css.equipmentBtn}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='Kitchen'>
            <svg className={css.icon}>
              <use href={icons + '#icon-kitchen'} />
            </svg>
            Kitchen
          </label>
        </li>
        <li
          className={`${css.equipmentContainer} ${
            equipment.includes('TV') ? css.checked : ''
          }`}
        >
          <input
            type='checkbox'
            id='TV'
            className={css.equipmentBtn}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='TV'>
            <svg className={css.icon}>
              <use href={icons + '#icon-tv'} />
            </svg>
            TV
          </label>
        </li>
        <li
          className={`${css.equipmentContainer} ${
            equipment.includes('Shower') ? css.checked : ''
          }`}
        >
          <input
            type='checkbox'
            id='Shower'
            className={css.equipmentBtn}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='Shower'>
            <svg className={css.icon}>
              <use href={icons + '#icon-shower'} />
            </svg>
            Shower/WC
          </label>
        </li>
      </ul>

      <h3 className={css.typeTitle}>Vehicle type</h3>
      <ul className={css.typeList}>
        <li
          className={`${css.equipmentContainer} ${
            type === 'Van' ? css.checked : ''
          }`}
        >
          <input
            type='radio'
            id='Van'
            name='equipment'
            value='Van'
            className={css.equipmentBtn}
            onChange={handleRadioChange}
          />
          <label htmlFor='Van'>
            <svg className={css.icon}>
              <use href={icons + '#icon-camper3'} />
            </svg>
            Van
          </label>
        </li>
        <li
          className={`${css.equipmentContainer} ${
            type === 'Fully integrated' ? css.checked : ''
          }`}
        >
          <input
            type='radio'
            id='Fully integrated'
            name='equipment'
            value='Fully integrated'
            className={css.equipmentBtn}
            onChange={handleRadioChange}
          />
          <label htmlFor='Fully integrated'>
            <svg className={css.icon}>
              <use href={icons + '#icon-camper2'} />
            </svg>
            Fully integrated
          </label>
        </li>
        <li
          className={`${css.equipmentContainer} ${
            type === 'Alcove' ? css.checked : ''
          }`}
        >
          <input
            type='radio'
            id='Alcove'
            name='equipment'
            value='Alcove'
            className={css.equipmentBtn}
            onChange={handleRadioChange}
          />
          <label htmlFor='Alcove'>
            <svg className={css.icon}>
              <use href={icons + '#icon-camper1'} />
            </svg>
            Alcove
          </label>
        </li>
      </ul>
      <ResetFiltersBtn />
    </div>
  );
};
