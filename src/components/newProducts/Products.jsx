import React from 'react';
import img1 from '../../assets/gulasyl/новинка.jpg';
import img2 from '../../assets/gulasyl/dah.webp';
import img3 from '../../assets/gulasyl/immg3.webp';
import { BsBasket } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";

export default function Products() {
  return (
    <div>
    <section>
      <div className='w-[1200px] m-auto '>
        <div className=''>
          <img src={img1} className='relative max-w-full' />
          <h1 className='text-5xl absolute font-bold text-[#423e3e] mt-[-400px] ml-[500px]'>новинки</h1></div>
        <h2 className='ml-[540px]'>10 221 продукт</h2>
        <div className='flex'>
        <div className=''>
          
          <img src={img2} className='w-[300px] h-[267px] mt-[6px] relative' />
          <IoHeartOutline className='absolute w-[30px] h-[25px] ml-[255px] mt-[-245px]' />
          <BsBasket className='ml-[255px] mt-[-45px] absolute w-[30px] h-[25px] ' />
          <button className=' bg-[#d5187a] text-[white] font-bold w-[40px] absolute mt-[-258px] h-[40px]'>60%</button>

          <h3 className='ml-[160px] font-mono'>Праймер для лица</h3>
          <h1 className='ml-[50px] font-medium'>DEAR DAHLIA Prime layer skin prep</h1>
          <div className='flex gap-3 ml-[180px]'>
          <h1 className='font-bold text-[grey]'><del>4 545 ₽</del></h1>
          <h1 className='font-bold'>1 818 ₽</h1></div>

        </div>
        <div className='mt-[14px] '>
          
          <img src={img3} className='w-[300px] h-[250px] relative' />
          <IoHeartOutline className='absolute w-[30px] h-[25px] ml-[255px] mt-[-240px]' />
          <BsBasket className='ml-[255px] mt-[-34px] absolute w-[30px] h-[25px] ' />
          <button className=' bg-[#10ee48] text-[white] font-bold w-[40px] absolute mt-[-249px] h-[40px]'>new!</button>

          <h3 className=' font-mono mt-[15px]'>Шампунь для восстановления и питания волос</h3>
          <h1 className='ml-[50px] font-medium'>ROSSANO FERRETTI Dolce 05 repair & nourish shampoo</h1>
          <div className='flex gap-3 ml-[180px]'>
          <h1 className='font-bold text-[grey]'><del>4 545 ₽</del></h1>
          <h1 className='font-bold'>1 818 ₽</h1></div>

        </div>
        </div>

      </div>
      {/* // style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> */}
    </section>
  </div>
  );
}