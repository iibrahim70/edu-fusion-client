import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './global.css'
import { router } from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/Authprovider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import ThemeProvider from '../src/hooks/ThemeProvider';

const queryClient = new QueryClient(); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <ThemeProvider> */}
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    {/* </ThemeProvider> */}

  </React.StrictMode>,
)
