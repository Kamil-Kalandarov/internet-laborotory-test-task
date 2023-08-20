import React from 'react';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import { ReactComponent as MenuArrow } from '../../assets/icons/menu-arrow.svg';

function DropdownMenu() {
  
  // изменение состояния ссылки с активного на дефолтное
  const setActive = ({isActive}) => isActive ? styles.dropDownMenu__link_active : styles.dropDownMenu__link;

  return (
    <div className={styles.dropDownMenu}>
      <div className={styles.dropDownMenu__header}>
        <Logo />
      </div>
      <ul className={styles.dropDownMenu__navList}>
        <li className={styles.dropDownMenu__navListItem}>
          <NavLink to={'/1'} className={setActive}>
            Как это работает<MenuArrow />
          </NavLink>
        </li>
        <li className={styles.dropDownMenu__navListItem}>
          <NavLink to={'/2'} className={setActive}>
            3-й блок<MenuArrow />
          </NavLink>
        </li>
        <li className={styles.dropDownMenu__navListItem}>
          <NavLink to={'/3'} className={setActive}>
            Вопросы и ответы<MenuArrow />
          </NavLink>
        </li>
        <li className={styles.dropDownMenu__navListItem}>
          <NavLink to={'/4'} className={setActive}>
            Форма<MenuArrow />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
