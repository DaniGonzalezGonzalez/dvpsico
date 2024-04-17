import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useGetData } from "../../../hooks/useGetData";
import { scrollToTop } from "../../no-components/constants";

export function Programas() {
  const { programas } = useGetData()

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 1000,
    arrows: true,
    dots: true,
    customPaging: function(i) {
      return (
        <div className="w-5 h-1 my-8 transition duration-300 bg-gray-600 rounded-full hover:bg-gray-200" />
      );
    },
    focusOnSelect: true,
  };

  return (
    <>   
      <h2 className="pb-8 text-xl font-bold text-center uppercase">Programas</h2>
      <h3 className="pb-8 text-xl font-medium text-center">Explora los programas del canal</h3>
      <Slider {...settings} className="slick-carousel">
        {programas.map((item) => (
          <div key={item?.idDoc} className="p-4 slick-slide">
            <div className="relative flex flex-col items-start justify-center p-8 text-xs text-white rounded shadow-lg min-h-60 dark-overlay">
              <div className="absolute top-0 left-0 w-full h-full rounded" style={{ backgroundImage: `url(${item?.url})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}/>
              <div className="absolute top-0 left-0 w-full h-full bg-black rounded opacity-70"/>
              <div className="z-10">
                <h2 className="pb-4 mt-48 mb-8 font-bold uppercase text-start">{item?.titulo}</h2>
                  <div>
                    <div className="flex flex-col gap-8 text-justify sm:w-3/4">
                      <p>{item?.descripcion}</p>
                      <p>{item?.infoExtra}</p>
                    </div>
                  </div>
              </div>              
            </div>                
          </div>
        ))}
      </Slider>
      <div className="mt-24 text-center text-white">
        <Link onClick={scrollToTop} className="px-4 py-2 text-white bg-gray-700 rounded-t-3xl rounded-b-3xl hover:shadow-lg hover:bg-purple-500" to="extra-programas">
          Más información
        </Link>
      </div>
    </>
  );
}