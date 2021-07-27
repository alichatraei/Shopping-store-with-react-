import React from 'react'
import { Col } from 'react-bootstrap'
import CategoryList from '../../Constants/CategoryList'
import PopularCategoryListStyles from './PopularCategoryListStyles.module.css'
const PopularCategoryList = (): JSX.Element => {
    return (
        <article className='h-100'>

            {CategoryList.map((item, index) => {
                return (
                    <Col xs={12} sm={6} md key={index + 1}>
                        <div className={PopularCategoryListStyles.card}>
                            <div className="categoryIcon">
                                <img src='1' alt={`${index + 1}`} />
                            </div>
                            <div className="categoryName">
                                <h4>{item}</h4>
                            </div>
                        </div>
                    </Col>
                )
            })}

        </article>
    )
}

export default PopularCategoryList
