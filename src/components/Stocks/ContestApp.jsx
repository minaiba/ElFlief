import React, { useState, useEffect } from "react";
import { FaCrown, FaGift } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { motion } from "framer-motion";
import priz from '../../assets/aiba/green.jpg'
import priz1 from '../../assets/aiba/priz.jpg'
import priz2 from '../../assets/aiba/priz14.webp'
import priz3 from '../../assets/aiba/priz15.webp'
import priz4 from '../../assets/aiba/priz16.webp'
import { GiBowTieRibbon } from "react-icons/gi";
const ContestApp = () => {
  const [stories, setStories] = useState([]);
  const [name, setName] = useState("");
  const [story, setStory] = useState("");
  const [timeLeft, setTimeLeft] = useState(96400);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}ч ${m}м ${s}с`;
  };
  const handleSubmit = () => {
    if (name && story) {
      setStories([...stories, { name, story, votes: 0 }]);
      setName("");
      setStory("");
    }
  };

  const handleVote = (index) => {
    const newStories = [...stories];
    newStories[index].votes += 1;
    setStories(newStories);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#C6E400] py-20 pt-[164px] text-white">
      <h1 className="text-4xl font-mono text-center mb-6">Конкурс Легенд о Золотом Яблоке</h1>
      <div className=" bg-white p-9 rounded-lg shadow-lg mb-6">
        <div className="max-w-lg mx-auto">
          <div className="bg-white text-black p-4 rounded-lg shadow-md flex items-center justify-center max-w-md mx-auto mb-6">
            <BiTimeFive className="text-orange-500 text-2xl mr-2" />
            <p className="text-lg font-semibold">До окончания: {formatTime(timeLeft)}</p>
          </div>
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-black p-4 border rounded-lg mb-4"
          />
          <textarea
            placeholder="Ваша история..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
            className="w-full text-black p-2 border rounded-lg mb-4 h-24"
          ></textarea>
          <button
            onClick={handleSubmit}
            className="bg-[#C6E400] text-black px-4 py-2 rounded-lg cursor-pointer"
          >
            Отправить Историю
          </button>
        </div>

      </div>
      <h2 className="text-4xl text-white max-w-[1400px] pl-[17%] py-5 m-auto font-mono mb-4">Отправленные истории</h2>
      <div className="space-y-5 w-[900px] ml-[300px]">
        {stories.map((storyItem, index) => (
          <motion.div
            key={index}
            className="bg-white text-black p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              {index === 0 && <FaCrown className="text-yellow-500 inline mr-2" />}
              <h3 className="text-xl font-bold">{storyItem.name}</h3>
              <p className="text-sm opacity-80">{storyItem.story}</p>
              <p className="text-sm font-semibold">Голосов: {storyItem.votes}</p>
            </div>
            <button
              onClick={() => handleVote(index)}
              className="bg-[#C6E400] text-white px-6 py-2 rounded-lg font-bold"
            >
              Проголосовать
            </button>
          </motion.div>
        ))}
      </div>
      {stories.length > 0 && (
        <div className="bg-white text-black p-6 rounded-lg shadow-md mt-8 text-center max-w-lg mx-auto">
          <h2 className="text-2xl font-bold flex items-center justify-center">
            <FaCrown className="text-yellow-500 mr-2" /> Победитель конкурса
          </h2>
          <h3 className="text-xl font-bold mt-2">
            {stories.reduce((prev, current) => (prev.votes > current.votes ? prev : current)).name}
          </h3>
          <p className="text-sm opacity-75">
            {stories.reduce((prev, current) => (prev.votes > current.votes ? prev : current)).story}
          </p>
          <p className="text-lg font-semibold">
            Количество голосов:{" "}
            {stories.reduce((prev, current) => (prev.votes > current.votes ? prev : current)).votes}
          </p>
        </div>
      )}
      <div className="bg-gray-100 text-black p-2 rounded-lg shadow-md mt-8 text-center py-12 mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold flex items-center">
          <FaGift className="text-red-500 mr-2" /> Подарки
        </h2>
        <p className="text-lg font-semibold mt-2">Победитель получает эксклюзивный набор!</p>
        <div className=" flex border rounded-2xl max-w-[1300px] mt-10 p-10">
          <div className="w-[366px] rounded-2xl py-6 px-6 border relative border-[#C6E400]">
            <GiBowTieRibbon className="absolute text-2xl" />
            <h1>Tamagotchi</h1>
            <p>3d игрушка тамагочи</p>
            <img src={priz1} className="w-35 rounded-2xl h-35 ml-[38px] mt-7" />
          </div>
          <div className="w-[366px] ml-10 rounded-2xl py-6 px-6 border border-[#C6E400]">
            <GiBowTieRibbon className="absolute text-2xl" />
            <h1>PAYOT</h1>
            <p>для ухода за кожей лица</p>
            <img src={priz2} className="w-50 rounded-2xl h-50 ml-[14px]" />
          </div>
          <div className="w-[366px] ml-10 rounded-2xl py-6 px-6 border border-[#C6E400]">
            <GiBowTieRibbon className="absolute text-2xl" />
            <h1>BARBARO</h1>
            <p>для восстановления волос</p>
            <img src={priz3} className="w-50 rounded-2xl h-50 ml-[14px]" />
          </div>
          <div className="w-[366px] ml-10 rounded-2xl py-6 px-6 border border-[#C6E400]">
            <GiBowTieRibbon className="absolute text-2xl" />
            <h1>EAT MY</h1>
            <p>бальзам для губ</p>
            <img src={priz4} className="w-50 rounded-2xl h-50 ml-[14px]" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContestApp;