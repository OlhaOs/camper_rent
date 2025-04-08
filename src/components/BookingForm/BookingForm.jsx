import { useState } from 'react';
import css from './BookingForm.module.css';
import { useNavigate } from 'react-router-dom';

const defaultState = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

export const BookingForm = () => {
  const [userData, setUserData] = useState(defaultState);
  const navigate = useNavigate();
  const handleChange = ({ target: { value, name } }) => {
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setUserData(defaultState);
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Form submitted successfully! We'll call you as soon as possible.");
    resetForm();
    navigate('/catalog');
  };

  return (
    <>
      <form className={css.bookingSection} onSubmit={handleSubmit}>
        <h2 className={css.formTitle}>Book your campervan now</h2>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>

        <input
          type='text'
          id='userName'
          placeholder='Name'
          className={css.formInput}
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={userData.name}
          onChange={handleChange}
        />
        <label htmlFor='userName'></label>

        <input
          type='email'
          id='userEmail'
          placeholder='Email'
          className={css.formInput}
          name='email'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          required
          value={userData.email}
          onChange={handleChange}
        />
        <label htmlFor='userEmail'></label>

        <input
          type='date'
          id='dateBooking'
          placeholder='Booking date'
          className={css.formInput}
          name='date'
          required
          value={userData.date}
          onChange={handleChange}
        />
        <label htmlFor='dateBooking'></label>

        <textarea
          id='userComment'
          className={css.formTextArea}
          name='comment'
          placeholder='Comment'
          value={userData.comment}
          onChange={handleChange}
        ></textarea>
        <label htmlFor='userComment'></label>

        <button type='submit' className={css.sendBtn}>
          Send
        </button>
      </form>
    </>
  );
};
