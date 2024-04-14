import { IvooxIcon } from "../../../../assets/Icons/Social-networks/IvooxIcon"
import { SpotifyIcon } from "../../../../assets/Icons/Social-networks/SpotifyIcon"
import { YoutubeIcon } from "../../../../assets/Icons/Social-networks/YoutubeIcon"
import { useGetData } from "../../../../hooks/useGetData"
import { ScrollToTopButton } from "../AnimationIndexComponents"

export function ExtraProgramas() {
  const { programas } = useGetData()

  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen pt-24 text-white color-fondo-3">          
            <div>
              {programas.map((item)=>(
                <div key={item?.idDoc}>
                  {(item?.titulo === 'Ciencia y Psicología') &&
                    <div className="p-8 py-12">
                      <div className="items-center justify-center flex-grow gap-3 xl:flex">
                        <div className="flex flex-col">
                          <h2 className="p-3 text-2xl font-bold text-center uppercase">{item?.titulo}</h2>
                          <div className="flex items-center justify-center p-6 mb-3"><img className="object-cover bg-black rounded xl:w-full h-96 opacity-70" src={item?.url} alt='No hay imagen'></img></div>
                        </div>
                        <div className="p-6 text-justify xl:w-2/3">
                            <p className="xl:pt-14">{item?.infoExtra2}</p>
                            <p className="pt-6">{item?.infoExtra3}</p>
                            <div className="items-center justify-center flex-grow gap-6 pt-12 2xl:flex">
                              <a className="flex items-center justify-center" href="https://www.youtube.com/playlist?list=PLAaEQHxdQUmJ5EkKQE4-iXGlalwxKxq6v" target="_blank" rel="noreferrer">
                                <div className="flex items-center justify-center w-64 gap-3 px-4 py-2 mb-8 bg-red-700 rounded-t-3xl rounded-b-3xl hover:shadow-lg hover:bg-red-500">
                                  Ciencia y Psicología  |
                                  <YoutubeIcon/>
                                </div>
                              </a>
                                <a className="flex items-center justify-center" href="https://open.spotify.com/playlist/52AB8zsfLovTitigfsNihS" target="_blank" rel="noreferrer">
                                  <div className="flex items-center justify-center w-64 gap-3 px-4 py-2 mb-8 bg-green-700 rounded-t-3xl rounded-b-3xl hover:shadow-lg hover:bg-green-500">
                                    Ciencia y Psicología  |
                                    <SpotifyIcon/>
                                  </div>
                                </a>
                                <a className="flex items-center justify-center" href="https://www.ivoox.com/podcast-ciencia-psicologia_sq_f1997581_1.html" target="_blank" rel="noreferrer">
                                  <div className="flex items-center justify-center w-64 gap-3 px-4 py-2 mb-8 bg-orange-700 rounded-t-3xl rounded-b-3xl hover:shadow-lg hover:bg-orange-500">
                                    Ciencia y Psicología  |
                                    <IvooxIcon/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                  </div>
                  }
                </div>
              ))}
            </div>
                 
              <div className="color-fondo-2">
                {programas.map((item)=>(
                  <div key={item?.idDoc}>
                    {(item?.titulo === 'Psicología y Videojuegos') &&
                      <div className="p-8 py-12">
                      <div className="items-center justify-center flex-grow gap-3 xl:flex">
                        <div className="flex flex-col">
                          <h2 className="p-3 text-2xl font-bold text-center uppercase">{item?.titulo}</h2>
                          <div className="flex items-center justify-center p-6 mb-3"><img className="object-cover bg-black rounded xl:w-full h-96 opacity-70" src={item?.url} alt='No hay imagen'></img></div>
                        </div>
                        <div className="p-6 text-justify xl:w-2/3">
                            <p className="xl:pt-14">{item?.infoExtra2}</p>
                            <p className="pt-6">{item?.infoExtra3}</p>
                            <div className="items-center justify-center flex-grow gap-6 pt-12 2xl:flex">
                              <a className="flex items-center justify-center" href="https://www.youtube.com/watch?v=mzqNYsJEbVg&list=PLAaEQHxdQUmLXf3UNQULWW0ktff8jJ_8T" target="_blank" rel="noreferrer">
                                <div className="flex items-center justify-center gap-3 px-4 py-2 mb-8 bg-red-700 w-72 rounded-t-3xl rounded-b-3xl hover:shadow-lg hover:bg-red-500">
                                  Psicología y Videojuegos |
                                  <YoutubeIcon/>
                                </div>
                              </a>
                                <a className="flex items-center justify-center" href="https://open.spotify.com/playlist/21HgzZ1sgBBYcFpH3NnFDp" target="_blank" rel="noreferrer">
                                  <div className="flex items-center justify-center gap-3 px-4 py-2 mb-8 bg-green-700 w-72 rounded-t-3xl rounded-b-3xl hover:shadow-lg hover:bg-green-500">
                                    Psicología y Videojuegos |
                                    <SpotifyIcon/>
                                  </div>
                                </a>
                                <a className="flex items-center justify-center" href="https://www.ivoox.com/podcast-ciencia-psicologia_sq_f1997581_1.html" target="_blank" rel="noreferrer">
                                  <div className="flex items-center justify-center gap-3 px-4 py-2 mb-8 bg-orange-700 w-72 rounded-t-3xl rounded-b-3xl hover:shadow-lg hover:bg-orange-500">
                                    Psicología y Videojuegos |
                                    <IvooxIcon/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                  </div>
                  }
                </div>
                ))}
              </div>            

              <div>
                {programas.map((item)=>(
                  <div key={item?.idDoc}>
                    {(item?.titulo === 'Grandes Desconocidos') &&
                        <div className="p-8 py-12">
                        <div className="items-center justify-center flex-grow gap-3 xl:flex">
                          <div className="flex flex-col">
                            <h2 className="p-3 text-2xl font-bold text-center uppercase">{item?.titulo}</h2>
                            <div className="flex items-center justify-center p-6 mb-3"><img className="object-cover bg-black rounded xl:w-full h-96 opacity-70" src={item?.url} alt='No hay imagen'></img></div>
                          </div>
                          <div className="p-6 text-justify xl:w-2/3">
                              <p className="xl:pt-14">{item?.infoExtra2}</p>
                              <p className="pt-6">{item?.infoExtra3}</p>
                              <div className="items-center justify-center flex-grow gap-6 pt-12 2xl:flex">
                                <a className="flex items-center justify-center" href="https://www.youtube.com/watch?v=I7TE4SnqHpQ&list=PLAaEQHxdQUmIwOl-19l397pwB6B93mhks" target="_blank" rel="noreferrer">
                                  <div className="flex items-center justify-center gap-3 px-4 py-2 mb-8 bg-red-700 w-72 rounded-t-3xl rounded-b-3xl hover:shadow-lg hover:bg-red-500">
                                    Grandes Desconocidos |
                                    <YoutubeIcon/>
                                  </div>
                                </a>
                                  <a className="flex items-center justify-center" href="https://open.spotify.com/playlist/3SbLjrCDsUDo773BzPw5mY" target="_blank" rel="noreferrer">
                                    <div className="flex items-center justify-center gap-3 px-4 py-2 mb-8 bg-green-700 w-72 rounded-t-3xl rounded-b-3xl hover:shadow-lg hover:bg-green-500">
                                      Grandes Desconocidos |
                                      <SpotifyIcon/>
                                    </div>
                                  </a>
                                  <a className="flex items-center justify-center" href="https://www.ivoox.com/podcast-grandes-desconocidos_sq_f11136270_1.html" target="_blank" rel="noreferrer">
                                    <div className="flex items-center justify-center gap-3 px-4 py-2 mb-8 bg-orange-700 w-72 rounded-t-3xl rounded-b-3xl hover:shadow-lg hover:bg-orange-500">
                                      Grandes Desconocidos |
                                      <IvooxIcon/>
                                      </div>
                                  </a>
                              </div>
                          </div>
                      </div>
                    </div>
                    }
                  </div>
                ))}
              </div>
              <ScrollToTopButton/>
        </div>
    </>
  )
}
