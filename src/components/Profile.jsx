import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const {currentUser, logout, loading} = useAuth();

    const navigate = useNavigate()

    const handleLogout = async (e)=>{
        await logout()
        try{
            navigate("/login")
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div>
        {(loading)?<h2>Cargando</h2>:<h2>Bienvenido! {currentUser.email}</h2>}
        
        <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  )
}

export default Profile