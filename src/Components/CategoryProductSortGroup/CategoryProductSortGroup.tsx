import React from 'react'
import sortByCategory from '../../Assets/Icons/sortByCategory.svg'
import CategoryProductSortGroupStyles from './CategoryProductSortGroup.module.css'
const CategoryProductSortGroup = () => {
    return (
        <div className={CategoryProductSortGroupStyles.container}>
            <img src={sortByCategory} alt="SortIcon" />
            <span className="mx-2">مرتب سازی:</span>
            ‌<button className="btn btn-transparent">جدیدترین ها</button>
            ‌<button className="btn btn-transparent">پربازدیدترین ها</button>
            ‌<button className="btn btn-transparent">محبوب ترین ها</button>
            ‌<button className="btn btn-transparent">پرفروش ترین ها</button>
            ‌<button className="btn btn-transparent">ارزان ترین ها</button>
        </div>
    )
}

export default CategoryProductSortGroup
