import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/index.tsx'

import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  </React.StrictMode>,
)
