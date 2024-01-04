import { useContext } from "react";
import { AuthContext } from "../Providor/AuthProvider";

const useAuth = () => {
    const userInfo = useContext(AuthContext)
    // console.log(userInfo)
    return userInfo
};

export default useAuth;