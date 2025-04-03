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
import tovo8 from '../../assets/syrgak/Clio.webp'
import tovo9 from '../../assets/syrgak/gazetone.webp'
import tovo10 from '../../assets/syrgak/institut.webp'
import tovo11 from '../../assets/syrgak/lore.webp'
import tovo12 from '../../assets/syrgak/matrix.webp'
import tovo13 from '../../assets/syrgak/neogen.webp'
import tovo15 from '../../assets/syrgak/refa.webp'
import tovo16 from '../../assets/syrgak/stocks.webp'
import { Link } from 'react-router-dom'

const Stocks = () => {  
  const navigate = useNavigate();
  return (
    <div className='w-[1400px] m-auto  overflow-x-hidden'>
          <div className="p-10 flex flex-col items-center justify-center pt-40">
          <div className="flex w-[1400px] items-center space-x-2 text-3xl font-bold text-center">
          <h1 className="text-black ml-[750px] text-6xl ">акции</h1>
          <span className="relative top-[15px]">/ 123</span>
          </div>
          <div className="mt-4 w-[1400px] relative top-[20px] flex flex-wrap gap-2 justify-center">
          {["СКИДКА", "ПРОМОКОД", "КЛИЕНТСКИЕ ДНИ", "ПОДАРОК", "3=2", "АНОНС"].map((tag) => (
          <button 
          key={tag} 
          className="cursor-pointer px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100">
          {tag}
          </button>
           ))}
          </div>
          </div>

         
          <div className="mt-10 w-[1400px] mx-auto grid grid-cols-2 gap-6 ">
          <Link to="/stocks2">
          <div className="relative p-4 cursor-pointer group">
          <img src={tovo} alt="Clé de Peau Beauté" className="w-full rounded-2xl" />
          <div className="absolute top-72 bottom-5 left-65 text-black group-hover:text-gray-400 text-right">
          <p className="text-xl font-medium"> 17 — 22 марта</p>
          <h2 className="text-4xl font-bold">подарок от Moschino</h2>
          <p className="text-x ">миниатюра аромата Toy 2</p>
          <img src={tovo6} className="w-9 absolute top-[-271px] left-80 " />
          </div>
          </div>
         </Link>

                                      
          <div className="relative p-4 cursor-pointer group ">
          <img src={tovo1} alt="Institut Esthederm" className="w-full rounded-2xl" />
          <div className="absolute bottom-5 left-15 top-72 text-black group-hover:text-gray-400">
          <p className="text-xl font-medium">20 — 22 марта</p>
          <h2 className="text-4xl font-bold">Isntree −50%</h2>
          <p className="text-x ">20 — 22 марта</p>
          <img src={tovo6} className="w-9 absolute top-[-271px] left-3 " />
          </div>
          </div>
          </div>


          <div className="w-[1400px] relative top-25 m-auto cursor-pointer hover:text-gray-400">
          <img src={tovo2} className="w-[1100px] h-[400px] mx-auto rounded-2xl" />
          <h5 className="relative text-5xl left-[230px] bottom-[220px] text-white">20 — 22 марта</h5>
          <h1 className="font-bold text-6xl relative left-[860px] bottom-[340px] text-white">Cosworker</h1>
          <p className="relative left-[770px] text-3xl text-white bottom-[255px]">дарим гель для умывания, 120 мл </p>
          <img src={tovo6} className="w-9 relative top-[-495px] left-60 " />
          <img src={tovo7} className="w-9 relative top-[-531px] left-69 " />
          </div>


          <div className="relative top-[-20px] w-[1400px] mx-auto grid grid-cols-2 gap-6 ">
          <div className="relative p-4 cursor-pointer group">
          <img src={tovo12}  className="w-full rounded-2xl" />
          <div className="absolute top-72 bottom-5 left-82 text-black group-hover:text-gray-400 text-right">
          <p className="text-xl font-medium"> 27 — 30 марта</p>
          <h2 className="text-4xl font-bold">Matrix</h2>
          <p className="text-x ">вас ждёт подарок при офлайн-покупке</p>
          <img src={tovo6} className="w-9 absolute top-[-272px] left-54 " />
          <img src={tovo7} className="w-9 absolute top-[-272px] left-63 " />
          </div>
          </div>

 
          <div className="relative p-4 cursor-pointer group ">
          <img src={tovo15} alt="Institut Esthederm" className="w-full rounded-2xl" />
          <div className="absolute bottom-5 left-15 top-72 text-black group-hover:text-gray-400">
          <p className="text-xl font-medium">28 — 30 марта</p>
          <h2 className="text-4xl font-bold">Refa −20%</h2>
          <p className="text-x ">лифтинг-массажёры для лица и тела</p>
          <img src={tovo6} className="w-9 absolute top-[-272px] left-3 " />
          <img src={tovo7} className="w-9 absolute top-[-272px] left-12 " />
          </div>
          </div>
          </div>
          
         
          <div className="w-[1400px] mt-[100px] m-auto cursor-pointer hover:text-gray-400">
          <img src={tovo5} className="w-[1100px] mx-auto rounded-2xl" />
          <h5 className="relative left-[170px] text-2xl top-[-170px]">22 февраля — 22 марта</h5>
          <h1 className="font-bold text-6xl relative left-[730px] bottom-[510px]">Denim −25%</h1>
          <p className="relative left-[480px] top-[-185px] text-4xl">скидка на косметику для мужчин</p>
          <p className="relative left-[840px] top-[-165px] text-6xl">Denim</p>
          <img src={tovo6} className="w-9 relative top-[-636px] left-60 " />
          <img src={tovo7} className="w-9 relative top-[-672px] left-69 " />
          </div>
          
<div className="relative top-[-100px] w-[1400px]  mx-auto grid grid-cols-2 gap-6 ">
          <div className="relative p-4 cursor-pointer group">
          <img src={tovo8}  className="w-full rounded-2xl" />
          <div className='absolute bottom-50 left-10'>
          <h2 className="text-5xl font-medium">Clio</h2>                      
          </div>
          <div className="absolute top-72 bottom-5 left-66 text-black group-hover:text-gray-400 text-right">
          <p className="text-xl font-medium mt-[-100px]"> 27 — 29 марта</p>
          <h2 className="text-4xl font-bold ml-[-200px] mt-[70px]">EXTREME GELPRESSO pencil liner</h2>
          <p className="text-xl">кремовый карандаш для глаз в подарок</p>
          <img src={tovo6} className="w-9 absolute top-[-272px] rounded-2xl left-54 " />
          <img src={tovo7} className="w-9 absolute top-[-272px] rounded-2xl left-63 " />
          </div>
          </div>

 
          <div className="relative p-4 cursor-pointer group ">
          <img src={tovo16} alt="Institut Esthederm" className="w-full rounded-2xl" />
          <div className="absolute bottom-5 left-15 top-72 text-black group-hover:text-gray-400">
          <p className="text-xl font-medium">10 марта — 10 апреля</p>
          <h2 className="text-4xl font-bold">L’Cosmetics до −40%</h2>
          <p className="text-x ">выбирайте увлажняющий уход за кожей</p>
          <img src={tovo6} className="w-9 absolute top-[-272px] left-3 " />
          <img src={tovo7} className="w-9 absolute top-[-272px] left-12 " />
          </div>
          </div>
          </div>
    
          
          <div className="w-[1400px]  m-auto cursor-pointer hover:text-gray-400">
          <img src={tovo11} className="w-[1100px] mx-auto rounded-2xl" />
          <h5 className="relative left-[200px] text-2xl top-[-324px]">22 февраля — 29 марта</h5>
          <h1 className="font-bold text-6xl relative left-[400px] top-[-130px]">L'Oréal Professionnel</h1>
          <p className="relative left-[550px] text-3xl top-[-115px]">вас ждёт подарок при офлайн-покупке</p>
          <img src={tovo6} className="w-9 relative top-[-636px] left-60 " />
          </div>

          <div className=" w-[1400px]  mx-auto grid grid-cols-2 gap-6 ">
          <div className="relative p-4 cursor-pointer group">
          <img src={tovo3}  className="w-full rounded-2xl" />
          <div className="absolute top-72 bottom-5 left-65 text-black group-hover:text-gray-400 text-right">
          <p className="text-xl font-medium"> 17 — 22 марта</p>
          <h2 className="text-4xl font-bold">подарок от Moschino</h2>
          <p className="text-x ">миниатюра аромата Toy 2</p>
          <img src={tovo6} className="w-9 absolute top-[-271px] left-71 " />
          <img src={tovo7} className="w-9 absolute top-[-271px] left-80 " />
          </div>
          </div>

 
          <div className="relative p-4 cursor-pointer group ">
          <img src={tovo4} alt="Institut Esthederm" className="w-full rounded-2xl" />
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
          <img src={tovo10} className="w-[1100px] mx-auto rounded-2xl" />
          <h5 className="relative text-3xl left-[170px] top-[-258px]">12 — 30 марта</h5>
          <h1 className="font-bold text-6xl relative left-[550px] top-[-130px]">Institut Esthederm</h1>
          <p className="relative left-[590px] text-4xl top-[-125px]">скидка −25% на линию Excellage</p>
          <img src={tovo6} className="w-9 relative top-[-636px] left-60 " />
          <img src={tovo7} className="w-9 relative top-[-672px] left-69 " />
          </div>


          <div className="relative top-[-100px] w-[1400px]  mx-auto grid grid-cols-2 gap-6 ">
          <div className="relative p-4 cursor-pointer group">
          <img src={tovo13}  className="w-full rounded-2xl" />

<div className="absolute top-72 bottom-5 left-78 text-black group-hover:text-gray-400 text-right">
          <p className="text-xl font-medium"> 1 — 12 апреля</p>
          <h2 className="text-4xl font-bold">подарок от Matrix</h2>
          <p className="text-x ">вас ждёт подарок при офлайн-покупке</p>
          <img src={tovo6} className="w-9 absolute top-[-272px] left-54 " />
          <img src={tovo7} className="w-9 absolute top-[-272px] left-63 " />
          </div>
          </div>

 
          <div className="relative p-4 cursor-pointer group ">
          <img src={tovo9} alt="Institut Esthederm" className="w-full rounded-2xl" />
          <div className="absolute bottom-5 left-15 top-72 text-black group-hover:text-gray-400">
          <p className="text-xl font-medium">8 — 31 апреля</p>
          <h2 className="text-4xl font-bold">Gezatone до −35%</h2>
          <p className="text-x ">аппараты для красоты и здоровья</p>
          <img src={tovo6} className="w-9 absolute top-[-272px] left-3 " />
          <img src={tovo7} className="w-9 absolute top-[-272px] left-12 " />
          </div>
          </div>
          </div>
          <button
          //  style={{ backgroundImage: `url(${priz})` }}
        onClick={() => navigate("/ContestApp")}
        className="my-[40px] py-[16px] bg-[#C6E400] font-mono px-[400px] ml-[225px] border rounded-[10px] text-white cursor-pointer"
      >
        Перейти к конкурсу
      </button>        

    </div>
  );
};

export default Stocks;