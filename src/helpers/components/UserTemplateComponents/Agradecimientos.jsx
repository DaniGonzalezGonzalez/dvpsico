import { Link } from "react-router-dom"
import { useGetData } from "../../../hooks/useGetData"
import { AgradecimientosIcon } from "../../../assets/Icons/AgradecimientosIcon"
import { ArrowRight } from "../../../assets/Icons/ArrowRight"

export function Agradecimientos() {
    const { agradecimientos } = useGetData()
    const sortedAgradecimientos = agradecimientos.sort((b, a) => b.titulo.localeCompare(a.titulo))

  return (
    <>
        <h2 className="pb-8 text-xl font-bold uppercase text-start">Agradecimientos</h2>
        <div className="flex items-center justify-start gap-3 pb-8">
          <h3>Cada nivel de apoyo conlleva una serie de agradecimientos
          </h3>
          <AgradecimientosIcon/>
        </div>
        <div className="flex-grow gap-3 mt-6 sm:flex">{sortedAgradecimientos.map((item) => (
          <div key={item?.idDoc}>
            {
              (item?.titulo === 'Nivel 1' || item?.titulo === 'Nivel 2' || item?.titulo === 'Nivel 3') &&
                <div>
                    <div className="p-3 mb-3 text-center transition duration-500 rounded shadow-md color-fondo-3">
                      <h2 className="pb-4 font-bold uppercase">{item?.titulo}</h2>
                        <div className="flex flex-col gap-8 text-justify">
                          <p>{item?.descripcion} </p>
                          <p>{item?.infoExtra}</p>
                          <p>{item?.infoExtra2}</p>
                          <div>{(item.titulo !== 'Nivel 2') ? (item?.infoExtra3) : (
                                <Link to="extra-listado-juegos" title="Ver catálogo de juegos"><div className="relative"><p className="relative z-10 rounded">{item?.infoExtra3}</p></div>
                                </Link>)}
                          </div>
                        </div>
                        <div>{(item.titulo === 'Nivel 1') &&  <Link to="extra-listado-agradecimientos" title="Ver listado de agradecimientos"><div className="relative flex items-center justify-center mt-6 text-gray-900"><p className="relative z-10 px-1 bg-gray-200 rounded-l text-hover-animated-dark">Ver listado  </p><div className="bg-gray-200 rounded-r"><ArrowRight/></div></div>
                                </Link> }
                        </div>

                        <div>{(item.titulo === 'Nivel 2') &&  <Link to="extra-listado-juegos" title="Ver catálogo de juegos"><div className="relative flex items-center justify-center mt-6 text-gray-900"><p className="relative z-10 px-1 bg-gray-200 rounded-l text-hover-animated-dark">Ver catálogo  </p><div className="bg-gray-200 rounded-r"><ArrowRight/></div></div>
                                </Link> }
                        </div>
                    </div>
                </div> 
                }
           </div>
        ))}
        </div>
        {/* <div className="mt-20 text-center text-white">
          <Link className="px-4 py-2 text-white transition duration-500 bg-gray-700 rounded-t-3xl rounded-b-3xl hover:shadow-lg hover:bg-purple-500" to="extra-listado-agradecimientos">Ver listado de agradecimientos</Link>
        </div>       */}
    </>
  )
}
