import React from "react";
import stick from '../../assets/syrgak/stick.webp'
const PromoPage = () => {
  return (
    <div className=" text-black p-10 flex flex-col items-center">
      <div className=" bg-[#f5d1b8]">
        <div className="w-[1400px] ">
          <img src={stick} className="h-[400px] object-cover rounded-lg" />
          <div className="absolute top-0 left-[140px] w-full h-full flex flex-col justify-center items-center text-center z-10">
            <div className="p-5 rounded-lg mb-18">
              <h2 className="text-6xl font-bold">промокод <br /> <span className="pr-13">СТИКЕР</span></h2>
              <div className="flex flex-col gap-2">
                <h3 className=" text-black py-3 text-2xl">успевай получить стикерпак <br />при заказе от 1 500 рублей</h3>
                <button className="bg-white text-black py-3 rounded-md shadow-md text-center hover:bg-black hover:text-white">ПЕРЕЙТИ К ТОВАРАМ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-black">
        <div className="w-[1400px] flex flex-col items-center">
          <div className="w-full mt-10 bg-white p-6 rounded-lg text-left max-w-[1000px]">
            <p className="text-3xl font-medium">Дарим лаймовый стикерпак по промокоду!</p>
            <p className="pt-4 text-2xl">
              Заказывайте товары из категории <span className="text-blue-600">teens</span> от 1500 ₽, вводите промокод
              <strong> СТИКЕР</strong>, а мы вложим в вашу посылку стикерпак от Золотого Яблока. Акция действует до 31 марта!
            </p>
            <h3 className="font-semibold pt-8 text-3xl">Правила применения промокода:</h3>
            <ul className="list-disc pl-5 pt-4 text-2xl space-y-2">
              <li>Промокод действует только для авторизованных пользователей.</li>
              <li>Можно использовать только один раз на покупку из категории teens.</li>
              <li>Действует только в интернет-магазине.</li>
            </ul>
            <p className="pt-4 text-xl text-gray-600">
              Получить дополнительную информацию можно по телефону 8 800 770 70 21, в онлайн-чате
              <span className="text-green-600"> WhatsApp</span> или <span className="text-blue-600">Telegram</span>.
            </p>
          </div>
          <button className="text-white bg-black py-4 px-94 rounded-md shadow-md text-center">ПЕРЕЙТИ К ТОВАРАМ</button>
        </div>
      </div>
    </div>
  );
};

export default PromoPage;