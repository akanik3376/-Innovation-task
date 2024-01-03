import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = ({ userData }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Handle form submission here
        console.log(data);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center border ">
            <div className="bg-white p-8 rounded  w-full md:w-2/4 shadow-md">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <h2 className="text-2xl text-center text-black font-semibold mb-4">Register</h2>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="firstName" className="block text-black text-sm font-semibold mb-2">First Name</label>
                            <input type="text" id="firstName" {...register("firstName", { required: "First Name is required" })} placeholder="Enter your first name" className={`w-full p-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded`} />
                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-black text-sm font-semibold mb-2">Last Name</label>
                            <input type="text" id="lastName" {...register("lastName", { required: "Last Name is required" })} placeholder="Enter your last name" className={`w-full p-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded`} />
                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-black text-sm font-semibold mb-2">Email</label>
                        <input type="email" id="email" {...register("email", { required: "Email is required" })} placeholder="Enter your email" className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`} />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="image" className="block text-black text-sm font-semibold mb-2">Image</label>
                        <input type="file" id="image" {...register("image")} className="w-full p-3 border border-gray-300 rounded" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-black text-sm font-semibold mb-2">Gender</label>
                        <select id="gender" {...register("gender", { required: "Gender is required" })} className={`w-full p-3 border ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded`}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-black text-sm font-semibold mb-2">Password</label>
                        <input type="password" id="password" {...register("password", { required: "Password is required" })} placeholder="Enter your password" className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`} />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="btn  btn-outline text-black  hover:text-white border-0 border-b-4 hover:border-blue-600 border-blue-600 w-full hover:bg-blue-600">Submit</button>
                    </div>
                </form>

                <div className="mt-5">
                    <p>Already have a account? <Link to='/login'><span className='text-purple-600'>Sing in</span></Link></p>
                </div>

            </div>
        </div>
    );
};

export default Register;
