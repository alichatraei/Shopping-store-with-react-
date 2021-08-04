import React, { useState } from 'react'
import { Tabs, Tab, Table } from 'react-bootstrap'
import ProductDetailTabsStyles from './ProductDetailTabs.module.css'
const ProductDetailTabs = () => {
    const [key, setKey] = useState('describtion');
    return (
        <div className={ProductDetailTabsStyles.container}>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => k && setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="describtion" title="توضیحات">
                    <p className="text-justify">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </Tab>
                <Tab eventKey="information" title="مشخصات محصول">
                    <Table responsive="md" className="w-75 mx-auto text-center">
                        <thead>
                            <tr>
                                <th>ویژگی</th>
                                <th>امکانات</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>سایز</td>
                                <td>۱۲ سانتی متر طول / ۲۰ سانتی متر عرض</td>
                            </tr>
                            <tr>
                                <td>سایز</td>
                                <td>۱۲ سانتی متر طول / ۲۰ سانتی متر عرض</td>
                            </tr>
                            <tr>
                                <td>سایز</td>
                                <td>۱۲ سانتی متر طول / ۲۰ سانتی متر عرض</td>
                            </tr>
                            <tr>
                                <td>سایز</td>
                                <td>۱۲ سانتی متر طول / ۲۰ سانتی متر عرض</td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        </div>
    )
}

export default ProductDetailTabs
