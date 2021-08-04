import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
const ProductBreadCrumb = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/categorydetail">لوازم جانبی موبایل</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    هولدر مویایل و پایه نگهدارنده
                </Breadcrumb.Item>
                <Breadcrumb.Item active>پایه نگهدارنده داخلی هوکو</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default ProductBreadCrumb
