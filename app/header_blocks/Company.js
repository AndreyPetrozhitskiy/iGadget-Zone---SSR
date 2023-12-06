import React from "react"
import '../../style/company.scss'
import { motion } from "framer-motion";

const Company = () => {
  return (
    <motion.div  className="company"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.9,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeatDelay: 1
    }}
    >
      <div className="company__container">
        <h1>О компании</h1>
        <i>Интернет-магазин "iGadget Zone" – лучшие товары по низким ценам!</i>
        <p>Мы предлагаем большой выбор техники от Apple, Xiaomi, Samsung, Huawei, Honor, OnePlus, Asus, Sony, Nothing, DJI, Hoco, Baseus, Borofone и т.д.</p>
        <p>Смартфоны, планшеты, ноутбуки, телевизоры, квадрокоптеры, стабилизаторы, камеры, экшн-камеры, аксессуары и многое другое!</p>
        <p>В iGadget Zone представлен огромный выбор различной трендовой техники, таких как Apple, Xiaomi, Samsung, Meizu, Huawei, Dji и др. В нашем магазине всегда можно найти модель интересующего смартфона, и подобрать аксессуары различных брендов Baseus, Benks, Hoco, Rofi, Xiaomi.</p>
        <p>Чтобы познакомиться с ассортиментом товаров заходите в интернет магазин, выбирайте категорию, и в пару кликов оформляйте заказ — никаких очередей, пробок, впустую потраченного времени. Вы сами выбираете способ оплаты: оплата банковскими картами(перевод), наличные и банковские карты на кассе.</p>
        <i>Мы доставим ваш заказ в любой уголок страны, осуществим подробную консультацию по товарам и поможем с выбором.</i>
      </div>
    </motion.div>
  )
};

export default Company;
