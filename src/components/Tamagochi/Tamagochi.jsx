import React from 'react'
import {Link} from 'react-router-dom'
import elf from '../../assets/aiba/elf.png'
export default function Tamagochi() {
  return (
<div className="bg-[#C6E400] pb-[60px] flex items-center pt-[30px] justify-center">
    <div className="m-auto w-full max-w-[1400px] px-4">
        <div className="text-center">
            <img src={elf} alt="Эльф" className="m-auto w-[300px] sm:w-[400px]" />
            <div className="bg-white m-auto p-6 rounded-[20px] w-full sm:w-[500px] shadow-lg mt-6">
                <p className="text-gray-700 pb-4 text-sm sm:text-base">
                    Теперь у тебя есть свой Эльф, о котором нужно заботиться! Ухаживай за ним, делай бьюти-рутины, украшай его комнату и покупай стильную одежду. Чем больше ты ухаживаешь за Эльфом, тем быстрее он станет самым крутым в рейтинге среди других игроков!
                </p>
               <Link to='/profile'>
               <button className="bg-[#C6E400] text-white font-bold py-2 px-6 rounded-lg hover:bg-lime-600">
                    ЗАРЕГИСТРИРОВАТЬСЯ
                </button>
               </Link> 
            </div>
        </div>            
    </div>
</div>

  );
}



