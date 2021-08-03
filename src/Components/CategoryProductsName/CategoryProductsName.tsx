import React from 'react'
import CategoryProductIcon from '../../Assets/Icons/categoryProductIcon.svg'
import CategoryProductsNameStyles from './CategoryProductsName.module.css'
const CategoryProductsName = () => {
    return (
        <div className="w-100">
            <img src={CategoryProductIcon} alt="Icon" />
            <span className={CategoryProductsNameStyles.categoryName}>{"لوازم جانبی موبایل"}</span>
        </div>
    )
}

export default CategoryProductsName
