import React from 'react'
import CategoryProductIcon from '../../Assets/Icons/categoryProductIcon.svg'
import CategoryProductsNameStyles from './CategoryProductsName.module.css'
const CategoryProductsName = () => {
    return (
        <div className="w-100 container p-0">
            <div className="row">
                <div className="col-1">
                    <img src={CategoryProductIcon} alt="Icon" />
                </div>
                <div className="col p-0">
                    <span className={CategoryProductsNameStyles.categoryName}>{"لوازم جانبی موبایل"}</span>
                </div>
            </div>
        </div>
    )
}

export default CategoryProductsName
