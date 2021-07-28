import React from 'react'
import EanjomanLogo from '../../Assets/Icons/EanjomanLogo.svg'
import SamandehiLogo from '../../Assets/Icons/SamandehiLogo.svg'
import FooterEnamadLogoStyles from './FooterEnamadLogoStyles.module.css'
const FooterEnamadLogo = () => {
    return (
        <div className="h-auto d-flex justify-content-center
        align-items-center">
            <img src={EanjomanLogo} alt="انجمن الکترونیکی"
                className={FooterEnamadLogoStyles.enamadImage} />
            <img src={SamandehiLogo} alt="نماد الکترونیکی"
                className={FooterEnamadLogoStyles.enamadImage} />
        </div>
    )
}

export default FooterEnamadLogo
