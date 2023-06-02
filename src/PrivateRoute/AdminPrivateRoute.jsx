import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const AdminPrivateRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    console.log("Admin Private Route", user, isAdmin);

    if (loading || isAdminLoading) {
        return <h1 className="text-7xl">Loading.....</h1>
    }



    return (user && isAdmin) ? children : <Navigate to={"/"} state={{from: location}} replace></Navigate>


};

export default AdminPrivateRoute;