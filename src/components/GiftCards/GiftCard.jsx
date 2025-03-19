
import React from 'react';
import cart1 from '../../assets/gulasyl/bee2.webp'

export default function GiftCard() {

  const giftCardData = {
    name: 'Парфюм',
    brand: 'Коко',
    price: 11000,
    description: 'Элегантный и изысканный парфюм с ароматом цветов и фруктов.',
    image: cart1, 
  };

  return (
    <div className='w-[1400px] m-auto'>
    <div className="w-[300px] h-[400px] bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={giftCardData.image} alt={giftCardData.name} className="w-full h-[200px] object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{giftCardData.name}</h2>
        <p className="text-sm text-gray-600 mt-2">Фирма: {giftCardData.brand}</p>
        <p className="text-sm text-gray-600 mt-2">{giftCardData.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">{giftCardData.price} рублей</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Купить
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}