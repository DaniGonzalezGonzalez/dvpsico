import { Link } from "react-router-dom"
import { useGetData } from "../../../hooks/useGetData"
import { ArrowRight } from "../../../assets/Icons/ArrowRight"
import { scrollToTop } from "../../no-components/constants"
import { AgradecimientosIcon } from "../../../assets/Icons/AgradecimientosIcon"

export function Agradecimientos() {
    const { agradecimientos } = useGetData()
    const sortedAgradecimientos = agradecimientos.sort((b, a) => b.titulo.localeCompare(a.titulo))

  return (
    <>
        <h2 className="pb-8 text-xl font-bold uppercase text-start">Agradecimientos</h2>
        <div className="flex items-center justify-start gap-3 pb-2 lg:pb-8">
          <h3>Cada nivel de apoyo conlleva una serie de agradecimientos
          </h3>   
          <AgradecimientosIcon/>
        </div>
        <div className="flex-grow mt-6 sm:flex">{sortedAgradecimientos.map((item) => (
          <div key={item?.idDoc}>
            {
              (item?.titulo === 'Nivel 1' || item?.titulo === 'Nivel 2' || item?.titulo === 'Nivel 3') &&
                <div className="flex flex-col justify-between p-3 m-0 mb-5 text-center transition duration-500 border-2 shadow-md lg:mb-3 shadow-gray-800 rounded-xl sm:m-2 color-fondo-3">
                    <h2 className="pb-4 font-bold uppercase">{item?.titulo}</h2>
                    <div>
                        <div className="flex flex-col gap-8 text-justify">
                          <p>{item?.descripcion} </p>
                          <p>{item?.infoExtra}</p>
                          <p>{item?.infoExtra2}</p>
                          <div className="flex items-center gap-3 lg:gap-2">
                            {item?.infoExtra3}
                            {item?.titulo === 'Nivel 1' && <Link className="px-1 py-1 transition duration-500 bg-gray-800 rounded-lg lg:py-0 hover:bg-gray-600" onClick={scrollToTop} to="extra-listado-agradecimientos" title="Ver listado de agradecimientos">
                          <ArrowRight/></Link>}
                          </div>

                          {/* <div>{(item.titulo !== 'Nivel 2') ? (item?.infoExtra3) : (
                                <Link to="extra-listado-juegos" title="Ver catálogo de juegos"><div className="relative"><p className="relative z-10 rounded">{item?.infoExtra3}</p></div>
                                </Link>)}
                          </div> */}
                        </div>

                        {/* <div>{(item.titulo === 'Nivel 2') &&  <Link onClick={scrollToTop} to="extra-listado-juegos" title="Ver catálogo de juegos"><div className="relative flex items-center justify-center mt-6 text-gray-900"><p className="relative z-10 px-1 bg-gray-200 rounded-l text-hover-animated-dark">Ver catálogo  </p><div className="bg-gray-200 rounded-r"><ArrowRight/></div></div>
                                </Link> }
                                </div> */}
                    </div>
                </div> 
                }
           </div>
        ))}
        </div>
            <div className="flex items-center justify-center w-full mt-6">{<Link className="px-4 py-2 text-white bg-gray-700 rounded-t-3xl rounded-b-3xl hover:shadow-lg hover:bg-purple-500" onClick={scrollToTop} to="extra-listado-agradecimientos" title="Ver listado de agradecimientos"><p className="text-center">Ver listado <br/> de agradecimientos </p>
                    </Link> }
            </div>
        {/* <div className="mt-20 text-center text-white">
          <Link className="px-4 py-2 text-white transition duration-500 bg-gray-700 rounded-t-3xl rounded-b-3xl hover:shadow-lg hover:bg-purple-500" to="extra-listado-agradecimientos">Ver listado de agradecimientos</Link>
        </div>       */}
    </>
  )
}
