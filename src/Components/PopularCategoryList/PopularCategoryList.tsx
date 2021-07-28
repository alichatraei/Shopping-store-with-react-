import React from 'react'
import { Col } from 'react-bootstrap'
import CategoryList from '../../Constants/CategoryList'
import PopularCategoryListStyles from './PopularCategoryListStyles.module.css'
const PopularCategoryList = (): JSX.Element => {
    return (
        <>
            {CategoryList.map((item, index) => {
                return (
                    <Col xs={12} sm={6} md={2} key={index + 1}
                        className="h-auto m-0 d-flex justify-content-center mb-4 mb-md-0">
                        <div className={PopularCategoryListStyles.card}>
                            <div className="categoryIcon h-auto mt-4">
                                {<item.icon size="3rem" className="h-auto" />}
                            </div>
                            <div className={PopularCategoryListStyles.categoryName}>
                                <h4 className="h-auto text-center">{item.fa}</h4>
                            </div>
                        </div>
                    </Col>
                )
            })}

        </>
    )
}

export default PopularCategoryList
