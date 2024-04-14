import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { addDocument } from "../api/firebase/cloud-firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../api/firebase/firebase";

export function useAdd (tituloRef, tipoContenidoRef) {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [file, setFile] = useState(null)
    const [nombreArchivo, setNombreArchivo] = useState('')

    const guardarDatos = async (tipoContenido, data) => {
      setError(null);
      setIsLoading(true);
      try {
        if (!data.titulo.length) throw new Error('El campo título no puede estar vacío')
        if(data.file) {
          delete data.file
        }
        await addDocument(tipoContenido, data)
        navigate('/')
      } catch (error) {
        setError(error)
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault()    
      handleUpload(e)     
    }
  
    const handleUpload = async (e) => {
      try { 
        const tipoContenido = tipoContenidoRef.current.value
        const formData = new FormData(e.target)
        const entradas = formData.entries()
        const obj = Object.fromEntries(entradas)
        const data = await uploadFile(file)
        obj.url = data 
        guardarDatos(tipoContenido, obj)
      } catch (error) {
        console.log(error);
      }
    }
  
    const uploadFile = async (file) => {
      const storageRef = ref(storage, `${tipoContenidoRef.current.value}/${nombreArchivo}`)
      await uploadBytes(storageRef, file)
      return await getDownloadURL(storageRef) // retorna un string que es la url
    }

    const handleNombreArchivo = (e) => {
      const nombre = e.target.value
      setNombreArchivo(nombre)
    }
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)
    }
  
    return {
        handleFileChange,
        handleSubmit, 
        error,
        isLoading,
        handleNombreArchivo,
        nombreArchivo
    }
}