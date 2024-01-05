import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
// import useAxiosPublic from "../Hooks/axiosPublic";

const Register = ({ userData }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [successMsg, setSuccessMsg] = useState('')
    const [isShow, setIsShow] = useState(false)

    // navigate user after register
    const location = useLocation()
    const navigate = useNavigate()

    const { createUser, googleLogin, updateProfileUser } = useAuth()
    // const axiosPublic = useAxiosPublic()

    const onSubmit = (data) => {
        const username = (`${data.firstName + data.lastName} `)
        const email = data.email
        const firstName = data.firstName
        const lastName = data.lastName
        const gender = data.gender
        const image = data.image || '...'
        const password = data.password


        // create user
        createUser(email, password)
            .then(res => {
                const loggerUser = res.user
                console.log(res)

                // updateProfileUser(name, image)
                //     .then(() => {
                //         const userInfo = {
                //             username, email,
                //             firstName, lastName,
                //             gender, image,
                //             password
                //         };

                //         axiosPublic.post('/auth/login', userInfo)
                //             .then(res => {
                //                 console.log(res);
                //                 setSuccessMsg('User created update successfully');
                //                 navigate(location?.state ? location.state : '/')
                //             })
                //             .catch(error => {
                //                 console.error('Error creating user:', error);
                //             });
                //     })
                setValue("firstName", "");
                setValue("lastName", "");
                setValue("email", "");
                setValue("image", "");
                setValue("gender", "");
                setValue("password", "");

                setSuccessMsg('User created successfully');
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => console.log(err))
    };

    // google register
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
        <div className="min-h-screen flex flex-col items-center justify-center border ">
            <div className="bg-white p-8 rounded  w-full md:w-2/4 shadow-md">

                <form onSubmit={handleSubmit(onSubmit)} >
                    <h2 className="text-2xl text-center text-black font-semibold mb-4">Register</h2>
                    <p className="my-3">{successMsg}</p>
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

                    <div className="mt-6">
                        <button type="submit" className="btn  btn-outline text-black  hover:text-white border-0 border-b-4 hover:border-blue-600 border-blue-600 w-full hover:bg-blue-600">Submit</button>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div onClick={HandelGoogleLogin}
                    className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </div>
                <div className="mt-5">
                    <p>Already have a account? <Link to='/login'><span className='text-purple-600 underline'>Sing in</span></Link></p>
                </div>

            </div>
        </div>
    );
};

export default Register;
