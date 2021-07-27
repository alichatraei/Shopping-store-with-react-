import React from 'react';

interface IProps {
    children: React.ReactNode
}
const BannersContainer: React.FC<IProps> = ({ children }) => {
    return (
        <section className="h-auto w-100 p-4 d-flex justify-content-center
        align-items-center">
            salam
        </section>
    )
}

export default BannersContainer
