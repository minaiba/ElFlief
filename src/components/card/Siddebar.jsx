import React from 'react'
import { IoClose, IoHeartOutline } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Siddebar({ product, onClose }) {
      if (!product) return null; // Если нет продукта, не рендерим Sidebar
    
      return (
<div className="w-[1400px] m-auto relative">
  <div className="fixed inset-0 bg-opacity-50 pt-[40px]" onClick={onClose}></div>
  <div className="fixed top-0 right-0 w-[400px] pt-[40px] h-screen bg-white shadow-lg p-6 overflow-y-auto">
    {/* Контейнер для содержимого, чтобы всё корректно прокручивалось */}
    <div className="h-full flex flex-col">
      <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>
        <IoClose />
      </button>
      <img src={product.img} alt={product.title} className="w-full h-[250px] object-cover rounded-lg" />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600 mt-2 whitespace-pre-line">
        {product.description}
      </p>
      <h3 className="text-xl font-bold mt-4">Цена: {product.price} ₽</h3>
      <div className="flex gap-4 mt-8 pb-[60px]">
        <Link to="favorites">
          <IoHeartOutline className="w-[40px] ml-[30px] h-[40px] cursor-pointer hover:text-red-500" />
        </Link>
        <Link to="cart">
          <BsBasket className="w-[40px] ml-[190px] h-[40px] cursor-pointer hover:text-green-500" />
        </Link>
      </div>
    </div>
  </div>
</div>

      );
    }
