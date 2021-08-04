import React from 'react'
import {
    CategoryProductsName, CategoryProductSortGroup,
    CategoryProductsHashtags,
    CategoryProducts
} from '../'
import CategoryProductContainerStyles from './CategoryProductContainer.module.css'
const CategoryProductContainer = () => {
    return (
        <section className={CategoryProductContainerStyles.productContainer}>
            <CategoryProductsName />
            <CategoryProductSortGroup />
            <CategoryProductsHashtags />
            <CategoryProducts />
        </section>
    )
}

export default CategoryProductContainer
