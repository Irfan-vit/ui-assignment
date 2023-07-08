import ReactDOM from 'react-dom/client'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProductProvider } from './context/ProductContext'
import App from './App.jsx'
import './index.css'

// Call make Server
makeServer()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <App />
      </ProductProvider>
    </QueryClientProvider>
  </BrowserRouter>,
)
