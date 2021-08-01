import React from 'react'
import AmazingOffersCardStyles from './AmazingOffersCardStyles.module.css'
const AmazingOffersCard = () => {
    return (
        <div className={AmazingOffersCardStyles.amazingOffers}>
            <div className={AmazingOffersCardStyles.imageOffer}>
                <img src="#!" alt="" />
            </div>
            <div className={AmazingOffersCardStyles.beforeOffer}>
                <span className={AmazingOffersCardStyles.beforeOfferPrice}>۷۶۰,۰۰۰ تومان</span>
                <span className={AmazingOffersCardStyles.offerPercent}>۱۲٪</span>
            </div>
            <div className={AmazingOffersCardStyles.afterOffer}>
                <span>۶۵۰,۰۰۰ تومان</span>
            </div>
            <div className="productName">
                <span>لنز هشتایی گوشی موبایل</span>
            </div>
        </div >
    )
}

export default AmazingOffersCard
