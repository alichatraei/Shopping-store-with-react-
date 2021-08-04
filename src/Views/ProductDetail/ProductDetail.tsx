import React from 'react'
import { ProductBreadCrumb, ProductDetailContainer } from '../../Components'
import ProductDetailStyles from './ProductDetail.module.css'
const ProductDetail = () => {
    return (
        <div className={ProductDetailStyles.productDetail}>

            <ProductBreadCrumb />
            <ProductDetailContainer />

        </div >
    )
}

export default ProductDetail
