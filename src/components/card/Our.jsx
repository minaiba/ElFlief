import React, { useState } from 'react'
import { IoHeartOutline } from 'react-icons/io5'
import { BsBasket } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Siddebar from './siddebar'
import { news } from './data'
import { useDispatch } from 'react-redux'


export default function Our({ product }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };
    const handleAddCart = () => {
        dispatch(addCart(product));
    };

    return (
        <div className="max-w-[1400px] m-auto flex flex-wrap gap-10">
            {news.map((product) => (
                <div
                    key={product.id}
                    className="relative w-[320px] bg-white p-4 rounded-lg cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                >
                    <Link to='favorites' onClick={handleAddCart}><IoHeartOutline className="absolute top-6 ml-[10px] w-[20px] h-[20px] cursor-pointer hover:text-red-500" /> </Link>
                    <Link to='cart' onClick={handleAddToCart}> <BsBasket className="absolute left-68 bottom-[170px] w-[20px] h-[20px] cursor-pointer hover:text-green-500" /></Link>
                    <img src={product.img} alt={product.title} className="w-[320px] h-[200px] rounded-lg" />
                    <h3 className="hover:text-[#9ca887] font-mono mt-4 text-right">{product.title}</h3>
                    <h1 className="hover:text-[#9ca887] font-medium text-2xl text-right">{product.name}</h1>
                    <div className="flex justify-end text-2xl mt-2">
                        <h1 className="font-bold hover:text-[#9ca887]">от {product.price} ₽</h1>
                    </div>
                </div>
            ))}
            {selectedProduct && <Siddebar product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
        </div>
    )
}
