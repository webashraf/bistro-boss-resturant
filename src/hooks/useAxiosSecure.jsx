import { useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { async } from "@firebase/util";

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  // Create axios instance with base URL
  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() => {
    // Add a request interceptor
    axiosSecure.interceptors.request.use(
      (config) => {
        // Get the token from local storage
        const token = localStorage.getItem("token");
        if (token) {
          // Add authorization header
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        // Check for 401 or 403 responses
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          // Log out the user and redirect to login page
        //   //   logOutAndRedirect();
        //   Call the logout method from AuthContext
          await logOut();

        //   Redirect the user to the login page
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    // const logOutAndRedirect = async () => {
    //   // Call the logout method from AuthContext
    //   await logOut();

    //   // Redirect the user to the login page
    //   navigate('/login');
    // };
  }, [navigate, logOut, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
