import React from 'react'
import amazingOffersImage from '../../Assets/Images/AmazingOffers.png'
import AmazingOffersCardStyles from './AmazingOffersCardStyles.module.css'
const AmazingOffersCard = () => {
    return (
        <div className={AmazingOffersCardStyles.amazingOffers}>
            <div className={AmazingOffersCardStyles.imageOffer}>
                <img src={amazingOffersImage} alt="پیشنهاد شگفت انگیز" />
            </div>
            <div className={AmazingOffersCardStyles.beforeOffer}>
                <span className={AmazingOffersCardStyles.offerPercent}>۱۲٪</span>
                <span className={AmazingOffersCardStyles.beforeOfferPrice}>۷۶۰,۰۰۰ تومان</span>
            </div>
            <div className={AmazingOffersCardStyles.afterOffer}>
                <span>۶۵۰,۰۰۰ تومان</span>
            </div>
            <div className={AmazingOffersCardStyles.productName}>
                <span>لنز هشتایی گوشی موبایل</span>
            </div>
        </div >
    )
}

export default AmazingOffersCard
