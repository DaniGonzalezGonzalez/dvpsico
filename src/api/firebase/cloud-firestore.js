import { supabase } from "./firebase";

// Obtener todos los documentos
export async function getDocuments(uid) { 
  const { data, error } = await supabase
    .from(uid)  // Nombre de la tabla
    .select('*');  // Obtener todos los registros

  if (error) throw new Error(error.message);
  return data;
}


/** Añadir documento
 *
 * @param {*} uid nombre de la tabla donde quiero que se manden los datos.
 * @param {Object} data objeto con los datos que queremos insertar en la tabla.
 * @return {Object} El Objeto insertado.
 */
export const addDocument = async (uid, data) => {
  const { data: insertedData, error } = await supabase
    .from(uid)
    .insert([data]);  // Insertamos un objeto dentro de un array

  if (error) throw new Error(error.message);

  return insertedData;
}



/** Obtener solo 1 documento
 *
 * @param {String} tableName Nombre de la tabla
 * @param {String} reference Referencia del documento a recuperar (por ejemplo, el id del registro)
 * @returns {Object} Objeto con los datos del documento o null si no lo encuentra
 */
export const getDocument = async (tableName, reference) => {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .eq('id', reference)  // Suponiendo que el campo 'id' es la clave primaria
    .single();  // Para obtener un único documento

  if (error) throw new Error(error.message);

  return data || null;  // Si no encuentra el documento, devuelve null
}



/** Borrar documento
 *
 * @param {string} tableName nombre de la tabla en la que se encuentra el documento a borrar
 * @param {string} reference id del documento a borrar
 */
export const deleteDocument = async (tableName, reference) => {
  const { error } = await supabase
    .from(tableName)
    .delete()
    .eq('id', reference);  // Borramos el registro con el id especificado

  if (error) throw new Error(error.message);
}





/** Actualizar documento
 * Función que actualiza la información de un documento parcial o completo.
 *
 * @param {string} uid id del documento a actualizar
 * @param {string} tableName nombre de la tabla
 * @param {Object} data los datos que queremos actualizar
 */
export const updateDocument = async (uid, tableName, data = {}) => {
  const { error } = await supabase
    .from(tableName)
    .update(data)  // Datos a actualizar
    .eq('id', uid);  // Condición para encontrar el documento

  if (error) throw new Error(error.message);
}








// Obtener documentos con filtro
export async function getDocumentsWithFilterTest(tableName, infoExtra) {
  try {
    let query = supabase.from(tableName).select('*');  // Seleccionamos todos los registros

    // Aplicar filtros
    if (infoExtra === 'PS4' || infoExtra === 'PS3') {
      query = query.eq('infoExtra', infoExtra);  // Filtrar por 'infoExtra'
    } else if (infoExtra === 'Switch') {
      query = query.eq('infoExtra', infoExtra);  // Filtrar por 'infoExtra'
    }

    query = query.order('titulo', { ascending: false }).limit(2);  // Ordenar y limitar resultados

    // Ejecutar la consulta
    const { data, error } = await query;

    if (error) throw new Error(error.message);

    return data;
  } catch (error) {
    throw new Error("Error al obtener documentos filtrados: " + error.message);
  }
}







// // Documentación: https://firebase.google.com/docs/firestore?hl=es-419
// import { db } from "./firebase"
// import { collection, addDoc, getDocs, getDoc, deleteDoc, doc, updateDoc, query, where, orderBy, limit } from 'firebase/firestore'


// // Obtener todos los documentos
// export async function getDocuments (uid) { 
//   const tmp = []
//   const querySnapshot = await getDocs(collection(db, uid));
//   querySnapshot.forEach((doc) => {
//   tmp.push({
//     idDoc: doc.id,
//     ...doc.data()
//   })    
//   })
//   return tmp
// }


// /** // Añadir documento
//  *
//  * @param {*} uid ruta en firestore donde quiero que se manden los datos.
//  * @param {Object} data objeto en el que estan almacenados los datos del formulario: Ejemplo: {nombre: "",descripcion_breve: "",descripcion: "",fecha: Timestamp}
//  * @return {Object} El Objeto insertado con varias propiedades interesantes entre ello el id
//  */
// export const addDocument = async (uid, data) => await addDoc(collection(db, uid), data) // Añadir documento. Como es asíncrona hay que llamarla con una función para que no haya fallos
// // AddDoc genera el ID automático, setDoc no.


// /** // Obtener solo 1 documento
//      * @param {String} collectionName Nombre de la colección
//      * @param {String} reference Referencia del documento a recuperar
//      * @returns {Object} Objeto con las columnas del documento o null si no lo encuentra
//      */
// export const getDocument = async (collectionName, reference) => { // Obtener solo 1 documento
//   const docRef = doc(db, collectionName, reference)
//   const docSnap = await getDoc(docRef)
//   if (docSnap.exists()) {
//     return {
//       idDoc: docSnap.id,
//       ...docSnap.data()
//     }
//   } else { return null }
// }


// /** // Borrar documento
//  *
//  * @param {string} collection nombre de la colección en la que se encuentra el archivo que se va a borrar
//  * @param {string} uid código del documento que vamos a borrar
//  */
// export const deleteDocument = async (collection, uid) => { // Borrar documento
//   await deleteDoc(doc(db, collection, uid))
// }


// /** // Actualizar documento
//  * Función que actualiza la información de un documento parcial o completo de firestore db
//  *
//  * @param {string} uid optiene la uid del documento
//  * @param {string} collection
//  * @param {Object} data
//  */
// export const updateDocument = async (uid, collection, data = {}) => await updateDoc(doc(db, collection, uid), data) // Actualizar documento




// // Tests de filtros => Ver para web de juegos. Revisar useGetDataFiltrado y ExtraListadoJuegos

// export async function getDocumentsWithFilterTest(collectionName, infoExtra) {
//   try {
//     let queryRef = collection(db, collectionName);
//     // Aplicar filtros
//     if (infoExtra === 'PS4' || infoExtra === 'PS3') {
//       queryRef = query(queryRef, where("infoExtra", "==", infoExtra));
//       // if (infoUser) {
//       //   queryRef = query(queryRef, where("infoUser", "==", infoUser));
//       // }
//       queryRef = query(queryRef, orderBy("titulo", "desc"), limit(2)); //El limit no cambia aunque lo modifique una vez creado el indice, pero el asc y desc si     
//     } else if (infoExtra === 'Switch') {
     
//       queryRef = query(queryRef, where("infoExtra", "==", infoExtra));
//       // if (infoUser) {
//         //   queryRef = query(queryRef, where("infoUser", "==", infoUser));
//         // }
//         queryRef = query(queryRef, orderBy("titulo","desc"), limit(2));
//       }
      
//     // Ejecutar la consulta
//     const querySnapshot = await getDocs(queryRef);

//     const documents = querySnapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     }));
//     return documents;
//   } catch (error) {
//     throw new Error("Error al obtener documentos filtrados: " + error.message);
//   }
// }



