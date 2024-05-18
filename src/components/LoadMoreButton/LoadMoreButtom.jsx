import css from './LoadMoreButton.module.css';
export const LoadMoreButton = ({ onLoadMore }) => {
  return (
    <button type='button' onClick={onLoadMore} className={css.loadMoreBtn}>
      Load more
    </button>
  );
};
