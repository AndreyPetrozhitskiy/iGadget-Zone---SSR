import React from "react"
import "../../style/Basket.scss"
import ItemBasket from "../ui components/ItemBasket";
import { useSelector } from "react-redux";
import { motion, AnimatePresence  } from "framer-motion";
const Bascket = () => {
  const BasketData = useSelector(state => state.basket.BasketMassive)
    // Суммируем все countPrice из массива BasketData
    const totalPayment = BasketData.reduce((acc, item) => acc + item.countPrice, 0);
    
    function formatPrice(price) {
      if (typeof price === 'number') {
        price = price.toString();
      }
      
      if (price.length > 3) {
        price = price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      }
      
      return price;
    }
  return (
    <motion.div className="Basket"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.9,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeatDelay: 1
    }}
    
    >
      <div className="basket__container">
        <h1>Корзина</h1>
      <div className="basket__container-content">
          <div className="basket__container--product">
          <AnimatePresence>
            {BasketData.map((item,itemIndex )=>(
               <motion.div
               key={item.Key}
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 100 }}
               transition={{ duration: 0.5 }}
               >
                <ItemBasket 
                
                count={item.Count} 
                countprice={item.countPrice} 
                photo={item.Photo} 
                model={item.Model} 
                price={item.Price} 
                itemKey={item.Key}
                />
              </motion.div>
            ))}
            </AnimatePresence>
          </div>
          <div className="basket__container--payment">
              <div className="basket__container--payment-promo">
                  <h1>Введите промокод</h1>
                  <input type="text" placeholder="Промокод"/>
                  <p>Активировать</p>
              </div>
              <div className="basket__container--payment-result">
                    <div className="basket__container--payment-result__price-p">
                      <span>Итого к оплате:</span>  
                      <span>{formatPrice(totalPayment)} ₽</span>  
                    </div>
                  <input className="basket__container--payment-result__button" type="button" value="Оформить заказ"  />
              </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
};
export default Bascket;
// Корзина
