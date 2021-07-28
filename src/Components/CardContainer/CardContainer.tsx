import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import IComponentProps from '../../Interfaces/IComponentProps'
import CardContainerStyles from './CardContainerStyles.module.css'
interface ICardContainerProp {
    title: string;
    secondText: string;
}
const CardContainer: React.FC<IComponentProps & ICardContainerProp> = ({ children, title, secondText }) => {
    return (
        <section className={`h-auto mx-auto
        my-4 p-4 ${CardContainerStyles.cardContainer}`}>
            <div className={`contaienr-fluid ${CardContainerStyles.cardTitle}`}>
                <h4 className="h-auto w-auto">{title}</h4>
                <h6 className="h-auto">{secondText}
                    <FiChevronLeft className="h-auto" size="1rem" color="#A0A0A0" /></h6>
            </div>
            {children}
        </section>
    )
}

export default CardContainer
