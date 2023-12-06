import React, { useState } from "react";
import "../../style/productblock.scss";
import SliderProduct from "../ui components/SliderProduct";

const ProductBlock = (props) => {
  const ggg = () =>{
    alert("Открылся каталог с этой категорией")
  }
  const data_slider = props.data
  const itemNameData = Object.keys(data_slider)
  const [selectedItem, setSelectedItem] = useState(itemNameData[0]);
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };
  const slider_index = props.slider_index
  return (
    <div className="product__block">
      <div className="product__block-container">
        <p className="product__block-container__h1" onClick={ggg}>{props.h1}</p>
        <div className="product__block-container__nav-block">
          {Object.keys(data_slider).map((item, itemIndex) => (
            <div
              className={`product__block-container__nav-block--item ${
                selectedItem === item ||
                (itemIndex === 0 && selectedItem === null)
                  ? "selected"
                  : ""
              }`}
              key={itemIndex}
              onClick={() => handleItemClick(item)}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="product__block-container__slider">
            <SliderProduct slider_index={slider_index} array_product={data_slider[selectedItem]}/>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
