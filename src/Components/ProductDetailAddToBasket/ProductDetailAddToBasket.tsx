import React from 'react'
import AddToBasket from '../../Assets/Icons/addToBasket.svg'
import ProductDetailAddToBasketStyles from './ProductDetailAddToBasket.module.css'
const ProductDetailAddToBasket = () => {
    return (
        <div className={ProductDetailAddToBasketStyles.addToBasketCard}>
            <div className={ProductDetailAddToBasketStyles.isOff}>
                <span>تخفیف خورده</span>
            </div>
            <div className="chooseColor d-flex align-items-center
            justify-content-between mx-auto
            w-100 my-4 px-4">
                <span>رنگ :</span>
                <select name="color" id={ProductDetailAddToBasketStyles.color}>
                    <option value="black">سیاه</option>
                    <option value="purpule">بنفش</option>
                    <option value="yellow">زرد</option>
                </select>
            </div>
            <div className="counts d-flex mx-auto align-items-center
            w-100 px-4 justify-content-between">
                <span>تعداد: </span>
                <input type="number" name="productCount"
                    id={ProductDetailAddToBasketStyles.productCount} />
            </div>
            <div className={ProductDetailAddToBasketStyles.priceSection}>
                <div className="offPrice d-flex align-items-center
                justify-content-between py-3">
                    <span className={ProductDetailAddToBasketStyles.offPercent}>۲۰٪</span>
                    <span
                        className={ProductDetailAddToBasketStyles.previuosPrice}>۷۵,۰۰۰ تومان</span>
                </div>
                <span className={ProductDetailAddToBasketStyles.afterOffPrice}>
                    ۶۵۰,۰۰۰ تومان
                </span>
            </div>
            <div className={ProductDetailAddToBasketStyles.btnAddToBasket}>
                <button>
                    <img src={AddToBasket} alt="" />
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
    )
}

export default ProductDetailAddToBasket
