import React from 'react'
import FooterFeatureInformation from '../../Constants/FooterFeatureInformation'
const FooterFeatureItem = () => {
    return (<>
        {
            FooterFeatureInformation.map((item, index) => {
                return (
                    < div className="h-auto col-12 col-sm-6 col-md-3" key={index + 1} >
                        <div className="featureIcon h-auto">
                            <img src={item.icon_path} alt={item.title} title={item.title} />
                        </div>
                        <div className="featureTitle h-auto">
                            <h4 className="h-auto">{item.title}</h4>
                        </div>
                        <div className="featureSubtitle h-auto">
                            <h6>{item.subtitle}</h6>
                        </div>
                    </div >
                )
            })
        }
    </>
    )
}

export default FooterFeatureItem
