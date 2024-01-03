import React from 'react';
import Slider from '../Slider';

const Card = ({ product }) => {
    const { images, title, stock, rating, price, brand, description, discountPercentage } = product || ''
    return (
        <div className="rounded-md border border-slate-500 p-3 hover:border-red-600">

            <Slider img={images} />


        </div>
    );
};

export default Card;