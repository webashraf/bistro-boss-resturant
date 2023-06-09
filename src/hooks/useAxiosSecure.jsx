import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

  // Create axios instance with base URL
  const axiosSecure = axios.create({
    baseURL: "https://bistro-boss-server-mocha.vercel.app",
  });

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();


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
        //   Call the logout method from AuthContext
          await logOut();

        //   Redirect the user to the login page
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );


  }, [navigate, logOut]);

  return [axiosSecure];
};

export default useAxiosSecure;
