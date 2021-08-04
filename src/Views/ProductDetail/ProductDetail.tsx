import React from 'react'
import {
    ProductBreadCrumb, ProductDetailContainer
    , CardContainer,
    ProductSlider,
    ProductDetailTabs
} from '../../Components'
import { Container } from 'react-bootstrap'
import ProductDetailStyles from './ProductDetail.module.css'
const ProductDetail = () => {
    return (
        <main className={ProductDetailStyles.productDetail}>
            <Container>
                <ProductBreadCrumb />
                <ProductDetailContainer />
                <CardContainer title="محصولات مشابه" secondText="مشاهده کامل">
                    <ProductSlider />
                </CardContainer>
                <ProductDetailTabs />
            </Container>
        </main >
    )
}

export default ProductDetail
