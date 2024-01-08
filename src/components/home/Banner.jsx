import React from 'react';
import image from '../../assets/images/laptop.jpg';

const Banner = () => {
    return (
        <header className="mt-2 hero h-[80vh] object-cover" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl cursor-pointer">
                    <h1 className="mb-5 text-4xl font-semibold">"Unleash Fashion, Elevate Comfort – Where Style Meets Simplicity, Shop Smart, Shop Now!"</h1>

                    <button className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 border rounded-l-full rounded-r-full font-semibold">Get Started</button>
                </div>
            </div>
        </header>
    );
};

export default Banner;
