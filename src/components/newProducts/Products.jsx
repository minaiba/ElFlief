import React, { useState, useEffect } from 'react';
import img1 from '../../assets/gulasyl/ovinka.png';
import img5 from '../../assets/gulasyl/creme.webp';
import img7 from '../../assets/gulasyl/bag.webp';
import img13 from '../../assets/gulasyl/помад.webp';
import { BsBasket } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { apparat, categories, cr, cre, cream, futbol, koja, mashin, nab, nabor, naushniki, nigh, night, otkr, phen, piala, prai, praim, praimer, rumi, rumia, shamp, svec, termo } from './CardProduct';
// import { useDispatch } from 'react-redux';
// import { addCart } from '../../ElFlief/FavoritesSlide';
// import { addToCart } from '../../ElFlief/CartSlice';
// import Mmodal from './Mmodal'

export default function Products() {
  const [imageHovered, setImageHovered] = useState(null);
  const handleMouseEnter = (img) => setImageHovered(img);
  const handleMouseLeave = () => setImageHovered(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // const [activeImages, setActiveImages] = useState({});
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
    <div className='mt-[20px] mb-20 overflow-x-hidden'>
      <div className="relative">
        <img src={img1} className="w-full h-full object-cover " />
        <h1 className=" font-bold text-[white] absolute top-[62.7%] left-[60%] transform  text-[100px] ">новинки </h1>
      </div>
      <div className='w-[1400px] m-auto'>
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
                className="relative w-[300px] h-[320px] bg-white rounded-lg cursor-pointer"
                onClick={() => setSelectedProduct(dog)}>
                <Link to='/favorites'><IoHeartOutline className={`absolute ml-[265px] hover:text-red-500 mt-[10px] w-[20px] h-[20px] `} /></Link>
                <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[205px] w-[20px] h-[20px] hover:text-green-500' /></Link>
                <button className=' bg-[#ede370] text-[#221d1d] font-bold w-[40px] absolute h-[40px]'>{dog.discount}</button>
                <img src={imageHovered === dog.id ? dog.imgAlt : dog.img} onMouseEnter={() => handleMouseEnter(dog.id)} onMouseLeave={handleMouseLeave} className='w-[360px] h-[240px]' />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'rtl', textAlign: 'right' }}>{dog.category}</h3>
                <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{dog.title}</h1>
                <div className='flex hover:text-[#9ca887] text-2xl gap-3 ml-[120px]'>
                  <h1 className='font-bold hover:text-[#9ca887] text-[grey] mt-[5px]'><del>{dog.oldPrice}</del></h1>
                  <h1 className='font-bold hover:text-[#9ca887] mt-[5px]'>{dog.price}</h1>
                </div>
              </div>
            ))}

            {praim.map((og) => (
              <div key={og.id} className='ml-[60px]  cursor-pointer w-[300px]'>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[205px] w-[20px] hover:text-green-500 h-[20px]' /></Link>
                <button className=' w-[40px] h-[40px] bg-[#ede370] text-[#221d1d] font-bold absolute'>{og.discount}</button>
                <img src={imageHovered === og.id ? og.imgAlt : og.img} className='w-[360px] transition-opacity duration-1000 ease-in-out h-[240px] ' onMouseEnter={() => handleMouseEnter(og.id)} onMouseLeave={handleMouseLeave} />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'rtl', textAlign: 'right' }}>{og.category}</h3>
                <h1 className='hover:text-[#9ca887] text-2xl font-medium ' style={{ direction: 'rtl', textAlign: 'right' }}>{og.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[204px] mt-[5px]'>{og.price}</h1>
              </div>
            ))}
            {prai.map((g) => (
              <div key={g.id} className='ml-[90px] cursor-pointer' onClick={() => setSelectedProduct(g)}>
                <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px] hover:text-red-500 transition' /></Link>
                <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[460px] hover:text-green-500' /></Link>
                <img src={imageHovered === g.id ? g.imgAlt : g.img} className='h-[500px] w-[650px] transition' onMouseEnter={() => handleMouseEnter(g.id)} onMouseLeave={handleMouseLeave} />
                <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[20px]'>{g.category}</p>
                <h1 className='hover:text-[#9ca887] text-4xl font-medium ml-[10px] ' >{g.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[5px] ml-[10px]'>{g.price}</h1>
              </div>
            ))}
          </div>
          <div className='flex'>
            {cream.map((c) => (
              <div key={c.id} className='mt-[-130px] w-[1400px] cursor-pointer' onClick={() => setSelectedProduct(c)} >
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] hover:text-green-500 ml-[605px] mt-[460px]' /></Link>
                <button className=' bg-[#ede370] text-[#221d1d]  font-bold w-[45px] h-[40px] absolute'>{c.discount}</button>
                <img src={img5} className='h-[500px] w-[650px]' />
                <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px]  ml-[20px]'>{c.category}</p>
                <h1 className='hover:text-[#9ca887] text-4xl font-medium  ml-[10px]'>{c.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[10px] mt-[10px]'>{c.price}</h1>
              </div>
            ))}
            {cre.map((cr) => (
              <div key={cr.id} className='ml-[90px] cursor-pointer mt-[90px]' onMouseEnter={() => handleMouseEnter('blush')} onMouseLeave={handleMouseLeave} onClick={() => setSelectedProduct(cr)}>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute  ml-[265px] hover:text-green-500 mt-[205px] w-[20px] h-[20px]' /></Link>
                <button className=' bg-[#ede370] text-[#221d1d] font-bold w-[40px] absolute h-[40px]'>{cr.discount}</button>
                <img src={imageHovered === cr.id ? cr.imgAlt : cr.img} onMouseEnter={() => handleMouseEnter(cr.id)} onMouseLeave={handleMouseLeave} className='w-[360px] h-[240px]' />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'ltr', textAlign: 'left' }}> {cr.category}</h3>
                <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}> {cr.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[5px] '>{cr.price}</h1>
              </div>
            ))}
            {cr.map((cre) => (
              <div key={cre.id} className='ml-[60px] cursor-pointer mt-[90px]' onClick={() => setSelectedProduct(cre)}>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute ml-[265px] hover:text-green-500 mt-[205px] w-[20px] h-[20px]' /></Link>
                <button className='absolute bg-[#ede370] text-[#221d1d] w-[40px] h-[40px] font-bold'>{cre.discount}</button>
                <img src={img7} className='w-[360px] h-[240px] ' />
                <h3 className=' hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'ltr', textAlign: 'left' }}>
                  {cre.category}
                </h3>
                <h1 className=' hover:text-[#9ca887] w-[300px] text-2xl font-medium' style={{ direction: 'ltr', textAlign: 'left' }}>
                  {cre.title}
                </h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[5px] text-2xl'>{cre.price}</h1>
              </div>
            ))}

          </div>
          <div className='flex mt-[100px]'>
            {rumia.map((rum) => (
              <div key={rum.id} className='cursor-pointer' onClick={() => setSelectedProduct(rum)}>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[205px] w-[20px] hover:text-green-500 h-[20px]' /></Link>
                <button className=' bg-[#ede370] text-[#221d1d] font-bold w-[40px] absolute h-[40px]'>{rum.discount}</button>
                <img src={img13} className='w-[300px] h-[240px]' />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'rtl', textAlign: 'right' }}>{rum.category}</h3>
                <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{rum.title}</h1>
                <div className='flex hover:text-[#9ca887] text-2xl gap-3 ml-[116px]'>
                  <h1 className='font-bold hover:text-[#9ca887] text-[grey] mt-[5px]'><del>{rum.price}</del></h1>
                  <h1 className='font-bold hover:text-[#9ca887] mt-[5px]'>{rum.oldPrice}</h1>
                </div>
              </div>
            ))}
            {rumi.map((ru) => (
              <div key={ru.id} className='ml-[60px] cursor-pointer w-[300px]' onClick={() => setSelectedProduct(ru)}>
                <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] hover:text-red-500 mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute hover:text-green-500 ml-[265px] mt-[205px] w-[20px] h-[20px]' /></Link>
                <button className='bg-[#ede370] text-[#221d1d] w-[40px] h-[40px]  font-bold absolute'>{ru.discount}</button>
                <img src={imageHovered === 'парфюм' ? ru.imgAlt : ru.img} className='w-[300px] h-[240px]' onMouseEnter={() => handleMouseEnter('парфюм')} onMouseLeave={handleMouseLeave} />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'rtl', textAlign: 'right' }}>{ru.category}</h3>
                <h1 className='hover:text-[#9ca887] w-[300px] text-2xl font-medium' style={{ direction: 'rtl', textAlign: 'right' }}>{ru.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[5px] ml-[200px]'>{ru.price}</h1>
              </div>
            ))}
            {nabor.map((nab) => (
              <div className='ml-[90px] cursor-pointer' onClick={() => setSelectedProduct(nab)}>
                <button className=' bg-[#ede370] text-[#221d1d] font-bold w-[40px] absolute h-[40px]'>{nab.discount}</button>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] hover:text-green-500 ml-[605px] mt-[505px]' /></Link>
                <img src={imageHovered === 'набор' ? nab.imgAlt : nab.img} className=' h-[550px] w-[650px]' onMouseEnter={() => handleMouseEnter('набор')} onMouseLeave={handleMouseLeave} />
                <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[20px]'> {nab.category}</p>
                <h1 className='hover:text-[#9ca887] text-4xl font-medium ml-[10px]' >{nab.title}</h1>
                <button className=' bg-[#e1dc9e] w-[120px] hover:text-[#9ca887] mb-3 ml-[10px] mt-[12px]'>{nab.button}</button>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[5px] ml-[10px]'>{nab.price}</h1>
              </div>
            ))}
          </div>
          <div className='flex mt-[100px] w-[1400px]'>
            {nab.map((na) => (
              <div key={na.id} className='cursor-pointer' onClick={() => setSelectedProduct(na)}>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute hover:text-green-500 ml-[265px] mt-[205px] w-[20px] h-[20px]' /></Link>
                <button className=' bg-[#ede370] text-[#221d1d] font-bold w-[40px] absolute h-[40px]'>{na.discount}</button>
                <img src={na.img} className='w-[300px] h-[240px]' />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'rtl', textAlign: 'right' }}> {na.category}</h3>
                <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{na.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[5px] ml-[240px]'>{na.price}</h1>
              </div>
            ))}
            {night.map((nig) => (
              <div key={nig.id} className='ml-[60px] w-[300px] cursor-poiter' onClick={() => setSelectedProduct(nig)}>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[205px] w-[20px] hover:text-green-500 h-[20px]' /></Link>
                <button className=' font-bold  bg-[#ede370] text-[#221d1d] w-[40px] absolute h-[40px]'>{nig.discount}</button>
                <img src={imageHovered === 'night' ? nig.imgAlt : nig.img} className='w-[300px] h-[240px]' onMouseEnter={() => handleMouseEnter('night')} onMouseLeave={handleMouseLeave} />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'rtl', textAlign: 'right' }}> {nig.category}</h3>
                <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{nig.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[5px] text-2xl ml-[230px]'>{nig.price}</h1>
              </div>
            ))}
            {nigh.map((nigh) => (
              <div key={nigh} className='w-[300px] cursor-pointer ml-[60px]' onClick={() => setSelectedProduct(nigh)} onMouseEnter={() => handleMouseEnter('sumka')} onMouseLeave={handleMouseLeave}>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[205px] hover:text-green-500 ml-[265px]' /></Link>
                <button className=' bg-[#ede370] text-[#221d1d] font-bold w-[40px] absolute h-[40px]'>{nigh.discount}</button>
                <img src={imageHovered === 'sumka' ? nigh.imgAlt : nigh.img} className='w-[300px] h-[240px]' />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'ltr', textAlign: 'left' }}>{nigh.category}</h3>
                <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{nigh.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[5px] '>21 000 ₽</h1>
              </div>
            ))}
            {shamp.map((sham) => (
              <div key={sham.id} className='ml-[60px] cursor-pointer w-[300px]' onClick={() => setSelectedProduct(sham)}>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute hover:text-green-500 ml-[265px] mt-[205px] w-[20px] h-[20px]' /></Link>
                <button className=' w-[40px] h-[40px] bg-[#ede370] text-[#221d1d] font-bold absolute'>{sham.discount}</button>
                <img src={imageHovered === 'шампунь' ? sham.imgAlt : sham.img} className='w-[300px] h-[240px] ' onMouseEnter={() => handleMouseEnter('шампунь')} onMouseLeave={handleMouseLeave} />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'ltr', textAlign: 'left' }}>{sham.category}</h3>
                <h1 className='hover:text-[#9ca887] text-2xl font-medium ' style={{ direction: 'ltr', textAlign: 'left' }}>{sham.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl  mt-[5px]'>{sham.price}</h1>
              </div>
            ))}
          </div>
          <div className='flex mt-[100px] '>
            {koja.map((koj) => (
              <div key={koj} className='w-[300px] cursor-pointer' onClick={() => setSelectedProduct(koj)}>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute w-[20px] hover:text-green-500 h-[20px] mt-[205px] ml-[265px]' /></Link>
                <button className='bg-[#ede370] text-[#221d1d] font-bold w-[40px] absolute h-[40px]'>{koj.discount}</button>
                <img src={imageHovered === 'bee' ? koj.imgAlt : koj.img} className='w-[360px] h-[240px]' onMouseEnter={() => handleMouseEnter('bee')} onMouseLeave={handleMouseLeave} />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'rtl', textAlign: 'right' }}>{koj.category}</h3>
                <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{koj.title}</h1>
                <button className=' bg-[#ece596] w-[120px] hover:text-[#9ca887]  ml-[180px] mt-[10px]'>{koj.button}</button>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[210px] mt-[5px]'>{koj.price}</h1>
              </div>
            ))}
            {termo.map((ter) => (
              <div key={ter.id} onClick={() => setSelectedProduct(ter)} className='w-[300px] cursor-pointer ml-[60px]'>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[205px] w-[20px] hover:text-green-500 h-[20px]' /></Link>
                <button className=' w-[40px] h-[40px] bg-[#ede370] text-[#221d1d] font-bold absolute'>{ter.discount}</button>
                <img src={imageHovered === ter.id ? ter.imgAlt : ter.img} className='w-[360px] h-[240px]  ' onMouseEnter={() => handleMouseEnter(ter.id)} onMouseLeave={handleMouseLeave} />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'rtl', textAlign: 'right' }}>{ter.category}</h3>
                <h1 className='hover:text-[#9ca887] text-2xl font-medium ' style={{ direction: 'rtl', textAlign: 'right' }}>{ter.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[214px] mt-[5px]'>{ter.price}</h1>
              </div>
            ))}
            {otkr.map((otk) => (
              <div key={otk.id} onClick={() => setSelectedProduct(otk)} className='ml-[90px] cursor-pointer '>
                <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px] hover:text-red-500 transition' /></Link>
                <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[460px] hover:text-green-500' /></Link>
                <img src={imageHovered === 'kor' ? otk.imgAlt : otk.img} className='h-[500px] transition w-[650px]' onMouseEnter={() => handleMouseEnter('kor')} onMouseLeave={handleMouseLeave} />
                <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[20px]'>{otk.category}</p>
                <h1 className='hover:text-[#9ca887] text-4xl font-medium ml-[20px] w-[500px]  ' >{otk.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[5px] ml-[20px]'>{otk.price}</h1>
              </div>
            ))}
          </div>
          <div className='flex mt-[100px]'>
            {svec.map((sve) => (
              <div key={sve.id} className='cursor-pointer' onClick={() => setSelectedProduct(sve)}>
                <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] hover:text-red-500 mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[205px] hover:text-green-500 w-[20px] h-[20px]' /></Link>
                <button className=' bg-[#ede370] text-[#221d1d] font-bold w-[40px] absolute h-[40px]'>{sve.discount}</button>
                <img src={sve.img} className='w-[300px] h-[240px]' />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'rtl', textAlign: 'right' }}>{sve.category}</h3>
                <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{sve.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[5px] ml-[240px]'>{sve.price}</h1>
              </div>
            ))}
            {apparat.map((app) => (
              <div key={app.id} className='ml-[60px] w-[300px] cursor-pointer' onClick={() => setSelectedProduct(app)}>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[205px] hover:text-green-500 w-[20px] h-[20px]' /></Link>
                <button className='bg-[#ede370] text-[#221d1d]  font-bold w-[40px] absolute h-[40px]'>{app.discount}</button>
                <img src={imageHovered === 'b' ? app.imgAlt : app.img} className='w-[300px] h-[240px]' onMouseEnter={() => handleMouseEnter('b')} onMouseLeave={handleMouseLeave} />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'rtl', textAlign: 'right' }}>{app.category}</h3>
                <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{app.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[5px] text-2xl ml-[200px]'>{app.price}</h1>
              </div>
            ))}
            {futbol.map((fut) => (
              <div key={fut.id} className='ml-[90px] cursor-pointer w-[300px]' onClick={() => setSelectedProduct(fut)}>
                <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] hover:text-red-500 h-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute  ml-[265px] mt-[205px] hover:text-green-500 w-[20px] h-[20px]' /></Link>
                <button className=' bg-[#ede370] text-[#221d1d]  font-bold w-[40px] absolute h-[40px]'>{fut.discount}</button>
                <img src={fut.img} className='w-[300px] h-[240px]' />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'ltr', textAlign: 'left' }}>{fut.category}</h3>
                <button className='hover:text-[#9ca887] font-medium text-2xl'>{fut.title}</button>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[5px] '>{fut.price}</h1>
              </div>
            ))}
            {mashin.map((mash) => (
              <div key={mash.id} onClick={() => setSelectedProduct(mash)} className='w-[300px] cursor-pointer ml-[60px]' onMouseEnter={() => handleMouseEnter('d')} onMouseLeave={handleMouseLeave}>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[205px] hover:text-green-500 ml-[265px]' /></Link>
                <button className='bg-[#ede370] text-[#221d1d]  font-bold w-[40px] absolute h-[40px]'>{mash.discount}</button>
                <img src={imageHovered === 'd' ? mash.imgAlt : mash.img} className='w-[300px] h-[240px]' />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'ltr', textAlign: 'left' }}>{mash.category}</h3>
                <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{mash.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[5px] '>{mash.price}</h1>
              </div>
            ))}
          </div>
          <div className='flex mt-[100px] '>
            {naushniki.map((nau) => (
              <div key={nau.id} className='cursor-pointer' onClick={() => setSelectedProduct(nau)}>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] hover:text-green-500 ml-[605px] mt-[460px]' /></Link>
                <img src={nau.img} className='h-[500px] w-[650px]' />
                <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px]  ml-[20px]'>{nau.category}</p>
                <h1 className='hover:text-[#9ca887] text-4xl font-medium  ml-[10px]'>{nau.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[10px] mt-[10px]'>{nau.price}</h1>
              </div>
            ))}
            {phen.map((fen) => (
              <div key={fen.id} onClick={() => setSelectedProduct(fen)} className='w-[300px] ml-[90px] cursor-pointer' onMouseEnter={() => handleMouseEnter('fen')} onMouseLeave={handleMouseLeave}>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute  ml-[265px] hover:text-green-500 mt-[205px] w-[20px] h-[20px]' /></Link>
                <button className=' bg-[#ede370] text-[#221d1d] font-bold w-[40px] absolute h-[40px]'>{fen.discount}</button>
                <img src={imageHovered === fen.id ? fen.imgAlt : fen.img} onMouseEnter={() => handleMouseEnter(fen.id)} onMouseLeave={handleMouseLeave} className='w-[360px] h-[240px]' />
                <h3 className='hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'ltr', textAlign: 'left' }}> {fen.category}</h3>
                <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}> {fen.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[5px] '>{fen.price}</h1>
              </div>
            ))}
            {piala.map((pia) => (
              <div key={pia.id} onClick={() => setSelectedProduct(pia)} className='w-[300px] cursor-pointer ml-[60px]' onMouseEnter={() => handleMouseEnter('piala')} onMouseLeave={handleMouseLeave}>
                <Link to="/favorites"><IoHeartOutline className='absolute hover:text-red-500 ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart"><BsBasket className='absolute ml-[265px] hover:text-green-500 mt-[205px] w-[20px] h-[20px]' /></Link>
                <button className='absolute bg-[#ede370] text-[#221d1d] w-[40px] h-[40px] font-bold'>{pia.discount}</button>
                <img src={imageHovered === pia.id ? pia.imgAlt : pia.img} onMouseEnter={() => handleMouseEnter(pia.id)} onMouseLeave={handleMouseLeave}  className='w-[360px] h-[240px] ' />
                <h3 className=' hover:text-[#9ca887] font-mono mt-[5px]' style={{ direction: 'ltr', textAlign: 'left' }}>
                  {pia.category}
                </h3>
                <h1 className=' hover:text-[#9ca887] w-[300px] text-2xl font-medium' style={{ direction: 'ltr', textAlign: 'left' }}>
                  {pia.title}
                </h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[5px] text-2xl'>{pia.price}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedProduct && <Modal dog={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal g={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal c={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal og={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal cr={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal cre={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal rum={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal ru={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal nab={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal na={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal nig={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal nigh={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal sham={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal koj={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal ter={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal otk={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal sve={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal app={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal fut={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal mash={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal nau={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal fen={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal pia={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {selectedProduct && <Modal pia={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div >
  );
}

