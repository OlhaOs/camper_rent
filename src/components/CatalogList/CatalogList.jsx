import { CatalogItem } from '../CatalogItem/CatalogItem';

import css from './CatalogList.module.css';

export const CatalogList = ({ list }) => {
  return (
    <>
      <ul className={css.catalogList}>
        {list.map(item => (
          <CatalogItem key={item._id} listItem={item} />
        ))}
      </ul>
    </>
  );
};
