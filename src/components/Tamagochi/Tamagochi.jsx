import React from 'react'
import elf from '../../assets/aiba/elf.png'

export default function Tamagochi() {
  return (
    <div className='bg-[#C6E400] pb-[60px] flex items-center mt-[30px] justify-center '>
        <div className='m-auto w-[1400px] '>
    <div className="text-center">
            <img src={elf} alt="Эльф" className="mx-auto w-[400px]" />
            <div className="bg-white p-6 rounded-[20px] w-[500px] shadow-lg mt-6">
                <p className="text-gray-700 mb-4">
                    Теперь у тебя есть свой Эльф, о котором нужно заботиться! Ухаживай за ним, делай бьюти-рутины, украшай его комнату и покупай стильную одежду. Чем больше ты ухаживаешь за Эльфом, тем быстрее он станет самым крутым в рейтинге среди других игроков!
                </p>
                <button className="bg-[#C6E400] text-white font-bold py-2 px-6 rounded-lg hover:bg-lime-600">
                    ЗАРЕГИСТРИРОВАТЬСЯ
                </button>
            </div>
        </div>            
        </div>
    
    </div>
  );
}



