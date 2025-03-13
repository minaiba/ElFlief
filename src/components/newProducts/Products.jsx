
import React, { useState } from 'react';
import img1 from '../../assets/gulasyl/ovinka.png';
import img2 from '../../assets/gulasyl/dah.webp';
import img3 from '../../assets/gulasyl/immg3.webp';
import img4 from '../../assets/gulasyl/img44.webp';
import img5 from '../../assets/gulasyl/creme.webp';
import img6 from '../../assets/gulasyl/imgg6.webp';
import img7 from '../../assets/gulasyl/bag.webp';
import img11 from '../../assets/gulasyl/набор.webp';
import img12 from '../../assets/gulasyl/парфюм.webp';
import img13 from '../../assets/gulasyl/помад.webp';
import img14 from '../../assets/gulasyl/vanna.webp';
import img15 from '../../assets/gulasyl/night.webp';
import img16 from '../../assets/gulasyl/bros.webp';
import img17 from '../../assets/gulasyl/sumka.webp';
import img7Alt from '../../assets/gulasyl/румян.webp';
import img8Alt from '../../assets/gulasyl/toothpas.webp';
import img9Alt from '../../assets/gulasyl/шампунь.webp';
import img10Alt from '../../assets/gulasyl/праймер.webp';
import img11Alt from '../../assets/gulasyl/набор2.webp';
import img12Alt from '../../assets/gulasyl/парфюм2.webp';
import img15Alt from '../../assets/gulasyl/night2.webp';
import img17Alt from '../../assets/gulasyl/sumka2.webp';
import { BsBasket } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";

export default function Products() {
  const [imageHovered, setImageHovered] = useState(null);
  const handleMouseEnter = (img) => setImageHovered(img);
  const handleMouseLeave = () => setImageHovered(null);

  return (
    <div>
      <section>
        <div className='w-[1200px] m-auto'>
          <div>
            <img src={img1} className='relative' />
            <h1 className='text-6xl absolute font-bold text-[#646464] mt-[-110px] ml-[630px]'>новинки</h1>
          </div>
          <h2 className='ml-[540px]'>10 221 продукт</h2>


          {/* 1 блок */}
          <div className='flex'>

            {/* справа-налево праймер */}
            <div className=''>
              <IoHeartOutline className='absolute w-[30px] h-[25px] ml-[200px] mt-[20px]' />
              <BsBasket className='absolute w-[30px] h-[25px] mt-[270px] ml-[200px]' />
              <button className='bg-[#d5187a] text-[white] font-bold w-[40px] absolute mt-[11px] h-[40px]'>60%</button>
              <img src={imageHovered === 'праймер' ? img10Alt : img2} className='w-[240px] h-[320px]' onMouseEnter={() => handleMouseEnter('праймер')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono' style={{ direction: 'rtl', textAlign: 'right' }}>Праймер для лица</h3>
              <h1 className='hover:text-[#9ca887] w-[240px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>DEAR DAHLIA Prime layer skin prep</h1>
              <div className='flex hover:text-[#9ca887] text-2xl gap-3 ml-[60px]'>
                <h1 className='font-bold hover:text-[#9ca887] text-[grey] mt-[10px]'><del>4 545 ₽</del></h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[10px]'>1 818 ₽</h1>
              </div>
            </div>



            {/* справа-налево шампунь */}
            <div className='mt-[10px]'>
              <IoHeartOutline className='absolute w-[30px] h-[25px] ml-[270px] mt-[10px]' />
              <BsBasket className='absolute w-[30px] h-[25px] mt-[260px] ml-[270px]' />
              <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute ml-[70px] h-[40px]'>new!</button>
              <img src={imageHovered === 'шампунь' ? img9Alt : img3} className='w-[240px] h-[300px] ml-[70px]' onMouseEnter={() => handleMouseEnter('шампунь')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono w-[240px] ml-[70px] mt-[10px]' style={{ direction: 'rtl', textAlign: 'right' }}>Шампунь для восстановления и питания волос</h3>
              <h1 className='hover:text-[#9ca887] w-[240px] ml-[70px] text-2xl font-medium' style={{ direction: 'rtl', textAlign: 'right' }}>ROSSANO FERRETTI Dolce 05 repair & nourish shampoo</h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[211px] mt-[10px]'>от 960 ₽</h1>
            </div>



            {/* зубная паста */}
            <div>
              <img
                src={imageHovered === 'toothpaste' ? img8Alt : img4}
                className='h-[550px] mt-[15px] w-[550px] ml-[95px]'
                onMouseEnter={() => handleMouseEnter('toothpaste')}
                onMouseLeave={handleMouseLeave}
              />
              <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[150px]'>Зубная паста укрепляющая для чувствительных зубов</p>
              <h1 className='hover:text-[#9ca887] text-4xl font-medium ml-[150px]' >oss to oss Ultra-gentle</h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] ml-[150px]'>от 810 ₽</h1>
            </div>
          </div>



          {/* 2 блок */}
          <div className='flex'>


            {/* крем для рук */}
            <div>
              <button className='bg-[#dadd0e] text-[black] font-bold w-[55px] absolute mt-[-120px] h-[55px]'>+gift!</button>
              <img src={img5} className='h-[550px] mt-[-120px] w-[550px]' />
              <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[50px]'>Крем для рук и ног</p>
              <h1 className='hover:text-[#9ca887] text-4xl font-medium ml-[50px] w-[500px]' >Ligne St. Barth Banana hand and foot cream</h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[50px] mt-[10px] '>9 300 ₽</h1>
            </div>


            {/* слева-направо румяна */}
            <div className='ml-[100px] mt-[70px]' onMouseEnter={() => handleMouseEnter('blush')} onMouseLeave={handleMouseLeave}>
              <IoHeartOutline className='absolute w-[30px] h-[25px] mt-[10px]  ml-[200px] ' />
              <BsBasket className='absolute w-[30px] h-[25px] mt-[270px] ml-[200px]' />
              <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>new!</button>
              <img
                src={imageHovered === 'blush' ? img7Alt : img6}
                className='w-[240px] h-[300px]'
              />
              <h3 className='hover:text-[#9ca887] font-mono' style={{ direction: 'ltr', textAlign: 'left' }}>
                Жидкие румяна для лица
              </h3>
              <h1 className='hover:text-[#9ca887] w-[240px] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
                Anastasia Beverly Hills Blurring serum blush
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>4 219 ₽</h1>
            </div>



            {/* слева-направо сумка */}
            <div className='mt-[70px]'>
              <IoHeartOutline className='absolute w-[30px] h-[25px] ml-[270px] mt-[10px]' />
              <BsBasket className='absolute w-[30px] h-[25px] mt-[270px] ml-[270px]' />
              <button className=' bg-[#10ee48] text-[white] font-bold w-[40px] absolute ml-[70px] h-[40px]'>new!</button>
              <img src={img7} className='w-[240px] h-[300px] ml-[70px]' />
              <h3 className=' hover:text-[#9ca887] font-mono w-[240px] ml-[70px] mt-[10px]' style={{ direction: 'ltr', textAlign: 'left' }}>
                Сумка кросс-боди
              </h3>
              <h1 className=' hover:text-[#9ca887] w-[240px] ml-[70px] text-2xl font-medium' style={{ direction: 'ltr', textAlign: 'left' }}>
                Coccinelle TEBE
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl ml-[70px]'>от 960 ₽</h1>
            </div>
          </div>

         {/* 3 блок */}
          <div className='flex mt-[100px]'>


             {/* справа-налево румяна */}
            <div className=''>
              <IoHeartOutline className='absolute w-[30px] h-[25px] ml-[200px] mt-[10px]' />
              <BsBasket className='absolute w-[30px] h-[25px] mt-[270px] ml-[200px]' />
              <button className='bg-[#0ee44e] text-[black] font-bold w-[40px] absolute h-[40px]'>new!</button>
              <img src={img13} className='w-[240px] h-[300px]' />
              <h3 className='hover:text-[#9ca887] font-mono' style={{ direction: 'rtl', textAlign: 'right' }}>
Жидкие румяна для лица</h3>
              <h1 className='hover:text-[#9ca887] w-[240px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>L'Oreal Paris LUMI</h1>
              <div className='flex hover:text-[#9ca887] text-2xl gap-3 ml-[60px]'>
                <h1 className='font-bold hover:text-[#9ca887] text-[grey] mt-[10px]'><del>1 056 ₽</del></h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[10px]'>1 818 ₽</h1>
              </div>
            </div>

            

            {/* справа-налево парфюм */}
            <div className='mt-[10px]'>
              <IoHeartOutline className='absolute w-[30px] h-[25px] ml-[270px] mt-[10px]' />
              <BsBasket className='absolute w-[30px] h-[25px] mt-[260px] ml-[270px]' />
              <button className='bg-[#cee313] text-[black] font-bold w-[40px] absolute ml-[70px] h-[40px]'>+gift</button>
              <img src={imageHovered === 'парфюм' ? img12Alt : img12} className='w-[240px] h-[300px] ml-[70px]' onMouseEnter={() => handleMouseEnter('парфюм')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono w-[240px] ml-[70px] mt-[10px]' style={{ direction: 'rtl', textAlign: 'right' }}>
                Парфюмерная вода</h3>
              <h1 className='hover:text-[#9ca887] w-[240px] ml-[70px] text-2xl font-medium' style={{ direction: 'rtl', textAlign: 'right' }}>RABANNE Fame</h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[211px] mt-[10px]'>11 360 ₽</h1>
            </div>


            {/* набор */}
            <div>
              <button className='bg-[#0ee44e] text-[black] font-bold w-[40px] absolute ml-[94px] mt-[15px] h-[40px]'>new!</button>
              <img
                src={imageHovered === 'набор' ? img11Alt : img11}
                className='h-[550px] mt-[15px] w-[550px] ml-[95px]'
                onMouseEnter={() => handleMouseEnter('набор')}
                onMouseLeave={handleMouseLeave}
              />
              <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[150px]'>
                АМПУЛЬНЫЙ НАБОР ДЛЯ ЛИЦА</p>
              <h1 className='hover:text-[#9ca887] text-4xl font-medium ml-[150px]' >BABOR Promo Easter Egg 2025
              </h1>
              <button className=' bg-lime-300 w-[120px] hover:text-[#9ca887]  ml-[150px] mt-[10px]'>новое | -20%</button>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] ml-[150px]'>8 200 ₽</h1>
            </div>
          </div>



          {/* 4 блок */}

          <div className='flex mt-[100px] gap-[78px]'>
          <div className='mt-[10px]'>
              <IoHeartOutline className='absolute w-[30px] h-[25px] ml-[200px] mt-[10px]' />
              <BsBasket className='absolute w-[30px] h-[25px] mt-[250px] ml-[200px]' />
              <button className='bg-[#49f20b] text-[black] font-bold w-[40px] absolute h-[40px]'>new</button>
              <img src={img14} className='w-[240px] h-[280px]' />
              <h3 className='hover:text-[#9ca887] font-mono' style={{ direction: 'rtl', textAlign: 'right' }}>
              Набор для ванной</h3>
              <h1 className='hover:text-[#9ca887] w-[240px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>DENEZO Alys</h1>
             
                <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[152px] mt-[10px]'>3 989 ₽</h1>
            </div>


            <div className='mt-[10px]'>
              <IoHeartOutline className='absolute w-[30px] h-[25px] ml-[200px] mt-[10px]' />
              <BsBasket className='absolute w-[30px] h-[25px] mt-[250px] ml-[200px]' />
              <button className='bg-[#5deb0a] text-[black] font-bold w-[40px] absolute h-[40px]'>new!</button>
              <img src={imageHovered === 'night' ? img15Alt : img15} className='w-[240px] h-[280px]' onMouseEnter={() => handleMouseEnter('night')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono' style={{ direction: 'rtl', textAlign: 'right' }}>
              Ночной крем для восстановления сияния</h3>
              <h1 className='hover:text-[#9ca887] w-[240px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>Go Tapa Radiant night cream</h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl ml-[170px]'>790 ₽</h1>
            </div>



            <div className='mt-[10px]'>
              <IoHeartOutline className='absolute w-[30px] h-[25px] ml-[200px] mt-[10px]' />
              <BsBasket className='absolute w-[30px] h-[25px] mt-[250px] ml-[200px]' />
              <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>10%</button>
              <img src={img16}
                className='w-[240px] h-[280px]'
              />
              <h3 className='hover:text-[#9ca887] font-mono' style={{ direction: 'ltr', textAlign: 'left' }}>брошь
              </h3>
              <h1 className='hover:text-[#9ca887] w-[240px] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
              Stone Philosophy Autumn leaves
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>4 500 ₽</h1>
            </div>


            <div className='mt-[10px] ' onMouseEnter={() => handleMouseEnter('sumka')} onMouseLeave={handleMouseLeave}>
              <IoHeartOutline className='absolute w-[30px] h-[25px] ml-[200px] mt-[10px]' />
              <BsBasket className='absolute w-[30px] h-[25px] mt-[250px] ml-[200px]' />
              <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>new!</button>
              <img
                src={imageHovered === 'sumka' ? img17Alt : img17}
                className='w-[240px] h-[280px]'
              />
              <h3 className='hover:text-[#9ca887] font-mono' style={{ direction: 'ltr', textAlign: 'left' }}>
                
Сумка кросс-боди
              </h3>
              <h1 className='hover:text-[#9ca887] w-[240px] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
              DKNY BRYANT AVE TZ DEMI C
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>21 000 ₽</h1>
            </div>
            </div>


        </div>
      </section>
    </div>
  );
}
