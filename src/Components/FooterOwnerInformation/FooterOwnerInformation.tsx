import React from 'react'
import FooterOwnerInformationStyles from './FooterOwnerInformationStyles.module.css'
const FooterOwnerInformation = () => {
    return (
        <div className="h-auto container">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 text-center text-md-end">
                    <h6 className={FooterOwnerInformationStyles.ownerText}>طراحی و توسعه داده شده با <span> 💙 </span> توسط
                        <span className={FooterOwnerInformationStyles.ownerName}> علی چترایی </span></h6>
                </div>
                <div className="col-12 col-md-6 text-center text-md-start">
                    <h6 className={FooterOwnerInformationStyles.ownerText}>کلیه حقوق این سایت محفوظ میباشد.</h6>
                </div>
            </div>
        </div>
    )
}

export default FooterOwnerInformation
