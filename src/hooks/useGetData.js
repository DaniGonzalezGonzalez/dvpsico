import { useEffect, useState } from "react"
import { getDocuments } from "../api/firebase/cloud-firestore"

export function useGetData() {
  const [infoCanal, setInfoCanal] = useState([])
  const [programas, setProgramas] = useState([])
  const [formasApoyo, setFormasApoyo] = useState([])
  const [horario, setHorario] = useState([])
  const [agradecimientos, setAgradecimientos] = useState([])
  const [archivosDisenoWeb, setArchivosDisenoWeb] = useState([])
  const [listadoJuegos, setListadoJuegos] = useState([])
  const [listadoPlataformas, setListadoPlataformas] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getDocuments('InfoCanal')
    .then((datosInfoCanal) => {
      if(!datosInfoCanal.length) throw new Error('No hay información del canal')
      setInfoCanal(datosInfoCanal)
    })
    .catch(setError)
    .finally(()=> setIsLoading(false))
  }, [])

  useEffect(() => {
    getDocuments('Programas')
    .then((datosProgramas) => {
      if(!datosProgramas.length) throw new Error('No hay datos de programas')
      setProgramas(datosProgramas)
    })
    .catch(setError)
    .finally(()=> setIsLoading(false))
  }, [])

  useEffect(() => {
    getDocuments('FormasApoyo')
    .then((datosFormasApoyo) => {
      if(!datosFormasApoyo.length) throw new Error('No hay datos de formas de apoyo')
      setFormasApoyo(datosFormasApoyo)
    })
    .catch(setError)
    .finally(()=> setIsLoading(false))
  }, [])

  useEffect(() => {
    getDocuments('Horario')
    .then((datosHorario) => {
      if(!datosHorario.length) throw new Error('No hay datos de horario')
      setHorario(datosHorario)
    })
    .catch(setError)
    .finally(()=> setIsLoading(false))
  }, [])

  useEffect(() => {
    getDocuments('Agradecimientos')
    .then((datosAgradecimientos) => {
      if(!datosAgradecimientos.length) throw new Error('No hay datos de agradecimientos')
      setAgradecimientos(datosAgradecimientos)
    })
    .catch(setError)
    .finally(()=> setIsLoading(false))
  }, [])

  useEffect(() => {
    getDocuments('ArchivosDisenoWeb')
    .then((datosArchivosDisenoWeb) => {
      if(!datosArchivosDisenoWeb.length) throw new Error('No hay archivos para diseño de la web')
      setArchivosDisenoWeb(datosArchivosDisenoWeb)
    })
    .catch(setError)
    .finally(()=> setIsLoading(false))
  }, [])

  useEffect(() => {
    getDocuments('ListadoDeJuegos')
    .then((datosListadoJuegos) => {
      if(!datosListadoJuegos.length) throw new Error('No hay juegos en el listado')
      setListadoJuegos(datosListadoJuegos)
    })
    .catch(setError)
    .finally(()=> setIsLoading(false))
  }, [])

  return {
    infoCanal,
    programas,
    formasApoyo,
    horario,
    agradecimientos,
    archivosDisenoWeb,
    listadoJuegos,
    error,
    isLoading
  }
}