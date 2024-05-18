import css from './BookingForm.module.css';

export const BookingForm = () => {
  return (
    <>
      <form className={css.bookingSection}>
        <h2 className={css.formTitle}>Book your campervan now</h2>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>

        <input
          type='text'
          id='userName'
          placeholder='Name'
          className={css.formInput}
        />
        <label htmlFor='userName'></label>

        <input
          type='text'
          id='userEmail'
          placeholder='Email'
          className={css.formInput}
        />
        <label htmlFor='userEmail'></label>

        <input
          type='text'
          id='dateBooking'
          placeholder='Booking date'
          className={css.formInput}
        />
        <label htmlFor='dateBooking'></label>

        <textarea
          type='text'
          id='userComment'
          className={css.formTextArea}
          defaultValue='Comment'
        ></textarea>
        <label htmlFor='userComment'></label>
        <button type='submit' className={css.sendBtn}>
          Send
        </button>
      </form>
    </>
  );
};
