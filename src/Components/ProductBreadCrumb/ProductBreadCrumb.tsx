import React from 'react'
import ProductBreadCrumbStyles from './ProductBreadCrumb.module.css'
const ProductBreadCrumb = () => {
    return (
        <div className={ProductBreadCrumbStyles.breadCrumbContainer}>
            <h6 className="text-muted">
                <span> لوازم جانبی موبایل </span> /
                <span> هولدر موبایل و پایه نگهدارنده </span> /
                <span> پایه نگهدارنده داخلی هوکو </span>
            </h6>
        </div>
    )
}

export default ProductBreadCrumb
