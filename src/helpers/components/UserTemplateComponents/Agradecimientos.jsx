import { Link } from "react-router-dom"
import { useGetData } from "../../../hooks/useGetData"
import { ArrowRight } from "../../../assets/Icons/ArrowRight"
import { ArrowLeft } from "../../../assets/Icons/ArrowLeft"
import { scrollToTop } from "../../no-components/constants"
import { AgradecimientosIcon } from "../../../assets/Icons/AgradecimientosIcon"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from "react"
import { useVisibilityObserver } from "../../../hooks/useVisibilityObserver"

export function Agradecimientos() {
  const { agradecimientos } = useGetData()
  const sortedAgradecimientos = agradecimientos.sort((b, a) =>
    b.titulo.localeCompare(a.titulo)
  )
  const visibleItems = useVisibilityObserver(".observed-item", 0.3);
  const titleAgradecimientosBlockId = "title-agradecimientos-block"
  const agradecimientosBlockId = "agradecimientosBlockId"
  const agradecimientosBlock2Id = "agradecimientosBlockId2"

  const sliderRef = useRef(null)

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 1000,
    arrows: false, // lo controlamos con botones custom
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "ease-in-out",
    customPaging: function (i) { return ( <div className="relative z-10 w-5 h-1 transition duration-300 bg-gray-600 rounded-full top-8 hover:bg-gray-200" /> ) }, }

  return (
    <>
      <h2 data-id={titleAgradecimientosBlockId} className={`transition duration-[1000ms] observed-item ease-out ${visibleItems[titleAgradecimientosBlockId] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } pb-8 font-bold text-start italic lg:text-[100px] text-[32px] font-serif lg:pt-32 pt-20 lg:px-12`}>
        Agradecimientos
      </h2>
      <div data-id={agradecimientosBlockId} className={`transition duration-[2000ms] observed-item ease-out ${visibleItems[agradecimientosBlockId] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } flex items-center justify-start gap-3 pb-2 lg:mt-10 lg:pb-8 lg:px-12`}>
        <h3 className="lg:text-lg">Cualquier tipo de apoyo es incalculable, pero aquellas personas que han contribuido económicamente reciben una serie de agradecimientos especiales por su colaboración con el proyecto, ordenados por <span className="font-serif text-xl italic bg-green-600 lg:text-4xl">niveles</span></h3>
      </div>

      {/* Slider con flechas */}
      <div data-id={agradecimientosBlock2Id} className={`transition duration-[2000ms] observed-item ease-out ${visibleItems[agradecimientosBlock2Id] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } relative`}>
        <Slider ref={sliderRef} {...settings}>
          {sortedAgradecimientos.map((item) => {
            if (
              item?.titulo === "Nivel 1" ||
              item?.titulo === "Nivel 2" ||
              item?.titulo === "Nivel 3"
            ) {
              return (
                <div key={item?.id} className="p-3 lg:px-32">
                  <div className="flex flex-col xl:flex-row lg:items-center justify-between lg:p-14 text-center transition duration-500 bg-gray-900 shadow-md shadow-slate-800 rounded-2xl h-[460px] lg:h-[500px]">
                    <h2 className="pb-4 font-bold uppercase text-2xl xl:text-[420px] pt-5 lg:pt-10"> 
                    {item?.titulo === 'Nivel 1'
                        ? <span>1.</span>
                        : item?.titulo === 'Nivel 2'
                        ? <span>2.</span>
                        : item?.titulo === 'Nivel 3'
                        ? <span>3.</span>
                        : null}
                    </h2>
                    {/* <p>{item?.descripcion} </p> */}
                    <div className="h-full p-4 lg:p-10 rounded-xl xl:w-1/2 text-start">
                      <p className="xl:text-2xl">
                      {item?.titulo === 'Nivel 1'
                        ? <span>Mecenas de Patreon de nivel 1, suscriptores de nivel 1 de Twitch o <span className="font-serif italic font-semibold bg-orange-700">donaciones pequeñas</span> por otro método (&gt;1$ o €/m)</span>
                        : item?.titulo === 'Nivel 2'
                        ? <span>Mecenas de Patreon de nivel 2, suscriptores de nivel 2 de Twitch o <span className="font-serif italic font-semibold text-gray-800 bg-gray-200">donaciones grandes</span> por otro método (&gt;6$ o €/m)</span>
                        : item?.titulo === 'Nivel 3'
                        ? <span>Mecenas de Patreon de nivel 3, suscriptores de nivel 3 de Twitch o <span className="font-serif italic font-semibold text-gray-800 bg-yellow-200">donaciones grandiosas</span>  por otro método (&gt;16$ o €/m)</span>
                        : null}
                      </p>
                      <div>
                        <p className="pb-6 mt-10 text-[10px] lg:text-xs font-light uppercase lg:mt-14">{item?.infoExtra}</p>
                        <div className="flex flex-col items-start gap-8 xl:text-lg">
                            {item?.titulo === 'Nivel 1'
                            ? <div className="flex flex-col items-start gap-3 text-start">
                                <span>1º Emotes personalizados (en el caso de suscripción en <span className="font-serif italic font-semibold bg-purple-700">Twitch</span>)</span>
                                <span>2º Nombre en <Link onClick={scrollToTop}
                                to="extra-listado-agradecimientos"
                                title="Ver listado de agradecimientos"
                                 className="font-semibold">listado de agradecimientos</Link></span>
                              </div>
                            : item?.titulo === 'Nivel 2'
                            ? <div className="flex flex-col items-start gap-3 text-start">
                                <span>1º Emotes personalizados (en el caso de suscripción en <span className="font-serif italic font-semibold bg-purple-700">Twitch</span>)</span>
                                <span>2º Nombre en <Link onClick={scrollToTop}
                                to="extra-listado-agradecimientos"
                                title="Ver listado de agradecimientos"
                                 className="font-semibold">listado de agradecimientos</Link></span>
                                <span>+ 3º Elección de un <span className="font-mono font-bold text-green-200">juego</span> para probar en Twitch</span>
                              </div>
                            : item?.titulo === 'Nivel 3'
                            ?  <div className="flex flex-col items-start gap-3 text-start">
                                  <span>1º Emotes personalizados (en el caso de suscripción en <span className="font-serif italic font-semibold bg-purple-700">Twitch</span>)</span>
                                  <span>2º Nombre en <Link onClick={scrollToTop}
                                to="extra-listado-agradecimientos"
                                title="Ver listado de agradecimientos"
                                 className="font-semibold">listado de agradecimientos</Link></span>
                                  <span>+ 3º Elección de un <span className="font-mono font-bold text-green-200">juego</span> para probar en Twitch</span>
                                  <span>+ 4º + Convertirse en <span className="font-semibold bg-yellow-700">VIP</span> del canal de Twitch</span>
                                </div>
                            : null}
                          {/* <p>{item?.infoExtra2}</p> */}
                          {/* <div className="flex items-center gap-3 lg:gap-2">
                            {item?.titulo === 'Nivel 1'
                              ? <span className="text-2xl">Mecenas de Patreon de nivel 1, suscriptores de nivel 1 de Twitch o <span className="font-serif italic font-semibold bg-orange-700">donaciones pequeñas</span> por otro método (&lt;1$ o €/m)</span>
                              : item?.titulo === 'Nivel 2'
                              ? <span className="text-2xl">Mecenas de Patreon de nivel 2, suscriptores de nivel 2 de Twitch o <span className="font-serif italic font-semibold text-gray-800 bg-gray-200">donaciones grandes</span> por otro método (&gt;5$ o €/m)</span>
                              : item?.titulo === 'Nivel 3'
                              ? <span className="text-2xl">Mecenas de Patreon de nivel 3, suscriptores de nivel 3 de Twitch o <span className="font-serif italic font-semibold text-gray-800 bg-yellow-200">donaciones grandiosas</span>  por otro método (&gt;15$ o €/m)</span>
                              : null}


                            {item?.titulo === "Nivel 1" && (
                              <Link
                                className="px-1 py-1 transition duration-500 bg-gray-800 rounded-lg lg:py-0 hover:bg-gray-600"
                                onClick={scrollToTop}
                                to="extra-listado-agradecimientos"
                                title="Ver listado de agradecimientos"
                              >
                                <ArrowRight />
                              </Link>
                            )}
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          })}
        </Slider>

        {/* Botones de navegación */}
        <button
          className="absolute left-2 text-gray-400 transition duration-300 transform -translate-y-1/2 hover:scale-[1.20] lg:hover:scale-150 lg:left-10 top-1/2 hidden lg:block"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ArrowLeft w={12} h={12} />
        </button>
        <button
          className="absolute right-2 text-gray-400 transition duration-300 transform -translate-y-1/2 hover:scale-[1.20] lg:hover:scale-150 lg:right-10 top-1/2 hidden lg:block"
          onClick={() => sliderRef.current.slickNext()}
        >
          <ArrowRight w={12} h={12} />
        </button>
      </div>

      {/* Botón extra abajo */}
      <div className="flex items-center justify-center w-full mt-24">
        <Link
          className="px-4 py-2 text-white transition duration-500 bg-gray-700 rounded-t-xl rounded-b-xl hover:shadow-lg hover:bg-purple-500"
          onClick={scrollToTop}
          to="extra-listado-agradecimientos"
          title="Ver listado de agradecimientos"
        >
          <p className="text-center">
            Ver listado <br /> de agradecimientos
          </p>
        </Link>
      </div>
    </>
  )
}
