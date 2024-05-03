import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FizzBuzz } from './Components/Apps/FizzBuzz.jsx'
import { FizzFib } from './Components/Apps/FizzFib.jsx'
import { Fib } from './Components/Apps/Fib.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'fizzbuzz',
        element: <FizzBuzz/>
      },
      {
        path: 'fizzfib',
        element: <FizzFib/>
      },
      {
        path: 'fibonacci',
        element: <Fib/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
