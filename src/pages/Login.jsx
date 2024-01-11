import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [isShow, setIsShow] = useState(false)
    const { googleLogin, setIsLoading, setUser } = useAuth()

    // navigate user after login
    const location = useLocation()
    const navigate = useNavigate()



    const HandelGoogleLogin = () => {
        googleLogin()
            .then(res => {
                if (res) {
                    setSuccessMsg("User login success fully");
                    navigate(location?.state ? location.state : '/')
                }
            })
            .catch(err => console.log(err))
    }

    const onSubmit = () => {
        setIsLoading(true);

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Login failed');
                }
                return res.json();
            })
            .then(data => {


                localStorage.setItem("token", data.token);


                // Perform token verification here
                verifyToken(data.token);
            })
            .catch(error => {
                console.error('Login failed:', error);
                localStorage.removeItem("token");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const verifyToken = (token) => {
        fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Token verification failed');
                }
                return res.json();
            })
            .then(data => {
                setUser(data);
                localStorage.setItem("user", JSON.stringify(data));
                navigate('/');
            })
            .catch(error => {
                console.error('Token verification failed:', error);

            });
    };



    return (

        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">

            <div onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <button type="submit" className="btn  btn-outline text-black  hover:text-white border-0 border-b-4 hover:border-blue-600 border-blue-600 w-full hover:bg-blue-600">Sing In</button>
            </div>

            <div className='flex items-center pt-4 space-x-1'>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                <p className='px-3 text-sm dark:text-gray-400'>
                    Sign up with social accounts
                </p>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            </div>
            <div onClick={HandelGoogleLogin}
                className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                <FcGoogle size={32} />

                <p>Continue with Google</p>
            </div>


        </div>
    );
};

export default Login;