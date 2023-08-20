import React from 'react';
import styles from './styles.module.scss';

const Slidercard = ({ avatar, name, city, text }) => {
  return (
    <div className={styles.slidercard}>
      <div className={styles.slidercard__userInfo}>
        <img className={styles.slidercard__userAvatar} src={avatar} alt='user-avatar'/>
        <div className={styles.slidercard__userTextContainer}>
          <h6 className={styles.slidercard__userName}>{name}</h6>
          <p className={styles.slidercard__userCity}>{city}</p>
        </div>
      </div>
      <div className={styles.slidercard__content}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Slidercard;
