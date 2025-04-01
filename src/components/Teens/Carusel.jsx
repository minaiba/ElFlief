import React, { useState } from "react";
import stick from "../../assets/syrgak/stick.webp";
import { Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Carusel = () => {
  const navigatem = useNavigate();
  return (
    <div style={{ backgroundImage: `url(${stick})` }} className="py-42 mt-5">
      <div className="w-[1400px]  m-auto flex relative right-80">
        {/* <img src={stick} className="h-[350px] object-cover rounded-lg" /> */}
        <div className=" w-full h-full flex flex-col justify-center items-center z-10">
          <div className=" p-5 rounded-lg">
            <h2 className="text-7xl font-mono">промокод <br /> <span className="pr-13">СТИКЕР</span></h2>
            <div className="flex flex-col gap-2">
              <h3 className=" text-black py-3 font-mono text-2xl text-center">успевай получить стикерпак <br />при заказе от 1 500 рублей</h3>
              <button onClick={() => navigatem("/PromoPage")} className="bg-white text-black py-3 rounded-md shadow-md text-center hover:bg-black hover:text-white">УЗНАТЬ ПОДРОБНЕЕ</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Carusel;
