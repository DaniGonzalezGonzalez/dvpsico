// import { useContext, useEffect, useState } from "react"
// import { useGetData } from "../../../../hooks/useGetData"
// import { ScrollToTopButton } from "../AnimationIndexComponents/ScrollToTopButton"
// import { UserContext } from "../../../../context/UserContext"
// import { useGetDataFiltrado } from "../../../../hooks/useGetDataFiltrado"
// import { useNavigate } from "react-router-dom"
// import { scrollToTop } from "../../../no-components/constants"

// export function ExtraListadoJuegos() {
//   const { archivosDisenoWeb, 
//     listadoJuegos 
//   } = useGetData()
//   const [listadoJuegosOrdenado, setListadoJuegosOrdenado] = useState([])
//   // const [hoveredItem, setHoveredItem] = useState(null)
//   const [ordenSeleccionado, setOrdenSeleccionado] = useState('titulo')
//   const { user } = useContext(UserContext)
//   const navigate = useNavigate() // Usa useNavigate

//   // Ver esto para la web de juegos (comentando el useEffect y poniendo el juegosFiltrados en el map con un index)
//   // const { juegosFiltrados, error, isLoading} = useGetDataFiltrado('Switch')

//   // console.log(user.email)

//   useEffect(() => {
//     let listadoOrdenado = [...listadoJuegos];

//     if (ordenSeleccionado === 'titulo') {
//       listadoOrdenado = listadoOrdenado.sort((a, b) => a.titulo.localeCompare(b.titulo));
//     } else if (ordenSeleccionado === 'plataforma') {
//       listadoOrdenado = listadoOrdenado.sort((a, b) => {
//         const plataformaA = a.infoExtra || '';
//         const plataformaB = b.infoExtra || '';
//         return plataformaA.localeCompare(plataformaB)
//       });
//     }
//     setListadoJuegosOrdenado(listadoOrdenado)
//   }, [listadoJuegos, ordenSeleccionado])

  
//   const handleTitleClick = (gameId) => {
//     scrollToTop()
//     navigate(`/game/${gameId}`)
//   }

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center min-h-screen pt-24 text-center text-white color-fondo-imagen-juegos-2">      
//         {/* Información de cabecera */}
//         <div className="w-full">
//           <h2 className="p-6 text-3xl uppercase font-montserrat">Lista de juegos</h2>
//           <p className="px-10 py-3 text-center xs:px-40">¡Escoge un juego para que probemos en los directos de Twitch! </p>
//           <p className="px-10 pt-10 pb-3 text-sm text-center xs:px-40">{'Disponible en las recompensas del canal de Twitch o automáticamente para personas que hayan alcanzado un nivel 2 o 3 (a través de suscripciones de Twitch, Patreon, donaciones, etc).'}</p>
//           <p className="px-10 pt-2 pb-10 text-xs text-center xs:px-40">*En función de la acogida del juego en los directos, se jugará más o menos tiempo. La lista se irá actualizando.</p>
//         </div>
//         {/* Información de Catálogo de Juegos */}
//         <div className="w-full color-fondo-imagen-juegos-1">
//           {
//             archivosDisenoWeb.map((item)=>(
//               <div key={item.idDoc} className="flex-grow md:flex color-fondo-imagen-juegos-1">
//                 { (item?.titulo === 'Imagen Juegos 1') && 
//                 <div className="flex flex-col justify-center p-8 px-10 md:px-20 md:items-start">
//                   <h2 className="pb-3 text-xl font-bold">{item?.infoExtra}</h2>
//                   <p className="text-justify sm:pr-8">{item?.infoExtra2}</p>
//                 </div>}
//                 {
//                   (item?.titulo === 'Imagen Juegos 1') &&
//                   <div className="flex items-center justify-center color-fondo-imagen-juegos-1"><img src={item?.url} alt='No hay imagen'></img></div>
//                 }
//               </div>
//             ))
//           }
//         </div>
//         {/* Información de Clásicos inolvidables */}
//         <div className="w-full my-10 color-fondo-imagen-juegos-2">
//           {
//             archivosDisenoWeb.map((item)=>(
//               <div key={item.idDoc} className="flex-grow md:flex color-fondo-imagen-juegos-2">
//                 {
//                   (item?.titulo === 'Imagen Juegos 2') &&
//                   <div className="flex items-center justify-center color-fondo-imagen-juegos-2"><img src={item?.url} alt='No hay imagen'></img></div>
//                 }
//                   { (item?.titulo === 'Imagen Juegos 2') &&
//                   <div className="flex flex-col justify-center p-8 px-10 sm:px-20 sm:items-start">
//                     <h2 className="pb-3 text-xl font-bold">{item?.infoExtra}</h2>
//                     <p className="text-justify">{item?.infoExtra2}</p>
//                   </div>}
//               </div>
//             ))
//           }
//         </div>
//         {/* Mapeados del listado de juegos */}
//         <div className="w-full p-8 text-gray-200 bg-slate-950">
//            {/* Título y Opción de orden */}
//           <div className="flex items-center justify-between pt-10 mb-5">
//             <h2 className="pl-3 font-bold text-start">Lista de Juegos:</h2>  
//             <div className="pr-3 text-end">
//               <label htmlFor="orden-select" className="mr-2 text-sm sm:text-base">Ordenar por:</label>
//               <select id="orden-select" value={ordenSeleccionado} onChange={(e) => setOrdenSeleccionado(e.target.value)}
//                 className="p-1 text-sm border border-gray-400 rounded sm:text-base sm:p-2 text-slate-950"
//               >
//                 <option className="text-sm text-slate-950" value="titulo">Título</option>
//                 <option className="text-sm text-slate-950" value="plataforma">Plataforma</option>
//               </select>
//             </div>       
//           </div> 
//           <div className="grid grid-cols-2 gap-5 p-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">                      
//           {
//             listadoJuegosOrdenado.map((item)=>(
//             // juegosFiltrados.map((item, index)=>(
              
//               <div key={item?.idDoc}>
//                 <div className="flex items-center justify-center gap-1 duration-500 opacity-90 xl:px-2 sm:flex hover:scale-105 hover:shadow-white hover:opacity-100">
//                     <div className="w-full h-full">
//                         <button onClick={() => handleTitleClick(item.idDoc)} className="relative flex items-center justify-center w-full gap-3 shadow-md sm:flex hover:rounded">
//                             <img className="object-cover w-full h-40 rounded-lg" src={item?.url} alt="No hay imagen" />
//                             <h3 className="absolute object-contain p-1 text-xs bg-gray-200 rounded-lg shadow right-2 bottom-2 shadow-black text-slate-950" title={`Plataforma: ${item?.infoExtra || 'Sin plataforma especificada'}`}>{item?.infoExtra}</h3>
//                         </button>
//                         <div className="sm:w-2/3">
//                             <div className="flex flex-col gap-8 py-3 text-start">
//                                 <p className="text-xs text-gray-200">{item?.titulo}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//               </div>
//               ))
//             }
//           </div>
//         </div>   
//       </div>
//      <ScrollToTopButton/>      
//     </>
//   )
// }
