import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import { LoginForm } from "../../helpers/components/AdminComponents/LoginForm";

export function Login() {
  const { user } = useContext(UserContext)
  
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen color-fondo-2">
        <h1 className="my-16 text-white uppercase">Login</h1>
        <LoginForm/>
        <h3 className="p-10 text-center text-white">* ZONA EXCLUSIVA PARA ADMINISTRACIÓN DE LA WEB</h3>
        {user.uid && <Navigate to='/'/>}
      </div>
    </>
  )
}
