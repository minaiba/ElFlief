import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoHeartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import photo from '../../assets/aiba/logo.webp'
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from 'react-redux';



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
            <div className='relative'>
              <Link to="/favorites" className="text-2xl"><IoHeartOutline /></Link>
              {favCount > 0 && (
                <div className='absolute top-[-5px] right-[-7px] w-[17px] h-[17px] bg-red-500 text-white rounded-full text-[12px] flex justify-center items-center'>
                  {favCount}
                </div>
              )}
            </div>
            <Link to="/profile" className="text-2xl"><GoPerson /></Link>
            <div className="relative"><Link to="/cart" className="text-2xl"><GiShoppingCart /></Link>
              {cartCount > 0 && (
                <div className="absolute top-[-5px] right-[-7px] w-[17px] h-[17px] bg-emerald-300 text-white rounded-full text-[12px] flex justify-center items-center">
                  {cartCount}
                </div>
              )}
            </div>

          </div>
        </ul>
      </div>
    </div>
  );


}
