import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './components/home/Home'
import Personajes from './components/Personajes'
import Episodios from './components/Episodios'
import Citas from './components/Citas'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Navegacion from './components/Navegacion';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Personajes",
    element: <Personajes/>,
  },
  {
    path: "/Episodios",
    element: <Episodios/>,
  },
  {
    path: "/Citas",
    element: <Citas/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <footer>Hola soy el footer</footer>
  </React.StrictMode>,
)
