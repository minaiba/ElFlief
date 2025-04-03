import golden from '../../assets/aiba/ipp.webp'
import { Link } from 'react-router-dom'
import tg from '../../assets/aiba/tg.png'
import vk from '../../assets/aiba/vk.png'
import uteb from '../../assets/aiba/tube.png'
import app from '../../assets/aiba/appgallery.png'
import apps from '../../assets/aiba/appstore_white.png'
import google from '../../assets/aiba/googleplay.png'
import rus from '../../assets/aiba/rustore.png'
import visa from '../../assets/aiba/visav2.png'
import visma from '../../assets/aiba/mastercardv2.png'
import mir from '../../assets/aiba/mirv2.png'


export default function Footer() {
  return (
    <div className=" bg-black">
      <div className='w-[1400px] m-auto text-white px-8 pt-[10px]'>

      <div className="flex justify-between gap-x-7 gap-y-8">
        <div className="space-y-4">
        <img src={golden} className="w-[200px] pt-5 ml-[-19px]" alt="Golden Logo" />          
          <a href="tel:+8 800 770 70 21"><h1 className="text-xl font-semibold ml-[15px] cursor-pointer hover:opacity-70 ">8 800 770 70 21</h1></a> 
          <p className="text-sm opacity-75 mt-[14px]">круглосуточный телефон call-центра</p>
          <div className="flex gap-4 items-center mt-[14px]">
          </div>
        </div>
        <div className="space-y-4 pt-10">
          <h1 className="text-xl font-semibold">о нас</h1>
          <h3 className="text-sm opacity-75"><Link to="footers3">политика обработки персональных <br />данных</Link></h3>
           <h3 className="text-sm opacity-75"><Link to="footers2">документы сайта</Link></h3>
          <h3 className="text-sm opacity-75"><Link to="shops">наши магазины</Link></h3>
        </div>
        <div className="space-y-4 pt-10">
          <h1 className="text-xl font-semibold">клиентам</h1>
          <h3 className="text-sm opacity-75"><Link to="footers4">заказы и доставка</Link></h3>
          <h3 className="text-sm opacity-75"><Link to="footers5">возврат товара</Link></h3>
          <h3 className="text-sm opacity-75"><Link to="footers6">бонусная программа</Link></h3>
        </div>
        <div className="space-y-4 pt-10">
          <h1 className="text-xl font-semibold">контакты</h1>
          <h3 className="text-sm opacity-75"><Link to="footers7">общие контакты</Link></h3>
         <Link to="footers7"> <h3 className="text-sm opacity-75 pb-5">отдел маркетинга и рекламы</h3></Link>
          <a href="https://goldapple.ru/lp/advcake"><h3 className="text-sm opacity-75">партнерская программа</h3></a>
        </div>
      </div>
      <hr className="border-t-1 border-gray-800 my-4" />
      <div className='flex gap-20 justify-around mt-[20px]'>
  <div className='flex gap-4'>
        <a href="https://t.me/goldapple_ru" className="cursor-pointer transition duration-300 hover:opacity-70">
        <img src={tg} alt="Telegram" className="w-8 h-10 object-contain" /></a>
        <a href="https://vk.com/goldapple_ru" className="cursor-pointer transition duration-300 hover:opacity-70">
        <img src={vk} alt="VK" className="w-8 h-10 object-contain" />
        </a>
        <a href="https://www.youtube.com/channel/UC5vsg5-xOIT0N-jilqFSz_w" className="cursor-pointer transition duration-300 hover:opacity-70">
        <img src={uteb} alt="Uteb" className="w-8 h-10 object-contain" />
        </a>
  </div>
  <div className='flex gap-4'>
    <a href="https://appgallery.huawei.com/app/C103551593"><img src={app} alt="App Gallery" className="w-20 h-10 object-contain transition duration-300 hover:opacity-70" /></a>
    <a href="https://apps.apple.com/ru/app/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B8/id1154436683"><img src={apps} alt="APP Store" className="w-20 h-10 object-contain transition duration-300 hover:opacity-70" /></a>
    <a href="https://play.google.com/store/apps/details?id=goldapple.ru.goldapple.customers"><img src={google} alt="Google Play" className="w-20 h-10 object-contain transition duration-300 hover:opacity-70" /></a>
    <a href="https://apps.apple.com/ru/app/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B8/id1154436683?mt=8"><img src={rus} alt="Rus" className="w-20 h-10 object-contain transition duration-300 hover:opacity-70" /></a>
    
  </div>
  <div className='flex gap-4'>
    <img src={visa} alt="Visa" className="w-10 h-10 object-contain" />
    <img src={visma} alt="Visma" className="w-10 h-10 object-contain" />
    <img src={mir} alt="Mir" className="w-10 h-10 object-contain" />
  </div>
      </div>       
      </div>


    </div>
  )
}