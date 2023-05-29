import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider'
import './index.css'
import router from './routes/router.jsx'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()





ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <div className='max-w-screen-xl mx-auto w-full'>
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  </AuthProvider>

)
