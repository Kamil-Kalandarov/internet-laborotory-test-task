import React from 'react';
import styles from './styles.module.scss';
import Slider from '../Slider/Slider';

const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <h2 className={styles.reviews__title}>Отзывы</h2>
      <Slider />
    </section>
  );
};

export default Reviews;
