// NFTCard.js
import React from 'react';

function NFTCard({ image, name, price }) {
    return (
        <div className="max-w-md mx-auto overflow-hidden bg-gray-800 rounded-lg shadow-lg m-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
            <img className="object-cover w-full h-40" src={image} alt={name} />
            <div className="py-5 text-center">
                <h1 className="text-xl font-bold text-white">{name}</h1>
                <p className="text-lg text-blue-400">{price} SOL</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <span className="text-yellow-300 hover:text-yellow-400 cursor-pointer">Details</span>
                <button className="px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Select</button>
            </div>
        </div>
    );
}

export default NFTCard;
