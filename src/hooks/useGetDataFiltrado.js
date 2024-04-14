// import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../../context/UserContext";
// import { getDocumentsWithFilter } from "../../api/firebase/cloud-firestore";


// export function useGetDataPortadaPorEstado(estado) {
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [juegosPortada, setJuegosPortada] = useState([]);
//   const { user } = useContext(UserContext);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (user.email) {
//           const filters = [
//             { field: 'estado', value: estado },
//             { field: 'infoUser', value: user.email }
//           ];

//          const juegosCompletos = await getDocumentsWithFilter('Juegos', filters);

//           // Si hay datos en la página actual, actualiza el estado
//           const juegosPortadaPaginados = juegosCompletos
//           setJuegosPortada(juegosPortadaPaginados);
        
//         }
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();

//   }, [user.email]);

//   return {
//     juegosPortada,
//     error,
//     isLoading,
//   };
// }













// Ver esto para web de juegos



import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { getDocumentsWithFilterTest } from "../api/firebase/cloud-firestore";


export function useGetDataFiltrado(infoExtra) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [juegosFiltrados, setJuegosFiltrados] = useState([]);
  // const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // if (user.email) {
          // Llama a la función getDocumentsWithFilterPortada con el estado como parámetro
          const juegosCompletos = await getDocumentsWithFilterTest('ListadoDeJuegos', infoExtra);
          console.log('Probando')
          // Actualiza el estado con los juegos obtenidos
          setJuegosFiltrados(juegosCompletos);
        // }
      } catch (error) {
        console.log(error)
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
    // console.log(juegosFiltrados)

  }, [infoExtra]); // Añade estado como una dependencia del efecto

  return {
    juegosFiltrados,
    error,
    isLoading,
  };
}
