import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useEditar } from "../../hooks/useEditar";
import { getDocuments } from "../../api/firebase/cloud-firestore";
import { UserContext } from "../../context/UserContext";

export function EditContent() {
  const [dataBD, setDataBD] = useState([])
  const [contenido, setContenido] = useState({});
  const [error, setError] = useState(null);
  const [option, setOption] = useState('InfoCanal')
  const [isDisabled, setIsDisabled] = useState(true)
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const parametros = useParams()
  const { id } = parametros
  const { handleSubmit, tituloRef, handleDelete, isLoading, handleFileChange, handleNombreArchivo, nombreArchivo } = useEditar(contenido.idDoc, option)

  const fetchData = async () => {
    try {
      const datos = await getDocuments(option)
      setDataBD(datos)
    } catch (error) {
      setError("Error al cargar los datos")
    }
  }  

  useEffect(() => {
    fetchData()
    const handleDataChanged = () => {
      fetchData()
    }  
    document.addEventListener('data-changed', handleDataChanged);
    return () => {
      document.removeEventListener('data-changed', handleDataChanged);
    }
  }, [dataBD]);

  const sortedData = dataBD.sort((a, b) => a.titulo.localeCompare(b.titulo))

  const handleOption = (e) => {
    setOption(e.target.value)
    getDocuments(e.target.value).then((datos) => setDataBD(datos))
  }

  const handleChange = (e) => {
    setContenido({
      ...contenido,
      [e.target.name]: e.target.value
    })
  }

  const handleEditarContenido = (item) => {
    setContenido({ ...item })
  }

  const handleGuardarContenido = async (e) => {
    e.preventDefault()
    setContenido({})
    await handleSubmit(e)
    console.log('Contenido guardado con exito')
  }

  const handleEliminar = () => {
    setIsDisabled(!isDisabled)
  }


  return (
    <> 
    { user.uid && 
      <div>
        {error && (<div className="items-center justify-center h-screen"><span className="text-xl text-gray-900 font-montserrat">{error.message}</span></div>)}
        <div className="min-h-screen p-4 pt-20 pb-10 bg-gray-800">
          <div className="container p-4 mx-auto">
            <select name="tipoContenido" id="tipo-contenido"  className="p-2 border rounded" onChange={handleOption}>
              <option value="InfoCanal">Información del canal</option>
              <option value="Programas">Programas</option>
              <option value="FormasApoyo">Formas de Apoyo</option>
              <option value="Horario">Horario</option>
              <option value="Agradecimientos">Agradecimientos</option>
              <option value="ArchivosDisenoWeb">Archivos para Diseño de la Web*</option>
              <option value="ListadoDeJuegos">Listado de Juegos**</option>
            </select>
            <h2 className="mt-8 text-4xl text-center text-gray-100 font-montserrat">{option}</h2>
            {sortedData.map((item) => (
              <div key={item.idDoc} className="flex justify-between p-4 mt-5 bg-gray-100 border border-white rounded">
                {
                  contenido && contenido.idDoc === item.idDoc ?
                  <form className="grid w-full gap-10 md:flex" onSubmit={handleGuardarContenido}>
                      <div className='w-full'>
                        <div className="mb-3 text-lg font-bold text-gray-800 font-montserrat">
                          <label className="block font-bold text-gray-800 font-montserrat" htmlFor="titulo">Titulo</label>
                          <input ref={tituloRef} className="w-full p-2 border rounded" type="text" name="titulo" id="titulo" placeholder="Título" value={contenido.titulo} onChange={handleChange}/>
                        </div>
                        <div className="pt-1 mb-3 font-medium text-gray-800 font-montserrat">
                          <label htmlFor="descripcion" className="block font-bold text-gray-800 font-montserrat">Descripción</label>
                          <textarea className="block w-full p-2 border rounded" name="descripcion" id="descripcion" placeholder="Descripción" rows="5" cols="33" value={contenido.descripcion} onChange={handleChange}></textarea>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <label htmlFor="infoExtra" className="block font-bold text-gray-800 font-montserrat">Información Extra</label>
                          <textarea className="block w-full p-2 border rounded" name="infoExtra" id="infoExtra" placeholder="Añadir info extra" rows="3" cols="33" value={contenido.infoExtra} onChange={handleChange}></textarea>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <label htmlFor="infoExtra2" className="block font-bold text-gray-800 font-montserrat">Información Extra 2</label>
                          <textarea className="block w-full p-2 border rounded" name="infoExtra2" id="infoExtra2" placeholder="Añadir info extra 2" rows="5" cols="33" value={contenido.infoExtra2} onChange={handleChange}></textarea>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <label htmlFor="infoExtra3" className="block font-bold text-gray-800 font-montserrat">Información Extra 3</label>
                          <textarea className="block w-full p-2 border rounded" name="infoExtra3" id="infoExtra3" placeholder="Añadir info extra 3" rows="3" cols="33" value={contenido.infoExtra3} onChange={handleChange}></textarea>
                        </div>


                        <h1 className="mt-10 mb-5">Datos para registro de videojuegos</h1>
                        <h2 className="text-sm">Datos de Metacritic</h2>
                          <div className="flex flex-col items-center justify-center flex-grow gap-10 md:flex-row">
                            <div className="flex flex-col gap-2">
                              <label htmlFor="notaMetacriticPrensa" className="block text-xsfont-montserrat">Nota de prensa en Metacritic</label>
                              <input className="p-2 border rounded resize-none" name="notaMetacriticPrensa" id="notaMetacriticPrensa" placeholder="75" type="number" step={0.1} value={contenido.notaMetacriticPrensa} onChange={handleChange}></input>
                            </div>
                            <div className="flex flex-col gap-2">
                              <label htmlFor="notaMetacriticUsuarios" className="block text-xs font-montserrat">Nota de usuarios en Metacritic</label>
                              <input className="p-2 border rounded resize-none" name="notaMetacriticUsuarios" id="notaMetacriticUsuarios" placeholder="75" type="number" step={0.1} value={contenido.notaMetacriticUsuarios} onChange={handleChange}></input>
                            </div>
                          </div>

                          <h2 className="text-sm">Datos de HowLongToBeat</h2>
                          <div className="flex flex-col items-center justify-center gap-10">
                            <div className="flex flex-col gap-2">
                              <label htmlFor="tiempoMainStory" className="block text-xs font-montserrat">Main story</label>
                              <input className="p-2 border rounded resize-none" name="tiempoMainStory" id="tiempoMainStory" placeholder="15" type="number" value={contenido.tiempoMainStory} onChange={handleChange}></input>
                            </div>
                            <div className="flex flex-col gap-2">
                              <label htmlFor="tiempoMainAndSides" className="block text-xs font-montserrat">Main + extra</label>
                              <input className="p-2 border rounded resize-none" name="tiempoMainAndSides" id="tiempoMainAndSides" placeholder="30" type="number" value={contenido.tiempoMainAndSides} onChange={handleChange}></input>
                            </div>
                            <div className="flex flex-col gap-2">
                              <label htmlFor="tiempoCompletionist" className="block text-xs font-montserrat">Completionist</label>
                              <input className="p-2 border rounded resize-none" name="tiempoCompletionist" id="tiempoCompletionist" placeholder="60" type="number" value={contenido.tiempoCompletionist} onChange={handleChange}></input>
                            </div>
                          </div>

                          <h2 className="text-sm">Enlaces de Metacritic y HowLongToBeat</h2>
                          <div className="flex flex-col items-center justify-center flex-grow gap-10 md:flex-row">
                            <div className="flex flex-col gap-2">
                              <label htmlFor="linkMetacritic" className="block text-xs font-montserrat">Link de Metacritic</label>
                              <input className="p-2 border rounded resize-none" name="linkMetacritic" id="linkMetacritic" placeholder="https://www.metacritic.com/" type="text" value={contenido.linkMetacritic} onChange={handleChange}></input>
                            </div>
                            <div className="flex flex-col gap-2">
                              <label htmlFor="linkHowLongToBeat" className="block text-xs font-montserrat">Link de HowLongToBeat</label>
                              <input className="p-2 border rounded resize-none" name="linkHowLongToBeat" id="linkHowLongToBeat" placeholder="https://howlongtobeat.com/" type="text" value={contenido.linkHowLongToBeat} onChange={handleChange}></input>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                              <label htmlFor="estudio" className="block text-xs font-montserrat">Estudio</label>
                              <input className="p-2 border rounded resize-none" name="estudio" id="estudio" placeholder="Santa Monica Studio" type="text" value={contenido.estudio} onChange={handleChange}></input>
                            </div>

                          <div className="flex flex-col gap-2">
                            <label htmlFor="genero" className="block font-montserrat">Género del juego</label>
                            <input className="p-2 border rounded resize-none" name="genero" id="genero" placeholder="Lucha, aventuras" value={contenido.genero} onChange={handleChange}></input>
                          </div>

                        <div className="pt-1 mb-3 font-medium text-gray-800 font-montserrat">
                          <label htmlFor="enlaceProyectoWeb" className="block font-bold text-gray-800 font-montserrat">Enlace al proyecto web {<span className='font-bold text-red-500'>(solo para Proyectos Web)</span>}</label>
                          <textarea className="block w-full p-2 border rounded" name="enlaceProyectoWeb" id="enlaceProyectoWeb" placeholder="https://danielgonzalezportfolio.netlify.app/" rows="2" cols="33" value={contenido.enlaceProyectoWeb} onChange={handleChange}></textarea>
                        </div>
                        <div className="pt-1 font-medium text-gray-800 font-montserrat">
                          <label htmlFor="file" className="block font-bold text-gray-800 font-montserrat">Añadir Archivo</label>
                          <input className="w-full p-2 text-sm font-medium text-gray-800 border rounded resize-none font-montserrat" type="text" name="nombreArchivo" value={nombreArchivo} placeholder="Nombre del archivo" onChange={handleNombreArchivo}/>
                          <input className="w-full p-2 mt-1 font-medium text-gray-800 border rounded resize-none font-montserrat" htmlFor="file" type="file" name="file" id="file" onChange={handleFileChange}/>
                        </div>
                      </div>
                      <div className='flex items-center justify-center gap-3'>
                        <button disabled={isLoading} className="text-white bg-gray-700 hover:text-white border hover:bg-green-600 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-montserrat">Guardar</button>
                      </div>
                      {error && (<div className="max-w-3/4"><strong className="block w-full p-2 text-center bg-red-500 rounded">{error?.message}</strong></div>
                      )}
                  </form> :
                  <div className="justify-between w-full gap-10 text-lg font-bold text-gray-800 md:flex font-montserrat">
                    <div className='flex flex-col gap-3 md:w-3/4'>
                      <div className="text-lg font-bold text-gray-800 font-montserrat">{item?.titulo}</div>
                      <div className="pt-1 font-medium text-gray-800 font-montserrat">{item?.descripcion}</div>
                      <div className="pt-1 font-medium text-gray-800 font-montserrat">{item?.infoExtra}</div>
                      <div className="pt-1 font-medium text-gray-800 font-montserrat">{item?.infoExtra2}</div>
                      <div className="pt-1 font-medium text-gray-800 font-montserrat">{item?.infoExtra3}</div>
                      <div className="pt-1 font-medium text-gray-800 font-montserrat">{item?.enlaceProyectoWeb}</div>
                      <div className="text-gray-600 font-montserrat">{item ? '// ':''}{item?.tipoContenido} </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-6 mt-8 md:mt-0'>
                      <div className="flex items-center justify-center">
                        <button className="text-white bg-gray-700 hover:text-white border hover:bg-green-600 font-bold rounded-lg text-sm px-5 py-2.5 text-centerfont-montserrat" onClick={() => handleEditarContenido(item)}>Editar contenido</button>
                      </div>
                      <div className='flex flex-col items-center justify-center gap-6 md:mt-0'>
                        <button disabled={isDisabled} onClick={() => handleDelete(item.idDoc, item.titulo)} type="button" className={`text-white hover:text-white bg-gray-700 ${isDisabled===false && 'hover:bg-red-700'} font-bold rounded-lg text-sm px-5 py-2.5 text-center font-montserrat`}>Eliminar</button>
                        <div className="flex items-center w-3/4 gap-2">
                          <p className="text-xs font-light text-gray-900 font-montserrat">Si quieres eliminar el contenido marca el recuadro previamente *</p>
                          <input type="checkbox" name="eliminar" id="eliminar" onChange={handleEliminar}/>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    }      
    </>
  )
}
