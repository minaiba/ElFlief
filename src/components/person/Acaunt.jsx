import { useState, useEffect } from "react";
import { IoPersonCircle } from "react-icons/io5";

export default function Account() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setName(localStorage.getItem("userName") || "");
    setEmail(localStorage.getItem("userEmail") || "");
    setAddress(localStorage.getItem("userAddress") || "");
    setPassword(localStorage.getItem("userPassword") || "");
    setProfileImage(localStorage.getItem("profileImage") || null);
  }, []);

  const handleSave = () => {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userAddress", address);
    localStorage.setItem("userPassword", password);
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col pt-40 items-center justify-center min-h-screen p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <label htmlFor="profileImageInput" className="cursor-pointer">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
          ) : (
            <IoPersonCircle className="text-gray-500 text-6xl mx-auto mb-4" />
          )}
        </label>
        <input
          id="profileImageInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        <h2 className="text-2xl font-bold mb-4">Личный кабинет</h2>

        {isEditing ? (
          <div className="space-y-4">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Имя" className="my-5"/>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="ml-6"/>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Адрес"  className="my-5"/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль"  className="ml-6"/>
            <button className="w-full bg-gray-500 text-white mt-5 py-2 rounded-xl" onClick={handleSave}>Сохранить</button>
          </div>
        ) : (
          <div className="text-left space-y-3">
            <p><span className="font-semibold">Имя:</span> {name}</p>
            <p><span className="font-semibold">Email:</span> {email}</p>
            <p><span className="font-semibold">Адрес:</span> {address}</p>
            <button className="w-full bg-gray-700 text-white mt-4 py-2 rounded-xl" onClick={() => setIsEditing(true)}>Редактировать</button>
          </div>
        )}
      </div>
    </div>
  );
}

