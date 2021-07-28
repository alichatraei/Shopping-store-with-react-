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
type TBannerItem = {
    banners: {
        xsSize: number;
        smSize: number;
        mdSize: number;
    }[]
}
const BannerItem: React.FC<TBannerItem> = ({ banners }) => {
    return (
        <div className="h-auto w-100">
            <Container className="h-auto w-100">
                <Row className="h-auto w-100 align-items-center justify-content-between">
                    {
                        banners.map((item, index) => {
                            return (<><Col key={index + 1}
                                xs={item.xsSize} md={item.mdSize}
                                className="h-auto">
                                <Swiper pagination={true} className="mySwiper h-auto">
                                    <SwiperSlide className={BannerItemStyles.swiperSlide}
                                        style={banners.length > 1 ? { height: '20rem' }
                                            : { height: '30rem' }} />
                                </Swiper>
                            </Col></>)
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default BannerItem
