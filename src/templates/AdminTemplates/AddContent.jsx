import { useContext, useRef } from "react"
import { UserContext } from "../../context/UserContext"
import { useAdd } from "../../hooks/useAdd";

export function AddContent() {
  const tituloRef = useRef(null)
  const tipoContenidoRef = useRef(null)
  const { handleFileChange, handleSubmit, error, isLoading, handleNombreArchivo, nombreArchivo} = useAdd(tituloRef, tipoContenidoRef)
  const { user } = useContext(UserContext)

    // Función vacía para manejar cambios en el textarea
    // const handleTextareaChange = () => {};

  return (
    <>
    {
    user.uid &&
    <div className="flex items-center justify-center min-h-screen p-8 pt-20 bg-gray-800">
        <div className="p-6 mx-8 my-8 bg-gray-600 rounded shadow-lg sm:mx-2">
          <form className='flex flex-col gap-3 space-y-4' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2'>
              <label htmlFor="tipo-contenido" className="block font-medium text-white font-montserrat">Tipo de contenido</label>
              <select ref={tipoContenidoRef} name="tipoContenido" id="tipo-contenido" className="p-2 border rounded">
                <option value="InfoCanal">Información del canal</option>
                <option value="Programas">Programas</option>
                <option value="FormasApoyo">Formas de Apoyo</option>
                <option value="Horario">Horario</option>
                <option value="Agradecimientos">Agradecimientos</option>
                <option value="ArchivosDisenoWeb">Archivos para Diseño de la Web*</option>
                <option value="ListadoDeJuegos">Listado de Juegos**</option>
              </select>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="titulo" className="block font-medium text-white font-montserrat">Título</label>
              <input ref={tituloRef} className="w-full p-2 border rounded" type="text" name="titulo" id="titulo" placeholder="Añadir título"/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="descripcion" className="block font-medium text-white font-montserrat">Descripción</label>
              <textarea className="p-2 border rounded resize-none" name="descripcion" id="descripcion" placeholder="Añadir descripción" rows="3" cols="33"></textarea>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="infoExtra" className="block font-medium text-white font-montserrat">Información Extra</label>
              <textarea className="p-2 border rounded resize-none" name="infoExtra" id="infoExtra" placeholder="Añadir info extra" rows="3" cols="33"></textarea>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="infoExtra2" className="block font-medium text-white font-montserrat">Información Extra 2</label>
              <textarea className="p-2 border rounded resize-none" name="infoExtra2" id="infoExtra2" placeholder="Añadir info extra 2" rows="3" cols="33"></textarea>
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="infoExtra3" className="block font-medium text-white font-montserrat">Información Extra 3</label>
              <textarea className="p-2 border rounded resize-none" name="infoExtra3" id="infoExtra3" placeholder="Añadir info extra 3" rows="3" cols="33"></textarea>
            </div>

            {/* <div className='flex flex-col gap-2'>
              <label htmlFor="infoExtra4" className="block font-medium text-white font-montserrat">Información Extra 4</label>
              <textarea className="p-2 border rounded resize-none" name="infoExtra4" id="infoExtra4" placeholder={user.email} rows="3" cols="33" hidden onChange={handleTextareaChange} value={user.email}></textarea>
            </div> */}
            
            <div className='flex flex-col gap-2'>
              <label htmlFor="enlaceProyectoWeb" className="block font-medium text-white font-montserrat">Enlace al proyecto web {<span className='font-bold text-red-500'>(solo para Proyectos Web)</span>}</label>
              <textarea className="p-2 border rounded resize-none" name="enlaceProyectoWeb" id="enlaceProyectoWeb" placeholder="https://danielgonzalezportfolio.netlify.app/" rows="3" cols="33"></textarea>
            </div>
  
           
            <div className='flex flex-col gap-2'>
              <label htmlFor="file" className="block font-medium text-white font-montserrat">Archivo
              <input className="w-full p-2 mt-2 mb-2 text-sm font-medium text-gray-800 border rounded resize-none font-montserrat" type="text" name="nombreArchivo" value={nombreArchivo} placeholder="Nombre del archivo" onChange={handleNombreArchivo}/>
              <input className="w-full py-2 resize-none" htmlFor="file" type="file" name="file" id="file" onChange={handleFileChange}/>
              </label>
            </div>
            <button disabled={isLoading} className="text-white bg-gray-900 hover:text-white border hover:bg-gray-700 font-bold rounded-lg text-sm px-5 py-2.5 text-center mb-2 font-montserrat">Enviar</button>
            {error?.message && <p className="font-bold text-red-400 font-montserrat">{error.message}</p>}
            {isLoading && 'Cargando...'}
          </form>
        </div>
    </div>
    }
    </>
  )
}
