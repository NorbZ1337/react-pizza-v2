import React from 'react';
import styles from './NotFound.module.scss';

const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.root}>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожелению данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
