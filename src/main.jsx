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
