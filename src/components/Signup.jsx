import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const defaultData = {
    displayName:'',
    email:'',
    password:''
}
  const navigate = useNavigate();
  
  const [user,setUser] = useState(defaultData) /*Para que no me tire error, lo dejo asi en vez de "useState([defaultData])", si quiero operarlo como array, lo convierto en array en otra funcion  */

  const [error,setError] = useState("")

  const {signup,logout} = useAuth(); /*OJO OJISIMO, ESTO TIENE QUE ESTAR DENTRO DE {}, tdvia no entiendo por que. en el auth TAMBIEN ¡data1 */

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      await signup(user.email,user.password)
      await logout() /*Para que dsps de registrase deba iniciar sesion */
      navigate("/login");
    }catch(err){        /*NO LO PUEDO CREER, TE ODIO JS, no me reconocia el error por error de sintaxis en auth ¡data2*/
      await setError(err.message);
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Registrarse</h2>
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
        {(error == "Firebase: Error (auth/invalid-email).") ? <p>Mail inválido</p> :""}
        {(error == "Firebase: Error (auth/email-already-in-use).") ? <p>Mail en uso</p> :""}

        <input type="password"
        name='password'
        placeholder='*********'
        onChange={(e)=>
          setUser({...user,
            [e.target.name]:e.target.value})}
        value={user.password}
        required/>
        <br />
        {(error == "Firebase: Password should be at least 6 characters (auth/weak-password).") ? <p>Contraseña débil</p> :""}
        <button type='submit'>Registrarse</button>
      </form>
      {<Link to="/login">Ya tenés cuenta? Inicia sesión</Link>}
    </div>
  )
}

export default Signup

/*
<input name="name"
        type="text"
        placeholder='Your Name'
        onChange={(e)=>
          setUser({...user,
            [e.target.name]:e.target.value})}
        value={user.name}
        required /> 
        <br />



        const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      console.log(user)
      await signup(user.email,user.password)
      navigate("/");
    }catch(error){
      setError(error)
      console.log("TUVISTE UN ERROR")
    }
  }
 */