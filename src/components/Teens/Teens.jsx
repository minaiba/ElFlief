// src/pages/Teens.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import togo from "../../assets/syrgak/teens.logo.png";
import Carusel from "./Carusel";

export default function Teens({className}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-[1400px] m-auto">
      <Carusel/>
      {/* Нижняя панель с кнопкой и логотипом */}
      <div className="w-full bg-black py-3 px-4 flex items-center justify-between sticky bottom-0 z-50">
        <button onClick={toggleMenu} className="text-white text-2xl">☰</button>
        <img src={togo} alt="Teens Logo" className='w-[150px]' />
      </div>

      {/* Фон для затемнения */}
      <div className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? "opacity-50 visible z-40" : "opacity-0 invisible -z-10"}`} onClick={toggleMenu} />

      {/* Боковое меню */}
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
}
