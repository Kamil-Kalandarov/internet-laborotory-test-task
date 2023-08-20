import React from 'react';
import styles from './styles.module.scss';
import Cards from './components/Cards/Cards';
import MainInfo from './components/MainInfo/MainInfo';

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.about__title}>Как это работает</h2>
      <Cards />
      <MainInfo />
    </section>
  );
};

export default About;
