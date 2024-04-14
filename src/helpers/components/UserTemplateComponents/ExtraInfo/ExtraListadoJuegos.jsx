import { useContext, useEffect, useState } from "react"
import { useGetData } from "../../../../hooks/useGetData"
import { ScrollToTopButton } from "../AnimationIndexComponents/ScrollToTopButton"
import { UserContext } from "../../../../context/UserContext"
import { useGetDataFiltrado } from "../../../../hooks/useGetDataFiltrado"

export function ExtraListadoJuegos() {
  const { archivosDisenoWeb, 
    listadoJuegos 
  } = useGetData()
  const [listadoJuegosOrdenado, setListadoJuegosOrdenado] = useState([])
  // const [hoveredItem, setHoveredItem] = useState(null)
  const [ordenSeleccionado, setOrdenSeleccionado] = useState('titulo')
  const { user } = useContext(UserContext)

  // Ver esto para la web de juegos (comentando el useEffect y poniendo el juegosFiltrados en el map con un index)
  // const { juegosFiltrados, error, isLoading} = useGetDataFiltrado('Switch')

  // console.log(user.email)

  useEffect(() => {
    let listadoOrdenado = [...listadoJuegos];

    if (ordenSeleccionado === 'titulo') {
      listadoOrdenado = listadoOrdenado.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (ordenSeleccionado === 'plataforma') {
      listadoOrdenado = listadoOrdenado.sort((a, b) => {
        const plataformaA = a.infoExtra || '';
        const plataformaB = b.infoExtra || '';
        return plataformaA.localeCompare(plataformaB)
      });
    }
    setListadoJuegosOrdenado(listadoOrdenado)
  }, [listadoJuegos, ordenSeleccionado])


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen pt-24 text-center text-white color-fondo-imagen-juegos-2">      
        {/* Información de cabecera */}
        <div className="w-full">
          <h2 className="p-6 text-3xl uppercase font-montserrat">Lista de juegos</h2>
          <p className="px-10 py-3 text-center xs:px-40">¡Escoge un juego para que probemos en los directos de Twitch! </p>
          <p className="px-10 pt-10 pb-3 text-sm text-center xs:px-40">{'Disponible en las recompensas del canal de Twitch o automáticamente para personas que hayan alcanzado un nivel 2 o 3 (a través de suscripciones de Twitch, Patreon, donaciones, etc).'}</p>
          <p className="px-10 pt-2 pb-10 text-xs text-center xs:px-40">*En función de la acogida del juego en los directos, se jugará más o menos tiempo. La lista se irá actualizando.</p>
        </div>
        {/* Información de Catálogo de Juegos */}
        <div className="w-full color-fondo-imagen-juegos-1">
          {
            archivosDisenoWeb.map((item)=>(
              <div key={item.idDoc} className="flex-grow md:flex color-fondo-imagen-juegos-1">
                { (item?.titulo === 'Imagen Juegos 1') && 
                <div className="flex flex-col justify-center p-8 px-10 md:px-20 md:items-start">
                  <h2 className="pb-3 text-xl font-bold">{item?.infoExtra}</h2>
                  <p className="text-justify sm:pr-8">{item?.infoExtra2}</p>
                </div>}
                {
                  (item?.titulo === 'Imagen Juegos 1') &&
                  <div className="flex items-center justify-center color-fondo-imagen-juegos-1"><img src={item?.url} alt='No hay imagen'></img></div>
                }
              </div>
            ))
          }
        </div>
        {/* Información de Clásicos inolvidables */}
        <div className="w-full mt-10 color-fondo-imagen-juegos-2">
          {
            archivosDisenoWeb.map((item)=>(
              <div key={item.idDoc} className="flex-grow md:flex color-fondo-imagen-juegos-2">
                {
                  (item?.titulo === 'Imagen Juegos 2') &&
                  <div className="flex items-center justify-center color-fondo-imagen-juegos-2"><img src={item?.url} alt='No hay imagen'></img></div>
                }
                  { (item?.titulo === 'Imagen Juegos 2') &&
                  <div className="flex flex-col justify-center p-8 px-10 sm:px-20 sm:items-start">
                    <h2 className="pb-3 text-xl font-bold">{item?.infoExtra}</h2>
                    <p className="text-justify">{item?.infoExtra2}</p>
                  </div>}
              </div>
            ))
          }
        </div>
        {/* Mapeados del listado de juegos */}
        <div className="w-full text-gray-900 color-fondo-imagen-juegos-3">
           {/* Título y Opción de orden */}
          <div className="flex items-center justify-between pt-10">
            <h2 className="pl-10 font-bold text-start">Lista de Juegos:</h2>  
            <div className="pr-10 text-end">
              <label htmlFor="orden-select" className="mr-2 text-sm sm:text-base">Ordenar por:</label>
              <select id="orden-select" value={ordenSeleccionado} onChange={(e) => setOrdenSeleccionado(e.target.value)}
                className="p-1 text-sm border border-gray-400 rounded sm:text-base sm:p-2"
              >
                <option className="text-sm" value="titulo">Título</option>
                <option className="text-sm" value="plataforma">Plataforma</option>
              </select>
            </div>       
          </div> 
          <div className="grid gap-6 px-5 py-5 mx-auto xs:px-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">                      
          {
            listadoJuegosOrdenado.map((item)=>(
            // juegosFiltrados.map((item, index)=>(
              
              <div className="h-32 px-2 m-4 sm:h-28" key={item?.idDoc}>
                {console.log('Cargo')}
                <div className={`h-full relative flex flex-col items-start justify-end p-6 text-xs text-white duration-300 rounded shadow-lg shadow-gray-700 min-h-60 dark-overlay hover:scale-105 hover:shadow-gray-900 opacity-95 hover:opacity-100`} 
                  // onMouseEnter={() => setHoveredItem(item.idDoc)}
                  // onMouseLeave={() => setHoveredItem(null)}
                  >
                  <div className="absolute top-0 left-0 w-full h-full rounded" style={{ backgroundImage: `url(${item?.url})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}/>
                  <div className="absolute top-0 left-0 w-full h-full bg-black rounded opacity-70"/>
                  <div className="z-10 flex items-end justify-between w-full text-ellipsis">
                    <h2 className="w-1/2 mt-10 font-bold uppercase text-start">{item?.titulo}</h2>                      
                    <div className="flex flex-col gap-6 text-justify">
                        <div className="flex items-center gap-4 text-start">
                          <h3 className="p-1 text-gray-900 uppercase bg-gray-300 rounded" title={`Plataforma: ${item?.infoExtra || 'Sin plataforma especificada'}`}>{item?.infoExtra}</h3>
                        </div>
                    </div>                      
                  </div>              
                </div>                        
              </div>
              ))
            }
          </div>
        </div>   
      </div>
     <ScrollToTopButton/>      
    </>
  )
}
