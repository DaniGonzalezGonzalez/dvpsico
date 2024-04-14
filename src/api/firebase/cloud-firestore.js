// Documentación: https://firebase.google.com/docs/firestore?hl=es-419
import { db } from "./firebase"
import { collection, addDoc, getDocs, getDoc, deleteDoc, doc, updateDoc, query, where, orderBy, limit } from 'firebase/firestore'


// Obtener todos los documentos
export async function getDocuments (uid) { 
  const tmp = []
  const querySnapshot = await getDocs(collection(db, uid));
  querySnapshot.forEach((doc) => {
  tmp.push({
    idDoc: doc.id,
    ...doc.data()
  })    
  })
  return tmp
}


/** // Añadir documento
 *
 * @param {*} uid ruta en firestore donde quiero que se manden los datos.
 * @param {Object} data objeto en el que estan almacenados los datos del formulario: Ejemplo: {nombre: "",descripcion_breve: "",descripcion: "",fecha: Timestamp}
 * @return {Object} El Objeto insertado con varias propiedades interesantes entre ello el id
 */
export const addDocument = async (uid, data) => await addDoc(collection(db, uid), data) // Añadir documento. Como es asíncrona hay que llamarla con una función para que no haya fallos
// AddDoc genera el ID automático, setDoc no.


/** // Obtener solo 1 documento
     * @param {String} collectionName Nombre de la colección
     * @param {String} reference Referencia del documento a recuperar
     * @returns {Object} Objeto con las columnas del documento o null si no lo encuentra
     */
export const getDocument = async (collectionName, reference) => { // Obtener solo 1 documento
  const docRef = doc(db, collectionName, reference)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return {
      idDoc: docSnap.id,
      ...docSnap.data()
    }
  } else { return null }
}


/** // Borrar documento
 *
 * @param {string} collection nombre de la colección en la que se encuentra el archivo que se va a borrar
 * @param {string} uid código del documento que vamos a borrar
 */
export const deleteDocument = async (collection, uid) => { // Borrar documento
  await deleteDoc(doc(db, collection, uid))
}


/** // Actualizar documento
 * Función que actualiza la información de un documento parcial o completo de firestore db
 *
 * @param {string} uid optiene la uid del documento
 * @param {string} collection
 * @param {Object} data
 */
export const updateDocument = async (uid, collection, data = {}) => await updateDoc(doc(db, collection, uid), data) // Actualizar documento




// Tests de filtros => Ver para web de juegos. Revisar useGetDataFiltrado y ExtraListadoJuegos

export async function getDocumentsWithFilterTest(collectionName, infoExtra) {
  try {
    let queryRef = collection(db, collectionName);
    console.log(infoExtra)
    // Aplicar filtros
    if (infoExtra === 'PS4' || infoExtra === 'PS3') {
    console.log('Entro en el primer if')

      queryRef = query(queryRef, where("infoExtra", "==", infoExtra));
      // if (infoUser) {
      //   queryRef = query(queryRef, where("infoUser", "==", infoUser));
      // }
      queryRef = query(queryRef, orderBy("titulo", "desc"), limit(2)); //El limit no cambia aunque lo modifique una vez creado el indice, pero el asc y desc si
      console.log('Termino el primer if y tengo este queryRef: ', queryRef)
      
    } else if (infoExtra === 'Switch') {
      console.log('Entro en el segundo if')
      
      queryRef = query(queryRef, where("infoExtra", "==", infoExtra));
      // if (infoUser) {
        //   queryRef = query(queryRef, where("infoUser", "==", infoUser));
        // }
        queryRef = query(queryRef, orderBy("titulo","desc"), limit(2));
      }
      
      console.log('Termino los if y tengo este queryRef: ', queryRef)
    // Ejecutar la consulta
    const querySnapshot = await getDocs(queryRef);
    console.log('Ahora veo esto del querySnapshot: ', querySnapshot)

    const documents = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    console.log(documents)
    return documents;
  } catch (error) {
    throw new Error("Error al obtener documentos filtrados: " + error.message);
  }
}



