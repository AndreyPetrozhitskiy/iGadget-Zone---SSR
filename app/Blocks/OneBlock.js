import React from "react";
import "../../style/oneblock.scss";
import ipad from "../../image/ipad.png";
import macbook from "../../image/macbook.png";
import SliderComp from "../ui components/SliderComp";
import oneBlockData from "../../store/Products/oneBlockData"
const OneBlock = () => {
  return (
    <div className="oneblock">
      <div className="oneblock__container">
        <div className="oneblock__container--slider">
          <SliderComp />
        </div>
        <div className="oneblock__container--bricks">
          <div className="oneblock__container--brick-one">
            <img src={oneBlockData[1][0].Photo} className="oneblock__container--brick__img" />
            <p className="oneblock__container--brick__p">{oneBlockData[1][0].Text}</p>
          </div>
          <div className="oneblock__container--bricks-two">
            <img src={oneBlockData[1][1].Photo} className="oneblock__container--brick__img" />
            <p className="oneblock__container--brick__p">
            {oneBlockData[1][1].Text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneBlock;
