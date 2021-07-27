import React from 'react';
import BannersContainerStyles from './BannersContainer.module.css'
interface IProps {
    children: React.ReactNode
}
const BannersContainer: React.FC<IProps> = ({ children }) => {
    return (
        <section className={`h-auto w-100 mt-2 p-4 d-flex justify-content-center
        align-items-center ${BannersContainerStyles.bannerContainer}`}>
            {children}
        </section>
    )
}

export default BannersContainer
