import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoHeartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { BsBasket } from "react-icons/bs";
import photo from '../../assets/aiba/logo.webp'




export default function Header() {
      return (

<div className="w-full max-w-[1400px] m-auto">
  <div className="flex items-center justify-center py-4">
    <Link to='/'>
      <img src={photo} className="h-12" />
    </Link>
  </div>

  <div className="flex justify-center">
    <ul className="flex gap-8 text-lg flex-wrap justify-center sm:gap-4">
      <li><Link to="/catalog">Каталог</Link></li>
      <li><Link to="/newProducts">Новинки</Link></li>
      <li><Link to="/stocks">Акции</Link></li>
      <li><Link to="/shops">Магазины</Link></li>
      <li><Link to="/teens">Teens</Link></li>
      <li><Link to="/tamagochi">Тамагочи</Link></li>
      <li><Link to="/giftCards">Подарочные карты</Link></li>
      <li><Link to="/discounts">Скидки до -50%</Link></li>
  
      <div className="flex ml-0 sm:ml-[40px] gap-[25px] mt-2 sm:mt-0">
        <Link to="/favorites" className="text-lg"><IoHeartOutline /></Link>
        <Link to="/profile" className="text-lg"><GoPerson /></Link>
        <Link to="/cart" className="text-lg"><BsBasket /></Link>
      </div>
    </ul>
  </div>
</div>
      );


}
