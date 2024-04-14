import { useContext, useEffect, useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { NavBar } from "./UserTemplates/NavBar"
import { HomeIcon } from "../assets/Icons"
import { LinkedinIcon } from "../assets/Icons/Social-networks/LinkedInIcon"

export function MainTemplate() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, _signOut } = useContext(UserContext)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    
    // Este return no sé si es necesario, no veo diferencia si lo elimino (hecho por Chat GPT) 
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <header className={`${isScrolled ? "bg-gray-600 color-fondo-1 shadow-md h-22" : `${location.pathname === '/' ? 'bg-transparent h-32': 'bg-gray-600 color-fondo-1 shadow-md h-22'}` } fixed top-0 w-screen z-50 transition-all duration-300 ease-in-out`}>
          <div className={`${ location.pathname === '/' && isScrolled ? "m-2" : "m-2 mt-3" } p-3`}>
            <NavBar isScrolled={isScrolled}/>
          </div>
      </header>
      <main className="w-full">
          <section className="min-h-screen">
              <Outlet/>
          </section>
      </main>
      <footer className="flex flex-col text-sm text-white">
          <div className="flex items-center justify-center gap-8 p-2 bg-gray-600 color-fondo-2">
            <Link to='/'><HomeIcon/></Link>
            { user.uid ? <button className="p-1 rounded hover:bg-gray-500" onClick={_signOut}>Cerrar sesión</button> : <Link to='login'>Login</Link> }
          </div>
          {user.uid &&
            <div className="flex justify-center gap-8 p-2 bg-gray-900">
              <Link className="p-1 rounded hover:bg-gray-800" to='/admin-add-content'>Añadir contenido</Link>
              <Link className="p-1 rounded hover:bg-gray-800" to='/admin-edit-content'>Editar contenido</Link>
            </div>
          }
           <div className="flex flex-col items-center justify-center gap-4 p-4 text-center text-white bg-gray-800 color-fondo-1">
            <p>&copy; 2024 Dvpsico - Daniel González González</p>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/daniel-gonz%C3%A1lez-gonz%C3%A1lez-3322668a/">
              <LinkedinIcon/>
            </a>
            </div>
      </footer>
      </>
    )
}
