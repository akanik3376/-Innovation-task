import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth'
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { handleSubmit, control, register, formState: { errors } } = useForm();
    const [isShow, setIsShow] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')
    const { LoginUser, googleLogin } = useAuth()

    // navigate user after login
    const location = useLocation()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        // console.log(data.password);
        const email = data.email
        const password = data.password
        // login user
        LoginUser(email, password)
            .then(res => {
                if (res) {
                    setSuccessMsg("User login success fully");
                    navigate(location?.state ? location.state : '/')
                }
            })
            .catch(err => console.log(err))
    };

    // login with google
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

    return (

        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} >
                <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 text-sm font-bold mb-2">Email:</label>
                    <input
                        {...register('email', { required: 'Email is required' })}
                        type="email"
                        placeholder='email'
                        className={`p-3 border rounded w-full focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <div className='flex justify-between'>
                        <label htmlFor='password' className='text-sm mb-2'>
                            Password
                        </label>
                    </div>
                    <input
                        type={isShow ? 'text' : 'password'}
                        name='password'
                        autoComplete='current-password'
                        id='password'
                        required
                        placeholder='*******'
                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900 relative'

                    />

                </div>
                <div className='mt-3 flex items-center gap-x-2'>
                    <input onClick={() => setIsShow(!isShow)} className='text-2xl' type="checkbox" name="" id="" />
                    <p> Show password</p>
                </div>
                <div className="mt-4">
                    <button type="submit" className="btn  btn-outline text-black  hover:text-white border-0 border-b-4 hover:border-blue-600 border-blue-600 w-full hover:bg-blue-600">Sing In</button>
                </div>
            </form>

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
            <div className='mt-5'>
                <p>Don't have a account? please <Link to='/register'>
                    <span className='text-purple-600 underline'>Registration</span>
                </Link></p>
            </div>

        </div>
    );
};

export default Login;