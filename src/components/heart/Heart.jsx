import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../ElFlief/FavoritesSlide";
import { IoHeartOutline } from "react-icons/io5";

export default function Heart({product}) {
  const cartItem = useSelector((state) => state.idols.cartItem || []);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  if (cartItem.length === 0) {
    return <p className="w-[1400px] m-auto ml-[600px] text-3xl pt-70 pb-[180px] overflow-x-hidden font-mono">Нет избранных товаров</p>; 
  }
  return (
    <div className="max-w-[1400px] mx-auto py-15 px-4 pt-30">
    <h1 className="flex justify-center py-10 text-2xl font-mono sm:text-3xl md:text-4xl">Избранные товары</h1>
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cartItem.map((product) => (
        <div key={product.id} className="shadow-lg shadow-pink-100 p-4 flex flex-col items-center">
          
          <img src={product.img} className="w-full h-[200px] object-cover mb-4" />
          <h2 className="text-lg font-medium">{product.name}</h2>          
          <div className="flex mt-6">
         <p className="text-xl text-emerald-700">{product.price} ₽</p>
          <button onClick={() => handleRemove(product.id)} className="text-red-500"><IoHeartOutline className="relative ml-21 w-[30px] h-[30px] cursor-pointer hover:text-black" /></button>            
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
 };
 
