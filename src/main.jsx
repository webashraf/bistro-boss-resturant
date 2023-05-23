import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router}>
    </RouterProvider>
</div>
  </React.StrictMode>,
)
