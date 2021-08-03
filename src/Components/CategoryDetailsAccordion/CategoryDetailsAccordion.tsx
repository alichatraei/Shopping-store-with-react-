import React from 'react'
import { Accordion } from 'react-bootstrap'
import CategoryDetailsAccordionStyles from './CategoryDetailsAccordion.module.css'
const CategoryDetailsAccordion = () => {
    return (
        <div className={CategoryDetailsAccordionStyles.accordionContainer}>
            <p className={CategoryDetailsAccordionStyles.filterTitle}>فیلتر</p>
            <Accordion defaultActiveKey="0" flush
                className={CategoryDetailsAccordionStyles.accordion}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>برند</Accordion.Header>
                    <Accordion.Body>
                        برند
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>محصولات</Accordion.Header>
                    <Accordion.Body>
                        فقط محصولات موجود
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default CategoryDetailsAccordion
