import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoHeartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import photo from '../../assets/aiba/logo.webp'
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { RiTelegramLine } from 'react-icons/ri'
import { BiLogoWhatsapp } from 'react-icons/bi'
import { RxHamburgerMenu } from "react-icons/rx"; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = useSelector((state) => state.cart?.cartItems?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0);
  const favCount = useSelector((state) => state.idols?.cartItem?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0);

  return (
    <header className="bg-white fixed w-full top-0 pb-7 shadow-md z-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            <RxHamburgerMenu />
          </button>
          <div className="hidden md:block">
            <select className="rounded px-2 py-1 text-sm md:text-base">
              <option value="Москва">Москва</option>
              <option value="Санкт-Петербург">Санкт-Петербург</option>
              <option value="Беларусь">Беларусь</option>
              <option value="Казахстан">Казахстан</option>
            </select>
          </div>
          <div className="flex-1 flex justify-center md:static">
            <Link to="/">
              <img src={photo} className="h-10 md:h-12" alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="relative">
              <Link to="/favorites" className="text-xl md:text-2xl">
                <IoHeartOutline />
              </Link>
              {favCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {favCount}
                </span>
              )}
            </div>
            <Link to="/profile" className="text-xl md:text-2xl">
              <GoPerson />
            </Link>
            <div className="relative">
              <Link to="/cart" className="text-xl md:text-2xl">
                <GiShoppingCart />
              </Link>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
        <nav className={`md:flex justify-center ${menuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm md:text-lg text-center">
            <li><Link to="/catalog">Каталог</Link></li>
            <li><Link to="/newProducts">Новинки</Link></li>
            <li><Link to="/stocks">Акции</Link></li>
            <li><Link to="/shops">Магазины</Link></li>
            <li><Link to="/teens">Teens</Link></li>
            <li><Link to="/tamagochi">Тамагочи</Link></li>
            <li><Link to="/giftCards">Подарочные карты</Link></li>
            <li><Link to="/discounts">Скидки до -50%</Link></li>
            <div className="flex justify-center gap-4 mt-4 md:mt-0">
              <a href="https://api.whatsapp.com/send?phone=78007707021" className="flex items-center gap-2 text-sm md:text-base">
                <BiLogoWhatsapp size={22} className="text-gray-500 hover:text-green-600 transition" />
                <span>WA</span>
              </a>
              <a href="https://t.me/goldapple_ru" className="flex items-center gap-2 text-sm md:text-base">
                <RiTelegramLine size={22} className="text-gray-500 hover:text-blue-600 transition" />
                <span>Tg</span>
              </a>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
