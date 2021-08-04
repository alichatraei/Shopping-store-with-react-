import React from 'react'
import RoutesType from "./Types/RoutesType";
const Home = React.lazy(() => import('./Views/Home/Home'))
const CategoryDetail = React.lazy(() => import('./Views/CategoryDetail/CategoryDetail'))
const ProductDetail = React.lazy(() => import('./Views/ProductDetail/ProductDetail'))
const Routes: RoutesType = [{
    path: '/',
    exact: true,
    page: Home
},
{
    path: '/categorydetail',
    exact: true,
    page: CategoryDetail
},
{
    path: '/productdetail',
    exact: true,
    page: ProductDetail
}]
export default Routes