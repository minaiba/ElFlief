import React from 'react'
    import { IoClose, IoHeartOutline } from "react-icons/io5";
    import { BsBasket } from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function Siddebar({ product, onClose }) {
      if (!product) return null; // Если нет продукта, не рендерим Sidebar
    
      return (
        < div className='w-[1400px] m-auto'>
        {/* Sidebar (боковая панель) */}
        <div className="fixed top-0 right-0 w-[400px] bg-white shadow-lg p-6 transition-transform duration-300">
          <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>
            <IoClose />
          </button>
          <img src={product.img} alt={product.title} className="w-full h-60 object-cover rounded-lg" />
          <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description || "Описание отсутствует."}</p>
          <h3 className="text-xl font-bold mt-4">Цена: {product.price} ₽</h3>
          <div className="flex gap-4 mt-8">
        <Link to='favorites'><IoHeartOutline className="top-12 ml-[20px] w-[40px] h-[20px] cursor-pointer hover:text-red-500" /></Link>
        <Link to='cart'> <BsBasket className=" left-68 w-[40px] h-[20px] ml-[200px] cursor-pointer hover:text-green-500" /></Link>
          </div>
        </div>
  
        {/* Затемнение фона */}
        <div className="fixed inset-0 bg-opacity-50" onClick={onClose}></div>
      </div>
      );
    }
