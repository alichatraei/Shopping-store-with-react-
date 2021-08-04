import React from 'react'
import { ProductItemSlider } from '..'
const CategoryProducts = () => {
    return (
        <article className="container-fluid mt-5">
            <div className="row align-items-center justify-content-center g-5">
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <ProductItemSlider />
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <ProductItemSlider />
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <ProductItemSlider />
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <ProductItemSlider />
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <ProductItemSlider />
                </div>
            </div>
        </article>
    )
}

export default CategoryProducts
