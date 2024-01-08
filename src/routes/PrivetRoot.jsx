import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { isLoading, user } = useAuth();
    const location = useLocation();



    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[40vh]">
                <button className="btn">
                    <span className="loading loading-spinner"></span>
                    loading...
                </button>
            </div>
        );
    }
    if (!user) {
        return <Navigate to="/login"></Navigate>

    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
};

export default PrivateRoute;
