import React from "react";
import { useDispatch } from 'react-redux';
import { incrementCount, decrementCount,removeItem } from '../../store/BasketSlice'; 
import cross from "../../image/cross.svg"
function ItemBasket(props) {
  const dispatch = useDispatch();
  function formatPrice(price) {
    if (typeof price === 'number') {
      price = price.toString();
    }
    if (price.length > 3) {
      price = price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    return price;
  }
  const handleIncrement = () => {
    dispatch(incrementCount({ Key: props.itemKey }));
  };
  const handleDecrement = () => {
    dispatch(decrementCount({ Key: props.itemKey }));
  };
  const removeCard = () => {
    dispatch(removeItem({Key: props.itemKey}))
  }
  return (
    <div className="basket__container--product-item">
      <img src={props.photo} alt={props.model} />
      <div className="basket__container--product-item__block">
        <div className="basket__container--product-item__info">
          <h1>{props.model}</h1>
          <p>{formatPrice(props.price)} {"₽"}</p>
        </div>
        <div className="basket__container--product-item__info-counter">
          <div className="counter">
            <p onClick={handleDecrement}>-</p>
            <h1>{props.count}</h1>
            <p onClick={handleIncrement}>+</p>
          </div>
          <h1>{formatPrice(props.countprice)} {"₽"} </h1>
        </div>
      </div>
      <img src={cross} onClick={removeCard} />
    </div>
  );
}
export default ItemBasket;