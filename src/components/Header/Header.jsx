import React from 'react'
import { Link } from 'react-router-dom'
import { IoHeartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { BsBasket } from "react-icons/bs";
import photo from '../../assets/logo.webp'


export default function Header() {
      return (
        <div className='w-[1400px] m-auto'>
          <div className='flex justify-between items-center py-4'>
            <img src={photo} className="h-12" />
            <div className="flex gap-4">
              <Link to="/favorites"><IoHeartOutline /></Link>
              <Link to="/profile"><GoPerson /></Link>
              <Link to="/cart"><BsBasket /></Link>
            </div>
          </div>
    
          <div className='flex justify-center'>
            <ul className='flex gap-6 text-lg'>
              <li><Link to="/catalog">Каталог</Link></li>
              <li><Link to="/new-products">Новинки</Link></li>
              <li><Link to="/stocks">Акции</Link></li>
              <li><Link to="/shops">Магазины</Link></li>
              <li><Link to="/teens">Teens</Link></li>
              <li><Link to="/tamagotchi">Тамагочи</Link></li>
              <li><Link to="/gift-cards">Подарочные карты</Link></li>
              <li><Link to="/discounts">Скидки до -50%</Link></li>
            </ul>
          </div>
        </div>
      );
}
