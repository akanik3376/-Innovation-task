import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    const menuItems = (
        <div className="lg:hidden md:hidden block absolute top-6 w-24 ">
            <ul className="text-center text-xl flex flex-col bg-slate-900">
                <NavLink to='/'>
                    <li className="py-2 px-2 underline text-white hover:rounded">Home</li>
                </NavLink>
                <NavLink to='/login'>
                    <li className="py-2 px-2 underline text-white hover:rounded">Sing Up</li>
                </NavLink>
            </ul>
        </div>
    );

    return (
        <nav>
            <div className="h-10vh flex justify-between items-center z-50 text-white lg:py-5 px-20 md:px-4 md:container md:mx-auto py-4 shadow-md border-slate-900">
                {/* logo */}
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold uppercase text-black">Logo</span>
                </div>

                {/* for large/medium */}
                <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <NavLink to='/'>
                                <li className="text-slate-900 hover:text-emerald-600 transition hover:border-b-2 border-slate-900 hover:border-emerald-600 cursor-pointer">Home</li>
                            </NavLink>

                            <NavLink to='/login'>
                                <li className="text-slate-900 hover:text-emerald-600 transition hover:border-b-2 border-slate-900 hover:border-emerald-600 cursor-pointer">Sing Up</li>
                            </NavLink>

                            <NavLink to='/register'>
                                <li className="text-slate-900 hover:text-emerald-600 transition hover:border-b-2 border-slate-900 hover:border-emerald-600 cursor-pointer">Registration</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>

                {/* for small devices */}
                <div className="dropdown dropdown-bottom dropdown-right  md:hidden  ">
                    <button onClick={handleClick} className="block rounded-md transition text-slate-900 font-semibold " >
                        {click ? <FaTimes /> : <CiMenuFries />}
                    </button>
                    <div className="top-6">
                        {click && menuItems}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
