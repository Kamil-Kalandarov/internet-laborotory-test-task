import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as WaitingIcon } from '../../../../assets/icons/waiting.svg';
import { ReactComponent as DeliveryIcon } from '../../../../assets/icons/delivery-truck.svg';
import { ReactComponent as SecureIcon } from '../../../../assets/icons/secure.svg';
import { ReactComponent as MoneyBagsIcon } from '../../../../assets/icons/money-bags.svg';
import Card from './components/Card';

const cardsData = [
  {id: 1, icon: <WaitingIcon />, title: 'Прочитай задание внимательно', text: 'Думаю у тебя не займет это больше двух-трех минут'},
  {id: 2, icon: <DeliveryIcon />, title: 'Прочитай задание внимательно', text: 'Думаю у тебя не займет это больше двух-трех минут'},
  {id: 3, icon: <SecureIcon />, title: 'Прочитай задание внимательно', text: 'Думаю у тебя не займет это больше двух-трех минут'},
  {id: 4, icon: <MoneyBagsIcon />, title: 'Прочитай задание внимательно', text: 'Думаю у тебя не займет это больше двух-трех минут'},
]

const cardElemets = cardsData
  .map(cardData => <Card key={cardData.id} children={cardData.icon} title={cardData.title} text={cardData.text} />)

const Cards = () => {
  return (
    <ul className={styles.cards__list}>
      {cardElemets}
    </ul>
  );
};

export default Cards;
