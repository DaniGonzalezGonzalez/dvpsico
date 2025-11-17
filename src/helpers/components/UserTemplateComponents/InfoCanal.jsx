import { useGetData } from "../../../hooks/useGetData"
import { useVisibilityObserver } from "../../../hooks/useVisibilityObserver";

export function InfoCanal() {
  const { infoCanal } = useGetData()
  const visibleItems = useVisibilityObserver(".observed-item", 0.3);
  const titleBlockId = "title-infoCanal-block"
  const blockId = "infoCanal-block"
  const block2Id = "infoCanal-block2"
  const block3Id = "infoCanal-block3"
  const block4Id = "infoCanal-block4"
  const block5Id = "infoCanal-block5"

  return (
    <>
          <div className={`relative flex flex-col justify-between w-full pt-10 lg:p-10 lg:pt-40`}  >{infoCanal.map((item) => (
              <div key={item?.id} >
                 <div data-id={titleBlockId} className={`pb-4 text-4xl xl:text-[80px] font-bold text-center flex flex-col justify-center items-center xl:gap-10 transition duration-[1000ms] observed-item ease-out ${visibleItems[titleBlockId] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20" }`}>¿Qué es <br/> <div className="font-serif italic bg-purple-800">Dvpsico<span className='bg-transparent'>?</span></div></div>
                <div data-id={blockId} className={`items-center justify-center flex-grow gap-3 pt-10 xl:gap-8 sm:flex xl:px-32 xl:pt-20 transition duration-[2000ms] observed-item ease-out ${visibleItems[blockId] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20" }`}>
                  <div className="sm:w-1/2">
                      <div className="flex flex-col gap-8">
                        <p className="text-3xl lg:text-4xl"><strong>Dvpsico</strong> es un proyecto de <span className="font-mono underline">divulgación científica</span> que inició allá por el año 2018... y que ha evolucionado mucho!</p>
                        <p>Comenzó con <span className="font-bold text-purple-300">directos</span>, y con el tiempo se complementó con <span className="italic bg-red-800">vídeos</span> y <span className="italic bg-green-700">podcast</span>. </p>
                        <p className="text-xl">El propósito del proyecto es abordar conceptos de psicología, neurociencia y todas esas cosas que suenan muy bien, de una manera interactiva, con feedback inmediato en los directos, y haciendo que sea fácil de entender.</p>
                        <p className="p-3 text-center bg-red-800 rounded-xl">Peeero prestando atención a detalles que se tienen en cuenta en las investigaciones. Aunque tiene que entenderse, ¡hay que ser <strong>rigurosos</strong>!</p>
                        
                      </div>                      
                    {/* <h2 className="pb-4 text-xl font-bold uppercase">{item?.titulo}</h2>
                      <div className="flex flex-col gap-8 text-justify">
                        <p>{item?.descripcion} </p>
                        <p>{item?.infoExtra}</p>
                        <p>{item?.infoExtra2}</p>
                        <p className="text-center sm:text-start">{item?.infoExtra3}</p>
                      </div> */}
                  </div>
                  <div className="flex items-center justify-center gap-3 mt-8 sm:m-8 sm:w-1/2"><img className="object-cover w-full h-48 shadow-lg rounded-2xl shadow-gray-800/30 sm:w-full sm:h-full" src={item?.url} alt='No hay imagen'></img></div>
                  {/* {console.log('URL', item.url)} */}
                </div>     
                <div className="px-2 mt-40 lg:px-32">
                  <p data-id={block2Id} className={`pb-5 text-xl uppercase lg:text-4xl font-extralight transition duration-[1000ms] observed-item ease-out ${visibleItems[block2Id] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20" }`}>Y como extra inesperado...</p>
                  <p data-id={block3Id} className={`pt-3 pb-20 text-sm font-normal lg:text-xl transition duration-[1000ms] observed-item ease-out ${visibleItems[block3Id] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20" }`}>Las horas y años dedicados a este proyecto acabaron generando una pequeña comunidad, en la que también creamos vínculos, pasamos el rato debatiendo, viviendo experiencias a través de videojuegos y hablando de todo tipo de temas. Por todo el apoyo... <span className="text-2xl font-semibold text-black uppercase bg-yellow-200">¡Gracias!</span></p>              

                  <div data-id={block4Id} className={`pb-5 mt-8 text-xl font-semibold lg:mt-36 lg:text-2xl transition duration-[1000ms] observed-item ease-out ${visibleItems[block4Id] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" }`}>Entiendo lo de la divulgación y el contenido, pero esta web <p className="text-4xl italic underline">¿para qué sirve?</p></div>
                  <div data-id={block5Id} className={`mt-2 p-8 text-black bg-gray-300 lg:p-10 rounded-2xl transition duration-[1000ms] observed-item ease-out ${visibleItems[block5Id] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20" }`}>
                    <p>El objetivo de esta web es disponer, en un sitio <strong>centralizado</strong>, de más información sobre los programas, las formas de apoyar al canal, los agradecimientos a la gente que ha colaborado o el horario de los directos. También tenéis acceso a las <span className="text-blue-700">redes sociales</span> en la parte superior, para estar al día de cualquier novedad. Es decir, esta web pretende ser un lugar donde acudir ante cualquier duda sobre el proyecto.</p>
                    {/* <p className="pt-3"><strong>Actualmente no hay directos planeados</strong>, de manera que hay secciones como horario, agradecimientos o formas de apoyo que están inactivas (aunque hay partes que siguen disponibles hoy en día, por ejemplo, para la gente que decide seguir apoyando por el contenido de los vídeos o podcast).</p> */}
                  </div>
                  {/* <p className="text-center sm:text-start">¡Espero que os guste el contenido!</p>   */}
                </div>     
              </div>
          ))}
          </div>
    </>
  )
}
