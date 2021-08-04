import React from 'react'
import ProductImage from '../../Assets/Images/ProductImage.jpg'
import ProductDetailImageStyles from './ProductDetailImage.module.css'
const ProductDetailImage = () => {
    return (
        <div className={ProductDetailImageStyles.productImage}>
            <img src={ProductImage} alt="ProductImage" />
        </div>
    )
}

export default ProductDetailImage
