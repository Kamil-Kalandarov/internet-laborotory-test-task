import React from 'react';
import styles from './styles.module.scss';

const Card = ({ children, title, text }) => {
  return (
    <li className={styles.card__listItem}>
      {children}
      <div className={styles.card__info}>
        <h6 className={styles.card__title}>{title}</h6>
        <p className={styles.card__text}>{text}</p>
      </div>
    </li>
  );
};

export default Card;
