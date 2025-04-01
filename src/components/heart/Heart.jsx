import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../ElFlief/FavoritesSlide";

export default function Heart() {
  const cartItem = useSelector((state) => state.idols.cartItem || []);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  if (cartItem.length === 0) {
    return <p className="w-[1400px] m-auto ml-[600px] text-3xl py-[180px] font-mono">Нет избранных товаров</p>; 
  }
  return (
    <div className="max-w-[1400px] mx-auto py-15 px-4">
      <h1 className="flex justify-center py-10 text-2xl font-mono sm:text-3xl md:text-4xl">Избранные товары</h1>
      {cartItem.map((item) => (
        <div key={item.id} className="mt-10 w-[1000px] ml-[190px] flex justify-between items-center border border-stone-600">
          <div className="flex">
            <img src={item.img} alt={item.name} className="w-[120px] h-[100px]" />
            <div className="ml-4 mt-10 w-[390px] font-medium">
              <h2>{item.name}</h2>
            </div>
            <div className="ml-7">
            <p className="text-xl mt-10 text-emerald-700">{item.price} ₽</p>              
            </div>
          </div>
          <button onClick={() => handleRemove(item.id)} className="text-red-500 mr-5">Удалить</button>
        </div>
      ))}
    </div>
  );
 };
 
