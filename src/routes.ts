import React from 'react'
import RoutesType from "./Types/RoutesType";
const Home = React.lazy(() => import('./Views/Home/Home'))
const CategoryDetail = React.lazy(() => import('./Views/CategoryDetail/CategoryDetail'))
const Routes: RoutesType = [{
    path: '/',
    exact: true,
    page: Home
},
{
    path: '/categoryDetail',
    exact: true,
    page: CategoryDetail
}]
export default Routes