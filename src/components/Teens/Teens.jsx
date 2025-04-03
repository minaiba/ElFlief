import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { X, ChevronRight} from "lucide-react";
import { LuShoppingCart } from "react-icons/lu";
import bannerImage from "../../assets/syrgak/banner_about_brand.webp";
import kBeautyImage from "../../assets/syrgak/CategoryKB.webp";
import outfitImage from "../../assets/syrgak/CategoryAUT.webp";
import careImage from "../../assets/syrgak/CategoryMY.webp";
import lifestyleImage from "../../assets/syrgak/CategoryLife.webp";
import poto from "../../assets/syrgak/banner_1_L_fullhd.webp";
import poto1 from "../../assets/syrgak/banner_2_L_fullhd.webp";
import vito from '../../assets//syrgak/косметик.webp'
import vito1 from '../../assets//syrgak/помада2.webp'
import vito2 from '../../assets//syrgak/тушь1.webp'
import vito3 from '../../assets//syrgak/подводка2.webp'
import vito4 from '../../assets//syrgak/атыр.webp'
import vito5 from '../../assets//syrgak/кккк.webp'
import vito6 from '../../assets//syrgak/пенка.webp'
import vito7 from '../../assets//syrgak/гель.webp'
import { PiHeartStraightLight } from "react-icons/pi";
import Carusel from "./Carusel";


const cardsData = [
  {
    title: "k-beauty",
    description: "Нанести корейские патчи и включить любимую дораму.",
    image: kBeautyImage,
  },
  {
    title: "для аутфита",
    description: "Одежда и аксессуары, чтобы выделяться из толпы.",
    image: outfitImage,
  },
  {
    title: "мой уход",
    description: "Гринфлаги нашей бьюти-рутины: очищение, увлажнение и SPF.",
    image: careImage,
  },
  {
    title: "лайфстайл",
    description: "В поисках вдохновения заходи сюда. Собрали самое важное.",
    image: lifestyleImage,
  },
];


const products = [
  {
    id: 1,
    discount: "20%",
    image: vito1,
    rating: 4.6,
    reviews: 5,
    title: "STILL all stars lipstick",
    oldPrice: 416,
    newPrice: 329,
    category: "Помада для губ",
    colors: ["#EFA8A0", "#D67C7C"],
  },
  {
    id: 2,
    label: "HIT",
    image: vito2,
    rating: 4.3,
    reviews: 5010,
    title: "RAD all that juice mascara",
    newPrice: 349,
    category: "Тушь для ресниц",
  },
  {
    id: 3,
    discount: "40%",
    // label: "КРАСИВОЕ | -40%",
    image: vito,
    title: "ANDPLUS pouch 18.15 lilac",
    oldPrice: 820,
    newPrice: 492,
    category: "Органайзер",
  },
  {
    id: 4,
    discount: "25%",
    image: vito3,
    rating: 3.7,
    reviews: 100,
    title: "SHU good vibes",
    oldPrice: 722,
    newPrice: 541,
    category: "Стойкая жидкая подводка",
    colors: ["#0000FF", "#FF0000"],
  },
];

const productys = [
  {
    id: 1,
    discount: "32%",
    image: vito4,
    rating: 4.6,
    reviews: 5,
    title: "SIRENATA Spirit of siberia",
    oldPrice: 1190,
    newPrice: 809,
    category: "Парфюмированный мист для тела и волос",
  },
  {
    id: 2,
    label: "NEW",
    image: vito5,
    rating: 4.3,
    reviews: 5010,
    title: "RAD #Hairhacks Clips",
    newPrice: 468,
    category: "Набор заколок-крабиков",
  },
  {
    id: 3,
    label: "NEW",
    // label: "КРАСИВОЕ | -40%",
    image: vito6,
    title: "ART & FACT Green Tea Extract + Panthenol + Aloe Vera Leaf Juice",
    // oldPrice: 1,
    newPrice: 483,
    category: "Пенка для умывания лица",
  },
  {
    id: 4,
    discount: "25%",
    image: vito7,
    rating: 3.7,
    reviews: 100,
    title: "FOR ME by gold apple 06. Vanilla spark",
    // oldPrice: 722,
    newPrice: 679,
    category: "Порфюмированный гель для душа",
  },

];


const Card = ({ title, description, image }) => (
  <div className="w-[1400px] md:w-1/4 p-5 cursor-pointer hover:text-gray-400">
    <img src={image} alt={title} className="w-full h-114 object-cover " />
    <div className="mt-2 ">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className=" text-дп">{description}</p>
    </div>
  </div>
);


const Teens = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  const menuItems = [
    "все товары категории",
    "k-beauty",
    "макияж",
    "мой уход",
    "волосы",
    "парфюмерия",
    "одежда и аксессуары",
    "лайфстайл",
    "подборки",
  ];

  return (
    <div className="pt-10 overflow-x-hidden">
      <Carusel />
      <div className={`fixed inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? "opacity-50 z-40" : "opacity-0 -z-10"
        }`}
        onClick={toggleMenu}
      />


      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold italic">teens</h2>
          <button onClick={toggleMenu}>
            <X size={24} />
          </button>
        </div>
        <nav className="p-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex justify-between w-full py-2 px-2 text-lg hover:bg-gray-100 rounded-md transition-all"
            >
              {item}
              <ChevronRight size={20} />
            </button>
          ))}
        </nav>
      </aside>


      <div className="max-w-[1400px] mx-auto">
        {/* Секция с баннером и текстом */}
        <section className="flex flex-col md:flex-row items-center justify-center py-8 space-x-0 md:space-x-8">
          <img
            src={bannerImage}
            alt="Group of teens"
            className="w-64 h-64 rounded-full md:w-80 md:h-80"
          />
          <div className="max-w-md mt-4 md:mt-0">
            <h1 className="text-4xl font-bold mb-2">o teens</h1>
            <p className="text-lg">
              Найти что-то прикольное, порадовать себя, собрать вишлист. Здесь
              можно всё, ведь эта категория специально для тебя. Ищи любимые
              товары в подборках k-beauty, лайфстайл, уход и других.
            </p>
          </div>
        </section>


        {/* Секция с карточками (обновленный стиль) */}
        <div className="flex flex-wrap justify-center">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>

      {/* <div className="w-[1400px] mt-[40px] m-auto cursor-pointer hover:text-gray-400">
        <img src={poto} alt="" />
        <h1 className="font-bold text-5xl relative left-[380px] top-[-20px]">vanilla vibes</h1>
        <p className="relative left-[380px] top-[-20px]">Она самая популярная девчонка, которая залетает в тренды. Пахнет чем-то цветочным и нежным, <br /> забирает лайки и твоё внимание. Хочешь быть, как она?
        </p>
      </div>


      <div className="w-[1400px] mx-auto grid grid-cols-4 gap-6 p-6 ">
        {products.map((product) => (
          <div key={product.id} className="relative  p-4 bg-white  text-center">
            <Link to='/cart'> <LuShoppingCart size={25} className="absolute right-8 top-45 cursor-pointer hover:scale-110 active:scale-95 " /></Link>
            <Link to='/favorites'><PiHeartStraightLight size={25} className="absolute right-8 top-6 cursor-pointer hover:scale-110 active:scale-95 " /></Link> 



            {product.discount && (
              <span className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-2 py-1"> {product.discount} </span>
            )}
            {product.label && (
              <span className="absolute top-4 right-67 bg-yellow-400 text-black text-xs font-bold px-2 py-1 "> {product.label} </span>
            )}
            <img src={product.image} alt={product.title} className=" object-contain mb-4" />
            <p className="text-gray-500 text-sm">{product.category}</p>
            <h3 className="text-lg font-semibold mt-1">{product.title}</h3>
            {product.rating

              && (
                <p className="text-sm text-gray-600 mt-1">⭐ {product.rating} ({product.reviews}) </p>
              )}
            <div className="mt-2">
              {product.oldPrice && (
                <span className="text-gray-400 line-through mr-2">{product.oldPrice} ₽</span>
              )}
              <span className="text-black font-bold">{product.newPrice} ₽</span>
            </div>
            {product.colors && (
              <div className="flex justify-center gap-2 mt-2">
                {product.colors.map((color, index) => (
                  <span key={index} className="w-4 h-4 rounded-full border" style={{ backgroundColor: color }}></span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>


      <div className="w-[1400px] mt-[40px] m-auto cursor-pointer hover:text-gray-400">
        <img src={poto1} alt="" />
        <h1 className="font-bold text-5xl relative left-[380px] top-[-20px]">clean vibes</h1>
        <p className="relative left-[380px] top-[-20px]">Осторожно, только крутые позиции. Ухаживай красиво, выбирай любимые продукты и открывай новое.</p>
      </div>


      <div className="w-[1400px] mx-auto grid grid-cols-4 gap-6 p-6 ">
        {productys.map((product) => (
          <div key={product.id} className="relative  p-4 bg-white  text-center">

            <Link to="/cart"><LuShoppingCart size={25} className="absolute right-8 top-45 cursor-pointer hover:scale-110 active:scale-95 " /></Link>
            <Link to="/favorites"> <PiHeartStraightLight size={25} className="absolute right-8 top-6 cursor-pointer hover:scale-110 active:scale-95 " /></Link>
            {product.discount && (
              <span className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-2 py-1"> {product.discount} </span>
            )}
            {product.label && (
              <span className="absolute top-4 right-65 bg-green-400 text-black text-xs font-bold px-2 py-1 "> {product.label} </span>
            )}
            <img src={product.image} alt={product.title} className=" object-contain mb-4" />
            <p className="text-gray-500 text-sm">{product.category}</p>
            <h3 className="text-lg font-semibold mt-1">{product.title}</h3>
            {product.rating && (
              <p className="text-sm text-gray-600 mt-1">⭐ {product.rating} ({product.reviews}) </p>
            )}
            <div className="mt-2">
              {product.oldPrice && (
                <span className="text-gray-400 line-through mr-2">{product.oldPrice} ₽</span>
              )}
              <span className="text-black font-bold">{product.newPrice} ₽</span>
            </div>
            {product.colors && (
              <div className="flex justify-center gap-2 mt-2">
                {product.colors.map((color, index) => (
                  <span key={index} className="w-4 h-4 rounded-full border" style={{ backgroundColor: color }}></span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div> */}


     

<div className="w-full max-w-[1400px] mt-[40px] mx-auto cursor-pointer hover:text-gray-400">
  <img src={poto} alt="" />
  <h1 className="font-bold text-4xl md:text-5xl relative md:left-[380px] top-[-20px] text-center md:text-left">
    vanilla vibes
  </h1>
  <p className="relative md:left-[380px] top-[-20px] text-center md:text-left">
    Она самая популярная девчонка, которая залетает в тренды. Пахнет чем-то цветочным и нежным, <br />
    забирает лайки и твоё внимание. Хочешь быть, как она?
  </p>
</div>

<div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
  {products.map((product) => (
    <div key={product.id} className="relative p-4 bg-white text-center">
      <Link to="cart">
        <LuShoppingCart size={25} className="absolute right-8 top-45 cursor-pointer hover:scale-110 active:scale-95 " />
      </Link>
      <Link to="favorites">
        <PiHeartStraightLight size={25} className="absolute right-8 top-6 cursor-pointer hover:scale-110 active:scale-95 " />
      </Link>

      {product.discount && (
        <span className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-2 py-1">
          {product.discount}
        </span>
      )}
      {product.label && (
        <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1">
          {product.label}
        </span>
      )}
      <img src={product.image} alt={product.title} className="object-contain mb-4" />
      <p className="text-gray-500 text-sm">{product.category}</p>
      <h3 className="text-lg font-semibold mt-1">{product.title}</h3>
      {product.rating && (
        <p className="text-sm text-gray-600 mt-1">⭐ {product.rating} ({product.reviews})</p>
      )}
      <div className="mt-2">
        {product.oldPrice && (
          <span className="text-gray-400 line-through mr-2">{product.oldPrice} ₽</span>
        )}
        <span className="text-black font-bold">{product.newPrice} ₽</span>
      </div>
      {product.colors && (
        <div className="flex justify-center gap-2 mt-2">
          {product.colors.map((color, index) => (
            <span key={index} className="w-4 h-4 rounded-full border" style={{ backgroundColor: color }}></span>
          ))}
        </div>
      )}
    </div>
  ))}
</div>

<div className="w-full max-w-[1400px] mt-[40px] mx-auto cursor-pointer hover:text-gray-400">
  <img src={poto1} alt="" />
  <h1 className="font-bold text-4xl md:text-5xl relative md:left-[380px] top-[-20px] text-center md:text-left">
    clean vibes
  </h1>
  <p className="relative md:left-[380px] top-[-20px] text-center md:text-left">
    Осторожно, только крутые позиции. Ухаживай красиво, выбирай любимые продукты и открывай новое.
  </p>
</div>

<div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
  {productys.map((product) => (
    <div key={product.id} className="relative p-4 bg-white text-center">
      <Link to="cart">
        <LuShoppingCart size={25} className="absolute right-8 top-45 cursor-pointer hover:scale-110 active:scale-95 " />
      </Link>
      <Link to="favorites">
        <PiHeartStraightLight size={25} className="absolute right-8 top-6 cursor-pointer hover:scale-110 active:scale-95 " />
      </Link>

      {product.discount && (
        <span className="relative top-4 left-4 bg-pink-500 text-white text-xs font-bold px-2 py-1">
        {product.discount}
      </span>
      )}
      {product.label && (
        <span className="absolute  top-4 right-4 bg-green-400 text-black text-xs font-bold px-2 py-1">
          {product.label}
        </span>
      )}
      <img src={product.image} alt={product.title} className="object-contain mb-4" />
      <p className="text-gray-500 text-sm">{product.category}</p>
      <h3 className="text-lg font-semibold mt-1">{product.title}</h3>
      {product.rating && (
        <p className="text-sm text-gray-600 mt-1">⭐ {product.rating} ({product.reviews})</p>
      )}
      <div className="mt-2">
        {product.oldPrice && (
          <span className="text-gray-400 line-through mr-2">{product.oldPrice} ₽</span>
        )}
        <span className="text-black font-bold">{product.newPrice} ₽</span>
      </div>
      {product.colors && (
        <div className="flex justify-center gap-2 mt-2">
          {product.colors.map((color, index) => (
            <span key={index} className="w-4 h-4 rounded-full border" style={{ backgroundColor: color }}></span>
          ))}
        </div>
      )}
    </div>
  ))}
</div>



    </div>
  );
};

export default Teens;