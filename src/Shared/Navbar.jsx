import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const { user, setUser } = useAuth()
    const navigate = useNavigate()

    const handleClick = () => {
        setClick(!click);
    };

    // logout user
    const HandelLogout = async () => {
        setUser(null)
        localStorage.removeItem("token")
        localStorage.removeItem("user");
        navigate('/login')
    }

    const menuItems = (
        <div className="lg:hidden md:hidden block absolute top-6 w-24 ">
            <ul className="text-center text-xl flex flex-col bg-slate-900 ">
                <div className="w-10 mx-auto mt-2 btn btn-ghost btn-circle">
                    {
                        user?.photoURL ? <img src={user.photoURL} alt="" className="w-10  rounded-full" /> :
                            <img className="w-10  rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    }
                </div>
                <NavLink to='/'>
                    <li className="py-2 px-2 underline text-white ">Home</li>
                </NavLink>


                <li onClick={HandelLogout}
                    className="py-2 px-2 underline text-white ">Sing Out</li>



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
                        <ul className="flex gap-6 mr-12 text-[18px] items-center">
                            <NavLink to='/'>
                                <li className="text-slate-900 hover:text-emerald-600 transition hover:border-b-2 border-slate-900 hover:border-emerald-600 cursor-pointer">Home</li>
                            </NavLink>

                            <li onClick={HandelLogout}
                                className="text-slate-900 hover:text-emerald-600 transition hover:border-b-2 border-slate-900 hover:border-emerald-600 cursor-pointer">Sing Out</li>




                        </ul>

                    </div>
                    <div className="mr-12 btn btn-ghost btn-circle">
                        {
                            user && user?.photoURL ? <img src={user.photoURL} alt="" className="w-10 rounded-full" /> :
                                <img className="w-10 rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        }
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
