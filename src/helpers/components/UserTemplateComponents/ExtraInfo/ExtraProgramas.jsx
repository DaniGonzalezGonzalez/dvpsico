import { IvooxIcon } from "../../../../assets/Icons/Social-networks/IvooxIcon"
import { SpotifyIcon } from "../../../../assets/Icons/Social-networks/SpotifyIcon"
import { YoutubeIcon } from "../../../../assets/Icons/Social-networks/YoutubeIcon"
import { useGetData } from "../../../../hooks/useGetData"
import { useVisibilityObserver } from "../../../../hooks/useVisibilityObserver"
import { ScrollToTopButton } from "../AnimationIndexComponents"

export function ExtraProgramas() {
  const { programas } = useGetData()
  const visibleItems = useVisibilityObserver(".observed-item", 0.3);
  const titleCyPBlockId = "title-cyp-block"
  const cypBlockId = "cypBlockId"
  const cypBlock2Id = "cypBlockId2"
  const titlePyVBlockId = "title-pyv-block"
  const pyvBlockId = "pyvBlockId"
  const pyvBlock2Id = "pyvBlockId2"
  const titleGDBlockId = "title-gd-block"
  const gdBlockId = "gdBlockId"
  const gdBlock2Id = "gdBlockId2"

  return (
    <div className="flex flex-col text-white bg-black xl:gap-24">
      {/* Bloque 1 */}
      {programas.map((item) =>
        item?.titulo === "Ciencia y Psicología" ? (
          <div key={item.idDoc} className="relative flex items-center justify-center w-full min-h-screen">
            {/* Fondo color */}
            <div className="absolute inset-0 bg-black"></div>
            {/* Imagen de fondo */}
            <div data-id={cypBlockId}
              className={`transition duration-[1000ms] observed-item ease-out ${visibleItems[cypBlockId] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } absolute inset-0 bg-no-repeat bg-cover xl:bg-contain opacity-20 xl:opacity-60`}
              style={{ backgroundImage: "url('/Ciencia-psico-image-1.webp')", backgroundPosition: window.innerWidth >= 1024 ? "-60% center" : "20% center" }}
            ></div>
            {/* Contenido */}
            <div data-id={cypBlock2Id} className={`transition duration-[2000ms] observed-item ease-out ${visibleItems[cypBlock2Id] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } relative z-10 flex flex-col items-start justify-center w-full px-6 py-32 xl:flex-row lg:items-end lg:gap-10`}>
              <div data-id={titleCyPBlockId} className={`transition duration-[2000ms] observed-item ease-out ${visibleItems[titleCyPBlockId] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } flex flex-col items-center lg:items-start`}>
                <h2 className=" font-bold text-start xl:uppercase xl:text-[60px] text-2xl italic font-serif bg-purple-800">{item.titulo}</h2>
              </div>
              <div className="max-w-3xl mt-6 text-justify lg:mt-0">
                <div className="text-sm text-left xl:text-base">
                  <p className="mb-5 text-base xl:text-2xl"><strong>Ciencia y Psicología</strong> es un programa en el que se trata de abordar la psicología científica en pequeños vídeos y podcast. Es el principal programa del canal en cuanto a cantidad de contenido, habiendo hasta <span className="text-green-300">37</span> capítulos.</p> 
                  
                  <div className="mb-3">
                    <p className="p-2 border border-green-700 xl:p-0 xl:border-none xl:rounded-none rounded-xl">Hay tanto episodios sueltos como otros que forman parte de una serie; por ejemplo, en la primera serie se aborda la <span className="font-semibold uppercase bg-green-800">sensación</span>. ¿De qué trata? En ella, analizamos la sensación tal y como se estudia en la psicología científica: desde la visión, la audición, el gusto, el olfato, la interocepción, etc.</p> 
                    <p className="p-2 mt-3 border border-blue-700 xl:p-0 xl:border-none xl:rounded-none rounded-xl">Otra serie estudia la <span className="italic bg-blue-600">percepción</span>, con el objetivo de comprender su diferencia con la sensación y entender cómo percibimos la profundidad, las formas, el movimiento o las <span className="text-yellow-500">ilusiones</span> <span className="text-red-500">perceptivas</span>.</p> 
                    <p className="my-8 xl:mt-3 xl:my-0">En otros capítulos se exploran investigaciones sobre cómo la pandemia del <span className="underline">coronavirus</span> afectó en diferentes aspectos: la ansiedad, el impacto psicológico, la soledad, la salud mental o el proceso de duelo.</p> 
                    
                    <p className="p-2 my-3 border border-red-700 xl:p-0 xl:border-none xl:rounded-none rounded-xl">También hay una miniserie sobre la <span className="font-semibold bg-red-900">depresión</span> y los suicidios, su incidencia y posible prevención. </p>
                    
                    <p className="p-2 border border-purple-700 xl:p-0 xl:border-none xl:rounded-none rounded-xl">Encontraréis capítulos sobre más temas pero, entre todos, quizá mis favoritos son aquellos sobre <span className="font-serif text-xl italic bg-purple-800">memoria</span>, en los que se tratan aspectos básicos de los diferentes tipos de memoria, la plasticidad cerebral o los falsos recuerdos.</p>
                  </div>
                  <p className="mt-6 xl:mt-0">Espero que os guste el contenido de <strong>Ciencia y Psicología</strong>. En ese caso, ¡no dudéis en suscribiros o seguir los canales de Twitch, Youtube, Spotify e Ivoox!</p>
                </div>
                {/* <p className="mb-6">{item.infoExtra2}</p> */}
                {/* <p>{item.infoExtra3}</p> */}
                <div className="flex flex-wrap justify-center gap-6 mt-12">
                  <a
                    href="https://www.youtube.com/playlist?list=PLAaEQHxdQUmJ5EkKQE4-iXGlalwxKxq6v"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3 transition duration-500 bg-red-700 rounded-full hover:bg-red-500"
                  >
                    Ciencia y Psicología | <YoutubeIcon />
                  </a>
                  <a
                    href="https://open.spotify.com/playlist/52AB8zsfLovTitigfsNihS"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3 transition duration-500 bg-green-700 rounded-full hover:bg-green-500"
                  >
                    Ciencia y Psicología | <SpotifyIcon />
                  </a>
                  <a
                    href="https://www.ivoox.com/podcast-ciencia-psicologia_sq_f1997581_1.html"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3 transition duration-500 bg-orange-700 rounded-full hover:bg-orange-500"
                  >
                    Ciencia y Psicología | <IvooxIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}

      {/* Bloque 2 */}
      {programas.map((item) =>
        item?.titulo === "Psicología y Videojuegos" ? (
          <div key={item.idDoc} className="relative flex items-center justify-center w-full min-h-screen">
            <div className="absolute inset-0 bg-black"></div>
            <div data-id={pyvBlockId}
              className={`transition duration-[1000ms] observed-item ease-out ${visibleItems[pyvBlockId] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" }  absolute inset-0 bg-no-repeat bg-cover xl:bg-contain opacity-20 xl:opacity-60`}
              style={{ backgroundImage: "url('/Psico-videojuegos-image-1.webp')", backgroundPosition: window.innerWidth >= 1024 ? "-800% center" : "20% center" }}
            ></div>
            <div className="relative z-10 flex flex-col items-start justify-center w-full px-6 py-32 xl:flex-row lg:items-end lg:gap-10">
              <div data-id={titlePyVBlockId} className={`transition duration-[1000ms] observed-item ease-out ${visibleItems[titlePyVBlockId] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } flex flex-col items-center lg:items-start`}>
                <h2 className="flex gap-1 xl:gap-7 xl:flex-col font-bold text-start xl:uppercase xl:text-[60px] text-2xl italic font-serif bg-gray-800">
                  <p>Psicología y </p>
                  <p> videojuegos</p>
                </h2>
              </div>
              <div data-id={pyvBlock2Id} className={`transition duration-[2000ms] observed-item ease-out ${visibleItems[pyvBlock2Id] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } max-w-3xl mt-6 text-justify lg:mt-0 xl:ml-80`}>
                <div className="text-sm text-left xl:text-base">
                  <p className="mb-5 text-base xl:text-2xl"><strong>Psicología y Videojuegos</strong> es un programa complementario a "Ciencia y Psicología". Su propósito es tratar de forma diferenciada aquellos aspectos de los videojuegos que pueden afectarnos a nivel psicológico.</p> 
                  
                  <div className="mb-3">
                    <p className="p-2 border border-green-700 xl:p-0 xl:border-none xl:rounded-none rounded-xl">La mayoría de fans de los videojuegos o incluso personas ajenas a ese mundo hemos visto o escuchado, con toda seguridad, noticias sobre cómo los videojuegos pueden aumentar nuestra violencia, generar adicción, etc. En este programa revisamos artículos científicos que estudian estos aspectos, en concreto: los <span className="font-serif text-xl italic bg-green-700">beneficios cognitivos</span> de los videojuegos, la <span className="font-semibold text-black bg-white">violencia</span> en los videojuegos, la psicología del <span className="font-extrabold text-red-600">terror</span> en los videojuegos y el "gaming disorder".</p>                    
                                 
                    <p className="p-2 my-8 text-gray-800 bg-gray-200 border border-gray-900 xl:text-white xl:bg-transparent xl:mt-3 xl:my-0 xl:p-0 xl:border-none xl:rounded-none rounded-xl">En este caso, encontraréis menos capítulos en vídeo o podcast que en "Ciencia y Psicología", debido a que <span className="font-semibold">la mayoría de contenido</span> relacionado con el análisis de la influencia de los videojuegos <span className="font-semibold">lo tratamos en los directos de Twitch</span>, al ser precisamente una plataforma ligada de forma muy directa al gaming.</p> 
                                
                  </div>
                  <p className="mt-6 xl:mt-0">Espero que os guste el contenido de <strong>Psicología y Videojuegos</strong>. En ese caso, ¡no dudéis en suscribiros o seguir los canales de Twitch, Youtube, Spotify e Ivoox!</p>             
                </div>
                {/* <p className="mb-6">{item.infoExtra2}</p>
                <p>{item.infoExtra3}</p> */}
                <div className="flex flex-wrap justify-center gap-6 mt-12">
                  <a
                    href="https://www.youtube.com/watch?v=mzqNYsJEbVg&list=PLAaEQHxdQUmLXf3UNQULWW0ktff8jJ_8T"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-red-700 rounded-full hover:bg-red-500"
                  >
                    Psicología y Videojuegos | <YoutubeIcon />
                  </a>
                  <a
                    href="https://open.spotify.com/playlist/21HgzZ1sgBBYcFpH3NnFDp"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-green-700 rounded-full hover:bg-green-500"
                  >
                    Psicología y Videojuegos | <SpotifyIcon />
                  </a>
                  <a
                    href="https://www.ivoox.com/podcast-ciencia-psicologia_sq_f1997581_1.html"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-orange-700 rounded-full hover:bg-orange-500"
                  >
                    Psicología y Videojuegos | <IvooxIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}

      {/* Bloque 3 */}
      {programas.map((item) =>
        item?.titulo === "Grandes Desconocidos" ? (
          <div key={item.idDoc} className="relative flex items-center justify-center w-full min-h-screen">
            <div className="absolute inset-0 bg-black"></div>
            <div data-id={gdBlockId}
              className={`transition duration-[1000ms] observed-item ease-out ${visibleItems[gdBlockId] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } absolute inset-0 bg-no-repeat bg-cover xl:bg-contain opacity-20 xl:opacity-60`}
              style={{ backgroundImage: "url('/Grandes-Desconocidos-image-1.webp')", backgroundPosition: window.innerWidth >= 1024 ? "-80% center" : "30% center" }}
            ></div>
            <div className="relative z-10 flex flex-col items-start justify-center w-full px-6 py-32 xl:flex-row lg:items-end lg:gap-10">
              <div data-id={titleGDBlockId} className={`transition duration-[2000ms] observed-item ease-out ${visibleItems[titleGDBlockId] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } flex flex-col items-center lg:items-start`}>
                <h2 className="flex gap-1 xl:gap-7 xl:flex-col font-bold text-start xl:uppercase xl:text-[60px] text-2xl italic font-serif bg-blue-900">
                  <p>Grandes </p>
                  <p> Desconocidos</p>
                </h2>
              </div>
              <div data-id={gdBlock2Id} className={`transition duration-[2000ms] observed-item ease-out ${visibleItems[gdBlock2Id] ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20" } max-w-3xl mt-6 text-justify lg:mt-0 xl:ml-72`}>
                <div className="text-sm text-left xl:text-base">
                  <p className="mb-5 text-base xl:text-2xl"><strong>Grandes Desconocidos</strong> es una colección algo diferente al resto del contenido del canal. Este programa consta de <span className="italic font-bold text-gray-800 bg-yellow-200">charlas con personas de diferentes ámbitos</span>: medicina, psicología, literatura, psicogerontología, química o historia, entre otros temas.</p> 
                  <div className="mb-3">
                    <p className="p-2 border-2 border-orange-700 xl:p-0 xl:border-none xl:rounded-none rounded-xl">El objetivo de estas charlas es poder entrar en detalle en campos que normalmente no conocemos, con gente que domina y trabaja en los mismos. Además, poder verlo a través de <span className="font-semibold text-orange-500">su propia perspectiva y experiencia personal</span> me parecía mucho más interesante.</p>                  
                    <p className="p-2 my-8 text-gray-800 bg-green-100 border border-gray-900 xl:text-white xl:bg-transparent xl:mt-3 xl:my-0 xl:p-0 xl:border-none xl:rounded-none rounded-xl">Estas charlas son, desde mi punto de vista, un ejemplo de cómo en muchas ocasiones podemos encontrar <span className="font-serif italic uppercase">gente extraordinaria</span> en nuestro entorno, sin necesidad de tratarse de personas famosas, y pienso que es reconfortante saber que hay tanta cultura y conocimiento de forma tan cercana.</p> 
                  </div>
                  <p className="mt-6 xl:mt-0">Espero que os guste el contenido de <strong>Grandes Desconocidos</strong>. En ese caso, ¡no dudéis en suscribiros o seguir los canales de Twitch, Youtube, Spotify e Ivoox!</p>             
                </div>
                 
                 


                {/* <p className="mb-6">{item.infoExtra2}</p>
                <p>{item.infoExtra3}</p> */}
                <div className="flex flex-wrap justify-center gap-6 mt-12">
                  <a
                    href="https://www.youtube.com/watch?v=I7TE4SnqHpQ&list=PLAaEQHxdQUmIwOl-19l397pwB6B93mhks"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-red-700 rounded-full hover:bg-red-500"
                  >
                    Grandes Desconocidos | <YoutubeIcon />
                  </a>
                  <a
                    href="https://open.spotify.com/playlist/3SbLjrCDsUDo773BzPw5mY"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-green-700 rounded-full hover:bg-green-500"
                  >
                    Grandes Desconocidos | <SpotifyIcon />
                  </a>
                  <a
                    href="https://www.ivoox.com/podcast-grandes-desconocidos_sq_f11136270_1.html"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-orange-700 rounded-full hover:bg-orange-500"
                  >
                    Grandes Desconocidos | <IvooxIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}

      <ScrollToTopButton />
    </div>
  )
}