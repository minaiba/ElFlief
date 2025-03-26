import React from 'react'
import toho from '../../assets/syrgak/aksii.webp'

export default function StokssA() {
    return (
        <div style={{ backgroundImage: `url(${toho})` }} className='py-[46px]'>
            <div className='w-[1400px] relative m-auto'>
                <div className="relative text-black mr-5 group-hover:text-gray-400">
                    <p className="text-2xl font-medium"> 17 — 22 марта</p>
                    <h2 className="text-7xl mt-[20px] font-bold">подарок от Moschino</h2>
                    <p className="text-xl mt-[40px]">миниатюра аромата Toy 2</p>
                    <button className='border-2 bg-[black] text-white mt-74 w-[300px] h-[40px] cursor-pointer'>Перейти к товаром</button>
                </div>
            </div>
        </div>
    )
}