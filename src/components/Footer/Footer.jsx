import React from 'react'
import golden from '../../assets/lotos.png'
import { RiTelegramLine } from 'react-icons/ri'
import { BiLogoWhatsapp } from 'react-icons/bi'
import tg from '../../assets/tg.png'
import vk from '../../assets/vk.png'
import uteb from '../../assets/tube.png'
import app from '../../assets/appgallery.png'
import apps from '../../assets/appstore_white.png'
import google from '../../assets/googleplay.png'
import rus from '../../assets/rustore.png'
import visa from '../../assets/visav2.png'
import visma from '../../assets/mastercardv2.png'
import mir from '../../assets/mirv2.png'


export default function Footer() {
  return (
    <div className="w-[1400px] m-auto bg-black text-white py-8 px-8 mt-[30px]">
      <div className="ml-[40px] mb-8">
        <img src={golden} className="w-[193px]" alt="Golden Logo" />
      </div>
      <div className="flex justify-between gap-x-16 gap-y-8">
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">8 800 770 70 21</h1>
          <p className="text-sm opacity-75">круглосуточный телефон call-центра</p>
          <div className="flex gap-4 items-center">
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
          <h3 className="text-sm opacity-75">политика обработки персональных данных</h3>
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

    </div>
  )
}
