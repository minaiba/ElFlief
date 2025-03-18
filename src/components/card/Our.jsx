import React, { useState } from 'react'
import image1 from '../../assets/aiba/fullhd.webp'
import image2 from '../../assets/aiba/fullhd2.webp'
import image3 from '../../assets/aiba/fullhd3.webp'
import image4 from '../../assets/aiba/fullhd4.webp'
import image5 from '../../assets/aiba/fullhd5.webp'
import image6 from '../../assets/aiba/fullhd6.webp'
import image7 from '../../assets/aiba/fullhd7.webp'
import image8 from '../../assets/aiba/fullhd8.webp'
import image9 from '../../assets/aiba/fullhd9.webp'
import image10 from '../../assets/aiba/fullhd10.webp'
import image19 from '../../assets/aiba/19.webp'
import image16 from '../../assets/aiba/13.webp'
import image14 from '../../assets/aiba/14.webp'
import image15 from '../../assets/aiba/15.webp'
import image17 from '../../assets/aiba/16.webp'
import image18 from '../../assets/aiba/6.webp'
import image22 from '../../assets/aiba/5.webp'
import image20 from '../../assets/aiba/3.webp'
import image21 from '../../assets/aiba/2.webp'
import par2 from '../../assets/aiba/par1.webp'
import par3 from '../../assets/aiba/par2.webp'
import par4 from '../../assets/aiba/par3.webp'
import par1 from '../../assets/aiba/par4.webp'
import image12 from '../../assets/aiba/fullhd12.webp'

import { IoHeartOutline } from 'react-icons/io5'
import { BsBasket } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Siddebar from './siddebar'

const news = [
    {
        id: 1,
        img: image1,
        title: 'серьги на швензе серебряные' ,
        name: 'Europe Jewellery с обсыпкой и фианитами',
        price: 4500,
    },
    {
        id: 2,
        img: image2,
        title: 'браслет серебряный' ,
        name: 'Ti Sento мини-звенья',
        price: 18.180,
    },
    {
        id: 3,
        img: image3,
        title: 'массажер для лица' ,
        name: 'Impulse Device Hot&Cold',
        price: 12.188,
    },
    {
        id: 4,
        img: image4,
        title: 'кольцо серебряное' ,
        name: 'Mari Cush Mireille голубой топаз',
        price: 7.119,
    },
    {
        id: 5,
        img: image8,
        title: 'фигурка' ,
        name: 'Funko POP! Disney Ultimate Princess Ariel',
        price: 7.119,
    },
    {
        id: 6,
        img: image5,
        title: 'фигурка' ,
        name: 'Funko POP! Disney Lilo & Stitch Stitch with Ukulele',
        price: 2.345,
    },
    {
        id: 7,
        img: image7,
        title: 'фигурка' ,
        name: 'Funko POP! Games Pokemon Pikachu',
        price: 2.193,
    },
    {
        id: 8,
        img: image6,
        title: 'фигурка' ,
        name: 'Funko POP! Harry Potter S2 Albus Dumbledore (Wand)',
        price: 2.345,
    },
    {
        id: 9,
        img: image10,
        title: 'стакан мятый' ,
        name: 'Волшебно ТУТ Ты+Я',
        price: 2.345,
    },
    {
        id: 10,
        img: image9,
        title: 'бокал' ,
        name: 'Pasabahce Аллегра',
        price: 345,
    },
    {
        id: 11,
        img: image19,
        title: 'набор чайных пар' ,
        name: 'Liberty Jones контур',
        price: 1.699,
    },
    {
        id: 12,
        img: image12,
        title: 'банка' ,
        name: 'Pasabahce ВУДИ, с бамбуковой крышкой',
        price: 699,
    },
    {
        id: 13,
        img: image17,
        title: 'сумка' ,
        name: 'CNS — COINED IN STONE SHARON vanilla',
        price: 17.955,
    },
    {
        id: 14,
        img: image14,
        title: 'сумка кросс-боди' ,
        name: 'DKNY ETTA WALLET ON A STR',
        price: 16.599,
    },
    {
        id: 15,
        img: image15,
        title: 'сумка кросс-боди' ,
        name: 'Michael Kors EMPIRE LG CONV XBODY',
        price: 26.999,
    },
    {
        id: 16,
        img: image16,
        title: 'сумка кросс-боди' ,
        name: 'Michael Kors GIGI SM EW MSG',
        price: 36.999,
    },
    {
        id: 17,
        img: image22,
        title: 'кремовые румяна' ,
        name: 'Rosel cosmetics Cream Blush',
        price: 2.249,
    },
    {
        id: 18,
        img: image21,
        title: 'дубайский шоколад' ,
        name: 'Frenchkiss Фисташковая начинка',
        price: 1.499,
    },
    {
        id: 19,
        img: image20,
        title: 'батончик глазированный' ,
        name: 'FitnesShock Brownie hot chocolate',
        price: 174,
    },
    {
        id: 20,
        img: image18,
        title: 'свеча' ,
        name: 'Unification love Тыква, розовая',
        price: 999,
    },
    {
        id: 21,
        img: par2,
        title: 'парфюмерная вода' ,
        name: 'Burberry HER',
        price: 17.225,
    },
    {
        id: 22,
        img: par3,
        title: 'парфюмерная вода' ,
        name: 'Moschino TOY2',
        price: 4.312,
    },
    {
        id: 23,
        img: par4,
        title: 'парфюмерная вода' ,
        name: 'Tom Ford Lost Cherry',
        price: 22.959,
    },
    {
        id: 24,
        img: par1,
        title: 'парфюмерная вода' ,
        name: 'Vilhelm Parfumerie Great Lord',
        price: 28.059,
        description: "Серебряный браслет с мини-звеньями — стиль и изящество в одном аксессуаре.",
    },
]

export default function Our() {
    const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <div className="w-[1440px] m-auto flex flex-wrap gap-10">
    {news.map((product) => (
      <div
        key={product.id}
        className="relative w-[320px] bg-white p-4 rounded-lg cursor-pointer"
        onClick={() => setSelectedProduct(product)} // Открываем Sidebar при клике
      >
        <Link to='favorites'><IoHeartOutline className="absolute top-6 ml-[10px] w-[20px] h-[20px] cursor-pointer hover:text-red-500" /> </Link>
        <Link to='cart'> <BsBasket className="absolute left-68 bottom-[170px] w-[20px] h-[20px] cursor-pointer hover:text-green-500" /></Link>
        <img src={product.img} alt={product.title} className="w-[320px] h-[200px] rounded-lg" />
        <h3 className="hover:text-[#9ca887] font-mono mt-4 text-right">{product.title}</h3>
        <h1 className="hover:text-[#9ca887] font-medium text-2xl text-right">{product.name}</h1>
        <div className="flex justify-end text-2xl mt-2">
          <h1 className="font-bold hover:text-[#9ca887]">от {product.price} ₽</h1>
        </div>
      </div>
    ))}

    {/* Sidebar компонент */}
    {selectedProduct && <Siddebar product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
  </div>
  )
}
