import React, { useState } from 'react'
import { BsBasket } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import s1 from '../../assets/gulasyl/скидки.webp'
import s2 from '../../assets/gulasyl/s2.webp'
import s3 from '../../assets/gulasyl/s3.webp'

export default function Discount() {

  const [imageHovered, setImageHovered] = useState(null);
  const handleMouseEnter = (id) => setImageHovered(id);
  const handleMouseLeave = () => setImageHovered(null);

  const products = [
    { id: 'праймер', title: 'DEAR DAHLIA Prime layer skin prep', category: 'Праймер для лица', price: '1 818 ₽', oldPrice: '4 545 ₽', img: s2, imgAlt: s3, discount: '60%' },
    { id: 'шампунь', title: 'ROSSANO FERRETTI Dolce 05 repair & nourish shampoo', category: 'Шампунь для восстановления и питания волос', price: 'от 960 ₽', img: s2, imgAlt: s3, new: true },
    { id: 'toothpaste', title: 'oss to oss Ultra-gentle', category: 'Зубная паста укрепляющая для чувствительных зубов', price: 'от 810 ₽', img: s2, imgAlt: s3, large: true }
  ];


  return (
    <div>
      <section>
        <div className='w-[1400px] m-auto'>
        <h1 className='text-6xl font-bold text-[#474646] absolute mt-[490px] ml-[730px]'>скидки до −50%</h1>
        <img src={s1} className='w-[1400px]'/>
        <h2 className='justify-center items-center flex my-[40px] text-2xl'><span className='mr-[5px] font-bold'>40 806</span> продукт</h2>

        <div className='flex mt-[20px] '>
      {products.map(({ id, title, category, price, oldPrice, img, imgAlt, discount, new: isNew, large }) => (
        <div key={id} className={`relative ${large ? 'ml-[30px]' : 'ml-[60px] w-[300px]'}`} onMouseEnter={() => handleMouseEnter(id)} onMouseLeave={handleMouseLeave}>
          <div className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px] flex gap-2'>
            <Link to='/favorites'><IoHeartOutline /></Link>
            <Link to='/cart'><BsBasket className='mt-[265px]' /></Link>
          </div>
          {discount && <button className='bg-[#c2387f] text-white font-bold w-[40px] absolute h-[40px]'>{discount}</button>}
          {isNew && <button className='bg-[#10ee48] text-white font-bold w-[40px] absolute h-[40px]'>new!</button>}
          <img src={imageHovered === id ? imgAlt : img} className={`w-[${large ? '650px' : '300px'}] h-[${large ? '600px' : '300px'}]`} />
          <h3 className='hover:text-[#9ca887] font-mono mt-[16px] text-right'>{category}</h3>
          <h1 className='hover:text-[#9ca887] font-medium text-2xl text-right'>{title}</h1>
          <div className='flex hover:text-[#9ca887] text-2xl gap-3 mt-[10px]'>
            {oldPrice && <h1 className='font-bold text-gray-500'><del>{oldPrice}</del></h1>}
            <h1 className='font-bold'>{price}</h1>
          </div>
        </div>
      ))}
    </div>
    </div>
      </section>
    </div>
  )
}
