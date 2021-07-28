import React from 'react'
import { FooterFeatureItem } from '..'
import FooterFeaturesContainerStyles from './FooterFeaturesContainerStyles.module.css'
const FooterFeaturesContainer = () => {
    return (
        <article className={`
        container 
        ${FooterFeaturesContainerStyles.featureContainer}`}>
            <div className="row h-auto justify-content-center">
                <FooterFeatureItem />
            </div>
        </article>
    )
}

export default FooterFeaturesContainer
