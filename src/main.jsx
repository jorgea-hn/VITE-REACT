import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './components/home/Home'
import Personajes from './components/Personajes'
import Episodios from './components/Episodios'
import Citas from './components/Citas'

import { HashRouter,Routes,Route } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/Personajes' element={<Personajes/>}></Route>
          <Route path='/Episodios' element={<Episodios/>}></Route>
          <Route path='/Citas' element={<Citas/>}></Route>
        </Route>
      </Routes>
    </HashRouter>

  </React.StrictMode>,
)
