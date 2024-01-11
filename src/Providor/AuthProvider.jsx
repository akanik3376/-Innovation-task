/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../Configuration/firebase.config"
import useAxiosPublic from "../Hooks/axiosPublic";



export const AuthContext = createContext()
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const axiosPublic = useAxiosPublic()
    // Login with google
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)
    }

    // create user with email & password
    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password,)
    }


    const LoginUser = () => {

        setIsLoading(true);

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
            })
        })
            .then(res => res.json())
            .then(data => {
                setUser(data);
                console.log(data);
            })
            .catch(error => {
                // Handle any error that occurs during the login process
                console.error('Login failed:', error);
            })
            .finally(() => {
                // Set loading state to false whether login is successful or not
                setIsLoading(false);
            });
    }


    // Logout user 
    const logoutUser = () => {
        setIsLoading(true)
        return signOut(auth)
    }

    // update user
    const updateProfileUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    }


    // User set and dependency

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setIsLoading(false)
            if (currentUser) {

                if (currentUser) {
                    const userInfo = { email: currentUser.email }

                    // axiosPublic.post('/auth/login', userInfo)
                    //     .then(res => {
                    //         if (res.data.token) {
                    //             localStorage.setItem('access-token', res.data.token)
                    //             console.log(res.data)
                    // setIsLoading(false)
                    //         }
                    //     })
                }
                else {
                    // localStorage.removeItem('access-token')
                    // setIsLoading(false)
                }


            }
            else {
                // localStorage.removeItem('access-token')

            }
        });
        return () => {
            unSubscribe()
        }
    }, [axiosPublic])


    // set value & send value object as a props
    const usersInfo = {
        user,
        isLoading,
        googleLogin,
        createUser,
        LoginUser,
        logoutUser,
        updateProfileUser,
        setIsLoading,
        setUser
    }

    return (
        <AuthContext.Provider value={usersInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;