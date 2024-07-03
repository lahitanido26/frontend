import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import store and provider
import store from './app/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap provider around App and pass store as prop */}
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
)