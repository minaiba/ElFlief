
import React, { useState } from 'react';
import img1 from '../../assets/gulasyl/ovinka.png';
import img2 from '../../assets/gulasyl/прайм.webp';
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
import img18 from '../../assets/gulasyl/bee.webp';
import img19 from '../../assets/gulasyl/termo.webp';
import img20 from '../../assets/gulasyl/kor.webp';
import img21 from '../../assets/gulasyl/aip.webp';
import img22 from '../../assets/gulasyl/piala.webp';
import img23 from '../../assets/gulasyl/fen.webp';
import img7Alt from '../../assets/gulasyl/румян.webp';
import img8Alt from '../../assets/gulasyl/toothpas.webp';
import img9Alt from '../../assets/gulasyl/шампунь.webp';
import img10Alt from '../../assets/gulasyl/прайм2.webp';
import img11Alt from '../../assets/gulasyl/набор2.webp';
import img12Alt from '../../assets/gulasyl/парфюм2.webp';
import img15Alt from '../../assets/gulasyl/night2.webp';
import img17Alt from '../../assets/gulasyl/sumka2.webp';
import img18Alt from '../../assets/gulasyl/bee2.webp';
import img19Alt from '../../assets/gulasyl/termo2.webp';
import img20Alt from '../../assets/gulasyl/kor2.webp';
import img22Alt from '../../assets/gulasyl/piala2.webp';
import img23Alt from '../../assets/gulasyl/fen2.webp';
import { BsBasket } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";

export default function Products() {
  const [imageHovered, setImageHovered] = useState(null);
  const handleMouseEnter = (img) => setImageHovered(img);
  const handleMouseLeave = () => setImageHovered(null);

  return (
    <div>
      <section>
        <div className='w-[1400px] m-auto'>
          <div>
             <h1 className='text-6xl absolute font-bold text-[#646464] mt-[410px]  ml-[730px]'>новинки</h1>
            <img src={img1} className='' />
           
          </div>
          <h2 className='text-center'>10 221 продукт</h2>


          {/* 1 блок */}
          <div className='flex bg-amber-200 mt-[20px]'>

            {/* справа-налево праймер */}
            <div className=''>
              <IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' />
              <BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' />
              <button className='bg-[#c2387f] text-[white] font-bold w-[40px] absolute h-[40px]'>60%</button>
              <img src={imageHovered === 'праймер' ? img10Alt : img2} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('праймер')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono' style={{ direction: 'rtl', textAlign: 'right' }}>Праймер для лица</h3>
              <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>DEAR DAHLIA Prime layer skin prep</h1>
              <div className='flex hover:text-[#9ca887] text-2xl gap-3 ml-[120px]'>
                <h1 className='font-bold hover:text-[#9ca887] text-[grey] mt-[10px]'><del>4 545 ₽</del></h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[10px]'>1 818 ₽</h1>
              </div>
            </div>



            {/* справа-налево шампунь */}
            <div className='ml-[60px] w-[300px]'>
              <IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' />
              <BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' />
              <button className='bg-[#10ee48] w-[40px] h-[40px] text-[white] font-bold absolute'>new!</button>
              <img src={imageHovered === 'шампунь' ? img9Alt : img3} className='w-[300px] h-[300px] ' onMouseEnter={() => handleMouseEnter('шампунь')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono' style={{ direction: 'rtl', textAlign: 'right' }}>Шампунь для восстановления и питания волос</h3>
              <h1 className='hover:text-[#9ca887] text-2xl font-medium ' style={{ direction: 'rtl', textAlign: 'right' }}>ROSSANO FERRETTI Dolce 05 repair & nourish shampoo</h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[204px] mt-[10px]'>от 960 ₽</h1>
            </div>



            {/* зубная паста */}
            <div className='ml-[90px]'>
              <img
                src={imageHovered === 'toothpaste' ? img8Alt : img4}
                className='h-[600px] w-[650px] '
                onMouseEnter={() => handleMouseEnter('toothpaste')}
                onMouseLeave={handleMouseLeave}
              />
              <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[150px]'>Зубная паста укрепляющая для чувствительных зубов</p>
              <h1 className='hover:text-[#9ca887] text-4xl font-medium ml-[150px]' >oss to oss Ultra-gentle</h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] ml-[150px]'>от 810 ₽</h1> 
            </div>
          </div>


          {/* 2 блок */}
          <div className='flex bg-blue-300 '>


            {/* крем для рук */}

            <div className='mt-[-130px] w-[650px]' >
  <button className='bg-[#dadd0e] text-[black] font-bold w-[45px] h-[40px] absolute'>+gift!</button>
  <img src={img5} className='h-[600px] w-[650px]' />
  <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px]  ml-[150px]'>Крем для рук и ног</p>
  <h1 className='hover:text-[#9ca887] text-4xl font-medium  ml-[150px]'>Ligne St. Barth Banana hand and foot cream</h1>
  <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[150px] mt-[10px]'>9 300 ₽</h1>
</div>

            {/* <div className='mt-[-130px] w-[650px]'>
              <button className='bg-[#dadd0e] text-[black] font-bold w-[45px] h-[40px] absolute'>+gift!</button>
              <img src={img5} className='h-[600px] w-[650px]' />
              <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[400px]' >Крем для рук и ног</p>
              <h1 className='hover:text-[#9ca887] text-4xl font-medium ' >Ligne St. Barth Banana hand and foot cream</h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl '>9 300 ₽</h1>
            </div> */}


            {/* слева-направо румяна */}
            {/* <div className='ml-[100px] mt-[70px]' onMouseEnter={() => handleMouseEnter('blush')} onMouseLeave={handleMouseLeave}>
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
            </div> */}



            {/* слева-направо сумка */}
            {/* <div className='mt-[70px]'>
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
            </div> */}
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
              <BsBasket className='absolute w-[30px] h-[25px] mt-[20px] ml-[270px]' />
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



          {/* 5 блок */}
          <div className='flex gap-[70px] mt-[100px]'>

            <div className='mt-[10px]'>
              <IoHeartOutline className='absolute w-[30px] h-[25px] ml-[200px] mt-[10px]' />
              <BsBasket className='absolute w-[30px] h-[25px] mt-[250px] ml-[200px]' />
              <button className='bg-[#49f20b] text-[black] font-bold w-[40px] absolute h-[40px]'>new</button>
              <img src={imageHovered === 'bee' ? img18Alt : img18} className='w-[240px] h-[280px]' onMouseEnter={() => handleMouseEnter('bee')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono w-[240px]' style={{ direction: 'rtl', textAlign: 'right' }}>
                Подарочный набор для ухода за кожей</h3>
              <h1 className='hover:text-[#9ca887] w-[240px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>True Island Honey bee total care set</h1>
              <button className=' bg-lime-300 w-[120px] hover:text-[#9ca887]  ml-[120px] mt-[10px]'>новое | -20%</button>

              <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[152px] mt-[10px]'>4 490 ₽</h1>
            </div>


            <div className='mt-[10px]'>
              <IoHeartOutline className='absolute w-[30px] h-[25px] ml-[200px] mt-[10px]' />
              <BsBasket className='absolute w-[30px] h-[25px] mt-[250px] ml-[200px]' />
              <button className='bg-[#b60ca7] text-[white] font-bold w-[40px] absolute h-[40px]'>new</button>
              <img src={imageHovered === 'termo' ? img19Alt : img19} className='w-[240px] h-[280px]' onMouseEnter={() => handleMouseEnter('termo')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono w-[240px]' style={{ direction: 'rtl', textAlign: 'right' }}>

                Термопот</h3>
              <h1 className='hover:text-[#9ca887] w-[240px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>Pioneer tp718</h1>

              <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[152px] mt-[10px]'>5 192 ₽</h1>
            </div>


            <div>
              <p className='hover:text-[#9ca887] absolute font-mono mt-[40px] ml-[370px]'>Набор открыток</p>
              <h1 className='hover:text-[#9ca887] absolute text-4xl mt-[70px]  w-[240px] font-medium ml-[370px]' >aespa Armageddon: The Mystery Circle POSTCARD SET GISELLE Ver.</h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl absolute mt-[370px] ml-[375px]'>2 130 ₽</h1>

              <img
                src={imageHovered === 'kor' ? img20Alt : img20}
                className='h-[350px] mt-[15px] w-[500px]'
                onMouseEnter={() => handleMouseEnter('kor')}
                onMouseLeave={handleMouseLeave}
              />


            </div>
          </div>


          {/* 6 блок */}

        <div className='flex mt-[100px] gap-[70px]'>

        <div className='mt-[120px]'>
              <button className='bg-[#5cd908] text-[black] font-bold w-[55px] absolute mt-[-120px] h-[55px]'>new!</button>
              <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[20px]'>
              Наушники</p>
               <h1 className='hover:text-[#9ca887] absolute text-4xl w-[100px] ml-[10px] font-medium ' >Apple AirPods 3 with MagSafe Charging Case</h1>
              <h1 className='font-bold hover:text-[#9ca887] absolute text-2xl ml-[10px] mt-[300px] '>19 410 ₽</h1>
              <img src={img21} className='h-[450px] mt-[-120px] w-[550px]' />
              
             
            </div>

            <div className='' onMouseEnter={() => handleMouseEnter('fen')} onMouseLeave={handleMouseLeave}>
              <IoHeartOutline className='absolute w-[30px] h-[25px] mt-[10px]  ml-[200px] ' />
              <BsBasket className='absolute w-[30px] h-[25px] mt-[210px] ml-[200px]' />
              <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>new!</button>
              <img
                src={imageHovered === 'fen' ? img23Alt : img23}
                className='w-[240px] h-[250px]'
              />
              <h3 className='hover:text-[#9ca887] font-mono' style={{ direction: 'ltr', textAlign: 'left' }}>
                
Фен-стайлер
              </h3>
              <h1 className='hover:text-[#9ca887] w-[240px] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
              REMEZ Model S RMB-707Bx
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>29 890 ₽</h1>
            </div>


            <div className='' onMouseEnter={() => handleMouseEnter('piala')} onMouseLeave={handleMouseLeave}>
              <IoHeartOutline className='absolute w-[30px] h-[25px] mt-[10px]  ml-[200px] ' />
              <BsBasket className='absolute w-[30px] h-[25px] mt-[210px] ml-[200px]' />
              <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>new!</button>
              <img
                src={imageHovered === 'piala' ? img22Alt : img22}
                className='w-[240px] h-[250px]'
              />
              <h3 className='hover:text-[#9ca887] font-mono' style={{ direction: 'ltr', textAlign: 'left' }}>
                пиала
              </h3>
              <h1 className='hover:text-[#9ca887] w-[240px] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
              Odaryadarya Король, алкоголь и самоконтроль
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>2 650 ₽</h1>
            </div>
        </div>
        </div>
      </section>
    </div>
  );
}
