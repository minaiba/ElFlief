import React, { useState } from 'react'
import { IoHeartOutline } from 'react-icons/io5'
import { BsBasket } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Siddebar from './siddebar'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../ElFlief/CartSlice'
import { addCart } from '../../ElFlief/FavoritesSlide'
import { news } from './data'
export default function Our({ product }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const dispatch = useDispatch();
    const [visibleCount, setVisibleCount] = useState(8);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 8);
    };
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };
    const handleAddCart = () => {
        dispatch(addCart(product));
    };

    return (
        <div className="max-w-[1400px] m-auto flex flex-wrap gap-10 mb-[50px]">
            {news.slice(0, visibleCount).map((product) => (
                <div
                    key={product.id}
                    className="relative w-[320px] bg-white p-4 hover: rounded-lg cursor-pointer shadow-xl"
                >
                    {/* <Link to='favorites' onClick={(e) => { e.stopPropagation(); handleAddCart(product); }}> */}
                        <IoHeartOutline onClick={handleAddCart} className="absolute top-6 ml-[10px] w-[30px] h-[30px] cursor-pointer hover:text-red-500" />
                    {/* </Link> */}
                    {/* <Link to='cart' onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}> */}
                        <BsBasket onClick={handleAddToCart} className="absolute left-66 top-43 w-[30px] h-[30px] cursor-pointer hover:text-green-500" />
                    {/* </Link> */}
            {selectedProduct && <Siddebar product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
                    <img  src={product.img} alt={product.title} className="w-[320px] h-[200px] rounded-lg" />
                    <h3 className="hover:text-[#9ca887] font-mono mt-4 text-right">{product.title}</h3>
                    <h1 onClick={() => setSelectedProduct(product)} className="hover:text-[#9ca887] font-medium text-2xl text-right">{product.name}</h1>
                    <div className="flex justify-end text-2xl mt-2">
                        <h1 className="font-bold hover:text-[#9ca887]">от {product.price} ₽</h1>
                    </div>
                </div>
            ))}

            {visibleCount < news.length && (
                <button
                    className="bg-black text-white px-56 py-4 cursor-pointer rounded-lg mt-4 mx-auto block hover:bg-white hover:text-black"
                    onClick={handleLoadMore}
                >
                    Показать больше товаров
                </button>
            )}


        </div>
    )
}


