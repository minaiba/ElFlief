import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { setActiveSlide } from "../../ElFlief/CartSlice";
import s2 from '../../assets/aiba/1swiper.png'
import s1 from '../../assets/aiba/2swiper.png'
import s3 from '../../assets/aiba/3swiper.png'
import s4 from '../../assets/aiba/4swiper.png'
import s5 from '../../assets/aiba/5swiper.png'
import s6 from '../../assets/aiba/6swiper.png'
import s7 from '../../assets/aiba/7swiper.png'
import s8 from '../../assets/aiba/8swiper.png'



const slides = [
    { 
        id: 1, img: s1, 
        title: "Супер акция на парфюм!", 
        btn1Text: "Купить со скидкой", link1: "#promo1",
        btn2Text: "Выбрать карту", link2: "#cards1"
    },
    { 
        id: 2, img: s2, 
        title: "Только сегодня! Бонусы за покупку", 
        btn1Text: "Получить бонусы", link1: "#promo2",
        btn2Text: "Клубные карты", link2: "#cards2"
    },
    { 
        id: 3, img: s3, 
        title: "Лучшие предложения для вас", 
        btn1Text: "Перейти к предложениям", link1: "#promo3",
        btn2Text: "Посмотреть карты", link2: "#cards3"
    },
    { 
        id: 4, img: s4, 
        title: "Сезонные скидки до 50%", 
        btn1Text: "Купить со скидкой", link1: "#promo4",
        btn2Text: "Узнать условия", link2: "#cards4"
    },
    { 
        id: 5, img: s5, 
        title: "Дарите радость с нашими картами", 
        btn1Text: "Купить подарок", link1: "#promo5",
        btn2Text: "Подробнее о картах", link2: "#cards5"
    },
    { 
        id: 6, img: s6, 
        title: "Эксклюзивные предложения", 
        btn1Text: "Открыть скидки", link1: "#promo6",
        btn2Text: "Как получить карту?", link2: "#cards6"
    },
    { 
        id: 7, img: s7, 
        title: "Только для вас! Уникальные акции", 
        btn1Text: "Выбрать товар", link1: "#promo7",
        btn2Text: "Подписаться на карту", link2: "#cards7"
    },
    { 
        id: 8, img: s8, 
        title: "Специальные предложения недели", 
        btn1Text: "Посмотреть", link1: "#promo8",
        btn2Text: "Акции и карты", link2: "#cards8"
    },
];
 

const Carousel = () => {
    const dispatch = useDispatch();
    const activeSlide = useSelector((state) => state.cart.activeSlide);
    const currentSlide = slides[activeSlide] || slides[0];


    return (
        <div className="w-[1400px] m-auto mt-[20px] mb-[120px] relative">
        <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            navigation
            autoplay={{ delay: 5000 }}
            effect="fade"
            onSlideChange={(swiper) => dispatch(setActiveSlide(swiper.activeIndex))}
            className="rounded-lg shadow-lg"
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id} className="relative">
                    <img src={slide.img} alt={`Slide ${slide.id}`} className="w-full h-full object-cover rounded-lg" />
                </SwiperSlide>
            ))}
        </Swiper>
    
        {/* Блок с текстом и кнопками */}
        <div className="absolute top-0 left-[140px] w-full h-full flex flex-col justify-center items-center text-center z-10">
            <div className=" text-white p-5 rounded-lg max-w-[500px]">
                <h2 className="text-2xl font-bold mb-3">{currentSlide.title}</h2>
                <div className="flex flex-col gap-3">
                    <a href={currentSlide.link1} className="bg-yellow-400 text-black px-4 py-2 rounded-md shadow-md text-center">
                        {currentSlide.btn1Text}
                    </a>
                    <a href={currentSlide.link2} className="bg-white text-black px-4 py-2 rounded-md shadow-md text-center">
                        {currentSlide.btn2Text}
                    </a>
                </div>
            </div>
        </div>
 
    </div>
    
    );
};





export default Carousel;