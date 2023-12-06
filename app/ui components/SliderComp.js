import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../style/slider.scss";
import oneBlockData from '../../store/Products/oneBlockData'

const SliderComp = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        loop={true}
      >
        {oneBlockData[0].map((item,itemIndex)=>(
          <SwiperSlide key={itemIndex}>
            <div className="slider__slide">
              <img className="slider__slide-img" src={item.Photo}/>
              <div className="slider__slide-p">
                <div className="slider__slide-p-fade">
                  <p className="">{item.Text}</p>
                </div>
              </div>
            </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComp;
