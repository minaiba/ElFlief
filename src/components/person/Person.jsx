import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function Person({ onClose }) {
  const [phone, setPhone] = useState("+996");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");



  const sendCode = async () => {
    if (!phone.startsWith("+996") || phone.length < 10) {
      setMessage("Введите корректный номер Кыргызстана");
      return;
    }
    setMessage("Отправка кода...");
    try {
      const response = await fetch("http://localhost:5000/send_code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone_number: phone }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token); // Сохраняем токен
        setStep(2);
        setMessage("Код отправлен, проверьте SMS!");
      } else {
        setMessage(data.error || "Ошибка отправки кода");
      }
    } catch (error) {
      setMessage("Ошибка сети, попробуйте снова");
    }
  };
  

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 right-0 h-full w-150 bg-white shadow-lg p-6 z-50"
      >
              <button className="absolute top-4 right-4 text-4xl" onClick={onClose}>
                <IoClose />
              </button>
        <h2 className="text-2xl font-bold mb-2">Войти или зарегистрироваться</h2>
        <p className="text-gray-600 mb-4">
          Позвоним или пришлём SMS. Введите последние 4 цифры номера телефона или код из SMS.
        </p>

        {/* Выбор страны */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-1">Страна</label>
          <select className="w-full p-2 border rounded" defaultValue="Кыргызстан">
            <option>Кыргызстан</option>
            {/* <option>Казахстан</option>
            <option>Россия</option> */}
          </select>
        </div>

        {/* Ввод номера */}
        {step === 1 && (
          <>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border rounded mb-4"
              placeholder="+996XXXXXXXXX"
            />
            <button
              onClick={sendCode}
              className="w-full bg-black text-white p-3 rounded-md"
            >
              Получить код
            </button>
          </>
        )}

        {/* Вывод сообщений */}
        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
      </motion.div>

      {/* Фон-затемнение (закрывает модалку при клике) */}
      <div
        className="fixed inset-0 bg-black bg-opacity-20 z-40"
        onClick={onClose}
      />
    </AnimatePresence>
  );
}
