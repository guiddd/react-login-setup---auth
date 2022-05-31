import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function ProtectedRoutes({children}){
    const {currentUser, loading} = useAuth()
    
    if(loading) return <h1>loading</h1>

    if(!currentUser) return <Navigate to="/login"/>

    return <>{children}</>
}

/*En vez de enrutar en la app, lo hace en este componente

funciona como le auth. RECIBE de parametro lo que le terminamos devolviendo en el RETURN, con una modificanción. en el auth, con os valores, acá, los devuelve SOLO si se cumplen las condiciones*/