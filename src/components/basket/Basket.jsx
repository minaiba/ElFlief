import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, removeFromCart } from '../../ElFlief/CartSlice'; 
import { useEffect, useState } from 'react';
import Button from './Button';
// import Button from './Button';

const Basket = () => {
      const [selectedProduct, setSelectedProduct] = useState(null);
  const cartItem = useSelector((state) => state.cart.cartItems || []);
  const dispatch = useDispatch();
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cartItem', JSON.stringify(cart));
  };
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItem'));
    if (storedCart) {
      storedCart.forEach(item => {
        dispatch(increment({ id: item.id, quantity: item.quantity }));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    saveCartToLocalStorage(cartItem);
  }, [cartItem]);

  const handleIncrement = (id) => {
    dispatch(increment({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrement({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  if (!cartItem || cartItem.length === 0) {
    return <p className='w-[1400px] m-auto ml-[60px] flex items-center justify-center text-3xl  py-[280px] font-mono'>Корзина пуста</p>; 
  }

  return (
    <div className="max-w-[1400px] pt-[141px] mx-auto px-4">
      <h1 className="flex justify-center py-10 text-2xl sm:text-3xl md:text-4xl font-mono"> Ваша корзина</h1>
      {cartItem.map((item) => (
        <div key={item.id} className="flex my-10 justify-between items-center border-b py-4">
          <div className="flex">
            <img src={item.img} alt={item.title} className="w-[100px] h-[100px] object-cover" />
            <div className="ml-6 mt-8 font-mono">
              <h2>{item.name}</h2>
              <p>{item.price} ₽</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => handleDecrement(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrement(item.id)}>+</button>
          </div>
          <button onClick={() => handleRemove(item.id)} className="text-red-500">Remove</button>
        </div>
      ))}
      <div className="flex justify-end pb-4">
        <h2 className="text-2xl font-medium my-15">
          Total: {cartItem.reduce((total, item) => total + item.price * item.quantity, 0)} ₽
        </h2>
        <button className=' rounded-2xl py-2 px-2 font-mono text-xl ml-5 text-red-500'  onClick={() => setSelectedProduct(true)}>Оформить заказ</button>  
        {selectedProduct && <Button product={selectedProduct}
          onClose={() => setSelectedProduct(null)} />}                
      </div>
    </div>
  );
};

export default Basket;

