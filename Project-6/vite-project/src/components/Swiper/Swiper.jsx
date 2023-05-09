import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";



const Swissssper = (props) => {
    return (
        <>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
                <img className="w-[100%]" src={props.img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-[100%]" src={props.img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-[100%]" src={props.img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-[100%]" src={props.img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-[100%]" src={props.img} alt="" />
            </SwiperSlide>
          </Swiper>
        </>
    )
}

export default Swissssper
