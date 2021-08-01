import React from 'react'
import { AmazingOffersCard } from '..'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Pagination
} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import AmazingOffersContainerStyles from './AmazingOffersContainerStyles.module.css'
SwiperCore.use([Pagination]);
const AmazingOffersContainer = () => {
    return (
        <div className={AmazingOffersContainerStyles.amazingOffersContainer}>
            <Swiper pagination={true} className={AmazingOffersContainerStyles.mySwiper}>
                <SwiperSlide><AmazingOffersCard /></SwiperSlide>
                <SwiperSlide><AmazingOffersCard /></SwiperSlide>
                <SwiperSlide><AmazingOffersCard /></SwiperSlide>
                <SwiperSlide><AmazingOffersCard /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default AmazingOffersContainer
