import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <h1 className="text-7xl">Loading.....</h1>
    }


    return user ? children : <Navigate to={"/login"} state={{from: location}} replace></Navigate>


};

export default PrivateRoute;