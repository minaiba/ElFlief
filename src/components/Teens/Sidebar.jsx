// src/components/Sidebar.js
import React from "react";
import { X, ChevronRight } from "lucide-react";
import togo from "../../assets/syrgak/teens.logo.png";

const Sidebar = ({ isOpen, toggleMenu }) => (
  <div className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} m-auto transition-transform duration-300`}>
    <div className="flex justify-between items-center p-4 border-b">
              <img src={togo} alt="Teens Logo" className='w-[150px]' />
      <button onClick={toggleMenu}><X size={24} /></button>
    </div>
    <nav className="p-4 space-y-1">
      {["все товары категории", "k-beauty", "макияж", "мой уход", "волосы", "парфюмерия", "одежда и аксессуары", "лайфстайл", "подборки"].map((item, index) => (
        <button key={index} className="flex justify-between w-full py-3 text-left text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200">
          {item}
          <ChevronRight size={20} />
        </button>
      ))}
    </nav>
  </div>
);

export default Sidebar;