
// import React, { useState } from 'react';
// import { FaMapMarkerAlt } from 'react-icons/fa'; 

// function Person() {
//   const [UserName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [error, setError] = useState('');
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [isCityListOpen, setIsCityListOpen] = useState(false);

 
//   const cities = [
//     'Москва',
//     'Санкт-Петербург',
//     'Новосибирск',
//     'Екатеринбург',
//     'Нижний Новгород',
//     'Казань',
//     'Челябинск',
//     'Омск',
//     'Самара',
//     'Ростов-на-Дону',
//     'Уфа',
//     'Красноярск',
//     'Воронеж',
//     'Пермь',
//     'Волгоград',
//     'Краснодар',
//     'Томск',
//     'Тюмень',
//     'Ижевск',
//     'Барнаул',
//   ];

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (UserName === '') {
//       setError('Требуется имя пользователя');
//     } else if (password.length < 6) {
//       setError('Пароль должен содержать не менее 6 символов');
//     // } else if (!isRegistered && (address === '' || city === '')) {
//       // setError('Address and city are required for registration');
//     } else {
//       setError('');
//       alert('Успешно ' + (isRegistered ? 'logged in' : 'зарегистрированы!'));
//     }
//   }

//   return (
//     <div className="w-[400px] m-auto mt-[50px] justify-center items-center">
//       <h1 className='text-center text-2xl font-semibold'>Войти или зарегистрироваться</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-semibold mb-2">Имя пользователя</label>
//           <input
//             type="text"
//             value={UserName}
//             onChange={(e) => setUserName(e.target.value)}
//             placeholder="Enter your name"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-semibold mb-2">Пароль</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>


//         {!isRegistered && (
//           <div className="mb-6 relative">
//             <label className="block text-gray-700 text-sm font-semibold mb-2">Город</label>
//             <div className="flex items-center">
//               <FaMapMarkerAlt className="mr-2 text-gray-500" />
//               <input
//                 type="text"
//                 value={city}
//                 onClick={() => setIsCityListOpen(!isCityListOpen)}
//                 onChange={(e) => setCity(e.target.value)}
//                 placeholder="Select your city"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             {isCityListOpen && (
//               <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
//                 {cities
//                   .filter((cityItem) => cityItem.toLowerCase().includes(city.toLowerCase())) 
//                   .map((cityItem, index) => (
//                     <div
//                       key={index}
//                       className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
//                       onClick={() => {
//                         setCity(cityItem);
//                         setIsCityListOpen(false);
//                       }}
//                     >
//                       {cityItem}
//                     </div>
//                   ))}
//               </div>
//             )}
//           </div>
//         )}

//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         <button
//           type="submit"
//           className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
//         >
//           {isRegistered ? 'Login' : 'Register'}
//         </button>

//         <div className="mt-4 text-center text-sm">
//           {isRegistered ? (
//             <p>
//               Нет аккаунта?{' '}
//               <button
//                 type="button"
//                 onClick={() => setIsRegistered(false)}
//                 className="text-blue-500 hover:underline"
//               >
//                 Зарегистрируйтесь
//               </button>
//             </p>
//           ) : (
//             <p>
//               Уже есть аккаунт?{' '}
//               <button
//                 type="button"
//                 onClick={() => setIsRegistered(true)}
//                 className="text-blue-500 hover:underline"
//               >
//                 Login here
//               </button>
//             </p>
//           )}
//         </div>
     
//       </form>
      
//     </div>
//   );
// }

// export default Person;



// import React, { useState } from 'react';
// import { FaMapMarkerAlt } from 'react-icons/fa';

// function Person() {
//   const [UserName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [error, setError] = useState('');
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [isCityListOpen, setIsCityListOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(true); // Состояние для модального окна

//   const cities = [
//     'Москва',
//     'Санкт-Петербург',
//     'Новосибирск',
//     'Екатеринбург',
//     'Нижний Новгород',
//     'Казань',
//     'Челябинск',
//     'Омск',
//     'Самара',
//     'Ростов-на-Дону',
//     'Уфа',
//     'Красноярск',
//     'Воронеж',
//     'Пермь',
//     'Волгоград',
//     'Краснодар',
//     'Томск',
//     'Тюмень',
//     'Ижевск',
//     'Барнаул',
//   ];

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (UserName === '') {
//       setError('Требуется имя пользователя');
//     } else if (password.length < 6) {
//       setError('Пароль должен содержать не менее 6 символов');
//     } else {
//       setError('');
//       alert('Успешно ' + (isRegistered ? 'logged in' : 'зарегистрированы!'));
//     }
//   }

//   return (
//     <>
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//             <h1 className='text-center text-2xl font-semibold mb-4'>Войти или зарегистрироваться</h1>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-semibold mb-2">Имя пользователя</label>
//                 <input
//                   type="text"
//                   value={UserName}
//                   onChange={(e) => setUserName(e.target.value)}
//                   placeholder="Enter your name"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-gray-700 text-sm font-semibold mb-2">Пароль</label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {!isRegistered && (
//                 <div className="mb-6 relative">
//                   <label className="block text-gray-700 text-sm font-semibold mb-2">Город</label>
//                   <div className="flex items-center">
//                     <FaMapMarkerAlt className="mr-2 text-gray-500" />
//                     <input
//                       type="text"
//                       value={city}
//                       onClick={() => setIsCityListOpen(!isCityListOpen)}
//                       onChange={(e) => setCity(e.target.value)}
//                       placeholder="Select your city"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   {isCityListOpen && (
//                     <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
//                       {cities
//                         .filter((cityItem) => cityItem.toLowerCase().includes(city.toLowerCase()))
//                         .map((cityItem, index) => (
//                           <div
//                             key={index}
//                             className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
//                             onClick={() => {
//                               setCity(cityItem);
//                               setIsCityListOpen(false);
//                             }}
//                           >
//                             {cityItem}
//                           </div>
//                         ))}
//                     </div>
//                   )}
//                 </div>
//               )}

//               {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//               <button
//                 type="submit"
//                 className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
//               >
//                 {isRegistered ? 'Login' : 'Register'}
//               </button>

//               <div className="mt-4 text-center text-sm">
//                 {isRegistered ? (
//                   <p>
//                     Нет аккаунта?{' '}
//                     <button
//                       type="button"
//                       onClick={() => setIsRegistered(false)}
//                       className="text-blue-500 hover:underline"
//                     >
//                       Зарегистрируйтесь
//                     </button>
//                   </p>
//                 ) : (
//                   <p>
//                     Уже есть аккаунт?{' '}
//                     <button
//                       type="button"
//                       onClick={() => setIsRegistered(true)}
//                       className="text-blue-500 hover:underline"
//                     >
//                       Login here
//                     </button>
//                   </p>
//                 )}
//               </div>
//             </form>

//             <button
//               onClick={() => setIsModalOpen(false)} // Закрытие модального окна
//               className="absolute top-2 right-2 text-gray-500 text-2xl"
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Person;




// import React, { useState } from 'react';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import { motion, AnimatePresence } from "framer-motion";
// import { IoClose } from "react-icons/io5";

// function Person() {
//   const [UserName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [error, setError] = useState('');
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [isCityListOpen, setIsCityListOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(true); // Состояние для модального окна
// }
//   const cities = [
//     'Москва',
//     'Санкт-Петербург',
//     'Новосибирск',
//     'Екатеринбург',
//     'Нижний Новгород',
//     'Казань',
//     'Челябинск',
//     'Омск',
//     'Самара',
//     'Ростов-на-Дону',
//     'Уфа',
//     'Красноярск',
//     'Воронеж',
//     'Пермь',
//     'Волгоград',
//     'Краснодар',
//     'Томск',
//     'Тюмень',
//     'Ижевск',
//     'Барнаул',
//   ];

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (UserName === '') {
//       setError('Требуется имя пользователя');
//     } else if (password.length < 6) {
//       setError('Пароль должен содержать не менее 6 символов');
//     } else {
//       setError('');
//       alert('Успешно ' + (isRegistered ? 'logged in' : 'зарегистрированы!'));
//     }


// function Person({ onClose }) {
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
//         localStorage.setItem("token", data.token); // Сохраняем токен
//         setStep(2);
//         setMessage("Код отправлен, проверьте SMS!");
//       } else {
//         setMessage(data.error || "Ошибка отправки кода");
//       }
//     } catch (error) {
//       setMessage("Ошибка сети, попробуйте снова");
//     }
//   };
// }
  

//   return (
//     <>
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//             <h1 className='text-center text-2xl font-semibold mb-4'>Войти или зарегистрироваться</h1>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-semibold mb-2">Имя пользователя</label>
//                 <input
//                   type="text"
//                   value={UserName}
//                   onChange={(e) => setUserName(e.target.value)}
//                   placeholder="Enter your name"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-gray-700 text-sm font-semibold mb-2">Пароль</label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {!isRegistered && (
//                 <div className="mb-6 relative">
//                   <label className="block text-gray-700 text-sm font-semibold mb-2">Город</label>
//                   <div className="flex items-center">
//                     <FaMapMarkerAlt className="mr-2 text-gray-500" />
//                     <input
//                       type="text"
//                       value={city}
//                       onClick={() => setIsCityListOpen(!isCityListOpen)}
//                       onChange={(e) => setCity(e.target.value)}
//                       placeholder="Select your city"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   {isCityListOpen && (
//                     <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
//                       {cities
//                         .filter((cityItem) => cityItem.toLowerCase().includes(city.toLowerCase()))
//                         .map((cityItem, index) => (
//                           <div
//                             key={index}
//                             className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
//                             onClick={() => {
//                               setCity(cityItem);
//                               setIsCityListOpen(false);
//                             }}
//                           >
//                             {cityItem}
//                           </div>
//                         ))}
//                     </div>
//                   )}
//                 </div>
//               )}

//               {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//               <button
//                 type="submit"
//                 className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
//               >
//                 {isRegistered ? 'Login' : 'Register'}
//               </button>

//               <div className="mt-4 text-center text-sm">
//                 {isRegistered ? (
//                   <p>
//                     Нет аккаунта?{' '}
//                     <button
//                       type="button"
//                       onClick={() => setIsRegistered(false)}
//                       className="text-blue-500 hover:underline"
//                     >
//                       Зарегистрируйтесь
//                     </button>
//                   </p>
//                 ) : (
//                   <p>
//                     Уже есть аккаунт?{' '}
//                     <button
//                       type="button"
//                       onClick={() => setIsRegistered(true)}
//                       className="text-blue-500 hover:underline"
//                     >
//                       Login here
//                     </button>
//                   </p>
//                 )}
//               </div>
//             </form>

//             <button
//               onClick={() => setIsModalOpen(false)} // Закрытие модального окна
//               className="absolute top-2 right-2 text-gray-500 text-2xl"
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Person;
//     <AnimatePresence>
//       <motion.div
//         initial={{ x: "100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ duration: 0.6 }}
//         className="fixed top-0 right-0 h-full w-150 bg-white shadow-lg p-6 z-50"
//       >
//               <button className="absolute top-4 right-4 text-4xl" onClick={onClose}>
//                 <IoClose />
//               </button>
//         <h2 className="text-2xl font-bold mb-2">Войти или зарегистрироваться</h2>
//         <p className="text-gray-600 mb-4">
//           Позвоним или пришлём SMS. Введите последние 4 цифры номера телефона или код из SMS.
//         </p>

//         {/* Выбор страны */}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm mb-1">Страна</label>
//           <select className="w-full p-2 border rounded" defaultValue="Кыргызстан">
//             <option>Кыргызстан</option>
//             {/* <option>Казахстан</option>
//             <option>Россия</option> */}
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
//         className="fixed inset-0 bg-black bg-opacity-20 z-40"
//         onClick={onClose}
//       />
//     </AnimatePresence>



import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

function Person({ onClose }) {
  const [UserName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isCityListOpen, setIsCityListOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [phone, setPhone] = useState('+996');
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');

  const cities = [
    'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород',
    'Казань', 'Челябинск', 'Омск', 'Самара', 'Ростов-на-Дону', 'Уфа', 'Красноярск',
    'Воронеж', 'Пермь', 'Волгоград', 'Краснодар', 'Томск', 'Тюмень', 'Ижевск', 'Барнаул'
  ];

  function handleSubmit(event) {
    event.preventDefault();
    if (UserName === '') {
      setError('Требуется имя пользователя');
    } else if (password.length < 6) {
      setError('Пароль должен содержать не менее 6 символов');
    } else {
      setError('');
      alert('Успешно ' + (isRegistered ? 'logged in' : 'зарегистрированы!'));
    }
  }

  const sendCode = async () => {
    if (!phone.startsWith('+996') || phone.length < 10) {
      setMessage('Введите корректный номер Кыргызстана');
      return;
    }
    setMessage('Отправка кода...');
    try {
      const response = await fetch('http://localhost:5000/send_code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone_number: phone }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        setStep(2);
        setMessage('Код отправлен, проверьте SMS!');
      } else {
        setMessage(data.error || 'Ошибка отправки кода');
      }
    } catch (error) {
      setMessage('Ошибка сети, попробуйте снова');
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 text-2xl"
            >
              &times;
            </button>
            <h1 className="text-center text-2xl font-semibold mb-4">Войти или зарегистрироваться</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Имя пользователя</label>
                <input
                  type="text"
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Введите имя"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Пароль</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введите пароль"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </form>
          </div>
        </div>
      )}
      <AnimatePresence>
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
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
          {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
        </motion.div>
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={onClose}
        />
      </AnimatePresence>
    </>
  );
}

export default Person;


