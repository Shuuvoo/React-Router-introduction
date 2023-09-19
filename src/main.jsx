import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";

import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Users from "./components/Users/Users.jsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <div>Hello From React Router</div>,
  // },
  // {
  //   path: "/about",
  //   element: <div>i am in the router page</div>,
  // },
  // {
  //   path:'/contact',
  //   element: <div>I am in the contact page</div>
  // },
  {
    path:'/',
    element: <Home></Home>,
    children: [
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      }
    ]
  },
  // {
  //   path:'/NavBar',
  //   element: <NavBar></NavBar>,
  // }

  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
