import './App.css';
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {AuthProvider} from './context/authContext'; /*Lo estamos importando en el App para q esta pase la informacion a cada componente (y no importarlo en cda una)*/
import { useAuth } from './context/authContext';
import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import { ProtectedRoutes } from './components/ProtectedRoutes';

function App() {

  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<ProtectedRoutes>
              <Home/> {/*La ruta "/" tendría a la home, pero le estamos poniendo la protegida. Al estar la protegida, ejecuta el codigo de esta, quennos redirecciona a  */}
            </ProtectedRoutes>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
    </div>
  );
}

export default App;
