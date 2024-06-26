import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from './Redux/store.ts'
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
      <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>

)
