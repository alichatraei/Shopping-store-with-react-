import React from 'react'
import { BiHeart } from 'react-icons/bi'
import ProductItemSliderStyles from './ProductItemSliderStyles.module.css'
const ProductItemSlider = () => {
    return (
        <div className={ProductItemSliderStyles.card}>
            <div className={`${ProductItemSliderStyles.productImage}`}>
                <img
                    src="https://dkstatics-public.digikala.com/digikala-products/115598446.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    alt="photo1" className="h-auto" />
            </div>
            <div className="productName h-auto text-center">
                <h5 className="h-auto">گوشی هوشمند</h5>
            </div>
            <div className="productPrice w-100 h-auto">
                <h6 className="h-auto">قیمت</h6>
                <div className="h-auto d-flex justify-content-between"><span className="h-auto">۲,۳۰۰,۰۰۰ تومان</span>
                    <BiHeart className="h-auto" size="2rem" color="#FF7C7C" />
                </div>
            </div>
        </div>
    )
}

export default ProductItemSlider
