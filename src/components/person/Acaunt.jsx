import { useState, useEffect } from "react";
import { IoPersonCircle } from "react-icons/io5";

export default function Account() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("userName") || "Aiba";
    const storedEmail = localStorage.getItem("userEmail") || "aiba@gmail.com";
    const storedAddress = localStorage.getItem("userAddress") || "бишкек, кыргызстан";
    setName(storedName);
    setEmail(storedEmail);
    setAddress(storedAddress);
  }, []);

  const handleSave = () => {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userAddress", address);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <IoPersonCircle className="text-gray-500 text-6xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Личный кабинет</h2>

        {isEditing ? (
          <div className="space-y-4">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Имя" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Адрес" />
            <button className="w-full bg-blue-500 text-white" onClick={handleSave}>Сохранить</button>
          </div>
        ) : (
          <div className="text-left space-y-3">
            <p><span className="font-semibold">Имя:</span> {name}</p>
            <p><span className="font-semibold">Email:</span> {email}</p>
            <p><span className="font-semibold">Адрес:</span> {address}</p>
            <button className="w-full bg-gray-700 text-white mt-4" onClick={() => setIsEditing(true)}>Редактировать</button>
          </div>
        )}
      </div>
    </div>
  );
}
