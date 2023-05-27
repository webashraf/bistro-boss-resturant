import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes/router.jsx'
import AuthProvider from './authProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<AuthProvider>
<div className='max-w-screen-xl mx-auto w-full'>
    <RouterProvider router={router} />
</div>
</AuthProvider>
  </React.StrictMode>,
)
