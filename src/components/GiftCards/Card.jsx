// import React from 'react'
// import { IoClose, IoHeartOutline } from "react-icons/io5";
// import { BsBasket } from "react-icons/bs";
// import { Link } from 'react-router-dom';
// import { motion } from "framer-motion";

// export default function Card({ product, onClose }) {
//   if (!product) return null; 


//   return (

//     <motion.div
//           initial={{ x: "100%" }}
//           animate={{ x: 0 }}
//           exit={{ x: "100%" }}
//           transition={{ duration: 0.1 }}
//           className="fixed top-0 right-0 h-full w-[50px] p-6 rounded-l-lg shadow-lg z-50"
//         >
//           <div className="relative w-full h-full">
//             <div
//               className="fixed inset-0 bg-black opacity-80"
//       initial={{ x: "100%" }}
//       animate={{ x: 0 }}
//       exit={{ x: "100%" }}
//       transition={{ duration: 0.1 }}
//       // className="fixed  top-0 right-0 h-full w-[50px] p-6 rounded-l-lg shadow-lg z-50"
//     >
//       <div className="relative mt-[50px]">
//         <div
//           className="fixed inset-0 bg-black opacity-80"
//           onClick={onClose}
//           aria-label="Close modal"
//         ></div>
//         <div className="fixed top-0 right-0 w-[700px] h-full pt-6 px-6 pb-8 overflow-y-auto bg-white">
//           <div className="h-full flex flex-col relative text-center space-y-6">
//             <button
//               className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-800 transition"
//               onClick={onClose}
//               aria-label="Close modal"></button>
//             </div>
//             <div className="fixed top-0 right-0 w-[400px] h-[] pt-6 px-6 pb-8 overflow-y-auto bg-white">
//               <div className="h-full flex flex-col mt-[50px] relative space-y-6">
//                 <button
//                   className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-800 transition"
//                   onClick={onClose}
//                   aria-label="Close modal"
//                 >
//                   <IoClose />
//                 </button>
//                 <img
//                   src={product.img}
//                   alt={product.title}
//                   className="w-full h-[350px] object-cover rounded-xl shadow-md"
//                 />
//                 <h2 className="text-xl font-semibold text-gray-800 mt-4">{product.name}</h2>
//                 <div className="mt-2 text-xs text-gray-600">
//                 <p>
//   {product.description?.split('\n').map((line, index) => (
//     <span key={index}>{line}<br /></span>
//   ))}
// </p>

//               {/* <p>{product.description.split('\n').map((line, index) => (
//                 <span key={index}>{line}<br /></span>
//               ))}</p> */}
//             </div>
//                 <h3 className="text-lg font-semibold text-green-600">Цена: {product.price} ₽</h3>
//                 <div className="flex gap-[60%] pb-8">
//                   <Link to="/favorites" onClick={handleAddToCart}>
//                     <IoHeartOutline className="w-[30px] ml-8 h-[30px] cursor-pointer hover:text-red-500 transition" />
//                   </Link>
//                   <Link to="/cart" onClick={handleAddToCart}>
//                     <BsBasket className="w-[30px] h-[30px] cursor-pointer hover:text-green-500 transition" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>
//           </div>
//           </div>
//         </motion.div>
//   );
// }



import React from 'react'
import { IoClose, IoHeartOutline } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Card({ product, onClose }) {
  if (!product) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-80 z-40"
        onClick={onClose}
        aria-label="Close modal"
      ></div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 right-0 w-[400px] h-full p-6 overflow-y-auto bg-white z-50 shadow-lg rounded-l-xl"
      >
        <div className="relative h-full flex flex-col space-y-6">
          <button
            className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-800 transition"
            onClick={onClose}
            aria-label="Close modal"
          >
            <IoClose />
          </button>
          <img
            src={product.img}
           
            className="w-full h-[350px] object-cover rounded-xl shadow-md mt-10"
          />
          <h1 className='text-center font-bold'>{product.title}</h1>
          {/* <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2> */}
          <div className="text-sm text-gray-600 whitespace-pre-line">
            {product.description?.split('\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </div>
          <h2>{product.title2}</h2>
          <h3 className="text-lg font-semibold text-center text-green-600">Цена: {product.price} ₽</h3>
          <div className="flex justify-between mt-4">
            <Link to="/favorites">
              <IoHeartOutline className="w-[30px] h-[30px] cursor-pointer hover:text-red-500 transition" />
            </Link>
            <Link to="/cart">
              <BsBasket className="w-[30px] h-[30px] cursor-pointer hover:text-green-500 transition" />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}

