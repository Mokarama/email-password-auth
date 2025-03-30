import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Main from './layout/Main.jsx';
import Home from './component/Home/Home.jsx';

let router = createBrowserRouter([
  {
    path: "/",
   element:<Main></Main>,
   children:[
    {
      path:'/',
      element:<Home></Home>
    }
   ]
   
  },
 

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
