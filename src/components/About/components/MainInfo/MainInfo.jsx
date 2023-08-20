import React from 'react';
import styles from './styles.module.scss';
import MainInfoImage from '../../../../assets/images/mainInfo-image.png';

const MainInfo = () => {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.mainInfo__content}>
        <h3 className={styles.mainInfo__title}>Круто, ты дошел до третьего блока</h3>
        <p className={styles.mainInfo__text}>63% опрошенных пользовались кредитами из-за того, 
          что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
        </p>
        <p className={styles.mainInfo__text}>
          Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
        </p>
      </div>
      <img className={styles.mainInfo__image} 
        src={MainInfoImage} 
        alt='truck with man'
      />
    </div>
  );
};

export default MainInfo;
