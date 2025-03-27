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
    <div className="flex flex-col justify-center w-4/5 gap-3 mx-1 mb-2 text-xs text-white rounded-xl sm:text-base sm:hidden font-montserrat">
        <Link to onClick={scrollToTop} className={`${textAlign} text-white font-montserrat text-link-underline`}>Inicio</Link>
        <Link to onClick={() => handleScrollToEdit('indice-informacion-canal')} title="Información del canal" className={`${textAlign} text-white font-montserrat text-link-underline`}>Información del proyecto</Link>
        <Link to onClick={() => handleScrollToEdit('indice-programas')} title="Programas" className={`${textAlign} text-white font-montserrat text-link-underline overflow-hidden truncate`}>Programas</Link>
        <Link to onClick={() => handleScrollToEdit('indice-horario')} title="Horario" className={`${textAlign} text-white font-montserrat text-link-underline overflow-hidden truncate`}>Horario</Link>
        <Link to onClick={() => handleScrollToEdit('indice-formas-apoyo')} title='Apoyo' className={`${textAlign} text-white font-montserrat text-link-underline overflow-hidden truncate`}>Apoyo</Link>
        <Link to onClick={() => handleScrollToEdit('indice-agradecimientos')} title='Agradecimientos' className={`${textAlign} text-white font-montserrat text-link-underline overflow-hidden truncate`}>Agradecimientos</Link>
    </div>
  )
}
