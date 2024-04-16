import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider ,Navigate} from "react-router-dom";
import Login from "./Pages/Front/Login.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Signup from "./Pages/Front/Signup.jsx";
import Courses from "./Pages/Front/Courses.jsx";
import Hero from "./Pages/Front/Hero";
import GuestLayout from "./Layouts/GuestLayout.jsx";
import AdminLayout from "./Layouts/AdminLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Students from "./components/Students";
import Users from "./Pages/Dashboard/Users";
import { ContextProvider } from "./Contexts/ContextProvider";


const router = createBrowserRouter([
  { 
      path:'/',
      element:<AdminLayout/>,
      children:[
          {
            path:'/',
            element:<Navigate to="/users"/ >
          },
          {
              path:'/dashboard',
              element:<Dashboard/ >
          },
          {
            path:'/users',
            element:<Users/ >
          },
          {
            path:'/student',
            element:<Students/ >
          },
          
         
      ]
  },

{ 
  path:'/',
  element:<GuestLayout/>,
  children:[
      {
          path: '/login',
          element: <Login/>
      },
  
      {
          path: '/signup',
          element: <Signup/>
      },
      
      {
          path: '/home',
          element: <Hero/>
      },
      {
          path:'/courses',
          element: <Courses/>
      },
  ]
},
  

  
  {
      path: '*',
      element: <ErrorPage/>
  }

])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
  </React.StrictMode>
);
