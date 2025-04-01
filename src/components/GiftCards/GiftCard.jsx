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
import c10 from '../../assets/gulasyl/карт10.webp';
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
import Card from './Card'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../ElFlief/CartSlice';
import { addCart } from '../../ElFlief/FavoritesSlide';
const cart1 = [
  {
    id: '1',
    title: 'GOLD APPLE gift card',
    category: ' пластиковая подарочная карта',
    title2: `артикул: 19000306456

Теперь пластиковую подарочную карту можно заказать в интернет-магазине с удобной доставкой! Просто добавьте её в корзину вместе с другими продуктами, а мы отправим карту в конверте, чтобы вы красиво преподнесли подарок.

у такого сюрприза много плюсов:
— Для оплаты можно списать любую сумму, доступную на карте. Оставшаяся сумма не сгорает, карту можно использовать несколько раз.
— Действует в интернет-магазине и офлайн.
— Проверить баланс и узнать условия использования можно по qr-коду на обратной стороне карты.`,
    price: '15 000 ₽',
    img: ca4,
    imgAlt: ka10
  },
];
const cart2 = [
  {
    id: '2',
    title: 'GOLD APPLE gift card',
    category: ' пластиковая подарочная карта',
    title2: `артикул: 19000306456

Теперь пластиковую подарочную карту можно заказать в интернет-магазине с удобной доставкой! Просто добавьте её в корзину вместе с другими продуктами, а мы отправим карту в конверте, чтобы вы красиво преподнесли подарок.

у такого сюрприза много плюсов:
— Для оплаты можно списать любую сумму, доступную на карте. Оставшаяся сумма не сгорает, карту можно использовать несколько раз.
— Действует в интернет-магазине и офлайн.
— Проверить баланс и узнать условия использования можно по qr-коду на обратной стороне карты.`,
    price: '3 000 ₽',
    img: ka1,
    imgAlt: ka2
  },
];
const cart3 = [
  {
    id: '3',
    title: 'GOLD APPLE gift card',
    category: ' пластиковая подарочная карта',
    title2: `артикул: 19000306456

Теперь пластиковую подарочную карту можно заказать в интернет-магазине с удобной доставкой! Просто добавьте её в корзину вместе с другими продуктами, а мы отправим карту в конверте, чтобы вы красиво преподнесли подарок.

у такого сюрприза много плюсов:
— Для оплаты можно списать любую сумму, доступную на карте. Оставшаяся сумма не сгорает, карту можно использовать несколько раз.
— Действует в интернет-магазине и офлайн.
— Проверить баланс и узнать условия использования можно по qr-коду на обратной стороне карты.`,
    price: '5 000 ₽',
    img: ca6,
    imgAlt: ca5
  },
];
const cart4 = [
  {
    id: '4',
    title: 'GOLD APPLE gift card',
    category: ' пластиковая подарочная карта',
    title2: `артикул: 19000306456

Теперь пластиковую подарочную карту можно заказать в интернет-магазине с удобной доставкой! Просто добавьте её в корзину вместе с другими продуктами, а мы отправим карту в конверте, чтобы вы красиво преподнесли подарок.

у такого сюрприза много плюсов:
— Для оплаты можно списать любую сумму, доступную на карте. Оставшаяся сумма не сгорает, карту можно использовать несколько раз.
— Действует в интернет-магазине и офлайн.
— Проверить баланс и узнать условия использования можно по qr-коду на обратной стороне карты.`,
    price: '4 000 ₽',
    img: ca7,
    imgAlt: ka9
  },
];
const cart5 = [
  {
    id: '5',
    title: 'GOLD APPLE gift card',
    category: ' пластиковая подарочная карта',
    title2: `артикул: 19000306456

Теперь пластиковую подарочную карту можно заказать в интернет-магазине с удобной доставкой! Просто добавьте её в корзину вместе с другими продуктами, а мы отправим карту в конверте, чтобы вы красиво преподнесли подарок.

у такого сюрприза много плюсов:
— Для оплаты можно списать любую сумму, доступную на карте. Оставшаяся сумма не сгорает, карту можно использовать несколько раз.
— Действует в интернет-магазине и офлайн.
— Проверить баланс и узнать условия использования можно по qr-коду на обратной стороне карты.`,
    price: '7 000 ₽',
    img: ka11,
    imgAlt: ka12
  },
];
const cart6 = [
  {
    id: '6',
    title: 'GOLD APPLE gift card',
    category: ' пластиковая подарочная карта',
    title2: `артикул: 19000306456

Теперь пластиковую подарочную карту можно заказать в интернет-магазине с удобной доставкой! Просто добавьте её в корзину вместе с другими продуктами, а мы отправим карту в конверте, чтобы вы красиво преподнесли подарок.

у такого сюрприза много плюсов:
— Для оплаты можно списать любую сумму, доступную на карте. Оставшаяся сумма не сгорает, карту можно использовать несколько раз.
— Действует в интернет-магазине и офлайн.
— Проверить баланс и узнать условия использования можно по qr-коду на обратной стороне карты.`,
    price: '10 000 ₽',
    img: ka13,
    imgAlt: ka14
  },
];
const cart7 = [
  {
    id: '7',
    title: 'GOLD APPLE gift card',
    category: ' пластиковая подарочная карта',
    title2: `артикул: 19000306456

Теперь пластиковую подарочную карту можно заказать в интернет-магазине с удобной доставкой! Просто добавьте её в корзину вместе с другими продуктами, а мы отправим карту в конверте, чтобы вы красиво преподнесли подарок.

у такого сюрприза много плюсов:
— Для оплаты можно списать любую сумму, доступную на карте. Оставшаяся сумма не сгорает, карту можно использовать несколько раз.
— Действует в интернет-магазине и офлайн.
— Проверить баланс и узнать условия использования можно по qr-коду на обратной стороне карты.`,
    price: '5 000 ₽',
    img: ka16,
    imgAlt: ka15
  },
];
const cart8 = [
  {
    id: '8',
    title: 'GOLD APPLE gift card',
    category: ' пластиковая подарочная карта',
    title2: `артикул: 19000306456

Теперь пластиковую подарочную карту можно заказать в интернет-магазине с удобной доставкой! Просто добавьте её в корзину вместе с другими продуктами, а мы отправим карту в конверте, чтобы вы красиво преподнесли подарок.

у такого сюрприза много плюсов:
— Для оплаты можно списать любую сумму, доступную на карте. Оставшаяся сумма не сгорает, карту можно использовать несколько раз.
— Действует в интернет-магазине и офлайн.
— Проверить баланс и узнать условия использования можно по qr-коду на обратной стороне карты.`,
    price: '1 000 ₽',
    img: ka18,
    imgAlt: ka17
  },
];
export default function GiftCard({product}) {
  const [imageHovered, setImageHovered] = useState(null);
  const handleMouseEnter = (img) => setImageHovered(img);
  const handleMouseLeave = () => setImageHovered(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ phone: '', message: '', time: '', payment: '', address: '', language: 'ru' });
  const images = [с1, с2, с3, с4, с5, с6, с7, с8, с9, с11, с12];
  const text = "Выберите стиль своей карты • ";
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const handleAddToCart = () => {
      dispatch(addToCart(product));
  };
  const handleAddCart = () => {
      dispatch(addCart(product));
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
          <div className="flex w-full h-[400px] m-auto">
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
          <button className='bg-gray-700 text-white px-6 py-2 mt-5 mx-auto flex justify-center text-lg rounded-lg hover:bg-gray-500' onClick={() => setModalOpen(true)}>Купить</button>
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
          <h1 className="text-4xl font-bold uppercase mt-[30px] text-gray-800 text-center mb-12"> пластиковые подарочные карты</h1>
          <div className='flex mt-[100px]'>
            {cart1.map((product) => (
              <div className='' onClick={() => setSelectedProduct(product)} key={product.id}>
                <Link to="/favorites" onClick={handleAddCart}><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart" onClick={handleAddToCart}><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                <img src={imageHovered === 'night' ? product.img : product.imgAlt} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('night')} onMouseLeave={handleMouseLeave} />
                <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{product.category}</h3>
                <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{product.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[10px] ml-[230px]'>{product.price}</h1>
              </div>
            ))}
            {cart2.map((product) => (
              <div className='ml-[60px] w-[300px]' onClick={() => setSelectedProduct(product)} key={product.id}>
                <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart" onClick={handleAddToCart}><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                <img src={imageHovered === 'nigt' ? product.img : product.imgAlt} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('nigt')} onMouseLeave={handleMouseLeave} />
                <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{product.category}</h3>
                <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{product.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl ml-[200px]'>{product.price}</h1>
              </div>
            ))}
            {cart3.map((product) => (
              <div className='ml-[90px] w-[300px]' onClick={() => setSelectedProduct(product)} key={product.id}>
                <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart" onClick={handleAddToCart}><BsBasket className='absolute  ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                <img src={imageHovered === 'nigh' ? product.img : product.imgAlt} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('nigh')} onMouseLeave={handleMouseLeave} />
                <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{product.category}</h3>
                <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{product.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{product.price}</h1>
              </div>
            ))}
            {cart4.map((product) => (
              <div className='w-[300px] ml-[60px]' key={product.id} onClick={() => setSelectedProduct(product)} onMouseEnter={() => handleMouseEnter('sumka')} onMouseLeave={handleMouseLeave}>
                <Link to="/favorites" onClick={handleAddCart}><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
                <Link to="/cart" onClick={handleAddToCart}><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                <img src={imageHovered === 'sumka' ? product.img : product.imgAlt} className='w-[300px] h-[300px]' />
                <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{product.category}</h3>
                <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{product.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{product.price}</h1>
              </div>
            ))}
          </div>
          <div className='flex mt-[100px] '>
            {cart5.map((product) => (
              <div className='' key={product.id} onClick={() => setSelectedProduct(product)}>
                <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart" onClick={handleAddToCart}><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                <img src={imageHovered === 'nig' ? product.img : product.imgAlt} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('nig')} onMouseLeave={handleMouseLeave} />
                <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{product.category}</h3>
                <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{product.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[10px] ml-[240px]'>{product.price}</h1>
              </div>
            ))}
            {cart6.map((product) => (
              <div className='ml-[60px] w-[300px]' key={product.id} onClick={() => setSelectedProduct(product)}>
                <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart" onClick={handleAddToCart}><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                <img src={imageHovered === 'ni' ? product.img : product.imgAlt} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('ni')} onMouseLeave={handleMouseLeave} />
                <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{product.category}</h3>
                <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{product.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl ml-[200px]'>{product.price}</h1>
              </div>
            ))}
            {cart7.map((product) => (
              <div className='ml-[90px] w-[300px]' key={product.id} onClick={() => setSelectedProduct(product)}>
                <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                <Link to="/cart" onClick={handleAddToCart}><BsBasket className='absolute  ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                <img src={imageHovered === 'n' ? product.img : product.imgAlt} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('n')} onMouseLeave={handleMouseLeave} />
                <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{product.category}</h3>
                <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{product.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px]'>{product.price}</h1>
              </div>
            ))}
            {cart8.map((product) => (
              <div className='w-[300px] ml-[60px]' key={product.id} onClick={() => setSelectedProduct(product)} onMouseEnter={() => handleMouseEnter('suma')} onMouseLeave={handleMouseLeave}>
                <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
                <Link to="/cart" onClick={handleAddToCart}><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                <img src={imageHovered === 'suma' ? product.img : product.imgAlt} className='w-[300px] h-[300px]' />
                <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{product.category}</h3>
                <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{product.title}</h1>
                <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{product.price}</h1>
              </div>
            ))}
          </div>
        </div>
        {selectedProduct && <Card product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
       
      </section>
    </div>



    // <div className='min-h-screen bg-yellow-50 p-4 sm:p-6 md:p-8 lg:p-12'>
    //   <div className='p-4 sm:p-6 md:p-8 rounded-2xl shadow-md' style={{
    //     backgroundImage: `url(${bg})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     height: '600px',
    //   }}>
    //     <div className='w-full sm:w-[1200px] md:w-[1400px] mt-5 mx-auto flex flex-col md:flex-row'>
    //       <div className="">
    //         <h1 className="absolute ml-[20%] md:ml-[470px] mt-[50px] sm:text-4xl md:text-5xl font-extrabold text-5xl duration-300 text-right hover:text-7xl transition-all">
    //           Электронная карта
    //         </h1>
    //         <img src={main} className='w-[300px] sm:w-[400px] h-[250px] rounded-2xl mt-[200px] mx-auto bg-pink-200 transition-transform duration-400 hover:translate-y-[-20px]' />
    //       </div>
    //       <div className='ml-[20%] md:ml-[250px]'>
    //         <h1 className='absolute hover:text-7xl text-5xl mt-[50px] transition-all font-extrabold duration-300'>
    //           Пластиковая карта
    //         </h1>
    //         <div className="flex gap-4 mt-[200px]">
    //           <img src={mnogo} className="w-[200px] h-[150px] sm:w-[250px] sm:h-[180px] bg-pink-200 rounded-2xl transform rotate-[-5deg] transition-transform duration-300 hover:translate-y-[-10px]" />
    //           <img src={mnogo2} className="w-[200px] h-[150px] sm:w-[250px] sm:h-[180px] bg-pink-200 rounded-2xl transform rotate-[35deg] transition-transform duration-300 hover:translate-y-[-10px]" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
      
    //   <section className='mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    //     <div className='bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-md'>
    //       <h1 className="text-4xl font-bold uppercase mt-[30px] text-gray-800 text-center mb-12">Выбери дизайн карты</h1>
    //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    //         <div className="bg-center bg-cover transition-all duration-500 hover:scale-105" style={{ backgroundImage: `url(${с1})` }}></div>
    //         <div className="bg-center bg-cover transition-all duration-500 hover:scale-105" style={{ backgroundImage: `url(${с2})` }}></div>
    //         <div className="bg-center bg-cover transition-all duration-500 hover:scale-105" style={{ backgroundImage: `url(${с3})` }}></div>
    //         <div className="bg-center bg-cover transition-all duration-500 hover:scale-105" style={{ backgroundImage: `url(${с4})` }}></div>
    //         <div className="bg-center bg-cover transition-all duration-500 hover:scale-105" style={{ backgroundImage: `url(${с5})` }}></div>
    //         <div className="bg-center bg-cover transition-all duration-500 hover:scale-105" style={{ backgroundImage: `url(${с6})` }}></div>
    //         <div className="bg-center bg-cover transition-all duration-500 hover:scale-105" style={{ backgroundImage: `url(${с7})` }}></div>
    //         <div className="bg-center bg-cover transition-all duration-500 hover:scale-105" style={{ backgroundImage: `url(${с8})` }}></div>
    //         <div className="bg-center bg-cover transition-all duration-500 hover:scale-105" style={{ backgroundImage: `url(${с9})` }}></div>
    //         <div className="bg-center bg-cover transition-all duration-500 hover:scale-105" style={{ backgroundImage: `url(${c10})` }}></div>
    //         <div className="bg-center bg-cover transition-all duration-500 hover:scale-105" style={{ backgroundImage: `url(${с11})` }}></div>
    //         <div className="bg-center bg-cover transition-all duration-500 hover:scale-105" style={{ backgroundImage: `url(${с12})` }}></div>
    //       </div>
    //       <button className='bg-gray-700 text-white px-6 py-2 mt-5 mx-auto flex justify-center text-lg rounded-lg hover:bg-gray-500' onClick={() => setModalOpen(true)}>Купить</button>
    //     </div>
    //   </section>

    //   {isModalOpen && (
    //     <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm">
    //       <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[400px] shadow-lg">
    //         <h2 className="text-xl font-bold mb-4">Оформление заказа</h2>
    //         <input type="text" name="phone" placeholder="Номер телефона" value={formData.phone} onChange={handleInputChange} className="border p-2 mb-2 w-full outline-none" />
    //         <input type="text" name="message" placeholder="Поздравление" value={formData.message} onChange={handleInputChange} className="border p-2 mb-2 w-full outline-none" />
    //         <input type="datetime-local" name="time" value={formData.time} onChange={handleInputChange} className="border p-2 mb-2 w-full outline-none" />
    //         <input type="text" name="payment" placeholder="Способ оплаты" value={formData.payment} onChange={handleInputChange} className="border p-2 mb-2 w-full outline-none" />
    //         <input type="text" name="address" placeholder="Адрес" value={formData.address} onChange={handleInputChange} className="border p-2 mb-2 w-full outline-none" />
    //         <div className="flex justify-between">
    //           <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => alert('Заказ оформлен!')}>Отправить</button>
    //           <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setModalOpen(false)}>Закрыть</button>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    //    <section>
    //     <div className='w-[1400px] m-auto'>
    //       <h1 className="text-4xl font-bold uppercase mt-[30px] text-gray-800 text-center mb-12"> пластиковые подарочные карты</h1>
    //       <div className='flex mt-[100px]'>
    //         {cart1.map((c1) => (
    //           <div className='' onClick={() => setSelectedProduct(c1)} key={c1.id}>
    //             <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
    //             <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
    //             <img src={imageHovered === 'night' ? c1.img : c1.imgAlt} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('night')} onMouseLeave={handleMouseLeave} />
    //             <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{c1.category}</h3>
    //             <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{c1.title}</h1>
    //             <h1 className='font-bold hover:text-[#9ca887] mt-[10px] ml-[230px]'>{c1.price}</h1>
    //           </div>
    //         ))}
    //         {cart2.map((c2) => (
    //         <div className='ml-[60px] w-[300px]' onClick={() => setSelectedProduct(c2)} key={c2.id}>
    //           <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
    //           <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
    //           <img src={imageHovered === 'nigt' ? c2.img : c2.imgAlt} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('nigt')} onMouseLeave={handleMouseLeave} />
    //           <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{c2.category}</h3>
    //           <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{c2.title}</h1>
    //           <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl ml-[200px]'>3 000 ₽</h1>
    //         </div>
    //         ))}
    //         {cart3.map((c3)=>(
    //           <div className='ml-[90px] w-[300px]' onClick={() => setSelectedProduct(c3)} key={c3.id}>
    //           <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
    //           <Link to="/cart"><BsBasket className='absolute  ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
    //           <img src={imageHovered === 'nigh' ? c3.img : c3.imgAlt} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('nigh')} onMouseLeave={handleMouseLeave}/>
    //           <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{c3.category}</h3>
    //           <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{c3.title}</h1>
    //           <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{c3.price}</h1>
    //         </div>
    //         ))}
    //         {cart4.map((c4)=>(
    //           <div className='w-[300px] ml-[60px]' key={c4.id} onClick={() => setSelectedProduct(c4)} onMouseEnter={() => handleMouseEnter('sumka')} onMouseLeave={handleMouseLeave}>
    //           <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
    //           <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
    //           <img src={imageHovered === 'sumka' ? c4.img : c4.imgAlt} className='w-[300px] h-[300px]'/>
    //           <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{c4.category}</h3>
    //           <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{c4.title}</h1>
    //           <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{c4.price}</h1>
    //         </div>
    //         ))}
    //       </div>
    //       <div className='flex mt-[100px]'>
    //         {cart5.map((c5)=>(
    //           <div className='' key={c5.id} onClick={() => setSelectedProduct(c5)}>
    //           <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
    //           <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
    //           <img src={imageHovered === 'nig' ? c5.img : c5.imgAlt} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('nig')} onMouseLeave={handleMouseLeave} />
    //           <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{c5.category}</h3>
    //           <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{c5.title}</h1>
    //           <h1 className='font-bold hover:text-[#9ca887] mt-[10px] ml-[240px]'>{c5.price}</h1>
    //         </div>
    //         ))}
    //         {cart6.map((c6)=>(
    //           <div className='ml-[60px] w-[300px]' key={c6.id} onClick={() => setSelectedProduct(c6)}>
    //           <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
    //           <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
    //           <img src={imageHovered === 'ni' ? c6.img : c6.imgAlt} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('ni')} onMouseLeave={handleMouseLeave} />
    //           <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{c6.category}</h3>
    //           <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{c6.title}</h1>
    //           <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl ml-[200px]'>{c6.price}</h1>
    //         </div>
    //         ))}
    //         {cart7.map((c7)=>(
    //           <div className='ml-[90px] w-[300px]' key={c7.id} onClick={() => setSelectedProduct(c7)}>
    //           <Link to="/favorites"><IoHeartOutline  className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
    //           <Link to="/cart"><BsBasket className='absolute  ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
    //           <img src={imageHovered === 'n' ? c7.img : c7.imgAlt} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('n')} onMouseLeave={handleMouseLeave} />
    //           <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{c7.category}</h3>
    //           <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{c7.title}</h1>
    //           <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px]'>{c7.price}</h1>
    //         </div>
    //         ))}
    //         {cart8.map((c8)=>(
    //            <div className='w-[300px] ml-[60px]' key={c8.id} onClick={() => setSelectedProduct(c8)} onMouseEnter={() => handleMouseEnter('suma')} onMouseLeave={handleMouseLeave}>
    //            <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
    //            <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
    //            <img src={imageHovered === 'suma' ? c8.img : c8.imgAlt} className='w-[300px] h-[300px]'/>
    //            <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{c8.category}</h3>
    //            <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{c8.title}</h1>
    //            <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{c8.price}</h1>
    //          </div>
    //         ))}
    //       </div>
    //     </div>
    //     {selectedProduct && <Card c1={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    //     {selectedProduct && <Card c2={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    //     {selectedProduct && <Card c3={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    //     {selectedProduct && <Card c4={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    //     {selectedProduct && <Card c5={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    //     {selectedProduct && <Card c6={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    //     {selectedProduct && <Card c7={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    //     {selectedProduct && <Card c8={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    //   </section>
    // </div>
  );
};