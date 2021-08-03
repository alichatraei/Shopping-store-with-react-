import React from 'react'
import sortByCategory from '../../Assets/Icons/sortByCategory.svg'
import CategoryProductSortGroupStyles from './CategoryProductSortGroup.module.css'
const CategoryProductSortGroup = () => {
    return (
        <div className={`${CategoryProductSortGroupStyles.container} container p-0`}>
            <img src={sortByCategory} alt="SortIcon" />
            <span className="mx-2">مرتب سازی:</span>
            <div className="row align-items-center justify-content-center my-3">
                <div className="col text-center">
                    ‌<button className="btn btn-transparent">جدیدترین ها</button>
                </div>
                <div className="col text-center">
                    ‌<button className="btn btn-transparent">پربازدیدترین ها</button>
                </div>
                <div className="col text-center">
                    ‌<button className="btn btn-transparent">محبوب ترین ها</button>
                </div>
                <div className="col text-center">
                    ‌<button className="btn btn-transparent">پرفروش ترین ها</button>
                </div>
                <div className="col text-center">
                    ‌<button className="btn btn-transparent">ارزان ترین ها</button>
                </div>
            </div>
        </div>
    )
}

export default CategoryProductSortGroup
