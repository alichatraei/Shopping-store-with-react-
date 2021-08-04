import React from 'react'
// import { Container } from 'react-bootstrap'
import { ProductDetailImage, ProductDetailInformation, ProductDetailAddToBasket } from '../'
import ProductDetailContainerStyles from './ProductDetailContainer.module.css'
const ProductDetailContainer = () => {
    return (
        <div className={ProductDetailContainerStyles.productContainer}>
            <div className="row">
                <div className="col-12 col-md-4">
                    <ProductDetailImage /></div>
                <div className="col-12 col-md-4">
                    <ProductDetailInformation /></div>
                <div className="col-12 col-md-4">
                    <ProductDetailAddToBasket /></div>
            </div>
        </div>
    )
}

export default ProductDetailContainer
