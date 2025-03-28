// import React from 'react'
// import { IoClose, IoHeartOutline } from "react-icons/io5";
// import { BsBasket } from "react-icons/bs";
// import { Link } from 'react-router-dom';
// import { motion } from "framer-motion";

// export default function Modal({ g, onClose }) {
//   if (!g) return null; 

//   return (
//     <motion.div
//       initial={{ x: "100%" }}
//       animate={{ x: 0 }}
//       exit={{ x: "100%" }}
//       transition={{ duration: 0.1 }}
//       className="fixed top-0 right-0 h-full w-[50px] p-6 rounded-l-lg shadow-lg z-50"
//     >
//       <div className="relative w-full h-full">
//         <div
//           className="fixed inset-0 bg-black opacity-80"
//           onClick={onClose}
//           aria-label="Close modal"
//         ></div>
//         <div className="fixed top-0 right-0 w-[400px] h-full pt-6 px-6 pb-8 overflow-y-auto bg-white">
//           <div className="h-full flex flex-col relative space-y-6">
//             <button
//               className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-800 transition"
//               onClick={onClose}
//               aria-label="Close modal"
//             >
//               <IoClose />
//             </button>
//             <img
//               src={g.img}
//               alt={g.title2}
//               className="w-full h-[350px] object-cover rounded-xl shadow-md"
//             />
//             <h2 className="text-xl font-semibold text-gray-800 mt-4">{g.title}</h2>
//             <div className="mt-2 text-xs text-gray-600">
//           <p>{g.title2.split('\n').map((line, index) => (
//             <span key={index}>{line}<br /></span>
//           ))}</p>
//         </div>
//             <h3 className="text-lg font-semibold text-green-600">Цена: {g.price} ₽</h3>
//             <div className="flex gap-[60%] pb-8">
//               <Link to="favorites">
//                 <IoHeartOutline className="w-[30px] ml-8 h-[30px] cursor-pointer hover:text-red-500 transition" />
//               </Link>
//               <Link to="cart">
//                 <BsBasket className="w-[30px] h-[30px] cursor-pointer hover:text-green-500 transition" />
//               </Link>
//             </div>


//               {/* {prai.map((g) => (
//                             <div key={g.id} className='ml-[90px]' onClick={() => setSelectedProduct(g)}>
//                               <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
//                               <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[560px]' /></Link>
//                               <img src={imageHovered === g.id ? g.imgAlt : g.img} className='h-[600px] w-[650px] ' onMouseEnter={() => handleMouseEnter(g.id)} onMouseLeave={handleMouseLeave} />
//                               <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[150px]'>{g.category}</p>
//                               <h1 className='hover:text-[#9ca887] text-4xl font-medium ml-[150px]' >{g.title}</h1>
//                               <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] ml-[150px]'>{g.price}</h1>
//                             </div>
//                           ))} */}


//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
