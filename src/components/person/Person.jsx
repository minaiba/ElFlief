import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Person({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [generatedCode, setGeneratedCode] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName") || "";
    const storedEmail = localStorage.getItem("userEmail") || "";
    // const storedPasword = localStorage.getItem("userPasword") || "";
    setName(storedName);
    setEmail(storedEmail);
    // setPassword(storedPasword);
  }, []);

  const sendCode = () => {
    if (!email.includes("@")) {
      setMessage("Введите корректный email");
      return;
    }
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(randomCode);
    localStorage.setItem("verificationCode", randomCode);
    setMessage(`Код отправлен на email: ${randomCode}`);
    setStep(2);
  };

  const verifyCode = () => {
    const storedCode = localStorage.getItem("verificationCode");
    if (code === storedCode) {
      setMessage("Код подтвержден!");
      setStep(3); 
    } else {
      setMessage("Неверный код");
    }
  };

  {message && (
    <motion.div
      key="message"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white p-3 rounded-md mt-4 text-center"
    >
      {message}
    </motion.div>
  )}
  


  const handleRegister = () => {
    if (password !== confirmPassword) {
      setMessage("Пароли не совпадают");
      return;
    }
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    setMessage("Регистрация успешна!");
    onClose(); 
  };

  return (
    <AnimatePresence>
      {step === 1 && (
        <motion.div
          key="step1"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.1 }}
          className="fixed top-0 right-0 h-full w-150 bg-white pt-[50px] shadow-lg p-6 z-50"
        >
          <button className="absolute top-4 right-4 text-4xl" onClick={onClose}>
            <IoClose />
          </button>
          <h2 className="text-2xl font-bold mb-2">Войти или зарегистрироваться</h2>
          <p className="text-gray-600 mb-4">
            Введите имя и email, чтобы получить код подтверждения.
          </p>
          
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded mb-4"
            placeholder="Введите имя"
          />
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded mb-4"
            placeholder="Введите Email"
          />

          <button
            onClick={sendCode}
            className="w-full bg-black text-white p-3 rounded-md"
          >
            Получить код
          </button>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          key="step2"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.1 }}
          className="fixed top-0 right-0 h-full pt-[50px] w-150 bg-white shadow-lg p-6 z-50"
        >
          <button className="absolute top-4 right-4 text-4xl" onClick={onClose}>
            <IoClose />
          </button>
          <h2 className="text-2xl font-bold mb-2">Подтверждение кода</h2>
          <p className="text-gray-600 mb-4">
            Введите код, отправленный на ваш email.
          </p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-3 border rounded mb-4"
            placeholder="Введите код"
          />
          <button
            onClick={verifyCode}
            className="w-full bg-black text-white p-3 rounded-md"
          >
            Подтвердить
          </button>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          key="step3"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.1 }}
          className="fixed top-0 right-0 pt-[50px] h-full w-150 bg-white p-6 z-50"
        >
          <button className="absolute top-4 right-4 text-4xl" onClick={onClose}>
            <IoClose />
          </button>
          <h2 className="text-2xl font-bold mb-2">Регистрация</h2>
          <p className="text-gray-600 mb-4">Создайте пароль для вашей учетной записи.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded mb-4"
            placeholder="Введите пароль"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border rounded mb-4"
            placeholder="Подтвердите пароль"
          />
         <Link to='/Acaunt'><button
            onClick={handleRegister}
            className="w-full bg-black text-white p-3 rounded-md"
          >
            Завершить регистрацию
          </button></Link> 
        </motion.div>
      )}

      {message && (
        <motion.div
          key="message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white p-3 rounded-md"
        >
          {message}
        </motion.div>
      )}
        <div
          className="fixed inset-0 bg-white opacity-80"
          onClick={onClose}
          aria-label="Close modal"
        ></div>
    </AnimatePresence>
  );
}


