import css from './Equipment.module.css';

export const Equipment = ({ name, value, icon }) => {
  return (
    <>
      <li key={name} className={css.equipmentBtn}>
        {value}
        {name}
      </li>
    </>
  );
};
