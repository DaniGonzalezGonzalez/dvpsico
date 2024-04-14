/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function IndicePantallaPequena({textAlign, setMenuOpen}) {
    const handleScrollToEdit = (idIndice) => {
        const editContentElement = document.getElementById(idIndice)
        if (editContentElement) {
          editContentElement.scrollIntoView({ behavior: "smooth" })
        }
        setMenuOpen(false)
      }

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }

  return (
    <div className="flex flex-col justify-center w-3/4 gap-3 mx-3 mt-6 mb-2 text-xs text-white sm:text-base sm:hidden font-montserrat">
        <Link to onClick={scrollToTop} className={`${textAlign} text-white font-montserrat text-link-underline`}>Inicio</Link>
        <Link to onClick={() => handleScrollToEdit('indice-informacion-canal')} className={`${textAlign} text-white font-montserrat text-link-underline`}>Información del canal</Link>
        <Link to onClick={() => handleScrollToEdit('indice-programas')} className={`${textAlign} text-white font-montserrat text-link-underline`}>Programas</Link>
        <Link to onClick={() => handleScrollToEdit('indice-horario')} className={`${textAlign} text-white font-montserrat text-link-underline`}>Horario</Link>
        <Link to onClick={() => handleScrollToEdit('indice-formas-apoyo')} className={`${textAlign} text-white font-montserrat text-link-underline`}>Apoyo</Link>
        <Link to onClick={() => handleScrollToEdit('indice-agradecimientos')} className={`${textAlign} text-white font-montserrat text-link-underline`}>Agradecimientos</Link>
    </div>
  )
}
