import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { setActiveSlide } from "../../ElFlief/CartSlice";
import { slides } from "./caruselData";
import { Link } from 'react-router-dom';

const Carousel = () => {
    const dispatch = useDispatch();
    const activeSlide = useSelector((state) => state.cart.activeSlide);
    const currentSlide = slides[activeSlide] || slides[0];

    return (
        <div className="pt-[20px] mb-[120px] relative">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                navigation
                autoplay={{ delay: 10000 }}
                effect="fade"
                onSlideChange={(swiper) => dispatch(setActiveSlide(swiper.activeIndex))}
                className="rounded-lg shadow-lg"
            >

                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative w-[1400px] m-auto">
                        {slide.type === "video" ? (
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-[600px] object-cover rounded-lg"
                            >
                                <source src={slide.img} type="video/mp4" />
                            </video>
                        ) : (
                            <img src={slide.img} alt={`Slide ${slide.id}`} className="w-full h-full object-cover rounded-lg" />
                        )}
                    </SwiperSlide>
                ))}


            </Swiper>
            <div className="absolute top-0 left-[140px] w-full h-full flex flex-col justify-center items-center text-center z-10">
                <div className="text-white p-5 rounded-lg max-w-[500px]">
                    <h2 className="text-2xl font-bold mb-3">{currentSlide.title}</h2>
                    <div className="flex flex-col gap-3">
                        <a href={currentSlide.link1} className="bg-black text-white px-4 py-3 rounded-md shadow-md text-center">
                            {currentSlide.btn1Text}
                        </a>
                        <a href={currentSlide.link2} className="bg-white text-black px-4 py-3 rounded-md shadow-md text-center">
                            {currentSlide.btn2Text}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;