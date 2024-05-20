import css from './LoadMoreButton.module.css';
export const LoadMoreButton = ({ onClick }) => {
  return (
    <button type='button' className={css.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
};
