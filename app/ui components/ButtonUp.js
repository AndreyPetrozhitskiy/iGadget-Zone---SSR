import React, { useState, useEffect } from "react";
import '../../style/buttonup.scss';
import Arrow from '../../image/arrow_up.svg';

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Функция, которая будет отслеживать прокрутку страницы
    const handleScroll = () => {
      if (window.pageYOffset > 100) { // Пример: кнопка появляется, когда страница прокручена на 100 пикселей
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Очистка слушателя событий при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0, -50);
        setTimeout(handlerScrollUp, 5);
      }
  };

  return (
    <div className={ `button__up ${isVisible ? "visible" : ""}`} onClick={handlerScrollUp}>
      <img className="button__up--img" src={Arrow} alt="Arrow" />
    </div>
  );
};

export default ButtonUp;

