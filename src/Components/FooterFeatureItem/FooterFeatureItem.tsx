import React from 'react'
import FooterFeatureInformation from '../../Constants/FooterFeatureInformation'
import FooterFeatureItemStyles from './FooterFeatureItemStyles.module.css'
const FooterFeatureItem = () => {
    return (<>
        {
            FooterFeatureInformation.map((item, index) => {
                return (
                    < div className={`h-auto col-12 col-sm-6 col-md-3
                    d-flex justify-content-center aling-items-center
                    flex-column
                    mb-5 mb-md-0 ${FooterFeatureItemStyles.footerFeatureCard}`} key={index + 1} >
                        <div className="featureIcon h-auto text-center">
                            <img src={item.icon_path} alt={item.title} title={item.title} />
                        </div>
                        <div className="featureTitle h-auto">
                            <h5 className="h-auto text-center mb-3">{item.title}</h5>
                        </div>
                        <div className="featureSubtitle h-auto">
                            <h6 className="text-center">{item.subtitle}</h6>
                        </div>
                    </div >
                )
            })
        }
    </>
    )
}

export default FooterFeatureItem
