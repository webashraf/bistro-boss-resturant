import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <h1 className="text-7xl">Loading.....</h1>
    }


    return user ? children : <Navigate to={"/login"} state={{from: location}}></Navigate>


};

export default PrivateRoute;