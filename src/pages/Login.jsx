import React from 'react';
import { Controller, useForm } from 'react-hook-form';

const Login = () => {
    const { handleSubmit, control, register, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data.password);
        // Login hare
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
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

            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-600 text-sm font-bold mb-2">Password:</label>
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="password"
                            placeholder='password'
                            className={`p-3 border rounded w-full focus:outline-none focus:border-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        />
                    )}
                    rules={{
                        required: 'Password is required',
                        minLength: { value: 6, message: 'Password must be at least 6 characters' },
                        pattern: {
                            value: /^(?=.*[A-Z])(?=.*[@$!%*?&])/,
                            message: 'Password must include at least one uppercase letter,  and one special character',
                        },
                    }}
                />
                {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                )}
            </div>

            <button type="submit" className="bg-blue-500 text-white p-3 w-full font-semibold rounded-md  hover:bg-blue-600">Sign In</button>
        </form>

    );
};

export default Login;