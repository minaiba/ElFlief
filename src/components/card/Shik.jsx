import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shick from '../../assets/aiba/dalba.webp'
import { IoHeartOutline } from 'react-icons/io5'
import { BsBasket } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import { products } from './data';
import { useDispatch } from "react-redux";
import { addToCart } from "../../ElFlief/CartSlice";
import { addCart } from "../../ElFlief/FavoritesSlide";


export default function Shik({product}) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
      dispatch(addToCart(product));
  };
  const handleAddCart = () => {
      dispatch(addCart(product));
  };
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerPadding: "50px",
    slidesToScroll: 2,
  };  
  
  return (
<div className="mt-[100px] w-full max-w-[1400px] h-auto mb-[25px] mx-auto relative px-4">
  <img src={shick} className="w-full max-w-full h-auto object-cover rounded-2xl" alt="background" />
  <div className="mt-6 w-full absolute bottom-0 left-0 px-4 sm:px-8">
    <Slider
      {...setting}
      className="flex gap-6"
      responsive={[
        { breakpoint: 1024, settings: { slidesToShow: 3 } }, 
        { breakpoint: 768, settings: { slidesToShow: 2 } },  
        { breakpoint: 480, settings: { slidesToShow: 1 } },  
      ]}
    >
      {products.map((product) => (
        <div key={product.id} className="px-2">
          <div className="bg-white p-4 rounded-lg relative shadow-md">
            <img src={product.img} className="w-full h-[220px] sm:h-[200px] object-cover rounded-lg" alt={product.name} />
            <Link to="/favorites" onClick={handleAddCart} className="absolute top-3 left-3">
              <IoHeartOutline className="text-2xl text-gray-600 hover:text-red-500" />
            </Link>
            <Link to="/cart" onClick={handleAddToCart} className="absolute bottom-3 right-3">
              <BsBasket className="text-2xl text-gray-600 hover:text-green-500" />
            </Link>
            <p className="mt-3 text-sm text-gray-600">{product.description}</p>
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
