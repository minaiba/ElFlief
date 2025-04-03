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
    <footer className="bg-black text-white">
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <img src={golden} className="w-[160px] mx-auto md:mx-0" alt="Golden Logo" />
            <a href="tel:+8 800 770 70 21" className="block text-lg font-semibold mt-3 hover:opacity-75">
              8 800 770 70 21
            </a>
            <p className="text-sm opacity-75">Круглосуточный call-центр</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">О нас</h1>
            <ul className="space-y-2 text-sm opacity-75">
              <li><Link to="footers3">Политика обработки данных</Link></li>
              <li><Link to="footers2">Документы сайта</Link></li>
              <li><Link to="shops">Наши магазины</Link></li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Клиентам</h1>
            <ul className="space-y-2 text-sm opacity-75">
              <li><Link to="footers4">Заказы и доставка</Link></li>
              <li><Link to="footers5">Возврат товара</Link></li>
              <li><Link to="footers6">Бонусная программа</Link></li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Контакты</h1>
            <ul className="space-y-2 text-sm opacity-75">
              <li><Link to="footers7">Общие контакты</Link></li>
              <li><Link to="footers7">Маркетинг и реклама</Link></li>
              <li><a href="https://goldapple.ru/lp/advcake">Партнёрская программа</a></li>
            </ul>
          </div>
        </div>
        <hr className="border-t border-gray-700 my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            <a href="https://t.me/goldapple_ru" className="hover:opacity-75">
              <img src={tg} alt="Telegram" className="w-8 h-8" />
            </a>
            <a href="https://vk.com/goldapple_ru" className="hover:opacity-75">
              <img src={vk} alt="VK" className="w-8 h-8" />
            </a>
            <a href="https://www.youtube.com/channel/UC5vsg5-xOIT0N-jilqFSz_w" className="hover:opacity-75">
              <img src={uteb} alt="YouTube" className="w-8 h-8" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a href="https://appgallery.huawei.com/app/C103551593">
              <img src={app} alt="App Gallery" className="w-20 h-8 hover:opacity-75" />
            </a>
            <a href="https://apps.apple.com/ru/app/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B8/id1154436683">
              <img src={apps} alt="App Store" className="w-20 h-8 hover:opacity-75" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=goldapple.ru.goldapple.customers">
              <img src={google} alt="Google Play" className="w-20 h-8 hover:opacity-75" />
            </a>
            <a href="https://apps.rustore.ru/app/goldapple.ru.goldapple.customers">
              <img src={rus} alt="RuStore" className="w-20 h-8 hover:opacity-75" />
            </a>
          </div>
          <div className="flex gap-3">
            <img src={visa} alt="Visa" className="w-10 h-6" />
            <img src={visma} alt="Mastercard" className="w-10 h-6" />
            <img src={mir} alt="Mir" className="w-10 h-6" />
          </div>
          
        </div>
      </div>
    </footer>
  );
}
