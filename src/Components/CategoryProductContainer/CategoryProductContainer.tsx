import React from 'react'
import {
    CategoryProductsName, CategoryProductSortGroup,
    CategoryProductsHashtags,
    CategoryProductsContainer
} from '../'
import CategoryProductContainerStyles from './CategoryProductContainer.module.css'
const CategoryProductContainer = () => {
    return (
        <section className={CategoryProductContainerStyles.productContainer}>
            <CategoryProductsName />
            <CategoryProductSortGroup />
            <CategoryProductsHashtags />
            <CategoryProductsContainer />
        </section>
    )
}

export default CategoryProductContainer
