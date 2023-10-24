import React from 'react';
import { Link } from 'react-router-dom';

import classes from './main.module.scss';

const MainPage = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main__content}>
        <h1 className={classes.main__title}>
          Добро пожаловать на сайт по покупке машин. Здесь вы осуществите свою мечту
        </h1>
        <Link to="/catalog" className={classes.main__button}>
          Выбрать автомобиль
        </Link>
      </div>
    </section>
  );
};

export default MainPage;
