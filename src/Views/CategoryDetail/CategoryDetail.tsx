import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AmazingOffersContainer, CategoryDetailsFilterBox } from '../../Components'
import CategoryDetailStyles from './CategoryDetail.module.css'
const CategoryDetail = () => {
    return (
        <Container fluid>
            <main className={CategoryDetailStyles.categoryDetailContainer}>
                <Row>
                    <Col xs={12} sm={12} md={3}>
                        <AmazingOffersContainer />
                        <CategoryDetailsFilterBox />
                    </Col>
                    <Col xs={12} sm={12} md={9}>
                        <div className="main">
                            hello
                        </div>
                    </Col>
                </Row>
            </main>
        </Container>
    )
}

export default CategoryDetail
