import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; 

function Person() {
  const [UserName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isCityListOpen, setIsCityListOpen] = useState(false);

 
  const cities = [
    'Москва',
    'Санкт-Петербург',
    'Новосибирск',
    'Екатеринбург',
    'Нижний Новгород',
    'Казань',
    'Челябинск',
    'Омск',
    'Самара',
    'Ростов-на-Дону',
    'Уфа',
    'Красноярск',
    'Воронеж',
    'Пермь',
    'Волгоград',
    'Краснодар',
    'Томск',
    'Тюмень',
    'Ижевск',
    'Барнаул',
  ];

  function handleSubmit(event) {
    event.preventDefault();
    if (UserName === '') {
      setError('Требуется имя пользователя');
    } else if (password.length < 6) {
      setError('Пароль должен содержать не менее 6 символов');
    // } else if (!isRegistered && (address === '' || city === '')) {
      // setError('Address and city are required for registration');
    } else {
      setError('');
      alert('Успешно ' + (isRegistered ? 'logged in' : 'зарегистрированы!'));
    }
  }

  return (
    <div className="w-[400px] m-auto mt-[50px] justify-center items-center">
      <h1 className='text-center text-2xl font-semibold'>Войти или зарегистрироваться</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Имя пользователя</label>
          <input
            type="text"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Пароль</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        {!isRegistered && (
          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Город</label>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              <input
                type="text"
                value={city}
                onClick={() => setIsCityListOpen(!isCityListOpen)}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Select your city"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {isCityListOpen && (
              <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
                {cities
                  .filter((cityItem) => cityItem.toLowerCase().includes(city.toLowerCase())) 
                  .map((cityItem, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                      onClick={() => {
                        setCity(cityItem);
                        setIsCityListOpen(false);
                      }}
                    >
                      {cityItem}
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          {isRegistered ? 'Login' : 'Register'}
        </button>

        <div className="mt-4 text-center text-sm">
          {isRegistered ? (
            <p>
              Нет аккаунта?{' '}
              <button
                type="button"
                onClick={() => setIsRegistered(false)}
                className="text-blue-500 hover:underline"
              >
                Зарегистрируйтесь
              </button>
            </p>
          ) : (
            <p>
              Уже есть аккаунт?{' '}
              <button
                type="button"
                onClick={() => setIsRegistered(true)}
                className="text-blue-500 hover:underline"
              >
                Login here
              </button>
            </p>
          )}
        </div>
     
      </form>
      
    </div>
  );
}

export default Person;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function() {
//   const [phone, setPhone] = useState("+996");
//   const [code, setCode] = useState("");
//   const [step, setStep] = useState(1);
//   const [message, setMessage] = useState("");
//   const [isOpen, setIsOpen] = useState(false); // Состояние бокового окна

//   const sendCode = async () => {
//     if (!phone.startsWith("+996") || phone.length < 10) {
//       setMessage("Введите корректный номер Кыргызстана");
//       return;
//     }
//     setMessage("Отправка кода...");
//     try {
//       const response = await fetch("http://localhost:5000/send_code", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ phone_number: phone }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setStep(2);
//         setMessage("Код отправлен, проверьте SMS!");
//       } else {
//         setMessage(data.error || "Ошибка отправки кода");
//       }
//     } catch (error) {
//       setMessage("Ошибка сети, попробуйте снова");
//     }
//   };

//   const verifyCode = async () => {
//     if (code.length !== 6) {
//       setMessage("Введите 6-значный код");
//       return;
//     }
//     try {
//       const response = await fetch("http://localhost:5000/verify_code", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ phone_number: phone, code }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setMessage("Номер подтвержден! ✅");
//       } else {
//         setMessage(data.error || "Неверный код");
//       }
//     } catch (error) {
//       setMessage("Ошибка сети, попробуйте снова");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 rounded-xl shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           {step === 1 ? "Ввод номера" : "Введите код"}
//         </h2>

//         {step === 1 ? (
//           <>
//             <input
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-3 border rounded-md mb-4"
//               placeholder="+996XXXXXXXXX"
//             />
//             <button
//               onClick={sendCode}
//               className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
//             >
//               Отправить код
//             </button>
//           </>
//         ) : (
//           <>
//             <input
//               type="text"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//               className="w-full p-3 border rounded-md mb-4 text-center"
//               placeholder="Введите код"
//             />
//             <button
//               onClick={verifyCode}
//               className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600"
//             >
//               Подтвердить
//             </button>
//           </>
//         )}

//         {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
//       </div>

//       {/* Кнопка для открытия бокового окна */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed top-4 right-4 bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md"
//       >
//         Регистрация
//       </button>

//       {/* Боковое окно регистрации */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.3 }}
//             className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-6 z-50"
//           >
//             <h2 className="text-xl font-bold mb-4">Регистрация</h2>

//             <input
//               type="text"
//               placeholder="Ваш телефон"
//               className="w-full p-2 border rounded mb-2"
//             />
//             <input
//               type="password"
//               placeholder="Пароль"
//               className="w-full p-2 border rounded mb-2"
//             />

//             <button className="w-full bg-green-500 text-white p-2 rounded-lg">
//               Зарегистрироваться
//             </button>

//             {/* Кнопка закрытия */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 text-gray-600 text-xl"
//             >
//               ✖
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Фон-затемнение */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </div>
//   );
// }

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Person({ onClose }) {
//   const [phone, setPhone] = useState("+996");
//   const [step, setStep] = useState(1);
//   const [message, setMessage] = useState("");

//   const sendCode = async () => {
//     if (!phone.startsWith("+996") || phone.length < 10) {
//       setMessage("Введите корректный номер Кыргызстана");
//       return;
//     }
//     setMessage("Отправка кода...");
//     try {
//       const response = await fetch("http://localhost:5000/send_code", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ phone_number: phone }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setStep(2);
//         setMessage("Код отправлен, проверьте SMS!");
//       } else {
//         setMessage(data.error || "Ошибка отправки кода");
//       }
//     } catch (error) {
//       setMessage("Ошибка сети, попробуйте снова");
//     }
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ x: "100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ duration: 0.3 }}
//         className="fixed top-0 right-0 h-full w-96 bg-white shadow-lg p-6 z-50"
//       >
//         {/* Кнопка закрытия */}
//         <button 
//           onClick={onClose} 
//           className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
//         >
//           ✖
//         </button>

//         <h2 className="text-2xl font-bold mb-2">Войти или зарегистрироваться</h2>
//         <p className="text-gray-600 mb-4">
//           Позвоним или пришлём SMS. Введите последние 4 цифры номера телефона или код из SMS.
//         </p>

//         {/* Выбор страны */}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm mb-1">Страна</label>
//           <select className="w-full p-2 border rounded" defaultValue="Кыргызстан">
//             <option>Кыргызстан</option>
//             <option>Казахстан</option>
//             <option>Россия</option>
//           </select>
//         </div>

//         {/* Ввод номера */}
//         {step === 1 && (
//           <>
//             <input
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-3 border rounded mb-4"
//               placeholder="+996XXXXXXXXX"
//             />
//             <button
//               onClick={sendCode}
//               className="w-full bg-black text-white p-3 rounded-md"
//             >
//               Получить код
//             </button>
//           </>
//         )}

//         {/* Вывод сообщений */}
//         {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
//       </motion.div>

//       {/* Фон-затемнение (закрывает модалку при клике) */}
//       <div
//         className="fixed inset-0  bg-opacity-50 z-40"
//         onClick={onClose}
//       />
//     </AnimatePresence>
//   );
// }
