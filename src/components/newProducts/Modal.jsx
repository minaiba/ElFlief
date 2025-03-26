// Modal.js
// import React from 'react';
// import { motion } from "framer-motion";

// const Modal = ({ praimer, onClose }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.3 }}
//       className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//     >
//       <div className="bg-white p-6 rounded-lg w-[700px]">
//         <h2 className="text-2xl font-bold mb-4">{praimer.title}</h2>
//         <img
//           src={praimer.img}
//           alt={praimer.title}
//           className="w-full mb-4"
//         />
//         <p className="text-lg">{praimer.text}</p> 
//         <h3 className="text-xl font-semibold mt-2">{praimer.price}</h3>
//         <button
//           onClick={onClose}
//           className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
//         >
//           Закрыть
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default Modal;
