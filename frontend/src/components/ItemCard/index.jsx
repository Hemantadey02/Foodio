import React from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'

const ItemCard = ({ item, increaseQuantity, decreaseQuantity, removeFromCart }) => {
    return (
        <div className="shadow-md rounded-lg p-2 mb-3">
            <div className='flex justify-center items-center'>
                <MdDelete
                    onClick={() => {
                        removeFromCart(item.id);
                        toast(`${item.userName} removed!`, {
                            icon: "👋"
                        });
                    }}
                    className="absolute mt-20 right-[220px] text-gray-600 cursor-pointer hover:text-red-500 transition-all ease-linear"
                />
            </div>
            <div className="flex justify-around">
                <div className='flex justify-center items-center'>
                    <img src={item.userImage} alt="Product Image" className="w-20 h-20 " />
                </div>
                <div className="flex min-w-[150px] justify-center items-center">
                    <h2 className="font-bold text-gray-800">{item.userName.length > 17 ? `${item.userName.slice(0, 14)}...` : item.userName.padEnd(17, ' ')}</h2>
                </div>
                <div className="flex justify-center items-center">
                    <span className="text-green-500 font-bold">₹{item.userPrice}</span>
                </div>
                <div className="flex justify-end items-center gap-2">
                    <AiOutlineMinus
                        onClick={() => decreaseQuantity(item.id)}
                        className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
                    />
                    <span>{item.quantity}</span>
                    <AiOutlinePlus
                        onClick={() => increaseQuantity(item.id)}
                        className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
                    />
                </div>
                <div className='flex justify-center items-center gap-8'>
                    <div className="text-green-500 font-bold">₹{item.userPrice * item.quantity}</div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
