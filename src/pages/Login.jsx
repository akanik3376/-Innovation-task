import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { handleSubmit, control, register, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data.password);
        // Login hare
    };

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

                <div className="mb-4">
                    <label htmlFor="password" className="block text-black text-sm font-semibold mb-2">Password</label>
                    <input type="password" id="password" {...register("password", { required: "Password is required" })} placeholder="Enter your password" className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`} />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>


                <div className="mt-6">
                    <button type="submit" className="btn  btn-outline text-black  hover:text-white border-0 border-b-4 hover:border-blue-600 border-blue-600 w-full hover:bg-blue-600">Sing In</button>
                </div>
            </form>

            <div className='mt-5'>
                <p>Don't have a account? please <Link to='/register'>
                    <span className='text-purple-600 underline'>Registration</span>
                </Link></p>
            </div>

        </div>
    );
};

export default Login;