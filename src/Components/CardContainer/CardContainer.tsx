import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { PopularCategoryList } from '../'
import IComponentProps from '../../Interfaces/IComponentProps'
const CardContainer: React.FC<IComponentProps> = ({ children }) => {
    return (
        <section className="h-auto w-100 p-4">
            <Container fluid className="h-auto w-100 d-flex justify-content-center p-0">
                <Row className="h-auto w-100 d-flex justify-content-between">
                    <PopularCategoryList />
                </Row>
            </Container>
            {children}
        </section>
    )
}

export default CardContainer
