import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './header.module.scss';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={classes.header}>
      <Link className={classes.header__logo} to="/autosalon_vlad_auto">
        Vlad Auto
      </Link>
      <nav className={isActive ? classes.navigation : classes.none}>
        <ul className={classes.navigation__list}>
          <li className={classes.navigation__list_item}>
            <Link to="/catalog" className={classes.navigation__list_link}>
              Каталог
            </Link>
          </li>
          <li className={classes.navigation__list_item}>
            <Link to="/available" className={classes.navigation__list_link}>
              Доступные авто сейчас
            </Link>
          </li>
          <li className={classes.navigation__list_item}>
            <Link to="/reviews" className={classes.navigation__list_link}>
              Отзывы клиентов
            </Link>
          </li>
          <li className={classes.navigation__list_item}>
            <Link to="/contacts" className={classes.navigation__list_link}>
              Контакты
            </Link>
          </li>
          <li className={classes.navigation__list_item}>
            <Link to="/about" className={classes.navigation__list_link}>
              О компании
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.header__burger} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
