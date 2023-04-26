import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Authprovider from './pages/Authprovider.jsx'
import PrivateRoute from './PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element :<App></App>,
    errorElement : 'Page not found',
    children : [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/signup',
        element : <Signup></Signup>
      },
      {
        path:'/signin',
        element : <Signin></Signin>
      },
      {
        path:'/dashboard',
        element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<Authprovider>
<RouterProvider router={router}></RouterProvider>
</Authprovider>
)
