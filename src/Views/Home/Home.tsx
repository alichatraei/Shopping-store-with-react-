import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { BannersContainer, BannerItem, CardContainer, ProductSlider } from '../../Components';
import { PopularCategoryList } from '../../Components'
import HomeStyles from './Home.module.css';
const Home = () => {
    return (
        <main className={HomeStyles.homeContainer}>
            <BannersContainer >
                <BannerItem />
            </BannersContainer>
            <CardContainer title="محصولات منتخب" secondText="همه محصولات">
                <Container fluid className="h-auto w-100 d-flex justify-content-center p-0">
                    <Row className="h-auto w-100 d-flex justify-content-between">
                        <PopularCategoryList />
                    </Row>
                </Container>
            </CardContainer>
            <CardContainer title="ساعت هوشمند" secondText="ساعت های هوشمند">
                <Container fluid className="h-auto w-100 d-flex justify-content-center p-0">
                    <Row className="h-auto w-100 d-flex justify-content-between">
                        <ProductSlider />
                    </Row>
                </Container>
            </CardContainer>
        </main>
    )
}

export default Home
