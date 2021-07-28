import Guarantee from '../Assets/Icons/Guarantee.svg'
import cartReturn from '../Assets/Icons/cart-return.svg'
import deliveryFast from '../Assets/Icons/delivery-fast.svg'
import handCard from '../Assets/Icons/hand-card.svg'
type TFooterFeatureInfo = { icon_path: string, title: string, subtitle: string }[];
const FooterFeatureInformation: TFooterFeatureInfo = [{
    icon_path: Guarantee,
    title: 'ضمانت اصل بودن کالا',
    subtitle: 'تضمین اصالت و گارانتی'
},
{
    icon_path: cartReturn,
    title: 'ضمانت بازگشت',
    subtitle: 'بازگرداندن کالا در ۷ روز'
}, {
    icon_path: deliveryFast,
    title: 'تحویل اکسپرس',
    subtitle: '۲۴ ساعت در اصفهان'
}, {
    icon_path: handCard,
    title: 'پرداخت درب منزل',
    subtitle: 'درسراسر کشور'
}]
export default FooterFeatureInformation