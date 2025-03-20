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
import img24 from '../../assets/gulasyl/свеча.webp';
import img25 from '../../assets/gulasyl/аппарат.webp';
import img26 from '../../assets/gulasyl/фут.webp';
import img27 from '../../assets/gulasyl/машинка.webp';
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
import img24Alt from '../../assets/aiba/asia.webp';
import img23Alt from '../../assets/gulasyl/fen2.webp';
import img88Alt from '../../assets/aiba/makeup.webp';
import img26Alt from '../../assets/aiba/parfume.webp';
import img89Alt from '../../assets/aiba/clothes.webp';
import img28Alt from '../../assets/aiba/technic.webp';
import img29Alt from '../../assets/aiba/decoration.webp';
import img30Alt from '../../assets/aiba/hair.webp';
import img31Alt from '../../assets/aiba/home.webp';
import img25Alt from '../../assets/gulasyl/аппарат2.webp';
import img27Alt from '../../assets/gulasyl/машинка2.webp';
import { BsBasket } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

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
  {
    id: 1,
    name: "Азия",
    image: img24Alt
  },
  {
    id: 2,
    name: "Макияж",
    image: img88Alt
  },
  {
    id: 3,
    name: "Волосы",
    image: img30Alt
  },
  {
    id: 4,
    name: "Парфюмерия",
    image: img26Alt
  },
  {
    id: 5,
    name: "Декорации",
    image: img29Alt
  },
  {
    id: 6,
    name: "Техника",
    image: img28Alt
  },
  {
    id: 7,
    name: "Одежда и аксессуары",
    image: img89Alt
  },
  {
    id: 8,
    name: "Для дома",
    image: img31Alt
  },
];


export default function Products() {
  const [imageHovered, setImageHovered] = useState(null);
  const handleMouseEnter = (img) => setImageHovered(img);
  const handleMouseLeave = () => setImageHovered(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } },
    ],
  };

  return (
    <div>
      <section>
        <div className='w-[1400px] m-auto'>
          <div>
            <h1 className='text-6xl absolute font-bold text-[#646464] mt-[410px]  ml-[730px]'>новинки</h1>
            <img src={img1} className='' />

          </div>


          {/* catalog */}
          <Link to='/catalog'>
            <div className='my-[60px]'>
              <Slider {...settings}>
                {categories.map((cat) => (
                  <div key={cat.id} className="!flex flex-row items-center gap-4 cursor-pointer border border-gray-300 rounded-full">
                    <div className="w-[90px] h-[90px] rounded-full overflow-hidden flex items-center justify-center">
                      <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                    </div>
                    <h2 className="font-medium text-lg">{cat.name}</h2>
                  </div>
                ))}
              </Slider>
            </div>
          </Link>



          <h2 className='justify-center items-center flex my-[40px] text-2xl'><span className='mr-[5px] font-bold'>10 221</span> продукт</h2>




          {/* 1 блок */}
          <div className='flex mt-[20px]'>

            {/* справа-налево праймер */}
            <div className=''>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <button className='bg-[#c2387f] text-[white] font-bold w-[40px] absolute h-[40px]'>60%</button>
              <img src={imageHovered === 'праймер' ? img10Alt : img2} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('праймер')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'rtl', textAlign: 'right' }}>Праймер для лица</h3>
              <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>DEAR DAHLIA Prime layer skin prep</h1>
              <div className='flex hover:text-[#9ca887] text-2xl gap-3 ml-[120px]'>
                <h1 className='font-bold hover:text-[#9ca887] text-[grey] mt-[10px]'><del>4 545 ₽</del></h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[10px]'>1 818 ₽</h1>
              </div>
            </div>



            {/* справа-налево шампунь */}
            <div className='ml-[60px] w-[300px]'>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <button className='bg-[#10ee48] w-[40px] h-[40px] text-[white] font-bold absolute'>new!</button>
              <img src={imageHovered === 'шампунь' ? img9Alt : img3} className='w-[300px] h-[300px] ' onMouseEnter={() => handleMouseEnter('шампунь')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'rtl', textAlign: 'right' }}>Шампунь для восстановления и питания волос</h3>
              <h1 className='hover:text-[#9ca887] text-2xl font-medium ' style={{ direction: 'rtl', textAlign: 'right' }}>ROSSANO FERRETTI Dolce 05 repair & nourish shampoo</h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[204px] mt-[10px]'>от 960 ₽</h1>
            </div>



            {/* зубная паста */}
            <div className='ml-[90px]'>
            <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
            <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[560px]' /></Link>
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
          <div className='flex'>

            {/* крем для рук */}

            <div className='mt-[-130px] w-[650px]' >
            <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
            <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[560px]' /></Link>
              <button className='bg-[#dadd0e] text-[black] font-bold w-[45px] h-[40px] absolute'>+gift!</button>
              <img src={img5} className='h-[600px] w-[650px]' />
              <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px]  ml-[150px]'>Крем для рук и ног</p>
              <h1 className='hover:text-[#9ca887] text-4xl font-medium  ml-[150px]'>Ligne St. Barth Banana hand and foot cream</h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[150px] mt-[10px]'>9 300 ₽</h1>
            </div>


            {/* слева-направо румяна */}
            <div className='ml-[90px] mt-[90px]' onMouseEnter={() => handleMouseEnter('blush')} onMouseLeave={handleMouseLeave}>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute  ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>new!</button>
              <img
                src={imageHovered === 'blush' ? img7Alt : img6}
                className='w-[300px] h-[300px]'
              />
              <h3 className='hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'ltr', textAlign: 'left' }}>
                Жидкие румяна для лица
              </h3>
              <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
                Anastasia Beverly Hills Blurring serum blush
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>4 219 ₽</h1>
            </div>



            {/* слева-направо сумка */}
            <div className='ml-[60px] mt-[90px]'>
              <Link to="/favorites"><IoHeartOutline className='absolute  ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <button className='absolute mt-[80px] bg-[#10ee48] w-[40px] h-[40px] text-[white] font-bold'>new!</button>
              <img src={img7} className='w-[300px] h-[300px] ' />
              <h3 className=' hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'ltr', textAlign: 'left' }}>
                Сумка кросс-боди
              </h3>
              <h1 className=' hover:text-[#9ca887] w-[300px] text-2xl font-medium' style={{ direction: 'ltr', textAlign: 'left' }}>
                Coccinelle TEBE
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl'>от 960 ₽</h1>
            </div>
          </div>

          {/* 3 блок */}
          <div className='flex mt-[100px]'>


            {/* справа-налево румяна */}
            <div className=''>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <button className='bg-[#0ee44e] text-[black] font-bold w-[40px] absolute h-[40px]'>new!</button>
              <img src={img13} className='w-[300px] h-[300px]' />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>
                Жидкие румяна для лица</h3>
              <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>L'Oreal Paris LUMI</h1>
              <div className='flex hover:text-[#9ca887] text-2xl gap-3 ml-[116px]'>
                <h1 className='font-bold hover:text-[#9ca887] text-[grey] mt-[10px]'><del>1 056 ₽</del></h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[10px]'>1 818 ₽</h1>
              </div>
            </div>



            {/* справа-налево парфюм */}
            <div className='ml-[60px] w-[300px]'>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <button className='bg-[#cee313] text-[black] w-[40px] h-[40px]  font-bold absolute'>gift</button>
              <img src={imageHovered === 'парфюм' ? img12Alt : img12} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('парфюм')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>
                Парфюмерная вода</h3>
              <h1 className='hover:text-[#9ca887] w-[300px] text-2xl font-medium' style={{ direction: 'rtl', textAlign: 'right' }}>RABANNE Fame</h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] ml-[200px]'>11 360 ₽</h1>
            </div>


            {/* набор */}
            <div className='ml-[90px]'>
              <button className='bg-[#0ee44e] text-[black] font-bold w-[40px] absolute h-[40px]'>new!</button>
              <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[560px]' /></Link>
              <img
                src={imageHovered === 'набор' ? img11Alt : img11}
                className=' h-[600px] w-[650px]'
                onMouseEnter={() => handleMouseEnter('набор')}
                onMouseLeave={handleMouseLeave}
              />
              <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[150px]'>
                Ампульный набор для лица</p>
              <h1 className='hover:text-[#9ca887] text-4xl font-medium ml-[150px]' >BABOR Promo Easter Egg 2025
              </h1>
              <button className=' bg-lime-300 w-[120px] hover:text-[#9ca887]  ml-[150px] mt-[10px]'>новое | -20%</button>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] ml-[150px]'>8 200 ₽</h1>
            </div>
          </div>



          {/* 4 блок  finish*/}  

          <div className='flex mt-[100px]'>
            <div className=''>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <button className='bg-[#0ee44e] text-[black] font-bold w-[40px] absolute h-[40px]'>new</button>
              <img src={img14} className='w-[300px] h-[300px]' />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>
                Набор для ванной</h3>
              <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>DENEZO Alys</h1>

              <h1 className='font-bold hover:text-[#9ca887] mt-[10px] ml-[240px]'>3 989 ₽</h1>
            </div>


            <div className='ml-[60px] w-[300px]'>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <button className='bg-[#5deb0a] text-[black] font-bold w-[40px] absolute h-[40px]'>new!</button>
              <img src={imageHovered === 'night' ? img15Alt : img15} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('night')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>
                Ночной крем для восстановления сияния</h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>Go Tapa Radiant night cream</h1>
              <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl ml-[230px]'>790 ₽</h1>
            </div>



            <div className='ml-[90px] w-[300px]'>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute  ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>10%</button>
              <img src={img16}
                className='w-[300px] h-[300px]'
              />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>брошь
              </h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
                Stone Philosophy Autumn leaves
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>4 500 ₽</h1>
            </div>


            <div className='w-[300px] ml-[60px]' onMouseEnter={() => handleMouseEnter('sumka')} onMouseLeave={handleMouseLeave}>
              <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
              <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>new!</button>
              <img
                src={imageHovered === 'sumka' ? img17Alt : img17}
                className='w-[300px] h-[300px]'
              />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>

                Сумка кросс-боди
              </h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
                DKNY BRYANT AVE TZ DEMI C
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>21 000 ₽</h1>
            </div>
          </div>



          {/* 5 блок */}
          <div className='flex mt-[100px] '>

            <div className='w-[300px]'>
              <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
              <button className='bg-[#49f20b] text-[black] font-bold w-[40px] absolute h-[40px]'>new</button>
              <img src={imageHovered === 'bee' ? img18Alt : img18} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('bee')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>
                Подарочный набор для ухода за кожей</h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>True Island Honey bee total care set</h1>
              <button className=' bg-lime-300 w-[120px] hover:text-[#9ca887]  ml-[180px] mt-[10px]'>новое | -20%</button>

              <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[210px] mt-[10px]'>4 490 ₽</h1>
            </div>


            <div className='w-[300px] ml-[60px]'>
              <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
              <button className='bg-[#b60ca7] text-[white] font-bold w-[40px] absolute h-[40px]'>new</button>
              <img src={imageHovered === 'termo' ? img19Alt : img19} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('termo')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>

                Термопот</h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>Pioneer tp718</h1>

              <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[210px] mt-[10px]'>5 192 ₽</h1>
            </div>


            <div className='ml-[90px] '>
              <p className='hover:text-[#9ca887] absolute font-mono mt-[40px] ml-[400px]'>Набор открыток</p>
              <h1 className='hover:text-[#9ca887] absolute text-4xl mt-[70px]  w-[250px] font-medium ml-[400px]' >aespa Armageddon: The Mystery Circle POSTCARD SET GISELLE Ver.</h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl absolute mt-[330px] ml-[400px]'>2 130 ₽</h1>
              <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[460px] mt-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[460px] mt-[380px]' /></Link>
              <img
                src={imageHovered === 'kor' ? img20Alt : img20}
                className='h-[420px] w-[500px]'
                onMouseEnter={() => handleMouseEnter('kor')}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </div>


          {/* 6 блок */}
          {/* свеча */}

          <div className='flex mt-[100px]'>
            <div className=''>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <button className='bg-[#0ee44e] text-[#bbbbbb] font-bold w-[40px] absolute h-[40px]'>new</button>
              <img src={img24} className='w-[300px] h-[300px]' />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>
                Ароматическая свеча</h3>
              <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>MAEMI ROUGE</h1>

              <h1 className='font-bold hover:text-[#9ca887] mt-[10px] ml-[240px]'>3 100 ₽</h1>
            </div>


            <div className='ml-[60px] w-[300px]'>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <button className='bg-[#a503a3] text-[#bababa] font-bold w-[40px] absolute h-[40px]'>15%</button>
              <img src={imageHovered === 'b' ? img25Alt : img25} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('b')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>
                Косметологический аппарат</h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>GESS The One</h1>
              <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl ml-[230px]'>36 966 ₽</h1>
            </div>



            <div className='ml-[90px] w-[300px]'>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute  ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <div className='flex'>
                <button className='bg-[#10ee48] text-[#141212] font-bold w-[40px] absolute h-[40px]'>new!</button>
                <button className='bg-[#7f0aa9] text-[#e3e1e1] font-bold w-[40px] absolute h-[40px]'>only GA</button></div>
              <img src={img26}
                className='w-[300px] h-[300px]'
              />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>
                Футболка
              </h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
                MY BREAKFAST
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>от 3 825 ₽</h1>
            </div>


            <div className='w-[300px] ml-[60px]' onMouseEnter={() => handleMouseEnter('d')} onMouseLeave={handleMouseLeave}>
              <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
              <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>new!</button>
              <img
                src={imageHovered === 'd' ? img27Alt : img27}
                className='w-[300px] h-[300px]'
              />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>Машинка для стрижки
              </h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
                Panasonic ER-GB60-K520
              </h1>

              {/* март -20% */}
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>7 204 ₽</h1>
            </div>
          </div>


          {/* 7 блок */}

          <div className='flex mt-[100px] '>

            <div className=''>
              
              <p className='hover:text-[#9ca887] absolute font-mono mt-[80px] ml-[100px]'>
                Наушники</p>
              <h1 className='hover:text-[#9ca887] absolute text-4xl w-[250px] mt-[130px]  font-medium ' >Apple AirPods 3 with MagSafe Charging Case</h1>
              <h1 className='font-bold hover:text-[#9ca887] absolute text-2xl mt-[310px] '>19 410 ₽</h1>
              <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[380px]' /></Link>
              <img src={img21} className='h-[420px] w-[500px] ml-[150px]' />


            </div>

            <div className='w-[300px] ml-[90px]' onMouseEnter={() => handleMouseEnter('fen')} onMouseLeave={handleMouseLeave}>
              <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] mt-[10px]  ml-[265px] ' /></Link>
              <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
              <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>new!</button>
              <img
                src={imageHovered === 'fen' ? img23Alt : img23}
                className='w-[300px] h-[300px]'
              />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>

                Фен-стайлер
              </h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
                REMEZ Model S RMB-707Bx
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>29 890 ₽</h1>
            </div>


            <div className='w-[300px] ml-[60px]' onMouseEnter={() => handleMouseEnter('piala')} onMouseLeave={handleMouseLeave}>
              <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] mt-[10px]  ml-[265px] ' /></Link>
              <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
              <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>new!</button>
              <img
                src={imageHovered === 'piala' ? img22Alt : img22}
                className='w-[300px] h-[300px]'
              />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>
                пиала
              </h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
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
