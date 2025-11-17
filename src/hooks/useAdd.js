import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { addDocument } from "../api/firebase/cloud-firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage, supabase } from "../api/firebase/firebase";

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
        const data = await uploadFile(file, tipoContenido)
        obj.url = data 
        guardarDatos(tipoContenido, obj)
      } catch (error) {
        console.log(error);
      }
    }
  
    // const uploadFile = async (file) => {
    //   const storageRef = ref(storage, `${tipoContenidoRef.current.value}/${nombreArchivo}`)
    //   await uploadBytes(storageRef, file)
    //   return await getDownloadURL(storageRef) // retorna un string que es la url
    // }

    const uploadFile = async (file, tipoContenido) => {
      console.log('File:', file); // Imprimimos el archivo para verificar
      console.log('Tipo de contenido:', tipoContenido); // Verificamos el tipo de contenido
      
      const bucketName = getBucketName(tipoContenido);  // Obtenemos el nombre del bucket según el tipo de contenido
      console.log('Nombre del bucket:', bucketName);  // Verificamos el nombre del bucket
      
      if (!bucketName) {
        throw new Error("No se pudo determinar el nombre del bucket");
      }
      
      // Si no se seleccionó un archivo, retornamos null para seguir con el resto de los datos
      if (!file) {
        console.log('No se seleccionó archivo, pero seguimos con el resto de los datos');
        return null;
      }
    
      // Definimos el nombre del archivo si existe
      const nombreArchivo = file.name;  // Aquí obtenemos el nombre del archivo desde el objeto 'file'
      console.log('Nombre del archivo:', nombreArchivo);  // Verificamos el nombre del archivo
    
      // Construimos la ruta correctamente, sin repetir el tipo de contenido
      const filePath = `${tipoContenido}/${nombreArchivo}`;  // Creamos la ruta como 'SobreMi/LogoDvpsico-Portfolio.webp'
      console.log('Ruta del archivo:', filePath);  // Imprimimos la ruta para verificar
      
      // Subimos el archivo al bucket correspondiente
      const { data, error } = await storage
        .from(bucketName)  // Seleccionamos el bucket dinámicamente
        .upload(filePath, file);  // Subimos el archivo con la ruta creada
    
      if (error) {
        throw new Error('Error al subir el archivo: ' + error.message);
      }
    
      // Generamos la URL pública del archivo subido
      const fileUrl = `${supabase.storageUrl}/object/public/${tipoContenido}/${data.path}`;  // Ajusta la URL según tu bucket
      console.log('URL del archivo:', fileUrl);  // Verificamos la URL
    
      return fileUrl;  // Retornamos la URL pública del archivo
    };
    

  // Determinamos el bucket a usar dependiendo del tipo de contenido
  const getBucketName = (tipoContenido) => {
    switch (tipoContenido) {
      case 'Agradecimientos':
        return 'Agradecimientos';  
      case 'ArchivosDisenoWeb':
        return 'ArchivosDisenoWeb'; 
      case 'Programas':
        return 'Programas'; 
      case 'FormasApoyo':
        return 'FormasApoyo';  
      case 'Horario':
        return 'Horario';  
      case 'InfoCanal':
        return 'InfoCanal';  
      default:
        return 'default-bucket'; 
    }
  };




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