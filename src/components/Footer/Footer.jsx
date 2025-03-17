import React from 'react'
<<<<<<< HEAD

export default function Footer() {
  return (
    <div>
      
=======
import golden from '../../assets/aiba/ipp.webp'
import { RiTelegramLine } from 'react-icons/ri'
import { BiLogoWhatsapp } from 'react-icons/bi'
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
    <div className="w-[1400px] m-auto bg-black text-white px-8 mt-[30px]">
      <div className=' flex justify-center items-center'>
        <img src={golden} className="w-[240px]" alt="Golden Logo" />        
      </div>

      <div className="flex justify-between gap-x-7 gap-y-8">
        <div className="space-y-4">
          <h1 className="text-xl font-semibold ml-[15px]">8 800 770 70 21</h1>
          <p className="text-sm opacity-75 mt-[14px]">круглосуточный телефон call-центра</p>
          <div className="flex gap-4 items-center mt-[14px]">
            <div className="flex items-center gap-2">
              <BiLogoWhatsapp size={24} />
              <h3 className="text-sm">WhatsApp</h3>
            </div>
            <div className="flex items-center gap-2">
              <RiTelegramLine size={24} />
              <h3 className="text-sm">Telegram</h3>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">о нас</h1>
          <h3 className="text-sm opacity-75">политика обработки персональных <br />данных</h3>
          <h3 className="text-sm opacity-75">документы сайта</h3>
          <h3 className="text-sm opacity-75">наши магазины</h3>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">клиентам</h1>
          <h3 className="text-sm opacity-75">заказы и доставка</h3>
          <h3 className="text-sm opacity-75">возврат товара</h3>
          <h3 className="text-sm opacity-75">бонусная программа</h3>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">контакты</h1>
          <h3 className="text-sm opacity-75">общие контакты</h3>
          <h3 className="text-sm opacity-75">отдел маркетинга и рекламы</h3>
          <h3 className="text-sm opacity-75">партнерская программа</h3>
        </div>
      </div>
      <hr className="border-t-1 border-gray-800 my-4" />
      <div className='flex gap-20 justify-around mt-[20px]'>
  <div className='flex gap-4'>
    <img src={tg} alt="Telegram" className="w-8 h-10 object-contain" />
    <img src={vk} alt="VK" className="w-8 h-10 object-contain" />
    <img src={uteb} alt="Uteb" className="w-8 h-10 object-contain" />
  </div>
  <div className='flex gap-4'>
    <img src={app} alt="App Store" className="w-10 h-10 object-contain" />
    <img src={apps} alt="Google Play" className="w-10 h-10 object-contain" />
    <img src={google} alt="Google" className="w-10 h-10 object-contain" />
    <img src={rus} alt="Rus" className="w-10 h-10 object-contain" />
  </div>
  <div className='flex gap-4'>
    <img src={visa} alt="Visa" className="w-10 h-10 object-contain" />
    <img src={visma} alt="Visma" className="w-10 h-10 object-contain" />
    <img src={mir} alt="Mir" className="w-10 h-10 object-contain" />
  </div>
      </div>

>>>>>>> 1a6acbc36e3e2d73fa9f321e3add00dac78fc294
    </div>
  )
}
