import React from 'react'
import { Accordion } from 'react-bootstrap'
import {
    BrandListsAccordionFilterBox
    , OnlyEntityProductsCheckBox
} from '../'
import CategoryDetailsAccordionStyles from './CategoryDetailsAccordion.module.css'
const CategoryDetailsAccordion = () => {
    return (
        <div className={CategoryDetailsAccordionStyles.accordionContainer}>
            <p className={CategoryDetailsAccordionStyles.filterTitle}>فیلتر</p>
            <Accordion defaultActiveKey="0" flush
                className={CategoryDetailsAccordionStyles.accordion}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>برند</Accordion.Header>
                    <Accordion.Body className={CategoryDetailsAccordionStyles.brandSection}>
                        <BrandListsAccordionFilterBox />
                        <BrandListsAccordionFilterBox />
                        <BrandListsAccordionFilterBox />
                        <BrandListsAccordionFilterBox />
                        <BrandListsAccordionFilterBox />
                        <BrandListsAccordionFilterBox />
                        <BrandListsAccordionFilterBox />
                        <BrandListsAccordionFilterBox />
                        <BrandListsAccordionFilterBox />
                        <BrandListsAccordionFilterBox />
                        <BrandListsAccordionFilterBox />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>محصولات</Accordion.Header>
                    <Accordion.Body>
                        <OnlyEntityProductsCheckBox />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default CategoryDetailsAccordion
