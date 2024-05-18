import React, { useState } from 'react';
import css from './Filters.module.css';
import { ShowMoreButton } from '../ShowMoreButton/ShowMoreButton';
import icons from '../../icon/icons.svg';

export const Filters = () => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  const handleCheckboxChange = event => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedEquipment(prevState => [...prevState, id]);
    } else {
      setSelectedEquipment(prevState => prevState.filter(item => item !== id));
    }
  };
  const handleRadioChange = event => {
    setSelectedType(event.target.value);
  };

  return (
    <div className={css.sectionFilters}>
      <p className={css.locationTitle}>Location</p>
      <input
        type='text'
        className={css.inputFilter}
        placeholder='Enter location'
      />

      <p className={css.filtersTitle}>Filters</p>
      <h3 className={css.equipmentTitle}>Vehicle equipment</h3>
      <ul className={css.equipmentList}>
        <li
          className={`${css.equipmentContainer} ${
            selectedEquipment.includes('AC') ? css.checked : ''
          }`}
        >
          <input
            type='checkbox'
            id='AC'
            className={css.equipmentBtn}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='AC'>
            <svg className={css.iconAc}>
              <use href={icons + '#icon-ac'} />
            </svg>
            AC
          </label>
        </li>
        <li
          className={`${css.equipmentContainer} ${
            selectedEquipment.includes('Automatic') ? css.checked : ''
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
            selectedEquipment.includes('Kitchen') ? css.checked : ''
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
            selectedEquipment.includes('TV') ? css.checked : ''
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
            selectedEquipment.includes('Shower/WC') ? css.checked : ''
          }`}
        >
          <input
            type='checkbox'
            id='Shower/WC'
            className={css.equipmentBtn}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='Shower/WC'>
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
            selectedType === 'Van' ? css.checked : ''
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
            selectedType === 'Fully integrated' ? css.checked : ''
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
            selectedType === 'Alcove' ? css.checked : ''
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
      <ShowMoreButton text='Search' />
    </div>
  );
};
