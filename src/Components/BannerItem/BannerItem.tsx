import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from 'react-bootstrap'
import SwiperCore, {
    Pagination
} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import BannerItemStyles from './BannerItemStyles.module.css'
SwiperCore.use([Pagination]);
const BannerItem = () => {
    return (
        <div className="h-auto w-100">
            <Container className="h-auto w-100">
                <Row className="h-auto w-100 align-items-center justify-content-between">
                    <Col xs={12} md={4} className="h-auto">
                        <Swiper pagination={true} className="mySwiper h-auto">
                            <SwiperSlide className={BannerItemStyles.swiperSlide} />
                        </Swiper>
                    </Col>
                    <Col xs={12} md={8} className="h-auto">
                        <Swiper pagination={true} className="mySwiper h-auto">
                            <SwiperSlide className={BannerItemStyles.swiperSlide} />
                            <SwiperSlide className={BannerItemStyles.swiperSlide} />
                            <SwiperSlide className={BannerItemStyles.swiperSlide} />
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BannerItem
