import { useEffect, useMemo, useState } from 'react';

export function HeadHomePage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = useMemo(() => ['CIENCIA', 'PSICOLOGÍA', 'PODCAST', 'STREAMING'], [])
  const [typedWord, setTypedWord] = useState('')
  const [isErasing, setIsErasing] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  const typeSpeed = 500 // Velocidad de escritura (en milisegundos)
  const eraseSpeed = 100 // Velocidad de borrado (en milisegundos)
  const wordInterval = 2000 // Intervalo entre palabras (en milisegundos)

  // Los 2 useEffect son para controlar la animación de la portada. El primero para la escritura y el segundo para el borrado
  useEffect(() => {
    const targetWord = words[currentWordIndex]

    const typingInterval = setInterval(() => {
      if (!isWaiting) {
        if (typedWord === targetWord) {
          clearInterval(typingInterval) // Detener la escritura
          setIsErasing(true) // Activamos el booleano de borrado
        } else {
          const nextChar = targetWord[typedWord.length]
          setTypedWord((prevTypedWord) => prevTypedWord + nextChar) //A lo que había en typedWord se añade una nueva letra, cambia su longitud, entonces vuelve a repetir el proceso.
        }
      }
    }, typeSpeed)

    return () => clearInterval(typingInterval)
  }, [typedWord, currentWordIndex, isWaiting, words])

  useEffect(() => {
    if (isErasing) {
      const eraseInterval = setInterval(() => {
        if (typedWord.length === 0) {
          clearInterval(eraseInterval) // Detener el borrado
          setIsErasing(false)
          setIsWaiting(true) // Activar el intervalo de espera
          setTimeout(() => {
            // El uso del % es para evitar que de fallo el código cuando el index sea 0. Así no da fallo
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
            setTypedWord('') // Reiniciar la palabra
            setIsWaiting(false) // Desactivar el intervalo de espera para comenzar de nuevo la escritura
          }, wordInterval) // Espera antes de empezar a escribir la siguiente palabra
        } else {
          setTypedWord((prevTypedWord) => prevTypedWord.slice(0, -1))
        }
      }, eraseSpeed)

      return () => clearInterval(eraseInterval)
    }
  }, [typedWord, isErasing, words, setCurrentWordIndex])
  
  return (
    <div className="relative min-h-screen">
      {/* Imagen de fondo */}
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'url("/imagen-cabecera-dvpsico-web.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center', }}/>

      {/* Capa de superposición negra semitransparente */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"/>

      {/* Contenedor para el contenido (logo y texto) */}
      <div className="absolute w-full text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        {/* Logo */}
        <img src="/Logo-DvPsico.svg" alt="Logo" className="h-32 mx-auto mb-6 w-28 sm:w-32"/>

        {/* Contenedor de texto animado */}
        <div className="relative">
          <h1 className="text-4xl text-white font-montserrat" style={{ position: 'relative' }}> {typedWord} <span className="cursor" /></h1>
        </div>
      </div>      
    </div>
  )
}
