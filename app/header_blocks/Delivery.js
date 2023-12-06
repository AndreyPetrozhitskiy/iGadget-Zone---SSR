import React from "react"
import "../../style/delivery.scss"
import { motion } from "framer-motion";
const Delivery = () => {
  return (
    <motion.div className="delivery"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.9,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeatDelay: 1
    }}
    >
      <div className="dilivery__container">
        <h1>Доставка</h1>
        <p>Наш интернет-магазин осуществляет отправку товаров по Владивостоку и регионам России:</p>

        <p>Стоимость:</p>
        <ol >
          <li>По Владивостоку — от 200 руб. </li>
          <li>Самовывоз из нашего розничного магазина – бесплатно!</li>
          <li>Почтовая доставка ТК СДЕК по России — от 300 руб. в зависимости от адреса доставки. </li>
        </ol>

        <p>Сроки:</p>
        <ol >
          <li>По Владивостоку – в тот же день или на следующий день.</li>
          <li>Самовывоз – в тот же день или на следующий день.</li>
          <li>Почтовая доставка ТК СДЕК по России – от 2 дней в зависимости от региона.</li>
        </ol>
      </div>
    </motion.div>
  )
};

export default Delivery;
