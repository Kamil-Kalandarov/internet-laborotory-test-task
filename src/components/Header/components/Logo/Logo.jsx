import React from 'react';
import styles from './styles.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logo__circleContainer}>
        <svg className={styles.logo_type_blue} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#2A6CEA"/>
        </svg>
        <svg className={styles.logo_type_white} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#ECEFF2"/>
        </svg>
      </div>
      <h1 className={styles.logo__title}>testLab</h1>
    </div>
  );
};

export default Logo;
