
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
import img18 from '../../assets/gulasyl/bee.webp';
import img19 from '../../assets/gulasyl/termo.webp';
import img20 from '../../assets/gulasyl/kor.webp';
import img21 from '../../assets/gulasyl/aip.webp';
import img22 from '../../assets/gulasyl/piala.webp';
import img23 from '../../assets/gulasyl/fen.webp';
import img7Alt from '../../assets/gulasyl/румян.webp';
import img8Alt from '../../assets/gulasyl/toothpas.webp';
import img9Alt from '../../assets/gulasyl/шампунь.webp';
import img10Alt from '../../assets/gulasyl/праймер.webp';
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
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const denzo = [
  {
    title: 'набор для ванной',
    text: 'DENEZO Alys',
    price: '3 989 ₽',
    img: img14
  },
  {
    title: 'Ночной крем для восстановления сияния',
    text: 'Go Tapa Radiant night',
    price: '790 ₽',
    img: img15
  },
  {
    title: 'брошь',
    text: 'Stone Philosophy Autumn leaves',
    price: '4 500 ₽',
    img: img16
  },
  {
    title: 'сумка кросс-боди',
    text: 'DKNY BRYANT AVE TZ DEMI C',
    price: '21 000 ₽',
    img: img17
  },
]

const categories = [
  { id: 1, name: "Азия", image: img14 },
  { id: 2, name: "Макияж", image: img15 },
  { id: 3, name: "Уход", image: img16 },
  { id: 4, name: "Волосы", image: img22 },
  { id: 5, name: "Парфюмерия", image: img21 },
  { id: 6, name: "Натуральная косметика", image: img17 },
  { id: 7, name: "Техника", image: img20 },
  { id: 8, name: "Одежда и аксессуары", image: img19 },
  { id: 9, name: "Для дома", image: img18 },
];

export default function Products() {
  const [imageHovered, setImageHovered] = useState(null);
  const handleMouseEnter = (img) => setImageHovered(img);
  const handleMouseLeave = () => setImageHovered(null);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };

  return (
    <div>
      <section>
        <div className='w-[1400px] m-auto'>
          <div>
            <img src={img1} className='relative' />
            <h1 className='text-6xl absolute font-bold text-[#646464] mt-[-110px] ml-[630px]'>новинки</h1>
          </div>

   
        {/* catalog */}
        <div className='my-[60px]'> 
        <Slider {...settings}>
  {categories.map((cat) => (
    <div key={cat.id} className="!flex !flex-row items-center gap-5 cursor-pointer border border-gray-300 rounded-full">
      {/* Фото */}
      <div className="w-[90px] h-[100px] rounded-full overflow-hidden flex items-center justify-center">
        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
      </div>
      {/* Текст */}
      <h2 className="font-medium text-lg">{cat.name}</h2>
    </div>
  ))}
</Slider>          
        </div>


          <h2 className='justify-center items-center flex my-[40px] text-2xl'><span className='mr-[5px] font-bold'>10 221</span> продукт</h2>




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
            <div className="grid grid-cols-4 gap-8 mt-10">
          {denzo.map((item, index) => (
        <div key={index} className=" p-4 rounded-lg hover:scale-105 transition-transform duration-300">
        <div className="relative">
          <IoHeartOutline className="absolute top-2 right-2 w-6 h-6 text-gray-600 hover:text-red-500" />
          <BsBasket className="absolute bottom-2 right-2 w-6 h-6 text-gray-600 hover:text-green-500" />
          <button className="absolute top-2 left-2 bg-[#10ee48] text-white font-bold px-2 py-1 rounded">
            new!
          </button>
          <img src={item.img} className="w-full h-[280px] object-cover rounded-md" />
        </div>

        <h3 className="text-gray-600 font-mono mt-4">{item.title}</h3>
        <h1 className="text-xl font-medium mt-1">{item.text}</h1>
        <h2 className="text-2xl font-bold mt-4">{item.price}</h2>
      </div>
      ))}
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


            <div className='w-[640px]'>
              <p className='hover:text-[#9ca887] absolute font-mono mt-[30px] ml-[20px]'>Набор открыток</p>
              <h1 className='hover:text-[#9ca887] absolute mt-[70px] text-xl w-[140px] font-medium ml-[350px]' >aespa Armageddon: The Mystery Circle POSTCARD SET GISELLE Ver.</h1>
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
  );}
