import React from 'react'
import { CategoryDetailsAccordion } from '..'
import CategoryDetailsFilterBoxStyles from './CategoryDetailsFilterBox.module.css'
const CategoryDetailsFilterBox = () => {
    return (
        <div className={CategoryDetailsFilterBoxStyles.categoryFilterBoxContainer}>
            <CategoryDetailsAccordion />
        </div>
    )
}

export default CategoryDetailsFilterBox
