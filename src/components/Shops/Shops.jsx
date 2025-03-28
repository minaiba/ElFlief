import { useState } from "react";
import { Link } from 'react-router-dom'
import { SiTelegram } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa6";
import foto from '../../assets/syrgak/прененская2.webp'
import foto1 from '../../assets/syrgak/ярцевская.19.webp'
import foto2 from '../../assets/syrgak/ленинградское-шоссе.webp'
import foto3 from '../../assets/syrgak/киевское-шоссе.webp'
import foto4 from '../../assets/syrgak/воронеж.webp'
import foto5 from '../../assets/syrgak/казань1.webp'
import foto6 from '../../assets/syrgak/казань2.webp'
import foto7 from '../../assets/syrgak/самара.webp'
import foto8 from '../../assets/syrgak/волгоград.webp'
import foto9 from '../../assets/syrgak/сочи.webp'
import foto10 from '../../assets/syrgak/Екатеринбург.webp'
import foto11 from '../../assets/syrgak/Хабаровск.webp'
import foto12 from '../../assets/syrgak/Пермь1.webp'
import foto13 from '../../assets/syrgak/Пермь2.webp'
import foto14 from '../../assets/syrgak/Уфа.webp'

const carsData = [
  { 
    id: 1,
    mos: "Москва",
    name: "Пресненская наб., 2",
    text: "ТРЦ АФИМОЛЛ СИТИ",
    price: "Пресненская наб., 2",
    period: `ежидневно 10:00 — 22:00.`,
    image: foto,
    category: "Москва"
  },
  { 
    id: 2,
    mos: "Москва", 
    name: "Ленинградское шоссе, 16А стр 4", 
    text: "ТЦ МЕТРОПОЛИС", 
    price: "Ленинградское шоссе, 16А стр 4", 
    period: "ежедневно, 10:00 — 23:00", 
    image: foto2, 
    category: "Москва"
  },
  { 
    id: 3, 
    mos: "Москва", 
    name: "ул. Ярцевская, 19", 
    text: "ТЦ КУНЦЕВО ПЛАЗА", 
    price: "ул. Ярцевская, 19", 
    period: "ежедневно, 10:00 — 22:00", 
    image: foto1, 
    category: "Москва"
  },
  { 
    id: 4, 
    mos: "Москва", 
    name: "23-й км, Киевское шоссе, д. 1", 
    text: "ТЦ САЛАРИС",
    price: "23-й км, Киевское шоссе, д. 1", 
    period: "ежедневно, 10:00 — 22:00", 
    image: foto3, 
    category: "Москва" 
  },
  { 
    id: 5, 
    mos: "Воронеж", 
    name: "ул. Кольцовская, 35", 
    text: "Галерея Чижова",
    price: "ул. Кольцовская, 35", 
    period: "ежедневно, 10:00 — 22:00", 
    image: foto4, 
    category: "Воронеж"
  },
  { 
    id: 6, 
    mos: "Казань", 
    name: "ул. Пушкина, 2", 
    text: "",
    price: "ул. Пушкина, 2", 
    period: "ежедневно, 10:00 — 23:00", 
    image: foto5, 
    category: "Казань"
  },
  { 
    id: 7, 
    mos: "Казань", 
    name: "Павлюхина, 91", 
    text: "ТРЦ KAZANMALL",
    price: "Павлюхина, 91", 
    period: "ежедневно, 10:00 — 22:00", 
    image: foto6, 
    category: "Казань"
  },
  { 
    id: 8, 
    mos: "Самара", 
    name: "ул. Коммунистическая, 90", 
    text: "",
    price: "ул. Коммунистическая, 90", 
    period: "ежедневно, 09:00 — 23:00", 
    image: foto7, 
    category: "Самара"
  },
  { 
    id: 9, 
    mos: "Волгоград", 
    name: "Рабоче-Крестьянская, 9Б", 
    text: "ТЦ ВОРОШИЛОВСКИЙ",
    price: "Рабоче-Крестьянская, 9Б", 
    period: "ежедневно, 09:00 — 23:00", 
    image: foto8, 
    category: "Волгоград"
  },
  { 
    id: 10, 
    mos: "Сочи", 
    name: "Новая Заря, 7", 
    text: "ТРЦ МОРЕМОЛЛ",
    price: "Новая Заря, 7", 
    period: "ежедневно, 10:00 — 22:00", 
    image: foto9, 
    category: "Сочи"
  },
  { 
    id: 11, 
    mos: "Екатеринбург", 
    name: "ул. Вайнера, 9", 
    text: "ТЦ ПАССАЖ",
    price: "ул. Вайнера, 9", 
    period: "ежедневно, 10:00 — 22:00", 
    image: foto10, 
    category: "Екатеринбург"
  },
  { 
    id: 12, 
    mos: "Хабаровск", 
    name: "ул. Пионерская, 2В", 
    text: "ТЦ BROSKO MALL",
    price: "ул. Пионерская, 2В", 
    period: "ежедневно, 10:00 — 22:00", 
    image: foto11, 
    category: "Хабаровск"
  },
  { 
    id: 13, 
    mos: "Пермь", 
    name: "ш. Космонавтов, 162Б", 
    text: "ТРЦ ПЛАНЕТА",
    price: "ш. Космонавтов, 162Б", 
    period: "ежедневно, 10:00 — 22:00", 
    image: foto12, 
    category: "Пермь"
  },
  { 
    id: 14, 
    mos: "Пермь", 
    name: "Петропавловская, 73а", 
    text: "ТРЦ IMALL ЭСПЛАНАДА",
    price: "Петропавловская, 73а", 
    period: "ежедневно, 10:00 — 22:00", 
    image: foto13, 
    category: "Пермь"
  },
  { 
    id: 15, 
    mos: "Уфа", 
    name: "Энтузиастов, 20", 
    text: "ТРЦ Планета",
    price: "Энтузиастов, 20", 
    period: "ежедневно, 10:00 — 22:00", 
    image: foto14, 
    category: "Уфа"
  },
];

const categories = ["Все", "Москва", "Воронеж", "Казань", "Самара", "Волгоград", "Сочи", "Екатеринбург", "Хабаровск", "Пермь", "Уфа"];

export default function Cars() {
  const [selectedCategory, setSelectedCategory] = useState("Москва");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  
  const filteredCars = selectedCategory === "Все"
    ? carsData
    : carsData.filter(car => car.category === selectedCategory);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

 
  return (
    // <div>
    //   <div className="bg-">
    //     <div className="container flex mx-auto w-[1400px] py-20 text-black">
    //       <h1 className="text-5xl mt-[-50px] ml-[160px] font-bold"> Магазины </h1>
    //       <div className="flex relative right-[220px] top-[70px] max-w-full">
    //         <div className="mr-20">
    //           <ul className="sticky top-0 space-y-2">
    //             {categories.map(category => (
    //               <li
    //                 key={category}
    //                 className={`cursor-pointer hover:text-[black] hover:border-[green] p-4 text-center border border-[3px] ${selectedCategory === category ? 'text-[black] border-[green] ' : 'text-[green] border-[chartreuse]'}`}
    //                 onClick={() => setSelectedCategory(category)}>
    //                 {category}
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //         <div className="flex flex-col space-y-6">
    //           {filteredCars.map(car => (
    //             <div key={car.id} className="rounded-xl flex mb-6">
    //               <img 
    //                 src={car.image} 
    //                 className="w-[520px] rounded-lg cursor-pointer" 
    //                 alt={car.name} 
    //                 onClick={() => openModal(car.image)} 
    //               />
    //               <div className="ml-6 flex-col max-w-full">
    //                 <h4 className="text-xl mt-[10px]">{car.mos}</h4>
    //                 <h4 className="text-2xl mb-2 mt-[5px]">{car.name}</h4>
    //                 <p className="text-gray-700 mb-4 mt-[40px]">{car.text}</p>
    //                 <div className="flex justify-between items-center w-full">
    //                   <div>
    //                     <p className="text-xm">{car.price}</p>
    //                     <p className="text-gray-400 text-xl">{car.period}</p>  
    //                     <p className="mt-[25px] font-bold">Контактный телефон:</p>
    //                     <a href="tel:+996220091909" className="flex mt-[5px]">996 220 091 909</a>
    //                     <a href="https://t.me/GoldappleSupportBot" className="flex items-center text-black mt-[5px] hover:text-gray-400"> <SiTelegram /> Telegram </a>                    
    //                     <a href="https://api.whatsapp.com/send?phone=78007707021" className="flex items-center text-black mt-[5px] hover:text-gray-400"><FaWhatsapp /> WhatsApp </a>                         
    //                   </div>         
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {isModalOpen && (
    //     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    //     onClick={closeModal}>
    //       <div className="relative">
    //       <button 
    //           onClick={closeModal} 
    //           className="absolute top-0 right-0 p-2 text-white bg-black rounded-full cursor-pointer"
    //         >
    //           X
    //         </button>
    //         <img src={modalImage} className="max-w-[90%] max-h-[90vh] object-contain" alt="modal" />
    //       </div>
    //     </div>
    //   )}
       
       
    //   <div style={{ backgroundColor: "rgb(220, 255, 0)" }} className="fixed bottom-0 w-full p-2 cursor-pointer">
    //    <h5 className="text-center text-black"> <Link to="/discounts">Скидка -10% на первый заказ по промокоду</Link></h5>
    //   </div>
    // </div>
    <div>
  <div className="bg-">
    <div className="container max-w-[1400px] mx-auto pl-[100px] px-4 py-20 text-black">
      <h1 className="text-5xl mt-[-50px] ml-0 font-bold sm:text-4xl"> Магазины </h1>
      <div className="flex flex-col sm:flex-row sm:space-x-6 sm:space-y-0 space-y-6 sm:mt-0 mt-6 max-w-full">
        <div className="sm:mr-20 w-full sm:w-auto">
          <ul className="sticky top-0 space-y-2">
            {categories.map(category => (
              <li
                key={category}
                className={`cursor-pointer hover:text-black hover:border-green-500 p-4 text-center border-2 ${selectedCategory === category ? 'text-black border-green-500' : 'text-green-500 border-chartreuse'}`}
                onClick={() => setSelectedCategory(category)}>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-6 w-full">
          {filteredCars.map(car => (
            <div key={car.id} className="rounded-xl flex flex-col sm:flex-row mb-6">
              <img 
                src={car.image} 
                className="w-full sm:w-[520px] rounded-lg cursor-pointer" 
                alt={car.name} 
                onClick={() => openModal(car.image)} 
              />
              <div className="ml-0 sm:ml-6 flex-col max-w-full sm:w-[calc(100%-520px)]">
                <h4 className="text-xl mt-2">{car.mos}</h4>
                <h4 className="text-2xl mb-2 mt-2">{car.name}</h4>
                <p className="text-gray-700 mb-4 mt-6">{car.text}</p>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xm">{car.price}</p>
                    <p className="text-gray-400 text-xl">{car.period}</p>  
                    <p className="mt-6 font-bold">Контактный телефон:</p>
                    <a href="tel:+996220091909" className="flex mt-1">996 220 091 909</a>
                    <a href="https://t.me/GoldappleSupportBot" className="flex items-center text-black mt-1 hover:text-gray-400"> <SiTelegram /> Telegram </a>                    
                    <a href="https://api.whatsapp.com/send?phone=78007707021" className="flex items-center text-black mt-1 hover:text-gray-400"><FaWhatsapp /> WhatsApp </a>                         
                  </div>         
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {isModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
      <div className="relative">
        <button 
            onClick={closeModal} 
            className="absolute top-0 right-0 p-2 text-white bg-black rounded-full cursor-pointer"
          >
            X
          </button>
        <img src={modalImage} className="max-w-[90%] max-h-[90vh] object-contain" alt="modal" />
      </div>
    </div>
  )}

  <div style={{ backgroundColor: "rgb(220, 255, 0)" }} className="fixed bottom-0 w-full p-2 cursor-pointer">
    <h5 className="text-center text-black text-sm sm:text-base"> 
      <Link to="/discounts">Скидка -10% на первый заказ по промокоду</Link>
    </h5>
  </div>
</div>

  );
} 
