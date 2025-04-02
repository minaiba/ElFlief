import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsBasket } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { cat, cata, hair, log, logo, sokolov } from './catalogg';
import { addToCart } from '../../ElFlief/CartSlice';
import { addCart } from '../../ElFlief/FavoritesSlide';
import { Link } from 'react-router-dom';
import Cat from "./Cat";

export default function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className='max-w-[1400px] w-full mx-auto px-4'>
      <h1 className='flex justify-center py-10 text-2xl sm:text-3xl md:text-4xl font-bold'>Каталог</h1>      
      <Category title='Asia' products={log} setSelectedProduct={setSelectedProduct} />
      <Category title='Макияж' products={cata} setSelectedProduct={setSelectedProduct} />
      <Category title='Парфюм' products={cat} setSelectedProduct={setSelectedProduct} />
      <Category title='Техника' products={logo} setSelectedProduct={setSelectedProduct} />
      <Category title='Для волос' products={hair} setSelectedProduct={setSelectedProduct} />
      <Category title='Декорации' products={sokolov} setSelectedProduct={setSelectedProduct} />

      {selectedProduct && <Cat log={selectedProduct} onClose={() => setSelectedProduct(null)} />} 
      {selectedProduct && <Cat cata={selectedProduct} onClose={() => setSelectedProduct(null)} />} 
      {selectedProduct && <Cat sokolov={selectedProduct} onClose={() => setSelectedProduct(null)} />} 
    </div>
  );
}

function Category({ title, products, setSelectedProduct }) {
  return (
    <>
      <h2 className='pl-2 sm:pl-6 md:pl-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-5 pt-10 font-mono text-[#170b2c]'>
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} setSelectedProduct={setSelectedProduct} />
        ))}
      </div>
    </>
  );
}

function ProductCard({ product, setSelectedProduct }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
  };

  const handleAddCart = () => {
    dispatch(addCart(product)); 
  };

  return (
    <div 
      className="relative w-[95%] sm:w-[90%] md:w-[320px] bg-white p-3 sm:p-4 rounded-lg cursor-pointer"
      onClick={() => setSelectedProduct(product)}
    >
    <div className="relative w-[95%] sm:w-[90%] md:w-[320px] bg-white p-3 sm:p-4 rounded-lg cursor-pointer">
      <img src={product.img} className="w-full h-[180px] sm:h-[200px] rounded-lg object-cover" />
      <h3 className="hover:text-[#9ca887] font-mono mt-3 sm:mt-4 text-right text-xs sm:text-sm md:text-base">
        {product.title}
      </h3>
      <h1 className="hover:text-[#9ca887] font-medium text-base sm:text-lg md:text-2xl text-right">
        {product.name}
      </h1>
      <Link to='/favorites' onClick={handleAddCart}>
        <IoHeartOutline className="absolute top-6 ml-[255px] w-[20px] h-[20px] cursor-pointer hover:text-red-500" />
      </Link>
      <Link to='/cart' onClick={handleAddToCart}>
        <BsBasket className="absolute left-[270px] bottom-[49%] w-[20px] h-[20px] cursor-pointer hover:text-green-500" />
      </Link>
      <div className="flex justify-end mt-2 items-center">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl hover:text-[#9ca887]">
          {product.price} ₽
        </h1>
        <h3 className="ml-2 sm:ml-3 text-gray-600 text-xs sm:text-sm md:text-xl hover:text-[#9ca887]">
          <del>{product.count} ₽</del>
        </h3>
      </div>
    </div>
    </div>
  );
}

