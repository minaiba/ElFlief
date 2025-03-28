import React, { useState, useEffect } from "react";
import { FaCrown, FaGift } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gradient-to-b from-green-500 to-green-900 p-8 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">Конкурс Легенд о Золотом Яблоке</h1>
      <div className="bg-white text-black p-4 rounded-lg shadow-md flex items-center justify-center max-w-md mx-auto mb-6">
        <BiTimeFive className="text-orange-500 text-2xl mr-2" />
        <p className="text-lg font-semibold">До окончания: {formatTime(timeLeft)}</p>
      </div>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mb-6">
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full text-black p-2 border rounded-lg mb-4"
        />
        <textarea
          placeholder="Ваша история..."
          value={story}
          onChange={(e) => setStory(e.target.value)}
          className="w-full text-black p-2 border rounded-lg mb-4 h-24"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Отправить Историю
        </button>
      </div>
      <h2 className="text-3xl ml-[399px] font-bold mb-4">Отправленные Легенды</h2>
      <div className="space-y-4">
        {stories.map((storyItem, index) => (
          <motion.div
            key={index}
            className="bg-white text-black p-4 rounded-lg shadow-md flex justify-between items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div>
              {index === 0 && <FaCrown className="text-yellow-500 inline mr-2" />}
              <h3 className="text-xl font-bold">{storyItem.name}</h3>
              <p className="text-sm opacity-80">{storyItem.story}</p>
              <p className="text-sm font-semibold">Голосов: {storyItem.votes}</p>
            </div>
            <button
              onClick={() => handleVote(index)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-bold"
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
      <div className="bg-white text-black p-6 rounded-lg shadow-md mt-8 text-center py-52 mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold flex items-center">
          <FaGift className="text-red-500 mr-2" /> Подарки
        </h2>
        <p className="text-lg font-semibold mt-2">Победитель получает эксклюзивный набор Tamagotchi!</p>
        <div className="flex"> 
          <div> 
            <img src="" alt="" />
            <h1>Tamagotchi</h1>
            <p>Тамагочи из новой коллекции</p>
          </div>
          <div> 
            <img src="" alt="" />
            <h1>Tamagotchi</h1>
            <p>Тамагочи из новой коллекции</p>
          </div>
          <div> 
            <img src="" alt="" />
            <h1>Tamagotchi</h1>
            <p>Тамагочи из новой коллекции</p>
          </div>
          <div> 
            <img src="" alt="" />
            <h1>Tamagotchi</h1>
            <p>Тамагочи из новой коллекции</p>
          </div>            
        </div>
      </div>
    </div>
  );
};

export default ContestApp;