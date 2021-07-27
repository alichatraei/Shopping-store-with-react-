import { RiStore3Line } from 'react-icons/ri'
import { IoPhonePortraitSharp, IoShirtOutline, IoHomeOutline, IoBookOutline } from 'react-icons/io5'
import { GiLipstick } from 'react-icons/gi'
type TCategoryList = [
    { en: string, fa: string, icon: any },
    { en: string, fa: string, icon: any },
    { en: string, fa: string, icon: any },
    { en: string, fa: string, icon: any },
    { en: string, fa: string, icon: any },
    { en: string, fa: string, icon: any },
]
const CategoryList: TCategoryList = [
    { en: "superMarket", fa: 'سوپرمارکت', icon: RiStore3Line },
    { en: "phone", fa: 'تلفن همراه', icon: IoPhonePortraitSharp },
    { en: "clothes", fa: 'پوشاک', icon: IoShirtOutline },
    { en: "comestic", fa: 'لوازم آرایشی و بهداشتی', icon: GiLipstick },
    { en: "home", fa: 'خانه و آشپزخانه', icon: IoHomeOutline },
    { en: "book", fa: 'کتاب و هنر', icon: IoBookOutline },
]
export default CategoryList