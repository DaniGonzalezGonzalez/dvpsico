import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useGetData } from "../../../hooks/useGetData";
import { scrollToTop } from "../../no-components/constants";
import { ArrowRight } from "../../../assets/Icons/ArrowRight";
import { ArrowLeft } from "../../../assets/Icons/ArrowLeft";
import { useRef } from "react";
import { useVisibilityObserver } from "../../../hooks/useVisibilityObserver";

export function Programas() {
  const { programas } = useGetData()
  const sliderRef = useRef(null)
  const visibleItems = useVisibilityObserver(".observed-item", 0.3);
  const titleProgramasBlockId = "title-programas-block"
  const programasBlockId = "programasBlockId"
  const programasBlock2Id = "programasBlockId2"
  // const block3Id = "infoCanal-block3"
  // const block4Id = "infoCanal-block4"
  // const block5Id = "infoCanal-block5"

  const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: "0",
      slidesToShow: 1,
      speed: 1000, // Transiciones más lentas
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 8000, // Mayor duración entre transiciones
      cssEase: "ease-in-out", // Transiciones más suaves
      customPaging: function(i) {
        return (
          <div className="relative z-10 w-5 h-1 transition duration-300 bg-gray-600 rounded-full top-8 hover:bg-gray-200" />
        )
      }
    }
    
  return (
    <>   
      <div data-id={titleProgramasBlockId} className={`transition duration-[3000ms] observed-item ease-out ${visibleItems[titleProgramasBlockId] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } flex items-center justify-center`}>
        <h2 className={`flex items-center justify-center xl:pb-10 pb-8 pt-20 xl:pt-32 text-xl xl:text-4xl font-thin tracking-[1em] text-center uppercase `}>Programa</h2>
        <h2 className="pt-20 pb-8 text-xl font-thin uppercase xl:pb-10 xl:pt-32 xl:text-4xl ">s</h2>
      </div>
      <h3 data-id={programasBlockId} className={`pb-8 text-base xl:text-xl font-medium text-center transition duration-[4000ms] observed-item ease-out ${visibleItems[programasBlockId] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" }`}>Explora los programas del canal</h3>
      <div data-id={programasBlock2Id} className={`transition duration-[4000ms] observed-item ease-out ${visibleItems[programasBlock2Id] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20" } relative`}>
        <Slider ref={sliderRef} {...settings} className="slick-carousel">
          {programas.map((item) => (
            <div key={item?.id} className="relative p-2 lg:px-40 sm:p-4 slick-slide">
              <div className="relative flex flex-col items-start justify-center p-8 text-xs text-white shadow-lg rounded-2xl h-[480px] sm:h-full xl:h-[600px] dark-overlay">
                <div className="absolute top-0 left-0 w-full h-[480px] sm:h-full xl:h-[600px] rounded-2xl" style={{ backgroundImage: `url(${item?.url})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}/>
                <div className="absolute top-0 left-0 w-full h-[480px] sm:h-full xl:h-[600px]  bg-black rounded-xl opacity-70"/>
                <div className="z-10">
                  <h2 className="pb-4 mt-48 mb-8 italic font-semibold uppercase xl:font-normal xl:text-xl lg:mt-72 text-start">{item?.titulo}</h2>
                    <div>
                      <div className="flex flex-col gap-4 text-justify xl:text-sm sm:w-3/4">
                        <p>{item?.descripcion}</p>
                        <p>{item?.infoExtra}</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button className="absolute left-2 text-gray-400 transition duration-300 transform -translate-y-1/2 hover:scale-[1.20] lg:hover:scale-150 lg:left-20 top-1/2 hidden lg:block" onClick={() => sliderRef.current.slickPrev()}>
          <ArrowLeft w={12} h={12} />
        </button>
        <button className="absolute text-gray-400 transition duration-300 transform -translate-y-1/2 right-2 lg:right-20 top-1/2 hover:scale-[1.20] lg:hover:scale-150 hidden lg:block" onClick={() => sliderRef.current.slickNext()}>
          <ArrowRight  w={12} h={12} />
        </button>
      </div>
      <div className="mt-24 text-center text-white">
        <Link onClick={scrollToTop} className="px-4 py-2 text-white transition duration-500 bg-gray-700 rounded-t-3xl rounded-b-3xl hover:shadow-lg hover:bg-purple-500" to="extra-programas">
          Más información
        </Link>
      </div>
    </>
  );
}