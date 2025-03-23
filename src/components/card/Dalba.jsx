
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoHeartOutline } from 'react-icons/io5'
import { BsBasket } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import { pro } from './data';
import dalba from '../../assets/aiba/shik.webp'

export default function Dalba() {
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
    ],
};
  return (
    <div className="mt-[100px] w-[1400px] h-[700px] mb-[25px]  m-auto relative" >
      <img src={dalba} className="w-full max-w-[1400px] " alt="background" />
      <div className="mt-6 w-[80%] absolute bottom-[0px] left-[10%]" >
        <Slider {...settings} className='flex gap-12'>
          {pro.map((product) => (
            <div key={product.id} className="px-2">
              <div className="bg-white p-4 rounded-lg relative">
                <img src={product.image} className="w-full h-[250px] object-cover rounded-lg" alt={product.name} />
                <Link to="/favorites" className="absolute top-3 left-3">
                  <IoHeartOutline className="text-2xl text-gray-600 hover:text-red-500" />
                </Link>
                <Link to="/cart" className="absolute bottom-3 right-3">
                  <BsBasket className="text-2xl text-gray-600 hover:text-green-500" />
                </Link>
                <p className="mt-4 text-sm text-gray-600">{product.description}</p>
                <h2 className="font-semibold text-lg mt-2">{product.name}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <h2 className="text-xl font-bold">{product.price}</h2>
                  <h2 className="text-gray-500 line-through">{product.oldPrice}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
