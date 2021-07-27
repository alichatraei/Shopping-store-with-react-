import React from 'react'
import IComponentProps from '../../Interfaces/IComponentProps'
const CardContainer: React.FC<IComponentProps> = ({ children }) => {
    return (
        <section className="h-auto">
            {children}
        </section>
    )
}

export default CardContainer
