import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from '../../assets/gulasyl/carto.webp';
import main from '../../assets/gulasyl/cart.webp';
import mnogo from '../../assets/gulasyl/mnogo.webp';
import mnogo2 from '../../assets/gulasyl/mnogo2.webp';
import с1 from '../../assets/gulasyl/карт1.webp';
import с2 from '../../assets/gulasyl/карт2.webp';
import с3 from '../../assets/gulasyl/карт3.webp';
import с4 from '../../assets/gulasyl/карт4.webp';
import с5 from '../../assets/gulasyl/карт5.webp';
import с6 from '../../assets/gulasyl/карт6.webp';
import с7 from '../../assets/gulasyl/карт7.webp';
import с8 from '../../assets/gulasyl/карт8.webp';
import с9 from '../../assets/gulasyl/карт9.webp';
import с11 from '../../assets/gulasyl/карт11.webp';
import с12 from '../../assets/gulasyl/карт12.webp';
import { Link } from 'react-router-dom';
import { BsBasket } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import ca4 from '../../assets/gulasyl/карта4.webp'
import ca5 from '../../assets/gulasyl/карта5.webp'
import ca6 from '../../assets/gulasyl/карта6.webp'
import ca7 from '../../assets/gulasyl/карта7.webp'
import ka1 from '../../assets/gulasyl/ka2.webp'
import ka2 from '../../assets/gulasyl/ka1.webp'
import ka9 from '../../assets/gulasyl/ka9.webp'
import ka10 from '../../assets/gulasyl/ka10.webp'
import ka11 from '../../assets/gulasyl/green.webp'
import ka12 from '../../assets/gulasyl/green 2.webp'
import ka13 from '../../assets/gulasyl/flow.webp'
import ka14 from '../../assets/gulasyl/flow2.webp'
import ka15 from '../../assets/gulasyl/yel.webp'
import ka16 from '../../assets/gulasyl/yel2.webp'
import ka17 from '../../assets/gulasyl/wor.webp'
import ka18 from '../../assets/gulasyl/wor2.webp'
// import { useState } from "react";
export default function GiftCard() {

  const [imageHovered, setImageHovered] = useState(null);
  const handleMouseEnter = (img) => setImageHovered(img);
  const handleMouseLeave = () => setImageHovered(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ phone: '', message: '', time: '', payment: '', address: '', language: 'ru' });

  const images = [с1, с2, с3, с4, с5, с6, с7, с8, с9, с11, с12];
  const text = "Выберите стиль своей карты • ";

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className=''>

      <div className='' style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',
      }}>
        <div className='w-[1400px] mt-5 m-auto flex'>
          <div>
            <h1 className="w-[100px] absolute ml-[470px] mt-[50px] hover:text-7xl transition-all font-extrabold text-5xl duration-300" style={{ direction: 'rtl', textAlign: 'right' }}>
              Электронная карта
            </h1>
            <img src={main} className='w-[400px] h-[250px] rounded-2xl mt-[200px] ml-[200px] bg-pink-200 transition-transform duration-400 hover:translate-y-[-20px]' />
          </div>
          <div className='ml-[250px]'>
            <h1 className='absolute hover:text-7xl  text-5xl mt-[50px] transition-all font-extrabold duration-300 w-[100px]'>Пластиковая карта</h1>
            <div className="flex gap-4 mt-[200px]">
              <img src={mnogo} className="w-[250px] h-[180px] bg-pink-200 rounded-2xl transform  rotate-[-5deg] mt-[70px] transition-transform duration-300 hover:translate-y-[-10px]" />
              <img src={mnogo2} className="w-[250px] h-[180px] bg-pink-200 rounded-2xl transform rotate-[35deg] ml-[-80px] mt-[-50px] transition-transform duration-300 hover:translate-y-[-10px]" />
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className=''>
          <h1 className="text-4xl font-bold uppercase mt-[30px] text-gray-800 text-center mb-12">Выбери дизайн карты</h1>
          <div className="flex w-full h-[1300px] m-auto">
            <div className="flex-1 bg-center bg-cover transition-all duration-500  bg-amber-700 hover:flex-[7]" style={{ backgroundImage: `url(${с1})` }}></div>
            <div className="flex-1 bg-center bg-cover transition-all duration-500 hover:flex-[7] bg-fuchsia-300" style={{ backgroundImage: `url(${с2})` }}></div>
            <div className="flex-1 bg-center bg-cover transition-all duration-500 hover:flex-[7] bg-purple-400" style={{ backgroundImage: `url(${с3})` }}></div>
            <div className="flex-1 bg-center bg-cover transition-all duration-500 hover:flex-[7] bg-cyan-100" style={{ backgroundImage: `url(${с4})` }}></div>
            <div className="flex-1 bg-center bg-cover transition-all duration-500 hover:flex-[7] bg-lime-200" style={{ backgroundImage: `url(${с5})` }}></div>
            <div className="flex-1 bg-center bg-cover transition-all duration-500 hover:flex-[7] bg-sky-100" style={{ backgroundImage: `url(${с6})` }}></div>
            <div className="flex-1 bg-center bg-cover transition-all duration-500 hover:flex-[7] bg-cyan-300" style={{ backgroundImage: `url(${с7})` }}></div>
            <div className="flex-1 bg-center bg-cover transition-all duration-500 hover:flex-[7] bg-fuchsia-300" style={{ backgroundImage: `url(${с8})` }}></div>
            <div className="flex-1 bg-center bg-cover transition-all duration-500 hover:flex-[7] bg-green-200" style={{ backgroundImage: `url(${с9})` }}></div>
            {/* <div className="flex-1 bg-center bg-cover transition-all duration-500 hover:flex-[7] bg-red-500" style={{ backgroundImage: `url(${с10})` }}></div> */}
            <div className="flex-1 bg-center bg-cover transition-all duration-500 hover:flex-[7] bg-pink-400" style={{ backgroundImage: `url(${с11})` }}></div>
            <div className="flex-1 bg-center bg-cover transition-all duration-500 hover:flex-[7] bg-red-400" style={{ backgroundImage: `url(${с12})` }}></div>
          </div>
          <button className=' bg-gray-700 ml-[700px] text-white px-6 py-2 mt-5 mx-auto block text-lg rounded-lg hover:bg-gray-500' onClick={() => setModalOpen(true)}>Купить</button>



        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg">
            <h2 className="text-xl font-bold mb-4">Оформление заказа</h2>
            <input type="text" name="phone" placeholder="Номер телефона" value={formData.phone} onChange={handleInputChange} className="border p-2 mb-2 w-full outline-none" />
            <input type="text" name="message" placeholder="Поздравление" value={formData.message} onChange={handleInputChange} className="border p-2 mb-2 w-full outline-none" />
            <input type="datetime-local" name="time" value={formData.time} onChange={handleInputChange} className="border p-2 mb-2 w-full outline-none" />
            <input type="text" name="payment" placeholder="Способ оплаты" value={formData.payment} onChange={handleInputChange} className="border p-2 mb-2 w-full outline-none" />
            <input type="text" name="address" placeholder="Адрес" value={formData.address} onChange={handleInputChange} className="border p-2 mb-2 w-full outline-none" />
            <div className="flex justify-between">
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => alert('Заказ оформлен!')}>Отправить</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setModalOpen(false)}>Закрыть</button>
            </div>
          </div>
        </div>
      )}

      <section>
        <div className='w-[1400px] m-auto'>
          <h1 className="text-4xl font-bold uppercase mt-[30px] text-gray-800 text-center mb-12">
            пластиковые подарочные карты</h1>


          <div className='flex mt-[100px]'>
            <div className=''>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <img src={imageHovered === 'night' ? ca4 : ka10} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('night')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>
                пластиковая подарочная карта</h3>
              <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>GOLD APPLE gift card</h1>

              <h1 className='font-bold hover:text-[#9ca887] mt-[10px] ml-[230px]'>10 000 ₽</h1>
            </div>


            <div className='ml-[60px] w-[300px]'>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <img src={imageHovered === 'nigt' ? ka1 : ka2} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('nigt')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>
                пластиковая подарочная карта</h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>GOLD APPLE gift card</h1>
              <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl ml-[200px]'>3 000 ₽</h1>
            </div>



            <div className='ml-[90px] w-[300px]'>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute  ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <img src={imageHovered === 'nigh' ? ca6 : ca5} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('nigh')}
                onMouseLeave={handleMouseLeave}
              />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>пластиковая подарочная карта
              </h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
                GOLD APPLE gift card
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>5 000 ₽</h1>
            </div>


            <div className='w-[300px] ml-[60px]' onMouseEnter={() => handleMouseEnter('sumka')} onMouseLeave={handleMouseLeave}>
              <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
              <img
                src={imageHovered === 'sumka' ? ca7 : ka9}
                className='w-[300px] h-[300px]'
              />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>

                пластиковая подарочная карта
              </h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
                GOLD APPLE gift card
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>2 000 ₽</h1>
            </div>
          </div>
          <div className='flex mt-[100px]'>
            <div className=''>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <img src={imageHovered === 'nig' ? ka12 : ka11} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('nig')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>
                пластиковая подарочная карта</h3>
              <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>GOLD APPLE gift card</h1>

              <h1 className='font-bold hover:text-[#9ca887] mt-[10px] ml-[240px]'>4 000 ₽</h1>
            </div>


            <div className='ml-[60px] w-[300px]'>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <img src={imageHovered === 'ni' ? ka13 : ka14} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('ni')}
                onMouseLeave={handleMouseLeave} />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>
                пластиковая подарочная карта</h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>GOLD APPLE gift card</h1>
              <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl ml-[200px]'>10 000 ₽</h1>
            </div>



            <div className='ml-[90px] w-[300px]'>
              <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute  ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
              <img src={imageHovered === 'n' ? ka16 : ka15} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('n')}
                onMouseLeave={handleMouseLeave}
              />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>пластиковая подарочная карта
              </h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
                GOLD APPLE gift card
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px]'>5 000 ₽</h1>
            </div>


            <div className='w-[300px] ml-[60px]' onMouseEnter={() => handleMouseEnter('suma')} onMouseLeave={handleMouseLeave}>
              <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
              <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
              <img
                src={imageHovered === 'suma' ? ka18 : ka17}
                className='w-[300px] h-[300px]'
              />
              <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>

                пластиковая подарочная карта
              </h3>
              <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>
                GOLD APPLE gift card
              </h1>
              <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>1 000 ₽</h1>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};