import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoHeartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import photo from '../../assets/aiba/logo.webp'
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { RiTelegramLine } from 'react-icons/ri'
import { BiLogoWhatsapp } from 'react-icons/bi'



export default function Header() {
  const cartCount = useSelector((state) => {
    if (state.cart && state.cart.cartItems) {
      return state.cart.cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
    }
    return 0; 
  });
  const favCount = useSelector((state) => {
    if (state.idols && state.idols.cartItem) {
      return state.idols.cartItem.reduce((sum, item) => sum + (item.quantity || 0), 0);
    }
    return 0;
  });


  return (
<div className="bg-white fixed w-full pb-[20px] pt-9 z-1000 flex justify-center mt-[-20px]">
  <div className="w-full max-w-[1400px] mx-auto">
  <div className="flex items-center justify-between w-full">
  <div className="flex items-center">
    <select className="rounded px-2 py-1">
      <option value="Москва">Москва</option>
      <option value="Санкт-Петербург">Санкт-Петербург</option>
      <option value="Беларусь">Беларусь</option>
      <option value="Казахстан">Казахстан</option>
    </select>
  </div>
  <div className="flex justify-center ml-[-50px] flex-1">
    <Link to="/">
      {photo && <img src={photo} className="h-12" alt="Logo" />}
    </Link>
  </div>
  <div className="flex items-center gap-6">
    <div className="relative">
      <Link to="/favorites" className="text-2xl">
        <IoHeartOutline />
      </Link>
      {(favCount ?? 0) > 0 && (
        <div className="absolute right-[-7px] w-[17px] h-[17px] bg-red-500 text-white rounded-full text-[12px] flex justify-center items-center">
          {favCount}
        </div>
      )}
    </div>
    <Link to="/profile" className="text-2xl">
      <GoPerson />
    </Link>
    <div className="relative">
      <Link to="/cart" className="text-2xl">
        <GiShoppingCart />
      </Link>
      {(cartCount ?? 0) > 0 && (
        <div className="absolute top-[-5px] right-[-7px] w-[17px] h-[17px] bg-emerald-300 text-white rounded-full text-[12px] flex justify-center items-center">
          {cartCount}
        </div>
      )}
    </div>
  </div>
</div>


    <div className="flex justify-center">
      <ul className="flex gap-4 pt-5 text-lg flex-wrap justify-center sm:gap-4">
        <li><Link to="/catalog">Каталог</Link></li>
        <li><Link to="/newProducts">Новинки</Link></li>
        <li><Link to="/stocks">Акции</Link></li>
        <li><Link to="/shops">Магазины</Link></li>
        <li><Link to="/teens">Teens</Link></li>
        <li><Link to="/tamagochi">Тамагочи</Link></li>
        <li><Link to="/giftCards">Подарочные карты</Link></li>
        <li><Link to="/discounts">Скидки до -50%</Link></li>
      <div className="flex">
      <a
        href="https://api.whatsapp.com/send?phone=78007707021"
        className="flex items-center ml-16 gap-2 cursor-pointer px-2 rounded-lg transition duration-300 hover:text-green-600"
      >
        <BiLogoWhatsapp size={24} className="text-gray-500 transition duration-300 group-hover:text-green-600" />
        <h3 className="text-sm font-medium">WA</h3>
      </a>
      
      <a
        href="https://t.me/goldapple_ru"
        className="flex items-center gap-2 cursor-pointer px-2 rounded-lg transition duration-300 hover:text-blue-600"
      >
        <RiTelegramLine size={24} className="text-gray-500 transition duration-300 group-hover:text-blue-600" />
        <h3 className="text-sm font-medium">Tg</h3>
      </a>
    </div>
      </ul>
    </div>
  </div>
</div>


  );


}
