import React from 'react'
import { IoClose, IoHeartOutline } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../ElFlief/CartSlice';
import { addCart } from '../../ElFlief/FavoritesSlide';

export default function Siddebar({ product, onClose }) {
  if (!product) return null; 
 const dispatch = useDispatch();

 const handleAddToCart = () => {
     dispatch(addToCart(product));
 };
 const handleAddCart = () => {
     dispatch(addCart(product));
 };
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 right-0 h-full w-[50px] p-6 rounded-l-lg shadow-lg z-50"
    >
      <div className="relative w-full h-full">
        <div
          className="fixed inset-0 bg-black opacity-15"
          onClick={onClose}
          aria-label="Close modal"
        ></div>
        <div className="fixed top-0 right-0 w-[400px] h-full pt-6 px-6 pb-8 overflow-y-auto bg-white">
          <div className="h-full flex flex-col relative space-y-6">
            <button
              className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-800 transition"
              onClick={onClose}
              aria-label="Close modal"
            >
              <IoClose />
            </button>
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-[350px] object-cover rounded-xl shadow-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">{product.name}</h2>
            <div className="mt-2 text-xs text-gray-600">
          <p>{product.description.split('\n').map((line, index) => (
            <span key={index}>{line}<br /></span>
          ))}</p>
        </div>
            <h3 className="text-lg font-semibold text-green-600">Цена: {product.price} ₽</h3>
            <div className="flex gap-[60%] pb-8">
              <Link to="/favorites" onClick={handleAddCart}>
                <IoHeartOutline className="w-[30px] ml-8 h-[30px] cursor-pointer hover:text-red-500 transition" />
              </Link>
              <Link to="/cart" onClick={handleAddToCart}>
                <BsBasket className="w-[30px] h-[30px] cursor-pointer hover:text-green-500 transition" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>


  );
}
