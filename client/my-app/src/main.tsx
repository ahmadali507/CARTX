import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {  QueryClientProvider } from 'react-query'
import queryClient from './components/Comp/utils/fetchData'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>

  <React.StrictMode>
      <App />
  </React.StrictMode>,
  </QueryClientProvider>
)
