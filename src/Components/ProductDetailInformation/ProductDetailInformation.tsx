import React from 'react'
import Guarantee from '../../Assets/Icons/Guarantee.svg'
import cartReturn from '../../Assets/Icons/cart-return.svg'
import deliveryFast from '../../Assets/Icons/delivery-fast.svg'
import handCard from '../../Assets/Icons/hand-card.svg'
import ProductDetailInformationStyles from './ProductDetailInformation.module.css'
const ProductDetailInformation = () => {
    return (
        <div className="d-flex flex-column justify-content-between
        align-items-center py-4 h-100">
            <h4 className="lead text-center">پایه نگهدارنده داخل خودرو هوکو مدل BDSM</h4>
            <h6>{"Hoco CA31 Cool run Car Holder"}</h6>
            <hr className="w-100" />
            <div className={ProductDetailInformationStyles.miniText}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="productID text-center">
                            <span>کد کالا: </span>
                            <span>۱۷۷۹۹۹۲</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="productCategory text-center">
                            <span>دسته بندی: </span>
                            <span className="productCategory">لوازم جانبی موبایل</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-100" />
            <div className={`row ${ProductDetailInformationStyles.features} g-3`}>
                <div className="col-12 col-md-6 d-flex align-items-center
                 justify-content-between">
                    <img src={Guarantee} alt="Icon" />
                    <span>ضمانت اصل بودن</span>
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center
                 justify-content-between">
                    <img src={cartReturn} alt="Icon" />
                    <span>ضمانت گارانتی</span>
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center
                 justify-content-between">
                    <img src={deliveryFast} alt="Icon" />
                    <span>تحویل اکسپرس</span>
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center
                 justify-content-between">
                    <img src={handCard} alt="Icon" />
                    <span>پرداخت درب منزل</span>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailInformation
