import { useRef, useState,  } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteDocument, updateDocument } from '../api/firebase/cloud-firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../api/firebase/firebase'

export function useEditar(uid, option) {
  const tituloRef = useRef(null)
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  // const [update, setUpdate] = useState(false)
  const [file, setFile] = useState(null)
  const [nombreArchivo, setNombreArchivo] = useState('')
  const [archivoSubido, setArchivoSubido] = useState(false)

  // Update
  const actualizarDatos = async (uid, data) => {
    setError(null)
    setIsLoading(true)
    try {
      if(!data.titulo.length) throw new Error('El campo título no puede estar vacío')
      await updateDocument(uid, option, data);
      navigate(`/admin-edit-content`)     
    } catch (error) {
      setError(error)
      console.log(error)
    } finally{
      setIsLoading(false)
      setArchivoSubido(false)
    }
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    handleUpdload(e)
  }

  const handleUpdload = async (e) => {
    try { 
      const formData = new FormData(e.target)
      const entradas = formData.entries()
      const obj = Object.fromEntries(entradas)
      const data = await uploadFile(file)
      if(data) {
        obj.url = data 
      }
      if (obj.file) {
        delete obj.file     
      }
      actualizarDatos(uid, obj)
      const dataChangedEvent = new Event('data-changed');
      document.dispatchEvent(dataChangedEvent);
    } catch (error) {
      console.log(error);
    }
  }

  // const showUpdateForm = () => {
  //   setUpdate(!update)
  // }

  const handleNombreArchivo = (e) => {
    const nombre = e.target.value
    setNombreArchivo(nombre)
  }

  const uploadFile = async (file) => {
    const storageRef = ref(storage, `${option}/${nombreArchivo}`)
    await uploadBytes(storageRef, file)
    const almacenURL = await getDownloadURL(storageRef) // retorna un string que es la url
    if (archivoSubido){
      return almacenURL
    } else {
      return ''
    }
  }

  const handleFileChange = (e) => {
    setArchivoSubido(true)
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
  }

  // Delete
  const eliminarDocumento = async (uid) => {
    setError(null)
    try {
      await deleteDocument(option, uid)  
      navigate(`/admin-edit-content`)
    } catch (error) {
      setError(error)
    } 
  }

  const handleDelete = (uid, titulo) => {
    if(!confirm(`Confirma que desea eliminar el documento ${titulo}`)) return
    eliminarDocumento(uid)
    const dataChangedEvent = new Event('data-changed');
    document.dispatchEvent(dataChangedEvent);
  }

  return {
    handleSubmit,
    handleDelete,
    tituloRef,
    error,
    isLoading,
    // showUpdateForm,
    // update,
    handleFileChange,
    handleNombreArchivo,
    nombreArchivo
  }
}