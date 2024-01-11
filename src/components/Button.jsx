import React from 'react';
import { MdVerticalAlignTop } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Button = ({ setCount }) => {
    return (
        <div className="flex justify-center gap-4 items-center my-8 ">
            {/* Button to load more products */}
            <button onClick={() => setCount(10)}
                className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 border rounded-l-full rounded-r-full font-semibold w-36 hover:text-white flex items-center"><AiOutlineLoading3Quarters className='font-semibold mr-2' /> Load more</button>

            {/* Button to back top */}
            <button onClick={() => window.scrollTo(0, 0)}
                className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 border rounded-l-full rounded-r-full font-semibold w-36 hover:text-white flex items-center"><MdVerticalAlignTop className='font-semibold text-2xl' /> Go To Top</button>


        </div>
    );
};

export default Button;