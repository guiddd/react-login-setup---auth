import React, {useContext} from 'react';
import { useAuth } from '../context/authContext';
import {Link} from 'react-router-dom'

const Home = () => {
    const confirm = useAuth() /*para no andar importando el contexto en cada componente, importamos un hook personalizado que nos da el contexto y su info*/
    
  return (
    <div>
        <h1>Login - Setup - Auth | App 🦾😎</h1>
        <Link to="/profile"><button>Mi perfil</button></Link>
      <hr />
        <h3>Valen ayuda no me quedan neuronas, tengo sueño y rindo materias de uba☠☠ <br/>porfavor no me sprintes🙏</h3>
    </div>
  )
}

export default Home