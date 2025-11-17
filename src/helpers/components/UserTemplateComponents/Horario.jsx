import Slider from "react-slick";
import { ArrowLeft } from "../../../assets/Icons/ArrowLeft";
import { ArrowRight } from "../../../assets/Icons/ArrowRight";
import { useGetData } from "../../../hooks/useGetData"
import { useVisibilityObserver } from "../../../hooks/useVisibilityObserver";
import { useRef } from "react";

export function Horario() {
  const { horario } = useGetData()
  const visibleItems = useVisibilityObserver(".observed-item", 0.3);
  const titleHorarioBlockId = "title-horario-block"
  const horarioBlockId = "horarioBlockId"
  const horarioBlock2Id = "horarioBlockId2"
  const horarioBlock3Id = "horarioBlockId3"


const sliderRef = useRef(null);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 1000,
    arrows: false,
    // dots: true,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "ease-in-out",
    // customPaging: function (i) {
    //   return (
    //     <div className="relative z-10 w-5 h-1 transition duration-300 bg-gray-600 rounded-full bottom-6 hover:bg-gray-200" />
    //   );
    // },
  };

  const horarios = [
    { id: 1, src: "/Horario-1.webp", alt: "Horario 1" },
    { id: 2, src: "/Horario-2.webp", alt: "Horario 2" },
    { id: 3, src: "/Horario-3.webp", alt: "Horario 3" },
  ];

  return (
    <>
      <div className="pt-10 pb-32 xl:py-60">
        <div className="relative w-full h-[100vh]">
          {horario.map((item) => (
            <div key={item?.id} className="relative w-full h-full">
              {/* Imagen de fondo en 2/3 izquierda */}
              <div
                className="absolute top-0 w-full h-full bg-center bg-no-repeat rounded-l-lg xl:opacity-100 opacity-30 xl:bg-cover xl:right-0 xl:w-2/3"
                style={{ backgroundImage: `url(${item?.url})` }}
              ></div>

              {/* Capa semitransparente opcional sobre la imagen */}
              {/* <div className="absolute top-0 left-0 w-2/3 h-full rounded-l-lg bg-black/20"></div> */}

              {/* Texto encima de todo, ocupando todo el ancho */}
              <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 xl:flex-row lg:px-0">
                <div className="w-full space-y-6 text-white lg:pl-20 lg:pr-20 xl:pr-0 xl:pl-20">
                  <h2 data-id={titleHorarioBlockId} className={`transition duration-[1000ms] observed-item ease-out ${visibleItems[titleHorarioBlockId] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } pb-8 text-4xl font-bold uppercase xl:text-start`}>Horario</h2>
                 
                  <p data-id={horarioBlockId} className={`transition duration-[2000ms] observed-item ease-out ${visibleItems[horarioBlockId] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } text-base xl:text-4xl`}>
                    {/* {item?.descripcion} */}
                    Sigue los directos del canal de <span className="font-serif italic font-semibold bg-purple-800">Twitch</span>, en los que profundizamos en los temas tratados en los vídeos y podcast, noticias de <span className="text-yellow-500">ciencia</span> y del mundo gaming, y exploramos videojuegos.
                    </p>
                  <div data-id={horarioBlock2Id} className={`transition duration-[3000ms] observed-item ease-out ${visibleItems[horarioBlock2Id] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } flex flex-col gap-4`}>
                    <p className="pt-3 text-sm xl:text-lg">
                      {/* {item?.infoExtra} */}
                      Al participar en los directos, ayudas a hacer crecer el canal y a mantener una comunidad sana, en la que el centro está en compartir un espacio común de charla.
                      </p>
                    {/* <p className="p-2 font-bold text-center text-red-600 bg-gray-200 rounded shadow-md">
                      {item?.infoExtra2}
                    </p> */}
                  </div>
                </div>
                <div className="flex items-center justify-center w-full pt-3 pb-10 xl:pb-0 xl:pt-0 xl:w-1/2">
                  <div data-id={horarioBlock3Id} className={`transition duration-[2000ms] observed-item ease-out ${visibleItems[horarioBlock3Id] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } relative z-20 w-full`}>
                    <Slider ref={sliderRef} {...settings} className="slick-carousel">
                      {horarios.map((slide) => (
                        <div key={slide.id} className="flex items-center justify-center p-2 lg:px-40 xl:p-40">
                          <img src={slide.src} alt={slide.alt} />
                        </div>
                      ))}
                    </Slider>

                    {/* Flechas personalizadas (aparecen en pantallas grandes) */}
                    <button
                      className="absolute left-2 lg:left-20 text-gray-400 transition duration-300 transform -translate-y-1/2 top-1/2 hidden lg:block hover:scale-[1.20]"
                      onClick={() => sliderRef.current?.slickPrev()}
                      aria-label="Anterior"
                    >
                      <ArrowLeft w={12} h={12} />
                    </button>

                    <button
                      className="absolute right-2 lg:right-20 text-gray-400 transition duration-300 transform -translate-y-1/2 top-1/2 hidden lg:block hover:scale-[1.20]"
                      onClick={() => sliderRef.current?.slickNext()}
                      aria-label="Siguiente"
                    >
                      <ArrowRight w={12} h={12} />
                    </button>
                  </div>
                </div>
              </div>
               <div className="flex items-center justify-center xl:py-14">
                 <a
                      href={item?.enlaceProyectoWeb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 text-black transition duration-500 bg-white rounded-lg shadow-md hover:bg-purple-700 hover:text-white"
                    >
                      Ir al canal de directos
                    </a>
               </div>
            </div>            
          ))}
          
        </div>
      </div>
    </>
  )
}
