import React, { useState } from 'react'
import { BsBasket } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import s1 from '../../assets/gulasyl/скидки.webp'
import s2 from '../../assets/gulasyl/s2.webp'
import s4 from '../../assets/gulasyl/кар.webp'
import s5 from '../../assets/gulasyl/s5.webp'
import s6 from '../../assets/gulasyl/шик.webp'
import s7 from '../../assets/gulasyl/s7.webp'
import s8 from '../../assets/gulasyl/s8.webp'
import s9 from '../../assets/gulasyl/s9.webp'
import s10 from '../../assets/gulasyl/s10.webp'
import s11 from '../../assets/gulasyl/s11.webp'
import s12 from '../../assets/gulasyl/s12.webp'
import s13 from '../../assets/gulasyl/s13.webp'
import s14 from '../../assets/gulasyl/bele.webp'
import s15 from '../../assets/gulasyl/music.webp'
import s16 from '../../assets/gulasyl/balzam.webp'
import s17 from '../../assets/gulasyl/vitam.webp'
import s18 from '../../assets/gulasyl/shamp.webp'
import s19 from '../../assets/gulasyl/massaj.webp'
import s20 from '../../assets/gulasyl/pled.webp'
import s21 from '../../assets/gulasyl/sergi.webp'
import s3Alt from '../../assets/gulasyl/s3.webp'
import s5Alt from '../../assets/gulasyl/s5alt.webp'
import s6Alt from '../../assets/gulasyl/шик2.webp'
import s7Alt from '../../assets/gulasyl/s7alt.webp'
import s8Alt from '../../assets/gulasyl/s8alt.webp'
import s10Alt from '../../assets/gulasyl/s10alt.webp'
import s13Alt from '../../assets/gulasyl/s13alt.webp'
import s14Alt from '../../assets/gulasyl/bele2.webp'
import s15Alt from '../../assets/gulasyl/s15alt.webp'
import s16Alt from '../../assets/gulasyl/balzam2.webp'
import s17Alt from '../../assets/gulasyl/vitam2.webp'
import s18Alt from '../../assets/gulasyl/shamp2.webp'
import s19Alt from '../../assets/gulasyl/massaj2.webp'
import s20Alt from '../../assets/gulasyl/pled2.webp'
import s21Alt from '../../assets/gulasyl/sergi2.webp'

export default function Discount() {

  const [imageHovered, setImageHovered] = useState(null);
  const handleMouseEnter = (id) => setImageHovered(id);
  const handleMouseLeave = () => setImageHovered(null);
  const every = [
    { id: '1', title: 'ANY BUDDY Healthy sip', category: 'Детокс-напиток на каждый день', price: '3 000 ₽', img: s2, imgAlt: s3Alt, discount: '40%' }
  ]
  const lips = [
    { id: '2', title: '3INA THE AUTOMATIC LIP PENCIL', category: 'Автоматический водостойкий карандаш для губ', price: '1 450 ₽', img: s4, discount: '20%' }
  ]
  const longsliv = [
    { id: '3', title: 'FIGURA Active Wear Alpine Skiing черный', category: 'Лонгслив', price: '12 500 ₽', img: s5, imgAlt: s5Alt, discount: 'new!' }
  ]
  const shik = [
    { id: '4', title: 'SHIK Hydrating emulsion', category: 'Увлажняющая эмульсия', price: '671 ₽', img: s6, imgAlt: s6Alt, discount: 'hit' }
  ]
  const pomidor = [
    { id: '5', title: 'BOUGIE Tomato', category: 'Интерьерная свеча', price: '1600 ₽', img: s7, imgAlt: s7Alt, discount: '20%' }
  ]
  const clean = [
    { id: '6', title: 'Go Tapa Anti-Breakout Treatment pads', category: 'Очищающие пэды против несовершенств', price: '999 ₽', img: s8, imgAlt: s8Alt, discount: '+gift' }
  ]
  const avatar = [
    { id: '7', title: 'Good Smile Company Tokyo Revengers Takemichi Hanagaki', category: 'Фигурка', price: '2 276 ₽', img: s9, discount: '60%' }
  ]
  const tush = [
    { id: '8', title: 'Clio Sharp, so simple', category: 'Удлиняющая тушь для ресниц', price: '641 ₽', img: s10, imgAlt: s10Alt, discount: '+gift' }
  ]
  const mist = [
    { id: '9', title: 'Dr. Ceuracle Hyal Reyouth Oil Drop Mist', category: 'Мист для лица', price: '2 152 ₽', img: s11, discount: '28%' }
  ]
  const pial = [
    { id: '10', title: 'Odaryadarya Авокадо', category: 'Пиала', price: '2 176 ₽', img: s12, discount: '15%' }
  ]
  const maska = [
    { id: '11', title: 'KORFF Essential Peel MICROPEELING MASK', category: 'Отшелушивающая и увлажняющая маска для лица', price: '2 060 ₽', img: s13, imgAlt: s13Alt,  discount: '40%' }
  ]
  const bele = [
    { id: '12', title: 'Wellery Апельсин', category: 'Кондиционер для белья', price: '212 ₽', img: s14, imgAlt: s14Alt,  discount: '44%' }
  ]
  const music = [
    { id: '13', title: '(G)I-DLE 6th Mini Album I feel Random Ver.', category: 'Музыкальный альбом', price: '1 557 ₽', img: s15, imgAlt: s15Alt,  discount: '50%' }
  ]
  const balzam = [
    { id: '14', title: 'Belor Design Yummy Oasis Mint Lip Balm', category: 'Бальзам для губ', price: '186 ₽', img: s16, imgAlt: s16Alt,  discount: '+gift' }
  ]
  const vitam = [
    { id: '15', title: 'SKINOLOGY VITAMIN C', category: 'Укрепляющая сыворотка для лица', price: '1 414 ₽', img: s17, imgAlt: s17Alt,  discount: '60%' }
  ]
  const shamp = [
    { id: '16', title: 'SONO SILVER SHAMPOO', category: 'Шампунь для осветленных волос', price: '1 443 ₽', img: s18, imgAlt: s18Alt,  discount: 'hit' }
  ]
  const massaj = [
    { id: '17', title: 'GESS Mini Revolver', category: 'Массажный пистолет', price: '5 520 ₽', img: s19, imgAlt: s19Alt,  discount: '20%' }
  ]
  const pled = [
    { id: '18', title: 'SONNO Aesthetic, графитовый, евро', category: 'Комплект постельного белья', price: '7 943 ₽', img: s20, imgAlt: s20Alt,  discount: '31%' }
  ]
  const sergi = [
    { id: '19', title: 'Sbleskom Крутые тигры', category: 'Серебряные серьги', price: '8 743 ₽', img: s21, imgAlt: s21Alt,  discount: 'only GA' }
  ]


  return (
    <div>
      <section>
        <div className='w-[1400px] m-auto'>
          <h1 className='text-6xl font-bold text-[#474646] absolute mt-[490px] ml-[730px]'>скидки до −50%</h1>
          <img src={s1} className='w-[1400px]' />
          <h2 className='justify-center items-center flex my-[40px] text-2xl'><span className='mr-[5px] font-bold'>40 806</span> продукт</h2>
          <div className='mt-[20px]'>
            <div className='flex mt-[20px] '>
              {every.map((eve) => (
                <div key={eve.id} className=''>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#e6287e] text-[white] font-bold w-[40px] absolute h-[40px]'>{eve.discount}</button>
                  <img src={imageHovered === eve.id ? eve.imgAlt : eve.img} onMouseEnter={() => handleMouseEnter(eve.id)} onMouseLeave={handleMouseLeave} className='w-[300px] h-[300px]' />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'rtl', textAlign: 'right' }}>{eve.category}</h3>
                  <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{eve.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] mt-[10px] ml-[240px]'>{eve.price}</h1>
                </div>
              ))}
              {lips.map((lip) => (
                <div key={lip.id} className='ml-[60px] w-[300px]'>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#e6287e] w-[40px] h-[40px] text-[white] font-bold absolute'>{lip.discount}</button>
                  <img src={lip} className='w-[300px] h-[300px]' />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'rtl', textAlign: 'right' }}>{lip.category}</h3>
                  <h1 className='hover:text-[#9ca887] text-2xl font-medium ' style={{ direction: 'rtl', textAlign: 'right' }}>{lip.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[210px] mt-[10px]'>{lip.price}</h1>
                </div>
              ))}
              {longsliv.map((lon) => (
                <div key={lon.id} className='ml-[90px]'>
                  <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[560px]' /></Link>
                  <img src={imageHovered === lon.id ? lon.imgAlt : lon.img} className='h-[600px] w-[650px] ' onMouseEnter={() => handleMouseEnter(lon.id)} onMouseLeave={handleMouseLeave} />
                  <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[150px]'>{lon.category}</p>
                  <h1 className='hover:text-[#9ca887] text-4xl font-medium ml-[150px]' >{lon.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] ml-[150px]'>{lon.price}</h1>
                </div>
              ))}
            </div>
            <div className='flex'>
              {shik.map((shi) => (
                <div key={shi.id} className='mt-[-130px] w-[1400px]' >
                  <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[560px]' /></Link>
                  <button className='bg-[#dadd0e] text-[#000000] font-bold w-[45px] h-[40px] absolute'>{shi.discount}</button>
                  <img src={imageHovered === shi.id ? shi.imgAlt : shi.img} onMouseEnter={() => handleMouseEnter(shi.id)} onMouseLeave={handleMouseLeave} className='h-[600px] w-[650px]' />
                  <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px]  ml-[150px]'>{shi.category}</p>
                  <h1 className='hover:text-[#9ca887] text-4xl font-medium  ml-[150px]'>{shi.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[150px] mt-[10px]'>{shi.price}</h1>
                </div>
              ))}
              {pomidor.map((pom) => (
                <div key={pom.id} className='ml-[90px] mt-[90px]' onMouseEnter={() => handleMouseEnter('blush')} onMouseLeave={handleMouseLeave}>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute  ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>{pom.discount}</button>
                  <img src={imageHovered === pom.id ? pom.imgAlt : pom.img} onMouseEnter={() => handleMouseEnter(pom.id)} onMouseLeave={handleMouseLeave} className='w-[300px] h-[300px]' />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'ltr', textAlign: 'left' }}> {pom.title}</h3>
                  <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}> {pom.title} </h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{pom.price}</h1>
                </div>
              ))}
              {clean.map((cl) => (
                <div key={cl.id} className='ml-[60px] mt-[90px]'>
                  <Link to="/favorites"><IoHeartOutline className='absolute  ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='absolute  bg-[#dbe649] w-[40px] h-[40px] text-[#000000] font-bold'>{cl.discount}</button>
                  <img src={imageHovered === cl.id ? cl.imgAlt : cl.img} onMouseEnter={() => handleMouseEnter(cl.id)} onMouseLeave={handleMouseLeave} className='w-[300px] h-[300px] ' />
                  <h3 className=' hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'ltr', textAlign: 'left' }}> {cl.category}</h3>
                  <h1 className=' hover:text-[#9ca887] w-[300px] text-2xl font-medium' style={{ direction: 'ltr', textAlign: 'left' }}> {cl.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl'>{cl.price}</h1>
                </div>
              ))}
              </div>
              <div className='flex mt-[100px]'>
                {avatar.map((ava) => (
                  <div key={ava.id} className=''>
                    <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                    <button className='bg-[#e927af] text-[#ffffff] font-bold w-[40px] absolute h-[40px]'>{ava.discount}</button>
                    <img src={ava.img} className='w-[300px] h-[300px]' />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{ava.category}</h3>
                    <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{ava.title}</h1>
                      <h1 className='font-bold hover:text-[#9ca887] mt-[10px]'>{ava.price}</h1>
                  </div>
                ))}
                {tush.map((tu) => (
                  <div key={tu.id} className='ml-[60px] w-[300px]'>
                    <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                    <button className='bg-[#cee313] text-[black] w-[40px] h-[40px]  font-bold absolute'>{tu.discount}</button>
                    <img src={imageHovered === 'парфюм' ? tu.imgAlt : tu.img} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('парфюм')} onMouseLeave={handleMouseLeave} />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{tu.category}</h3>
                    <h1 className='hover:text-[#9ca887] w-[300px] text-2xl font-medium' style={{ direction: 'rtl', textAlign: 'right' }}>{tu.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] ml-[200px]'>{tu.price}</h1>
                  </div>
                ))}
                {mist.map((mi) => (
                  <div className='ml-[90px]'>
                    <button className='bg-[#fc17c6] text-[#faf9f9] font-bold w-[40px] absolute h-[40px]'>{mi.discount}</button>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[560px]' /></Link>
                    <img src= {mi.img} className=' h-[600px] w-[650px]'/>
                    <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[150px]'> {mi.category}</p>
                    <h1 className='hover:text-[#9ca887] text-4xl font-medium ml-[150px]' >{mi.title}</h1>
                    <button className=' bg-lime-300 w-[120px] hover:text-[#9ca887]  ml-[150px] mt-[10px]'>{mi.button}</button>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] ml-[150px]'>{mi.price}</h1>
                  </div>
                ))}
              </div>
              <div className='flex mt-[100px] w-[1400px]'>
                {pial.map((p) => (
                  <div key={p.id} className=''>
                    <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                    <button className='bg-[#dd28ce] text-[#ffffff] font-bold w-[40px] absolute h-[40px]'>{p.discount}</button>
                    <img src={p.img} className='w-[300px] h-[300px]' />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}> {p.category}</h3>
                    <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{p.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] mt-[10px] ml-[240px]'>{p.price}</h1>
                  </div>
                ))}
                {maska.map((mas) => (
                  <div key={mas.id} className='ml-[60px] w-[300px]'>
                    <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                    <button className='bg-[#eb23da] text-[#ffffff] font-bold w-[40px] absolute h-[40px]'>{mas.discount}</button>
                    <img src={imageHovered === 'night' ? mas.imgAlt : mas.img} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('night')} onMouseLeave={handleMouseLeave} />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}> {mas.category}</h3>
                    <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{mas.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl ml-[230px]'>{mas.price}</h1>
                  </div>
                ))}
                {bele.map((be) => (
                  <div key={be.id} className='w-[300px] ml-[60px]' onMouseEnter={() => handleMouseEnter('sumka')} onMouseLeave={handleMouseLeave}>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                    <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>{be.discount}</button>
                    <img src={imageHovered === 'sumka' ? be.imgAlt : be.img} className='w-[300px] h-[300px]' />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{be.category}</h3>
                    <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{be.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{be.price}</h1>
                  </div>
                ))}
                {music.map((mu) => (
                  <div key={mu.id} className='ml-[60px] w-[300px]'>
                    <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                    <button className='bg-[#ee2bb3] w-[40px] h-[40px] text-[white] font-bold absolute'>{mu.discount}</button>
                    <img src={imageHovered === 'шампунь' ? mu.imgAlt : mu.img} className='w-[300px] h-[300px] ' onMouseEnter={() => handleMouseEnter('шампунь')} onMouseLeave={handleMouseLeave} />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'ltr', textAlign: 'left' }}>{mu.category}</h3>
                    <h1 className='hover:text-[#9ca887] text-2xl font-medium ' style={{ direction: 'ltr', textAlign: 'left' }}>{mu.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl  mt-[10px]'>{mu.price}</h1>
                  </div>
                ))}
              </div>
              <div className='flex mt-[100px] '>
                {balzam.map((bal) => (
                  <div key={bal.id} className='w-[300px]'>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                    <button className='bg-[#49f20b] text-[black] font-bold w-[40px] absolute h-[40px]'>{bal.discount}</button>
                    <img src={imageHovered === 'bee' ? bal.imgAlt : bal.img} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('bee')} onMouseLeave={handleMouseLeave} />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{bal.category}</h3>
                    <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{bal.title}</h1>
                    <button className=' bg-lime-300 w-[120px] hover:text-[#9ca887]  ml-[180px] mt-[10px]'>{bal.button}</button>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[210px] mt-[10px]'>{bal.price}</h1>
                  </div>
                ))}
                {vitam.map((sam) => (
                  <div key={sam.id} className='w-[300px] ml-[60px]'>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                    <button className='bg-[#e5d94f] text-[#000000] font-bold w-[40px] absolute h-[40px]'>{sam.discount}</button>
                    <img src={imageHovered === 'termo' ? sam.imgAlt : sam.img} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('termo')}
                      onMouseLeave={handleMouseLeave} />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{sam.category}</h3>
                    <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{sam.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[210px] mt-[10px]'>{sam.price}</h1>
                  </div>
                ))}
                {shamp.map((sam) => (
                  <div key={sam.id} className='ml-[90px] '>
                    <p className='hover:text-[#9ca887] absolute font-mono mt-[40px] ml-[400px]'>{sam.category}</p>
                    <h1 className='hover:text-[#9ca887] absolute text-4xl mt-[70px]  w-[250px] font-medium ml-[400px]' >{sam.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl absolute mt-[330px] ml-[400px]'>{sam.price}</h1>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[460px] mt-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[460px] mt-[380px]' /></Link>
                    <img src={imageHovered === 'kor' ? sam.imgAlt : sam.img} className='h-[420px] w-[500px]' onMouseEnter={() => handleMouseEnter('kor')} onMouseLeave={handleMouseLeave}
                    />
                  </div>
                ))}
              </div>
              <div className='flex mt-[100px] '>
                {massaj.map((mes) => (
                  <div key={mes.id} className=''  onMouseEnter={() => handleMouseEnter('fen')} onMouseLeave={handleMouseLeave}>
                    <p className='hover:text-[#9ca887] absolute font-mono mt-[80px] ml-[100px]'>{mes.category}</p>
                    <h1 className='hover:text-[#9ca887] absolute text-4xl w-[250px] mt-[130px]  font-medium ' >{mes.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] absolute text-2xl mt-[310px] '>{mes.price}</h1>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[380px]' /></Link>
                    <img src={imageHovered === 'fen' ? mes.imgAlt : mes.img} className='h-[420px] w-[500px] ml-[150px]' />
                  </div>
                ))}
                {pled.map((pd) => (
                  <div key={pd.id} className='w-[300px] ml-[90px]' onMouseEnter={() => handleMouseEnter('fen')} onMouseLeave={handleMouseLeave}>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] mt-[10px]  ml-[265px] ' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                    <button className='bg-[#e727ce] text-[white] font-bold w-[40px] absolute h-[40px]'>{pd.discount}</button>
                    <img src={imageHovered === 'fen' ? pd.imgAlt : pd.img} className='w-[300px] h-[300px]' />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{pd.category}</h3>
                    <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{pd.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{pd.price}</h1>
                  </div>
                ))}
                {sergi.map((ser) => (
                  <div key={ser.id} className='w-[300px] ml-[60px]' onMouseEnter={() => handleMouseEnter('piala')} onMouseLeave={handleMouseLeave}>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] mt-[10px]  ml-[265px] ' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                    <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>{ser.discount}</button>
                    <img src={imageHovered === 'piala' ? ser.imgAlt : ser.img} className='w-[300px] h-[300px]' />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{ser.category}</h3>
                    <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{ser.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{ser.price}</h1>
                  </div>
                ))}
              </div>

            
          </div>
        </div>
      </section>
    </div>
  )
}
