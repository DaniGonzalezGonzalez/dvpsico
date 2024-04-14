import { useGetData } from "../../../hooks/useGetData"

export function FormasApoyo() {
    const { formasApoyo, horario } = useGetData()

  return (
    <>
        <h2 className="pb-8 text-xl font-bold text-center uppercase">Apoyo</h2>
        <h3 className="pb-8 text-xl font-medium text-center">Formas de Apoyo</h3>
        <div className="flex-wrap justify-center gap-28 md:flex">
          <div className="flex flex-col items-center justify-around">
            <p className="mt-6 mb-3 font-medium text-center">Sigue los canales y comparte el contenido</p>
            <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center justify-center w-12 h-12 xs:w-20 xs:h-20">
                    <a href={`${formasApoyo[3]?.enlaceProyectoWeb}`}>
                    <img src={formasApoyo[3]?.url} alt='No hay imagen'></img></a>
                  </div>
          
                  <div className="flex items-center justify-center w-16 h-16 p-3 ml-2 xs:w-24 xs:h-24">
                    <a href={`${formasApoyo[0]?.enlaceProyectoWeb}`}>
                    <img src={formasApoyo[0]?.url} alt='No hay imagen'></img></a>
                  </div>
                  <div className="flex items-center justify-center w-20 h-20 p-3 xs:w-24 xs:h-24">
                    <a href={`${formasApoyo[2]?.enlaceProyectoWeb}`}>
                    <img src={formasApoyo[2]?.url} alt='No hay imagen'></img></a>
                  </div>
                  <div className="flex items-center justify-center w-20 h-20 p-3 xs:w-28 xs:h-28">
                    <a href={`${horario[0]?.enlaceProyectoWeb}`}>
                    <img src={horario[0]?.url} alt='No hay imagen'></img></a>
                  </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-around">
            <p className="mt-6 mb-3 font-medium text-center">Apoya a través de Patreon o Paypal</p>
            <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center justify-center w-12 h-12 xs:w-16 xs:h-16">
                    <a href={`${formasApoyo[1]?.enlaceProyectoWeb}`}>
                    <img src={formasApoyo[1]?.url} alt='No hay imagen'></img></a>
                  </div>
          
                  <div className="flex items-center justify-center w-20 h-20 p-3 xs:w-16 xs:h-16">
                    <a href={`${formasApoyo[4]?.enlaceProyectoWeb}`}>
                    <img src={formasApoyo[4]?.url} alt='No hay imagen'></img></a>
                  </div>
            </div>
          </div>
        </div>
    </>
  )
}
