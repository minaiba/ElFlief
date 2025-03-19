// // // import React from 'react';
// // // // import cart1 from '../../assets/gulasyl/bee2.webp'
// // // import bg from '../../assets/gulasyl/carto.webp';
// // // import main from '../../assets/gulasyl/cart.webp'
// // // import { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import { Button } from "@/components/ui/button";
// // // import { Card, CardContent } from "@/components/ui/card";
// // // import { ChevronLeft, ChevronRight } from "lucide-react";

// // // const designs = [
// // //   { id: 1, color: "bg-gradient-to-r from-gray-300 to-gray-500", ribbon: "bg-green-500" },
// // //   { id: 2, color: "bg-gradient-to-r from-blue-300 to-blue-500", ribbon: "bg-yellow-500" },
// // //   { id: 3, color: "bg-gradient-to-r from-pink-300 to-pink-500", ribbon: "bg-purple-500" },
// // // ];
// // // export default function GiftCard() {

// // //   // const giftCardData = {
// // //   //   name: 'Парфюм',
// // //   //   brand: 'Коко',
// // //   //   price: 11000,
// // //   //   description: 'Элегантный и изысканный парфюм с ароматом цветов и фруктов.',
// // //   //   image: cart1, 
// // //    const [current, setCurrent] = useState(0);

// // //   const nextDesign = () => setCurrent((prev) => (prev + 1) % designs.length);
// // //   const prevDesign = () => setCurrent((prev) => (prev - 1 + designs.length) % designs.length);
 

// // //   return (
// // //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
// // //     <h1 className="text-3xl font-bold mb-6">Выбери дизайн карты</h1>
// // //     <div className="relative flex items-center space-x-4">
// // //       <Button onClick={prevDesign} variant="ghost" className="p-2">
// // //         <ChevronLeft size={32} />
// // //       </Button>
// // //       <motion.div
// // //         key={designs[current].id}
// // //         initial={{ opacity: 0, x: 50 }}
// // //         animate={{ opacity: 1, x: 0 }}
// // //         exit={{ opacity: 0, x: -50 }}
// // //         className="relative w-80 h-48 rounded-2xl flex items-center justify-center shadow-lg"
// // //       >
// // //         <Card className={'w-full h-full ${designs[current].color} p-4 flex items-center justify-center '}>
// // //           <div className={'absolute top-1/2 left-0 right-0 h-8 ${designs[current].ribbon}'}/>
// // //           <div className={'absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 ${designs[current].ribbon} rounded-lg'} />
// // //         <Card/>
// // //       </motion.div>
// // //       <Button onClick={nextDesign} variant="ghost" className="p-2">
// // //         <ChevronRight size={32} />
// // //       </Button>
// // //     </div>
// // //     <Button className="mt-6 px-6 py-3 text-lg rounded-xl bg-black text-white">Далее</Button>
// // //   </div> 
// // //   );
// // // };





// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { Button } from './Button';
// // import { Card } from './Card';
// // import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
// // import i from '../../assets/gulasyl/bee2.webp'
// // import ii from '../../assets/gulasyl/bag.webp'
// // import iii from '../../assets/gulasyl/cola.webp'
// // import iiii from '../../assets/gulasyl/bros.webp'
// // import iiiii from '../../assets/gulasyl/carto.webp'

// // const designs = [
// //   { id: 1, color: 'bg-gradient-to-r from-gray-300 to-gray-500', ribbon: 'bg-green-500' },
// //   { id: 2, color: 'bg-gradient-to-r from-blue-300 to-blue-500', ribbon: 'bg-yellow-500', photo: {i}
// //    },
// //   { id: 3, color: 'bg-gradient-to-r from-pink-300 to-pink-500', ribbon: 'bg-purple-500' },
// // ];

// // export default function GiftCard() {
// //   const [current, setCurrent] = useState(0);

// //   const nextDesign = () => setCurrent((prev) => (prev + 1) % designs.length);
// //   const prevDesign = () => setCurrent((prev) => (prev - 1 + designs.length) % designs.length);

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
// //       <h1 className="text-3xl font-bold mb-6">Выбери дизайн карты</h1>
// //       <div className="relative flex items-center space-x-4">
// //         <Button onClick={prevDesign} variant="ghost" className="p-2">
// //           <ChevronLeft size={32} />
// //         </Button>
// //         <motion.div
// //           key={designs[current].id}
// //           initial={{ opacity: 0, x: 50 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           exit={{ opacity: 0, x: -50 }}
// //           className="relative w-80 h-48 rounded-2xl flex items-center justify-center shadow-lg"
// //         >
// //           <Card className={`w-full h-full ${designs[current].color} p-4 flex items-center justify-center`}>
// //             <div
// //               className={`absolute top-1/2 left-0 right-0 h-8 ${designs[current].ribbon}`}
// //             />
// //             <img src={i}/>
// //             <div
// //               className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 ${designs[current].ribbon} rounded-lg`}
// //             />
// //           </Card>
// //         </motion.div>
// //         <Button onClick={nextDesign} variant="ghost" className="p-2">
// //           <ChevronRight size={32} />
// //         </Button>
// //       </div>
// //       <Button className="mt-6 px-6 py-3 text-lg rounded-xl bg-black text-white">Далее</Button>
// //     </div>
// //   );
// // }



// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from './Button';
// import { Card } from './Card';
// import { ChevronLeft, ChevronRight, Link } from 'lucide-react';
// import i from '../../assets/gulasyl/bee2.webp';
// import ii from '../../assets/gulasyl/bag.webp';
// import iii from '../../assets/gulasyl/fen.webp';
// // import iiii from '../../assets/gulasyl/bros.webp';
// // import iiiii from '../../assets/gulasyl/carto.webp';

// const designs = [
//   { id: 1, photo: i },
//   { id: 2, photo: ii },
//   { id: 3, photo: iii },
// ];

// export default function GiftCard() {
//   const [current, setCurrent] = useState(0);

//   const nextDesign = () => setCurrent((prev) => (prev + 1) % designs.length);
//   const prevDesign = () => setCurrent((prev) => (prev - 1 + designs.length) % designs.length);

//   return (
//     <div className="flex flex-col items-center justify-center w-[1400px] m-auto bg-blue-300 p-6">
//       <h1 className="text-3xl font-bold mb-6">Выбери дизайн карты</h1>
//       <div className="relative flex items-center space-x-4">
//         <Button onClick={prevDesign} variant="ghost" className="p-2">
//           <ChevronLeft size={32} />
//         </Button>
//         <motion.div
//           key={designs[current].id}
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -50 }}
//           className="relative w-80 h-48 rounded-2xl flex items-center justify-center shadow-lg"
//         >
//           <Card className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-500 p-4 flex items-center justify-center">
//             <img src={designs[current].photo} alt={`Design ${current + 1}`} className="w-full h-full object-cover rounded-lg" />
//           </Card>
//         </motion.div>
//         <Button onClick={nextDesign} variant="ghost" className="p-2">
//           <ChevronRight size={32} />
//         </Button>
//       </div>
//       <Button className="mt-6 px-6 py-3 text-lg rounded-xl bg-black text-white">Далее</Button>
//     </div>
//   );
// }

import React from 'react'
import bg from '../../assets/gulasyl/carto.webp'

function GiftCard() {
  return (
    <div>
      <div className='w-[1400px] m-auto flex'  style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        height: '600px',}}>
          <div>
            <h1>Электронная карта</h1>
          </div>
          <div></div>

      </div>
    </div>
  )
}

export default GiftCard
