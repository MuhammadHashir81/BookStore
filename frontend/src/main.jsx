import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider } from 'react-router-dom';
import { MyContextProvider } from './Context/AuthContext.jsx'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MyContextProvider>
    <App/>
  </MyContextProvider>
</React.StrictMode>

)
