import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoHeartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import photo from '../../assets/aiba/logo.webp';
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { RiTelegramLine } from 'react-icons/ri';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { RxHamburgerMenu } from "react-icons/rx"; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const cartCount = useSelector((state) => state.cart?.cartItems?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0);
  const favCount = useSelector((state) => state.idols?.cartItem?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0);
  const cartItem = useSelector((state) => state.cart?.cartItem || []);

  // const handleSelectChange = (event) => {
  //   navigate(event.target.value);
  // };

  return (
    <header className="bg-white fixed w-full top-0 pb-7 shadow-md z-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            <RxHamburgerMenu />
          </button>
          <div className="hidden md:block">
            {/* <select>
              <option value="/catalog">Каталог</option>
              <option value="/newProducts">Новинки</option>
              <option value="/stocks">Акции</option>
              <option value="/shops">Магазины</option>
              <option value="/teens">Teens</option>
              <option value="/tamagochi">Тамагочи</option>
              <option value="/giftCards">Подарочные карты</option>
              <option value="/discounts">Скидки до -50%</option>
            </select> */}
            <select  className="rounded px-2 py-1 text-sm md:text-base">
              <option>Москва</option>
              <option>Санкт-Петербург</option>
              <option>Екатеринбург</option>
              <option>Казань</option>
            </select>
          </div>
          <div className="flex-1 flex justify-center md:static">
            <Link  onClick={() => window.scrollTo(0, 0)} to="/">
              <img src={photo} className="h-10 md:h-12" alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="relative">
              <Link to="/favorites">
               <div> <IoHeartOutline  onClick={() => window.scrollTo(0, 0)}  className="text-xl md:text-2xl"/></div>
              </Link>
              {favCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {favCount}
                </span>
              )}
            </div>
            <Link  onClick={() => window.scrollTo(0, 0)} to="/profile" className="text-xl md:text-2xl">
              <GoPerson />
            </Link>
            <div className="relative">
              <Link  onClick={() => window.scrollTo(0, 0)} to="/cart">
                <GiShoppingCart  className="text-xl md:text-2xl"/>
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
            <li><Link  onClick={() => window.scrollTo(0, 0)} to="/catalog">Каталог</Link></li>
            <li><Link onClick={() => window.scrollTo(0, 0)} to="/newProducts">Новинки</Link></li>
            <li><Link onClick={() => window.scrollTo(0, 0)} to="/stocks">Акции</Link></li>
            <li><Link onClick={() => window.scrollTo(0, 0)} to="/shops">Магазины</Link></li>
            <li><Link onClick={() => window.scrollTo(0, 0)} to="/teens">Teens</Link></li>
            <li><Link onClick={() => window.scrollTo(0, 0)} to="/tamagochi">Тамагочи</Link></li>
            <li><Link onClick={() => window.scrollTo(0, 0)} to="/giftCards">Подарочные карты</Link></li>
            <li><Link onClick={() => window.scrollTo(0, 0)} to="/discounts">Скидки до -50%</Link></li>
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

