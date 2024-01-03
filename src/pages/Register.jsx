import React from "react";
import { useForm } from "react-hook-form";

const Register = ({ userData }) => {
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (data) => {
        // Handle form submission here
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" {...register("username")} />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")} />
            </div>

            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" {...register("firstName")} />
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" {...register("lastName")} />
            </div>

            <div>
                <label htmlFor="gender">Gender</label>
                <select id="gender" {...register("gender")}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Register;
