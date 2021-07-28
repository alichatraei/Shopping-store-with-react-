import React from 'react'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import FooterContactUsStyles from './FooterContactUsStyles.module.css'
const FooterContactUs = () => {
    return (
        <div className="h-auto text-center">
            <h6>پاسخگوی شما هستیم: شنبه تا چهارشنبه
                <span className={FooterContactUsStyles.time}> ۹-۱۷ </span>
                - پنجشنبه
                <span className={FooterContactUsStyles.time}> ۹-۱۴ </span></h6>
            <div className="contactUsIcons h-auto
            d-flex justify-content-center align-items-center
            mt-4">
                <div className="phoneNumber h-auto mx-2">
                    <BsPhone size="1.5rem" color="#6F6C65"
                        className="mx-2" />
                    <span>۰۳۱-۳۳۳۵۲۹۹۷</span>
                </div>
                <div className="email h-auto">
                    <AiOutlineMail size="1.5rem" color="#6F6C65"
                        className="mx-2" />
                    <span>alichatraei@yahoo.com</span>
                </div>
            </div>
        </div>
    )
}

export default FooterContactUs
