import { useGetData } from "../../../hooks/useGetData"

export function InfoCanal() {
    const { infoCanal } = useGetData()

  return (
    <>
          <div>{infoCanal.map((item) => (
              <div key={item?.idDoc} >
                <div className="items-center justify-center flex-grow gap-3 sm:flex">
                <div className="sm:w-2/3">
                  <h2 className="pb-4 font-bold uppercase text-xl">{item?.titulo}</h2>
                    <div className="flex flex-col gap-8 text-justify">
                      <p>{item?.descripcion} </p>
                      <p>{item?.infoExtra}</p>
                      <p>{item?.infoExtra2}</p>
                      <p className="text-center sm:text-start">{item?.infoExtra3}</p>
                    </div>
                </div>
                  <div className="flex items-center justify-center gap-3 m-8 sm:w-1/3"><img className="object-cover h-48 rounded-lg w-60 sm:w-full sm:h-72" src={item?.url} alt='No hay imagen'></img></div>
                </div>          
              </div>
          ))}
          </div>
    </>
  )
}
