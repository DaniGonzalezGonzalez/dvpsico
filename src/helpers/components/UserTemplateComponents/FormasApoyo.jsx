import { Link } from "react-router-dom";
import { useGetData } from "../../../hooks/useGetData"
import { useVisibilityObserver } from "../../../hooks/useVisibilityObserver";

export function FormasApoyo() {
    const { formasApoyo, horario } = useGetData()
    const visibleItems = useVisibilityObserver(".observed-item", 0.3);
    const titleApoyoBlockId = "title-apoyo-block"
    const apoyoBlockId = "apoyoBlockId"
    const apoyoBlock2Id = "apoyoBlockId2"
    
    const handleScrollToEdit = (idIndice) => {
      const editContentElement = document.getElementById(idIndice)
      if (editContentElement) {
        editContentElement.scrollIntoView({ behavior: "smooth" })
      }
    }

  return (
    <>
        <div data-id={titleApoyoBlockId} className={`transition duration-[1000ms] observed-item ease-out ${visibleItems[titleApoyoBlockId] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } pb-8 flex flex-col gap-3`}>
          <h2 className="pt-20 text-lg text-center xl:pt-32">Si te gusta la idea de lo que hacemos...</h2>
          <h2 className="text-xl font-light text-center uppercase lg:text-4xl ">¿De qué maneras puedes <strong className="text-yellow-600">apoyar</strong> al canal?</h2>
        </div>
        {/* <h3 className="pb-8 text-xl font-medium text-center">Formas de Apoyo</h3> */}
        <div className="flex flex-col justify-center pt-12 gap-14 lg:pt-28 lg:gap-28 md:flex">
          <div data-id={apoyoBlockId} className={`transition duration-[2000ms] observed-item ease-out ${visibleItems[apoyoBlockId] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } flex flex-col items-center justify-between p-8 bg-gray-300 rounded-2xl lg:mx-72 2xl:flex-row`}>
            <div className="mt-6 mb-3 2xl:mr-40 text-start">
              <h2 className="block pb-3 text-lg font-semibold text-red-900 uppercase 2xl:hidden">¡It's free!</h2>
              <p className="lg:text-lg">Que decidas pasar un minuto de tu tiempo es un apoyo enorme, pero puedes hacer todo esto <span className="font-serif text-3xl italic text-white bg-green-600">más grande</span> si sigues los canales de Twitch, Youtube, Spotify o iVoox.</p>
              <p className="pt-8 text-sm">¡También puedes <strong className="text-red-800">compartir</strong> el contenido con quien creas que puede gustarle, comentar en los vídeos dando tu opinión, o participar en los directos!</p>
            </div>            
            <div className="flex items-center justify-center lg:gap-2">
                  <div className="flex items-center justify-center w-12 h-12 ml-2 xs:w-20 xs:h-20">
                    <a href={`${formasApoyo[3]?.enlaceProyectoWeb}`}>
                    <img className="p-[2px] transition duration-500 hover:scale-110" src={formasApoyo[3]?.url} alt='No hay imagen'></img></a>
                  </div>
          
                  <div className="flex items-center justify-center w-16 h-16 p-3 ml-2 xs:w-24 xs:h-24">
                    <a href={`${formasApoyo[0]?.enlaceProyectoWeb}`}>
                    <img className="transition duration-500 hover:scale-110" src={formasApoyo[0]?.url} alt='No hay imagen'></img></a>
                  </div>
                  <div className="flex items-center justify-center w-20 h-20 p-3 xs:w-24 xs:h-24">
                    <a href={`${formasApoyo[2]?.enlaceProyectoWeb}`}>
                    <img className="transition duration-500 hover:scale-110" src={formasApoyo[2]?.url} alt='No hay imagen'></img></a>
                  </div>
                  <div className="flex items-center justify-center w-20 h-20 p-3 xs:w-28 xs:h-28">
                    <a href={`${horario[0]?.enlaceProyectoWeb}`}>
                    <img className="transition duration-500 hover:scale-110" src={horario[0]?.url} alt='No hay imagen'></img></a>
                  </div>
            </div>
          </div>
          {/* <div className="pt-[1px] lg:mx-80 bg-gray-400"></div> */}
          <div data-id={apoyoBlock2Id} className={`transition duration-[2000ms] observed-item ease-out ${visibleItems[apoyoBlock2Id] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } flex flex-col items-center justify-between p-8 bg-gray-300 rounded-2xl lg:mx-72 2xl:flex-row`}>
            <div className="mt-6 mb-3 lg:text-lg 2xl:mr-60">             
            <h2 className="block pb-3 text-lg font-semibold text-green-900 uppercase 2xl:hidden">¡Take my money!</h2>
              <p className="text-start">Para quién quiera apoyar económicamente porque le encanta el contenido, la comunidad o incluso porque es suuuper optimista y confía en que esto pueda convertirse en algo mucho más grande, logrando que podamos dedicarnos en exclusiva a esto, puede hacerlo a través de través de <strong className="text-orange-800">Patreon</strong>, <strong className="text-blue-800">Paypal</strong> o a través de las suscripciones &#40;<a href="https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GTCADSYDQFMD5DRS" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-700">si tienes Amazon Prime... ¡te sale gratis!</a>&#41;, donaciones y <span className="font-mono text-green-600">bits</span> de <span className="font-serif italic text-white bg-purple-600">Twitch</span>.</p>
              <p className="pt-8 text-sm">Ante este tipo de apoyo, he creado unos <Link to onClick={() => handleScrollToEdit('indice-agradecimientos')} className="font-bold">agradecimientos</Link> que podréis ver inmediatamente debajo en esta misma web, como una pequeña forma de recompensar las aportaciones.</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center justify-center w-12 h-12 ml-5 xs:w-16 xs:h-16">
                    <a href={`${formasApoyo[1]?.enlaceProyectoWeb}`}>
                    <img className="transition duration-500 hover:scale-110" src={formasApoyo[1]?.url} alt='No hay imagen'></img></a>
                  </div>
          
                  <div className="flex items-center justify-center w-20 h-20 p-3 xs:w-16 xs:h-16">
                    <a href={`${formasApoyo[4]?.enlaceProyectoWeb}`}>
                    <img className="transition duration-500 hover:scale-110" src={formasApoyo[4]?.url} alt='No hay imagen'></img></a>
                  </div>

                  <div className="flex items-center justify-center w-20 h-20 p-3 xs:w-28 xs:h-28">
                    <a href={`${horario[0]?.enlaceProyectoWeb}`}>
                    <img className="transition duration-500 hover:scale-110" src={horario[0]?.url} alt='No hay imagen'></img></a>
                  </div>
            </div>
          </div>
        </div>
    </>
  )
}
