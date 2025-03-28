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
import Modal from './Modal';
// import Mmodal from './Mmodal'
const denzo = [
  { title: 'набор для ванной', text: 'DENEZO Alys', price: '3 989 ₽', img: img14 },
  { title: 'Ночной крем для восстановления сияния', text: 'Go Tapa Radiant night', price: '790 ₽', img: img15 },
  { title: 'брошь', text: 'Stone Philosophy Autumn leaves', price: '4 500 ₽', img: img16 },
  { title: 'сумка кросс-боди', text: 'DKNY BRYANT AVE TZ DEMI C', price: '21 000 ₽', img: img17 },]

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
const praimer = [
  {
    id: '1',
    title: 'DEAR DAHLIA Prime layer skin prep',
    category: 'Праймер для лица',
    title2: `Многофункциональный массажер для лица Impulse Hot&Cold – это комплексное решение для ежедневного использования на любом этапе ухода за кожей. В основе действия прибора лежит несколько технологий, которые используются в 4 различных режимах работы.\n
        Эффект — Снятие отечности, повышение тонуса и эластичности кожи, очищение кожи лица, улучшение впитываемости уходовых средств.\n
        Тип питания — Аккумулятор.
        Модель — MRD 579.
        Время зарядки аккумулятора — 180 мин.
        Время автономной работы — 240 мин.
        Количество режимов — 4.
        Регулировка интенсивности — Да.
        Длина — 16 см.
        Ширина — 5 см.
        Высота — 6 см.
        гарантийный срок — 1 год.`,
    price: '1 818 ₽',
    oldPrice: '4 545 ₽',
    img: img2,
    imgAlt: img10Alt,
    discount: '60%'
  },

];
const praim = [
  {
    id: '2',
    title: 'ROSSANO FERRETTI Dolce 05 repair & nourish shampoo',
    category: 'Шампунь для восстановления и питания волос',
    price: 'от 960 ₽',
    img: img3,
    imgAlt: img9Alt,
    discount: 'new!'
  }
];
const prai = [
  {
    id: '3',
    title: 'oss to oss Ultra-gentle',
    title2: `тип продукта
зубная паста
для кого
унисекс
назначение
антибактериальное, от кариеса, свежее дыхание, очищение
вес
100 г В составе:
- витамин Е для ухода за полостью рта и антибактериальной защиты;
- пищевая сера и минералы, обеспечивающие комплексный уход;
- зеленый чай, который реминерализует, оказывает антиоксидантную, антибактериальную защиту и противовоспалительное действие;
- ромашка, чтобы успокаивать раздражение.`,
    category: 'Зубная паста укрепляющая для чувствительных зубов',
    price: 'от 810 ₽',
    img: img4,
    imgAlt: img8Alt
  }
];
const cream = [
  {
    id: '4',
    title: 'Ligne St. Barth Banana hand and foot cream',
    category: 'Крем для рук и ног',
    price: '9 300 ₽',
    img: img5,
    discount: '+gift!'
  }
];
const cre = [
  {
    id: '5',
    title: 'Anastasia Beverly Hills Blurring serum blush',
    category: 'Жидкие румяна для лица',
    price: '4 219 ₽',
    img: img6,
    imgAlt: img7Alt,
    discount: 'new!'
  }
];
const cr = [
  {
    id: '6',
    title: 'Coccinelle TEBE',
    category: ' Сумка кросс-боди',
    price: 'от 960 ₽',
    img: img7,
    discount: 'new!'
  }
];
const rumia = [
  {
    id: '7',
    title: 'Oreal Paris LUMI',
    category: 'Жидкие румяна для лица',
    price: '1 056 ₽',
    oldPrice: ' 1 818 ₽',
    img: img13,
    discount: 'new!'
  }
];
const rumi = [
  {
    id: '8',
    title: 'RABANNE Fame',
    category: ' Парфюмерная вода',
    price: '11 360 ₽',
    img: img12,
    imgAlt: img12Alt,
    discount: 'gift!'
  }
];
const nabor = [
  {
    id: '9',
    title: 'BABOR Promo Easter Egg 2025',
    category: 'Ампульный набор для лица',
    price: '8 200 ₽',
    img: img11,
    imgAlt: img11Alt,
    discount: 'new!',
    button: 'новое | -20%'
  }
];
const nab = [
  { id: '10', title: 'BABOR Promo Easter Egg 2025', category: ' Набор для ванной', price: '3 989 ₽', img: img14, discount: 'new!', }];
const night = [
  { id: '10', title: 'Go Tapa Radiant night cream', category: ' Ночной крем для восстановления сияния', price: '790 ₽', img: img15, imgAlt: img15Alt, discount: 'new!', }];
const nigh = [
  { id: '11', title: 'DKNY BRYANT AVE TZ DEMI C', category: 'Сумка кросс-боди', price: '21 000 ₽', img: img17, imgAlt: img17Alt, discount: 'new!', }];
const koja = [
  { id: '12', title: 'True Island Honey bee total care set', category: ' Подарочный набор для ухода за кожей', price: '4 490 ₽', img: img18, imgAlt: img18Alt, discount: 'new!', button: 'новое | -20%' }];
const termo = [
  { id: '13', title: 'Pioneer tp718', category: 'Термопот', price: '5 192 ₽', img: img19, imgAlt: img19Alt, discount: 'new!' }];
const otkr = [
  { id: '14', title: 'aespa Armageddon: The Mystery Circle POSTCARD SET GISELLE Ver.', category: 'Набор открыток', price: '2 130 ₽', img: img20, imgAlt: img20Alt }];
const svec = [
  { id: '15', title: 'MAEMI ROUGE', category: 'Ароматическая свеча', price: '3 100 ₽', img: img24, discount: 'new!' }];
const apparat = [
  { id: '16', title: 'GESS The One', category: 'Косметологический аппарат', price: '36 966 ₽', img: img25, imgAlt: img25Alt, discount: '25%' }];
const shamp = [
  { id: '17', title: 'ROSSANO FERRETTI Dolce 05 repair & nourish shampoo', category: 'Шампунь для восстановления и питания волос', price: 'от 960 ₽', img: img3, imgAlt: img9Alt, discount: 'new!' }];
const futbol = [
  { id: '18', title: 'MY KIDCORE', category: 'Футболка', price: 'от 3 825 ₽', img: img26, discount: 'only GA' }];
const mashin = [
  { id: '19', title: 'Panasonic ER-GB60-K520', category: 'Машинка для стрижки', price: '7 204 ₽', img: img27, imgAlt: img27Alt, discount: 'new!' }];
const naushniki = [
  { id: '20', title: 'Apple AirPods 3 with MagSafe Charging Case', category: 'Наушники', price: '19 410 ₽', img: img21 }];
const phen = [
  { id: '21', title: ' REMEZ Model S RMB-707Bx', category: ' Фен-стайлер', price: '29 890 ₽', imgAlt: img23Alt, img: img23, discount: 'new!' }];
const piala = [
  { id: '22', title: 'Odaryadarya Король, алкоголь и самоконтроль', category: 'Пиала', price: '2 650 ₽', imgAlt: img22Alt, img: img22, discount: 'new!' }];
export default function Products() {
  const [imageHovered, setImageHovered] = useState(null);
  const handleMouseEnter = (img) => setImageHovered(img);
  const handleMouseLeave = () => setImageHovered(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
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
          <div className='mt-[10px]'>
            <div className="relative">
              <img src={img1} className="w-full h-full object-cover " />
              <h1 className="text-8xl font-bold text-[white] absolute top-[72.4%] left-[70%] transform -translate-x-1/2 -translate-y-1/2">новинки</h1>
            </div>
          </div>
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
          <div className='mt-[20px]'>
            <div className='flex mt-[20px]'>
              {praimer.map((dog) => (
                <div
                  key={dog.id}
                  className="relative w-[320px] bg-white p-4 rounded-lg cursor-pointer"
                  onClick={() => setSelectedProduct(dog)}
                >
                  <div className=''>
                    <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                    <button className='bg-[#c2387f] text-[white] font-bold w-[40px] absolute h-[40px]'>60%</button>
                    <img src={imageHovered === dog.id ? dog.imgAlt : dog.img} onMouseEnter={() => handleMouseEnter(dog.id)} onMouseLeave={handleMouseLeave} className='w-[300px] h-[300px]' />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'rtl', textAlign: 'right' }}>{dog.category}</h3>
                    <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{dog.title}</h1>
                    <div className='flex hover:text-[#9ca887] text-2xl gap-3 ml-[120px]'>
                      <h1 className='font-bold hover:text-[#9ca887] text-[grey] mt-[10px]'><del>{dog.oldPrice}</del></h1>
                      <h1 className='font-bold hover:text-[#9ca887] mt-[10px]'>{dog.price}</h1>
                    </div>
                  </div>
                </div>
              ))}

              {praim.map((og) => (
                <div key={og.id} className='ml-[60px] w-[300px]'>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#10ee48] w-[40px] h-[40px] text-[white] font-bold absolute'>{og.discount}</button>
                  <img src={imageHovered === og.id ? og.imgAlt : og.img} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter(og.id)} onMouseLeave={handleMouseLeave} />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'rtl', textAlign: 'right' }}>{og.category}</h3>
                  <h1 className='hover:text-[#9ca887] text-2xl font-medium ' style={{ direction: 'rtl', textAlign: 'right' }}>{og.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[204px] mt-[10px]'>{og.price}</h1>
                </div>
              ))}
              {prai.map((g) => (
                <div key={g.id} className='ml-[90px]' onClick={() => setSelectedProduct(g)}>
                  <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[560px]' /></Link>
                  <img src={imageHovered === g.id ? g.imgAlt : g.img} className='h-[600px] w-[650px] ' onMouseEnter={() => handleMouseEnter(g.id)} onMouseLeave={handleMouseLeave} />
                  <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[150px]'>{g.category}</p>
                  <h1 className='hover:text-[#9ca887] text-4xl font-medium ml-[150px]' >{g.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] ml-[150px]'>{g.price}</h1>
                </div>
              ))}
            </div>
            <div className='flex'>
              {cream.map((c) => (
                <div key={c.id} className='mt-[-130px] w-[1400px]' >
                  <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[560px]' /></Link>
                  <button className='bg-[#dadd0e] text-[black] font-bold w-[45px] h-[40px] absolute'>{c.discount}</button>
                  <img src={img5} className='h-[600px] w-[650px]' />
                  <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px]  ml-[150px]'>{c.category}</p>
                  <h1 className='hover:text-[#9ca887] text-4xl font-medium  ml-[150px]'>{c.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[150px] mt-[10px]'>{c.price}</h1>
                </div>
              ))}
              {cre.map((cr) => (
                <div key={cr.id} className='ml-[90px] mt-[90px]' onMouseEnter={() => handleMouseEnter('blush')} onMouseLeave={handleMouseLeave}>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute  ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>{cr.discount}</button>
                  <img src={imageHovered === cr.id ? cr.imgAlt : cr.img} onMouseEnter={() => handleMouseEnter(cr.id)} onMouseLeave={handleMouseLeave} className='w-[300px] h-[300px]' />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'ltr', textAlign: 'left' }}> {cr.title}</h3>
                  <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}> {cr.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{cr.price}</h1>
                </div>
              ))}
              {cr.map((cre) => (
                <div key={cre.id} className='ml-[60px] mt-[90px]'>
                  <Link to="/favorites"><IoHeartOutline className='absolute  ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='absolute  bg-[#10ee48] w-[40px] h-[40px] text-[white] font-bold'>{cre.discount}</button>
                  <img src={img7} className='w-[300px] h-[300px] ' />
                  <h3 className=' hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'ltr', textAlign: 'left' }}>
                    {cre.category}
                  </h3>
                  <h1 className=' hover:text-[#9ca887] w-[300px] text-2xl font-medium' style={{ direction: 'ltr', textAlign: 'left' }}>
                    {cre.title}
                  </h1>
                  <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl'>{cre.price}</h1>
                </div>
              ))}

            </div>
            <div className='flex mt-[100px]'>
              {rumia.map((rum) => (
                <div key={rum.id} className=''>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#0ee44e] text-[black] font-bold w-[40px] absolute h-[40px]'>{rum.discount}</button>
                  <img src={img13} className='w-[300px] h-[300px]' />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{rum.category}</h3>
                  <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{rum.title}</h1>
                  <div className='flex hover:text-[#9ca887] text-2xl gap-3 ml-[116px]'>
                    <h1 className='font-bold hover:text-[#9ca887] text-[grey] mt-[10px]'><del>{rum.price}</del></h1>
                    <h1 className='font-bold hover:text-[#9ca887] mt-[10px]'>{rum.oldPrice}</h1>
                  </div>
                </div>
              ))}
              {rumi.map((ru) => (
                <div key={ru.id} className='ml-[60px] w-[300px]'>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#cee313] text-[black] w-[40px] h-[40px]  font-bold absolute'>{ru.discount}</button>
                  <img src={imageHovered === 'парфюм' ? ru.imgAlt : ru.img} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('парфюм')} onMouseLeave={handleMouseLeave} />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{ru.category}</h3>
                  <h1 className='hover:text-[#9ca887] w-[300px] text-2xl font-medium' style={{ direction: 'rtl', textAlign: 'right' }}>{ru.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] ml-[200px]'>{ru.price}</h1>
                </div>
              ))}
              {nabor.map((nab) => (
                <div className='ml-[90px]'>
                  <button className='bg-[#0ee44e] text-[black] font-bold w-[40px] absolute h-[40px]'>{nab.discount}</button>
                  <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[560px]' /></Link>
                  <img src={imageHovered === 'набор' ? nab.imgAlt : nab.img} className=' h-[600px] w-[650px]' onMouseEnter={() => handleMouseEnter('набор')} onMouseLeave={handleMouseLeave} />
                  <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[150px]'> {nab.category}</p>
                  <h1 className='hover:text-[#9ca887] text-4xl font-medium ml-[150px]' >{nab.title}</h1>
                  <button className=' bg-lime-300 w-[120px] hover:text-[#9ca887]  ml-[150px] mt-[10px]'>{nab.button}</button>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] ml-[150px]'>{nab.price}</h1>
                </div>
              ))}
            </div>
            <div className='flex mt-[100px] w-[1400px]'>
              {nab.map((na) => (
                <div key={na.id} className=''>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#0ee44e] text-[black] font-bold w-[40px] absolute h-[40px]'>{na.discount}</button>
                  <img src={na.img} className='w-[300px] h-[300px]' />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}> {na.category}</h3>
                  <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{na.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] mt-[10px] ml-[240px]'>{na.price}</h1>
                </div>
              ))}
              {night.map((nig) => (
                <div key={nig.id} className='ml-[60px] w-[300px]'>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#5deb0a] text-[black] font-bold w-[40px] absolute h-[40px]'>{nig.discount}</button>
                  <img src={imageHovered === 'night' ? nig.imgAlt : nig.img} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('night')} onMouseLeave={handleMouseLeave} />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}> {nig.category}</h3>
                  <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{nig.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl ml-[230px]'>{nig.price}</h1>
                </div>
              ))}
              {nigh.map((nigh) => (
                <div key={nigh} className='w-[300px] ml-[60px]' onMouseEnter={() => handleMouseEnter('sumka')} onMouseLeave={handleMouseLeave}>
                  <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                  <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>{nigh.discount}</button>
                  <img src={imageHovered === 'sumka' ? nigh.imgAlt : nigh.img} className='w-[300px] h-[300px]' />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{nigh.category}</h3>
                  <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{nigh.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>21 000 ₽</h1>
                </div>
              ))}
              {shamp.map((sham) => (
                <div key={sham.id} className='ml-[60px] w-[300px]'>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#10ee48] w-[40px] h-[40px] text-[white] font-bold absolute'>{sham.discount}</button>
                  <img src={imageHovered === 'шампунь' ? sham.imgAlt : sham.img} className='w-[300px] h-[300px] ' onMouseEnter={() => handleMouseEnter('шампунь')} onMouseLeave={handleMouseLeave} />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'ltr', textAlign: 'left' }}>{sham.category}</h3>
                  <h1 className='hover:text-[#9ca887] text-2xl font-medium ' style={{ direction: 'ltr', textAlign: 'left' }}>{sham.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl  mt-[10px]'>{sham.price}</h1>
                </div>
              ))}
            </div>
            <div className='flex mt-[100px] '>
              {koja.map((koj) => (
                <div key={koj} className='w-[300px]'>
                  <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                  <button className='bg-[#49f20b] text-[black] font-bold w-[40px] absolute h-[40px]'>{koj.discount}</button>
                  <img src={imageHovered === 'bee' ? koj.imgAlt : koj.img} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('bee')} onMouseLeave={handleMouseLeave} />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{koj.category}</h3>
                  <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{koj.title}</h1>
                  <button className=' bg-lime-300 w-[120px] hover:text-[#9ca887]  ml-[180px] mt-[10px]'>{koj.button}</button>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[210px] mt-[10px]'>{koj.price}</h1>
                </div>
              ))}
              {termo.map((ter) => (
                <div key={ter.id} className='w-[300px] ml-[60px]'>
                  <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                  <button className='bg-[#b60ca7] text-[white] font-bold w-[40px] absolute h-[40px]'>{ter.discount}</button>
                  <img src={imageHovered === 'termo' ? ter.imgAlt : ter.img} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('termo')}
                    onMouseLeave={handleMouseLeave} />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{ter.category}</h3>
                  <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{ter.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[210px] mt-[10px]'>{ter.price}</h1>
                </div>
              ))}
              {otkr.map((otk) => (
                <div key={otk.id} className='ml-[90px] '>
                  <p className='hover:text-[#9ca887] absolute font-mono mt-[40px] ml-[400px]'>{otk.category}</p>
                  <h1 className='hover:text-[#9ca887] absolute text-4xl mt-[70px]  w-[250px] font-medium ml-[400px]' >{otk.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl absolute mt-[330px] ml-[400px]'>{otk.price}</h1>
                  <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[460px] mt-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[460px] mt-[380px]' /></Link>
                  <img src={imageHovered === 'kor' ? otk.imgAlt : otk.img} className='h-[420px] w-[500px]' onMouseEnter={() => handleMouseEnter('kor')} onMouseLeave={handleMouseLeave}
                  />
                </div>
              ))}
            </div>
            <div className='flex mt-[100px]'>
              {svec.map((sve) => (
                <div key={sve.id} className=''>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#0ee44e] text-[#bbbbbb] font-bold w-[40px] absolute h-[40px]'>{sve.discount}</button>
                  <img src={sve.img} className='w-[300px] h-[300px]' />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{sve.category}</h3>
                  <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{sve.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] mt-[10px] ml-[240px]'>{sve.price}</h1>
                </div>
              ))}
              {apparat.map((app) => (
                <div key={app.id} className='ml-[60px] w-[300px]'>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#a503a3] text-[#bababa] font-bold w-[40px] absolute h-[40px]'>{app.discount}</button>
                  <img src={imageHovered === 'b' ? app.imgAlt : app.img} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('b')} onMouseLeave={handleMouseLeave} />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{app.category}</h3>
                  <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{app.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl ml-[200px]'>{app.price}</h1>
                </div>
              ))}
              {futbol.map((fut) => (
                <div key={fut.id} className='ml-[90px] w-[300px]'>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute  ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#7f0aa9] text-[#e3e1e1] font-bold w-[40px] absolute h-[40px]'>{fut.discount}</button>
                  <img src={fut.img} className='w-[300px] h-[300px]' />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{fut.category}</h3>
                  <button className='hover:text-[#9ca887] font-medium text-2xl'>{fut.title}</button>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{fut.price}</h1>
                </div>
              ))}
              {mashin.map((mash) => (
                <div key={mash.id} className='w-[300px] ml-[60px]' onMouseEnter={() => handleMouseEnter('d')} onMouseLeave={handleMouseLeave}>
                  <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                  <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>{mash.discount}</button>
                  <img src={imageHovered === 'd' ? mash.imgAlt : mash.img} className='w-[300px] h-[300px]' />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{mash.category}</h3>
                  <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{mash.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{mash.price}</h1>
                </div>
              ))}
            </div>
            <div className='flex mt-[100px] '>
              {naushniki.map((nau) => (
                <div key={nau.id} className=''>
                  <p className='hover:text-[#9ca887] absolute font-mono mt-[80px] ml-[100px]'>{nau.category}</p>
                  <h1 className='hover:text-[#9ca887] absolute text-4xl w-[250px] mt-[130px]  font-medium ' >{nau.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] absolute text-2xl mt-[310px] '>{nau.price}</h1>
                  <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[380px]' /></Link>
                  <img src={nau.img} className='h-[420px] w-[500px] ml-[150px]' />
                </div>
              ))}
              {phen.map((fen) => (
                <div key={fen.id} className='w-[300px] ml-[90px]' onMouseEnter={() => handleMouseEnter('fen')} onMouseLeave={handleMouseLeave}>
                  <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] mt-[10px]  ml-[265px] ' /></Link>
                  <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                  <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>{fen.discount}</button>
                  <img src={imageHovered === 'fen' ? fen.imgAlt : fen.img} className='w-[300px] h-[300px]' />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{fen.category}</h3>
                  <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{fen.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{fen.price}</h1>
                </div>
              ))}
              {piala.map((pia) => (
                <div key={pia.id} className='w-[300px] ml-[60px]' onMouseEnter={() => handleMouseEnter('piala')} onMouseLeave={handleMouseLeave}>
                  <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] mt-[10px]  ml-[265px] ' /></Link>
                  <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                  <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>{pia.discount}</button>
                  <img src={imageHovered === 'piala' ? pia.imgAlt : pia.img} className='w-[300px] h-[300px]' />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{pia.category}</h3>
                  <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{pia.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{pia.price}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        {selectedProduct && <Modal dog={selectedProduct} onClose={() => setSelectedProduct(null)} />}
        {selectedProduct && <Modal g={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      </section >
    </div >
  );
}
