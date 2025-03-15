import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shick from '../../assets/aiba/shik.webp'
import shick1 from '../../assets/aiba/shik2.webp'
import shick2 from '../../assets/aiba/shik3.webp'
import shick3 from '../../assets/aiba/shik4.webp'
import shick4 from '../../assets/aiba/shik5.webp'
import shick5 from '../../assets/aiba/shik6.webp'
import shick6 from '../../assets/aiba/shik7.webp'
import { IoHeartOutline } from 'react-icons/io5'
import { BsBasket } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

const products = [
    {
      id: 1,
      image: shick1,
      name: "D'ALBA white truffle first spray serum",
      description: "мультифункциональная спрей-сыворотка для лица",
      price: "1850 P",
      oldPrice: "3700 P",
    },
    {
      id: 2,
      image: shick2,
      name: "D'ALBA white truffle moisturizing serum toner",
      description: "увлажняющий тонер для сияния кожи",
      price: "1850 P",
      oldPrice: "3700 P",
    },
    {
      id: 3,
      image: shick3,
      name: "D'ALBA truffle double layer revitalizing serum",
      description: "премиум сыворотка для придания энергии и тонуса",
      price: "3050 P",
      oldPrice: "6100 P",
    },
    {
      id: 4,
      image: shick4,
      name: "D'ALBA white truffle oil capsule cream",
      description: "питательный крем для сияния кожи лица",
      price: "3850 P",
      oldPrice: "7700 P",
    },
    {
      id: 5,
      image: shick5,
      name: "D'ALBA white truffle return oil cream cleanser",
      description: "масло-пенка для глубоко очищения 2 в 1",
      price: "2650 P",
      oldPrice: "5300 P",
    },
    {
      id: 6,
      image: shick6,
      name: "D'ALBA extra intensive",
      description: "крем для области вокруг глаз",
      price: "1850 P",
      oldPrice: "3700 P",
    },
  ];

export default function Dalba() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
  return (
    <div className="w-[1400px] m-auto relative">
    <img src={shick} className="w-[1400px] h-[700px] absolute" alt="background" />
      <div className="absolute mt-[580px] ml-[70px] w-[1240px]">
        <Slider {...settings} className="flex gap-12">
          {products.map((product) => (
            <div key={product.id} className="w-[340px] bg-white p-4 rounded-lg shadow-md">
              <div className="relative">
                <img src={product.image} className="w-full h-[250px]" alt={product.name} />
                <Link to="/favorites" className="absolute top-2 left-2">
                  <IoHeartOutline className="text-4xl text-gray-600 hover:text-red-500" />
                </Link>
                <Link to="/cart" className="absolute bottom-2 right-2 p-2">
                  <BsBasket className="text-4xl text-gray-600 hover:text-green-500" />
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-600">{product.description}</p>
              <h2 className="font-semibold text-lg mt-4">{product.name}</h2>
              <div className="flex gap-2 mt-3">
                <h2 className="text-xl font-bold">{product.price}</h2>
                <h2 className="text-gray-500 ml-[10px] mt-1 line-through">{product.oldPrice}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  </div>
  )
}
