import React from 'react'
import BrandListsAccordionFilterBoxStyles from './BrandListsAccordionFilterBox.module.css'
const BrandListsAccordionFilterBox = () => {
    return (
        <div className={BrandListsAccordionFilterBoxStyles.brandInput}>
            <label htmlFor="checkBox">ال جی</label>
            <input type="checkbox" name="brandName" id="checkBox" />
        </div>
    )
}

export default BrandListsAccordionFilterBox
