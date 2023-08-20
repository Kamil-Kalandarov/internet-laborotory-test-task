import React, { useState } from 'react';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import DropdownMenu from '../../DeopDownMenu/DropDwonMenu';
import Logo from '../components/Logo/Logo';

const HeaderPanel = () => {

  const setActive = ({isActive}) => isActive ? styles.headerPanel__link_active : styles.headerPanel__link;

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header className={styles.headerPanel}>
      <Logo />
      <ul className={styles.headerPanel__navList}>
        <li><NavLink to={'/1'} className={setActive}>Как это работает</NavLink></li>
        <li><NavLink to={'/2'} className={setActive}>3-й блок</NavLink></li>
        <li><NavLink to={'/3'} className={setActive}>Вопросы и ответы</NavLink></li>
        <li><NavLink to={'/4'} className={setActive}>Форма</NavLink></li>
      </ul>
      <button className={!isOpen ? styles.headerPanel__btn_type_open : styles.headerPanel__btn_type_close} onClick={handleMenuClick}></button>
      {isOpen && <DropdownMenu />}
    </header>
  );
}
  
export default HeaderPanel;
