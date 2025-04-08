import css from './HomePage.module.css';
import { Link } from 'react-router-dom';
import homeImage from '../../image/home_image.jpg';
export const HomePage = () => {
  return (
    <>
      <section className={css.heroWrapper}>
        <img src={homeImage} alt='a camper example' className={css.heroImage} />
        <div className={css.heroInfo}>
          <h1 className={css.title}>Explore world – the road is yours</h1>
          <h2 className={css.subtitle}>
            Rent a camper and set out on your dream adventure.
            <br />
            Camp your way – wild, free, unforgettable.
          </h2>
          <Link to='/catalog'>
            <button className={css.ctaButton}>Rent now </button>
          </Link>
        </div>
      </section>
    </>
  );
};
