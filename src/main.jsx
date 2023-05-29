<<<<<<< HEAD
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./authProvider/AuthProvider";
import "./index.css";
import router from "./routes/router.jsx";
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-screen-xl mx-auto w-full">
          <RouterProvider router={router} />
        </div>{" "}
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider'
import './index.css'
import router from './routes/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='max-w-screen-xl mx-auto w-full'>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </div>

)
>>>>>>> 29b902f2e8cddd0dc3712053eb9115946ee1e947
