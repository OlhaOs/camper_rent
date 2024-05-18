import { useEffect, useState } from 'react';
import { CatalogList } from '../../components/CatalogList/CatalogList';
import { getCamperList } from '../../api/Catalog';
import { Loader } from '../../components/Loader/Loader';
import { LoadMoreButton } from '../../components/LoadMoreButton/LoadMoreButtom';
import { Filters } from '../../components/Filters/Filters';
import css from './Catalog.module.css';

export const Catalog = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchList = async () => {
      setLoading(true);
      try {
        const data = await getCamperList(page);
        setItem(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchList();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        item.length > 0 && (
          <section className={css.catalogSection}>
            <Filters />
            <CatalogList list={item} />
          </section>
        )
      )}
      {item.length > 0 && <LoadMoreButton onLoadMore={handleLoadMore} />}
    </>
  );
};
