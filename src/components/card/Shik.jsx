import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dalba from '../../assets/aiba/dalba.webp'
import dalba1 from '../../assets/aiba/dalba1.webp'
import dalba2 from '../../assets/aiba/dalba2.webp'
import dalba3 from '../../assets/aiba/dalba3.webp'
import dalba4 from '../../assets/aiba/dalba4.webp'
import dalba5 from '../../assets/aiba/dalba5.webp'
import dalba6 from '../../assets/aiba/dalba6.webp'
import { IoHeartOutline } from 'react-icons/io5'
import { BsBasket } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

const products = [
    {
      id: 1,
      image: dalba1,
      name: "D'ALBA white truffle first spray serum",
      description: "мультифункциональная спрей-сыворотка для лица",
      price: "1850 P",
      oldPrice: "3700 P",
    },
    {
      id: 2,
      image: dalba2,
      name: "D'ALBA white truffle moisturizing serum toner",
      description: "увлажняющий тонер для сияния кожи",
      price: "1850 P",
      oldPrice: "3700 P",
    },
    {
      id: 3,
      image: dalba3,
      name: "D'ALBA truffle double layer revitalizing serum",
      description: "премиум сыворотка для придания энергии и тонуса",
      price: "3050 P",
      oldPrice: "6100 P",
    },
    {
      id: 4,
      image: dalba4,
      name: "D'ALBA white truffle oil capsule cream",
      description: "питательный крем для сияния кожи лица",
      price: "3850 P",
      oldPrice: "7700 P",
    },
    {
      id: 5,
      image: dalba5,
      name: "D'ALBA white truffle return oil cream cleanser",
      description: "масло-пенка для глубоко очищения 2 в 1",
      price: "2650 P",
      oldPrice: "5300 P",
    },
    {
      id: 6,
      image: dalba6,
      name: "D'ALBA extra intensive",
      description: "крем для области вокруг глаз",
      price: "1850 P",
      oldPrice: "3700 P",
    },
  ];

export default function Shik() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerPadding: "70px",
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
    <div className="w-[1400px] m-auto mb-[1200px] relative">
      <div>
    <img src={dalba} className="w-[1400px] absolute" alt="background" />
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
  </div>
  
  )
}
