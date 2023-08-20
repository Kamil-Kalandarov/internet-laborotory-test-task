import React from 'react';
import styles from './styles.module.scss';
import HeaderPanel from './components/HeaderPanel';

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.header__overlay}></div>
      <HeaderPanel />
      <h1 className={styles.header__title}>Говорят, никогда не поздно сменить профессию</h1>
      <p className={styles.header__text}>Сделай крутое тестовое задание и у тебя получится</p>
      <button className={styles.header__button}>Проще простого!</button>
    </section>
  );
};
  
export default Header;
