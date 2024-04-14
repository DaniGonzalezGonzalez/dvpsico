import { useGetData } from "../../../hooks/useGetData"

export function Horario() {
    const { horario } = useGetData()

  return (
    <>
        <h2 className="pb-8 text-xl font-bold uppercase text-end">Horario</h2>
        <div>{horario.map((item) => (
              <div key={item?.idDoc} >
              <div className="items-center justify-center flex-grow gap-3 sm:flex">
              <div className="flex items-center justify-center gap-3 m-8 md:w-1/3"><img className="object-cover w-48 h-48 rounded-lg xl:w-72 xl:h-96" src={item?.url} alt='No hay imagen'></img></div>
              <div className="sm:w-2/3">
                  <div className="flex flex-col gap-8 text-justify">
                    <p>{item?.descripcion} </p>
                    <p>{item?.infoExtra}</p>
                    <p className="p-1 font-bold text-center text-red-600 bg-gray-200 rounded shadow-md">{item?.infoExtra2}</p>
                  </div>
              </div>

              </div>          
            </div>
        ))}
        </div>
    </>
  )
}
