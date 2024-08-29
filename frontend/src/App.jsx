import React ,{useContext} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import { ToastContainer,toast } from "react-toastify";
import Layout from "./Layout.jsx";
import Course from './Components/Course.jsx'
import Login from './Components/Login.jsx'
import Middle from "./Components/Middle.jsx";
import About from "./Components/About.jsx";
import {  RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Contact from './Components/Contact.jsx'
import { MyContext } from "./Context/AuthContext.jsx";
 
function App() {

  const [authUser,setAuthUser] = useContext(MyContext)
   const router  = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
            <Route index element={<Middle/>} />
            <Route path='course'  element={authUser ? <Course /> : <Navigate to="/login" />}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='login' element={<Login/>}/>
      </Route>
    )
  );
  return (
    <>
        <div className="dark:bg-slate-900 dark:text-white">
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;


