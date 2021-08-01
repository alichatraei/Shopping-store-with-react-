type RoutesType = {
    path: string,
    exact: boolean,
    page: React.LazyExoticComponent<() => JSX.Element>
}[]
export default RoutesType