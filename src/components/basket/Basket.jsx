// import React from 'react'
// import { BsBasket } from 'react-icons/bs';
// import { useDispatch, useSelector } from 'react-redux';

// export default function Basket() {
//   const cartItems = useSelector((state) => state.Cosmo?.cartItem ?? []); 
//   const dispatch = useDispatch();


//   if (cartItems.length === 0) {
//     return <p className="text-center text-lg font-semibold mt-10">Корзина пуста</p>;
//   }

//   return (
//     <div className="w-[1400px] m-auto flex flex-wrap gap-10">
//       {cartItems.map((product) => {
//         const price = product.price * product.quantity;
//         const viewsCount = product.viewsCount * product.quantity;

//         return (
//           <div key={product.id} className="relative w-[320px] bg-white p-4 rounded-lg shadow-md">
//             <Link to='/favorites'>
//               <IoHeartOutline className="absolute top-6 left-6 w-[20px] h-[20px] cursor-pointer hover:text-red-500" />
//             </Link>
//             <BsBasket
//               onClick={() => dispatch(addCart(product))}
//               className="absolute right-6 top-6 w-[20px] h-[20px] cursor-pointer hover:text-green-500"
//             />
//             <img src={product.imageUrl} alt={product.title} className="w-full h-[200px] rounded-lg" />
//             <h3 className="hover:text-[#9ca887] font-mono mt-4 text-right">{product.title}</h3>
//             <h1 className="hover:text-[#9ca887] font-medium text-2xl text-right">{product.name}</h1>
//             <div className="flex justify-end text-2xl mt-2">
//               <h1 className="font-bold hover:text-[#9ca887]">от {price} ₽</h1>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <button
//                 onClick={() => dispatch(decrement({ id: product.id }))}
//                 className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
//               >
//                 -
//               </button>
//               <input
//                 type="text"
//                 className="w-10 text-center border border-gray-300 rounded-lg"
//                 value={product.quantity}
//                 readOnly
//               />
//               <button
//                 onClick={() => dispatch(increment({ id: product.id }))}
//                 className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
//               >
//                 +
//               </button>
//             </div>
//             <h6 className="text-center mt-2 text-sm text-gray-500">Просмотры: {viewsCount}</h6>
//           </div>
//         );
//       })}
//             {selectedProduct && <Siddebar product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
//     </div>
//   );
// }
import React from 'react'

export default function Basket() {
  return (
    <div>
      
    </div>
  )
}
