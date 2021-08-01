import React from 'react'
import RoutesType from "./Types/RoutesType";
const Home = React.lazy(() => import('./Views/Home/Home'))
const Routes: RoutesType = [{
    path: '/',
    exact: true,
    page: Home
}]
export default Routes