import { useRef, useState } from "react";
import { useUser } from "../../../hooks/useUser";

export function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const usernameRef = useRef()
    const passwordRef = useRef()

    const { _signInWithEmailAndPassword, _signOut, error, message } = useUser()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleCerrarSesion = () => {
        _signOut()
    }

    const handleSubmit = (e) => {
        e.preventDefault()   
        if (!email.length) {
            usernameRef.current.focus()
            return
          }
          if (!password.length) {
            passwordRef.current.focus()
            return
          }     
        _signInWithEmailAndPassword(email, password)
    }

  return (
    <>     
        <fieldset className="flex flex-col items-center justify-center gap-3 p-8 bg-gray-600 rounded">
            <form className="flex flex-col items-start justify-center gap-3 text-white" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="email">Email</label>
                    <input className="p-2 text-xs text-gray-900 rounded" ref={usernameRef} placeholder="useremail@gmail.com" id='email' type="text" value={email} onChange={handleEmail}/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="password">Password</label>
                    <input className="p-2 text-xs text-gray-900 rounded" ref={passwordRef} placeholder="******" id='password' type="password" value={password} onChange={handlePassword} />
                </div>
                <div className="flex justify-center w-full mt-6 mb-3"><button className="p-2 text-white bg-gray-900 rounded hover:bg-green-600">Iniciar sesión</button></div>
            </form>
            <button className="p-2 text-white bg-gray-900 rounded hover:bg-red-600" onClick={handleCerrarSesion}>Cerrar Sesión</button>

            {error && <div className="p-2 mt-4 text-white bg-red-700 rounded">{message}</div>}
        </fieldset>
    </>
  )
}
