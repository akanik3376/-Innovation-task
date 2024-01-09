import React, { useState } from 'react';
import Slider from '../Slider';
import { BsCurrencyDollar } from 'react-icons/bs';

const Card = ({ product }) => {
    const [cartTotal, setCartTotal] = useState(0);

    const { images, title, stock, rating, price, brand, description, discountPercentage } = product || '';

    const HandelAddToCard = (price) => {
        const priceValue = typeof price === 'string' ? parseFloat(price) : price;
        setCartTotal((prevTotal) => prevTotal + priceValue);
    };
    console.log(cartTotal)
    return (
        <div className="rounded-md border border-slate-500 p-3 hover:border-red-600">

            <div className="flex flex-col space-y-3">
                <Slider img={images} />

                <p className="bg-black text-red-700 rounded text-center w-24 px-2">{discountPercentage}% off</p>

                <div className="mt-6 p-2">
                    <h2 className="card-title text-black">{title}</h2>
                    <h6 className='font-semibold text-black '>Brand: {brand}</h6>
                    <p className="text-black">{description}</p>

                    <div className="card-actions justify-between">
                        <p className="text-red-700">available: {stock}</p>

                        <p>
                            {Array.from({ length: 5 }, (_, index) => (
                                <span
                                    key={index}

                                    style={{
                                        cursor: 'pointer',
                                        color: index + 1 <= Math.floor(rating) || index + 0.5 <= rating ? 'gold' : 'gray',
                                    }}
                                >
                                    {index + 1 <= Math.floor(rating) ? '★' : '☆'}
                                </span>
                            ))}
                        </p>
                    </div>

                    <div className="card-actions justify-between mt-4 flex items-center">
                        <p className="flex items-center text-red-600">
                            <BsCurrencyDollar />
                            {price}
                        </p>
                        <button onClick={() => HandelAddToCard(price)}
                            className="btn  btn-outline text-black  hover:text-white border-0 border-b-4 hover:border-green-500 border-green-500 hover:bg-green-500 font-semibold">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
