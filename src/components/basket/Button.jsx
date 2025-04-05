import React, { useState } from 'react'
import { motion } from "framer-motion";
export default function Button({ product, onClose }) {
    const [confirmed, setConfirmed] = useState(false);

    const handleConfirm = () => {
      setConfirmed(true);
  
      // Закрытие модалки через 2 секунды
      setTimeout(() => {
        onClose();
        setConfirmed(false); // сбрасываем состояние
      }, 3000);
    };
  return (
    <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ duration: 0.2 }}
    className="fixed top-0 right-0 h-full w-full max-w-md bg-white p-6 rounded-l-lg shadow-lg z-50"
  >
    <div className="relative w-full h-full">
      <button onClick={onClose} className="absolute top-4 right-4 text-black">X</button>

      {confirmed ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-semibold text-center">Заказ принят</h2>
          <p className="mt-2 text-gray-600 text-center">Ждите в ближайшие дни</p>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Оформление заказа</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium">Адрес</label>
            <input type="text" className="w-full border rounded-lg p-2 mt-1" placeholder="Введите адрес" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Номер телефона</label>
            <input type="tel" className="w-full border rounded-lg p-2 mt-1" placeholder="+7 (___) ___-__-__" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Номер карты</label>
            <input type="text" className="w-full border rounded-lg p-2 mt-1" placeholder="0000 0000 0000 0000" />
          </div>

          <button onClick={handleConfirm} className="w-full bg-black text-white py-2 rounded-xl mt-4">
            Подтвердить
          </button>
        </>
      )}
    </div>
  </motion.div>
  )
}
