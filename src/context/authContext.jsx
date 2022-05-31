import React, {createContext, useContext, useEffect, useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateCurrentUser, signOut } from 'firebase/auth';
import {auth} from '../Firebase'



const authContext = createContext();

export const useAuth = ()=>{
    const context = useContext(authContext)
    return context
}

export function AuthProvider ({children}){ /*Lo que hacemos con children es indicar que va a mandar algo a sus hijos, en este caso user*/
    const [currentUser,setCurrentUser] = useState(null)
    const [loading,setLoading] = useState(true)
    
    useEffect(()=>{
        onAuthStateChanged(auth, async updateCurrentUser=>{
            const updateUser = await updateCurrentUser
            await setCurrentUser(updateCurrentUser)
            await setCurrentUser(updateUser)
            setLoading(false)
            console.log(updateUser)
        })
    },[])
    
    const signup = (email,password)=> 
        createUserWithEmailAndPassword(auth,email,password); /*CONCHA DE TU HERMANA, 300 AÑOS ¡data2 tenia que poner la funcion en forma de return, AHORA el catch me reconoce el error, antes estaba dentro de {} */
    
    const login = (email,password)=> signInWithEmailAndPassword(auth,email,password);
   
    const logout =()=>{ 
        signOut(auth)
    }

    return(
        <authContext.Provider value={{signup, login, currentUser, logout,loading}}> {/*IMPORTANTISIMO QUE EL SIGNUP ESTE DENTRO DE {}, no termino de entender por qué ¡data1 */}
            {children}
        </authContext.Provider>
    )
}

/*Lo que usamos es el context, pero el authprovider nos permite usarlo en diversos lugares (eso dijo el chabon, dsps vemos como funka y actualizo)*/

/*Ak toy devuelta. Ya entendí
con el children de la funcion main le indicamos que recibe, children (nombre generico)
al poner children dento del provider, le estamos indicando que lo que va a tener en su interior son los children, a los cuales les va a mandar (y creo q recibir) informacion */