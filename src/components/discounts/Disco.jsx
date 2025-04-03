import React from 'react'
import { IoClose, IoHeartOutline } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function CDisco({ eve, onClose }) {
  if (!eve) return null; 


  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.1 }}
      className="fixed  top-0 right-0 h-full w-[50px] p-6 rounded-l-lg shadow-lg z-50"
    >
      <div className="relative mt-[50px]">
        <div
          className="fixed inset-0 bg-black opacity-80"
          onClick={onClose}
          aria-label="Close modal"
        ></div>
        <div className="fixed top-0 right-0 w-[700px] h-full pt-6 px-6 pb-8 overflow-y-auto bg-white">
          <div className="h-full flex flex-col relative text-center space-y-6">
            <button
              className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-800 transition"
              onClick={onClose}
              aria-label="Close modal"
            >
              <IoClose />
            </button>
            <img src={eve.img} alt={eve.title2} className="w-full object-cover rounded-xl shadow-md"/>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">{eve.title}</h2>
            <div className="text-xs text-gray-600">
          <p>
  {eve.title2 
    ? eve.title2.split('\n').map((line, index) => ( 
        <span key={index}>{line}<br /></span>
      ))
    : "Нет описания"}
</p>

        </div>
            <h3 className="text-lg font-semibold text-green-600">Цена: {eve.price} </h3>
            <div className="flex gap-[400px] pb-8 mt-[20px] ml-[50px]">
              <Link to="favorites">
                <IoHeartOutline className="w-[30px] ml-8 h-[30px] cursor-pointer hover:text-red-500 transition" />
              </Link>
              <Link to="cart">
                <BsBasket className="w-[30px] h-[30px] cursor-pointer hover:text-green-500 transition" />
              </Link>
            </div>
          </div>
         
        </div>
      </div>
    </motion.div>
  );
}
