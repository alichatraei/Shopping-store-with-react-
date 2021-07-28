import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductItemSlider } from '../'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import ProductSliderStyles from './ProductSliderStyles.module.css'
// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';
SwiperCore.use([Pagination]);

const ProductSlider = () => {
    return (
        <article className="h-auto">
            <Swiper slidesPerView={1} spaceBetween={1} pagination={{
                "clickable": true
            }} breakpoints={{
                "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                },
                "768": {
                    "slidesPerView": 2,
                    "spaceBetween": 40
                },
                "1024": {
                    "slidesPerView": 4,
                    "spaceBetween": 80
                },
                "1440": {
                    "slidesPerView": 1,
                    "spaceBetween": 500
                }
            }} className={ProductSliderStyles.swiper}>
                <SwiperSlide className="h-auto mx-5">
                    <ProductItemSlider />
                </SwiperSlide>
                <SwiperSlide className="h-auto mx-5">
                    <ProductItemSlider />
                </SwiperSlide>
                <SwiperSlide className="h-auto mx-5">
                    <ProductItemSlider />
                </SwiperSlide>
                <SwiperSlide className="h-auto mx-5">
                    <ProductItemSlider />
                </SwiperSlide>
                <SwiperSlide className="h-auto mx-5">
                    <ProductItemSlider />
                </SwiperSlide>
                <SwiperSlide className="h-auto mx-5">
                    <ProductItemSlider />
                </SwiperSlide>
                <SwiperSlide className="h-auto mx-5">
                    <ProductItemSlider />
                </SwiperSlide>
            </Swiper>
        </article>
    )
}

export default ProductSlider
