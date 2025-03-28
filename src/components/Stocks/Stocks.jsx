import { useNavigate } from 'react-router-dom';
import React from "react";
import tovo from '../../assets/syrgak/aksii.webp'
import tovo1 from '../../assets/syrgak/aksii1.webp'
import tovo2 from '../../assets/syrgak/aksii2.webp'
import tovo3 from '../../assets/syrgak/aksii3.webp'
import tovo4 from '../../assets/syrgak/aksii4.webp'
import tovo5 from '../../assets/syrgak/aksii5.webp'
import tovo6 from '../../assets/syrgak/шсщтс.webp'
import tovo7 from '../../assets/syrgak/online.webp'
import { Link } from 'react-router-dom'

const Stocks = () => {  
  const navigate = useNavigate();
  return (
    <div className='w-[1400px] m-auto'>
           <button
        onClick={() => navigate("/ContestApp")}
        className="my-[40px] py-[8px] px-[200px] ml-[400px] border rounded-full bg-black text-white hover:bg-white hover:text-black"
      >
        Перейти к конкурсу
      </button>
          <div className="p-10 flex flex-col items-center justify-center">
          <div className="flex w-[1400px] items-center space-x-2 text-3xl font-bold text-center">
          <h1 className="text-black ml-[750px] text-6xl ">акции</h1>
          <span className="relative top-[15px]">/ 123</span>
          </div>
          <div className="mt-4 w-[1400px] relative top-[20px] flex flex-wrap gap-2 justify-center">
          {["СКИДКА", "ПРОМОКОД", "КЛИЕНТСКИЕ ДНИ", "ПОДАРОК", "3=2", "АНОНС"].map((tag) => (
          <button 
          key={tag} 
          className="cursor-pointer border border-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100">
          {tag}
          </button>
           ))}
          </div>
          </div>

         
          <div className="mt-10 w-[1400px] mx-auto grid grid-cols-2 gap-6 ">
          <Link to="/stocks2">
          <div className="relative p-4 cursor-pointer group">
          <img src={tovo} alt="Clé de Peau Beauté" className="w-full rounded-lg" />
          <div className="absolute top-72 bottom-5 left-65 text-black group-hover:text-gray-400 text-right">
          <p className="text-xl font-medium"> 17 — 22 марта</p>
          <h2 className="text-4xl font-bold">подарок от Moschino</h2>
          <p className="text-x ">миниатюра аромата Toy 2</p>
          <img src={tovo6} className="w-9 absolute top-[-271px] left-80 " />
          </div>
          </div>
         </Link>

                                      
          <div className="relative p-4 cursor-pointer group ">
          <img src={tovo1} alt="Institut Esthederm" className="w-full rounded-lg" />
          <div className="absolute bottom-5 left-15 top-72 text-black group-hover:text-gray-400">
          <p className="text-xl font-medium">20 — 22 марта</p>
          <h2 className="text-4xl font-bold">Isntree −50%</h2>
          <p className="text-x ">20 — 22 марта</p>
          <img src={tovo6} className="w-9 absolute top-[-271px] left-3 " />
          </div>
          </div>
          </div>


          <div className="w-[1400px] relative top-25 m-auto cursor-pointer hover:text-gray-400">
          <img src={tovo2} className="w-[1100px] h-[400px] mx-auto " />
          <h5 className="relative left-[200px] top-[-60px]">20 — 22 марта</h5>
          <h1 className="font-bold text-6xl relative left-[510px] top-[-120px]">Cosworker</h1>
          <p className="relative left-[550px] top-[-115px]">дарим гель для умывания, 120 мл </p>
          <img src={tovo6} className="w-9 relative top-[-495px] left-60 " />
          <img src={tovo7} className="w-9 relative top-[-531px] left-69 " />
          </div>


          <div className=" w-[1400px]  mx-auto grid grid-cols-2 gap-6 ">
          <div className="relative p-4 cursor-pointer group">
          <img src={tovo3}  className="w-full rounded-lg" />
          <div className="absolute top-72 bottom-5 left-65 text-black group-hover:text-gray-400 text-right">
          <p className="text-xl font-medium"> 17 — 22 марта</p>
          <h2 className="text-4xl font-bold">подарок от Moschino</h2>
          <p className="text-x ">миниатюра аромата Toy 2</p>
          <img src={tovo6} className="w-9 absolute top-[-271px] left-71 " />
          <img src={tovo7} className="w-9 absolute top-[-271px] left-80 " />
          </div>
          </div>

 
          <div className="relative p-4 cursor-pointer group ">
          <img src={tovo4} alt="Institut Esthederm" className="w-full rounded-lg" />
<div className="absolute bottom-5 left-15 top-72 text-black group-hover:text-gray-400">
          <p className="text-xl font-medium">20 — 22 марта</p>
          <h2 className="text-4xl font-bold">Isntree −50%</h2>
          <p className="text-x ">20 — 22 марта</p>
          <img src={tovo6} className="w-9 absolute top-[-271px] left-3 " />
          <img src={tovo7} className="w-9 absolute top-[-271px] left-12 " />
          </div>
          </div>
          </div>
          
         
          <div className="w-[1400px] mt-[100px] m-auto cursor-pointer hover:text-gray-400">
          <img src={tovo5} className="w-[1100px] mx-auto " />
          <h5 className="relative left-[200px] top-[-70px]">22 февраля — 22 марта</h5>
          <h1 className="font-bold text-6xl relative left-[550px] top-[-140px]">Denim −25%</h1>
          <p className="relative left-[550px] top-[-125px]">скидка на косметику для мужчин</p>
          <img src={tovo6} className="w-9 relative top-[-636px] left-60 " />
          <img src={tovo7} className="w-9 relative top-[-672px] left-69 " />
          </div>
          


    </div>
  );
};

export default Stocks;