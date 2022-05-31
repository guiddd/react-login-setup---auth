import React, {useEffect, useState} from 'react'
import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const defaultData = {
    name:'',
    email:'',
    password:''
}
  const navigate = useNavigate();
  
  const [user,setUser] = useState(defaultData) /*Para que no me tire error, lo dejo asi en vez de "useState([defaultData])", si quiero operarlo como array, lo convierto en array en otra funcion  */

  const [error,setError] = useState("")

  const {login} = useAuth(); /*OJO OJISIMO, ESTO TIENE QUE ESTAR DENTRO DE {}, tdvia no entiendo por que. en el auth TAMBIEN ¡data1 */

  const {currentUser} = useAuth();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      await login(user.email,user.password)
      navigate("/")
    }catch(err){        /*NO LO PUEDO CREER, TE ODIO JS, no me reconocia el error por error de sintaxis en auth ¡data2*/
      await setError(err.message);
      console.log(error)
    }
  }

  return (
    <div>
        <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input name="email"
        type="text"
        placeholder='yourname@email.com'
        onChange={(e)=>
          setUser({...user,
            email:e.target.value})}
        value={user.email}
        required/> 
        <br />
        {(error == "Firebase: Error (auth/user-not-found).") ? <p>Usuario no registrado</p> :""}

        <input type="password"
        name='password'
        placeholder='*********'
        onChange={(e)=>
          setUser({...user,
            [e.target.name]:e.target.value})}
        value={user.password}
        required/>
        <br />
        {(error == "Firebase: Error (auth/wrong-password).") ? <p>Contraseña incorrecta</p> :""}
        <button type='submit'>Ingresar</button>
      </form>
      {<Link to="/signup">No tenés cuenta? Registrate</Link>}
    </div>
  )
}

export default Login