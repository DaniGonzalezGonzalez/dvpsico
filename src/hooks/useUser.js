import { useEffect, useState } from "react";
// import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, supabase } from "../api/firebase/firebase";
import { INITIAL_VALUE } from "../helpers/no-components/constants";

export function useUser(){
    const [user, setUser] = useState(INITIAL_VALUE)
    const [error, setError] = useState(null)
    const { message } = error || false

    // const loadUser = () => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           setUser(user)
    //         } else {
    //             // User is signed out
    //             setUser(INITIAL_VALUE)
    //         }
    //     })
    // }

    // useEffect(() => {
    //     loadUser()
    // }, [])

    // const _signInWithEmailAndPassword = async (email, password) => {
    //     setError(null)
    //     try {
    //         const userCredential = await signInWithEmailAndPassword(auth, email, password)
    //         // Signed in 
    //         const user = userCredential.user
    //         setUser(user)
    //     }
    //     catch(error) {
    //         setError(error)
    //     }
    // }

    // const _signOut = async () => {
    //     setError(null)
    //     try {
    //         await signOut(auth)
    //         setUser(INITIAL_VALUE)
    //     } catch (error) {
    //         setError(error)
    //     }        
    // }


    
  // Cargar usuario actual desde localStorage o sesión persistida
  const loadUser = async () => {
    const session = supabase.auth.session();
    
    if (session) {
      setUser(session.user);  // Si hay sesión activa, actualizamos el estado de user
    } else {
      setUser(INITIAL_VALUE);  // Si no hay sesión activa, lo dejamos en su valor inicial
    }
  };

  useEffect(() => {
    loadUser();  // Cargar el usuario actual al cargar el componente

    // Escuchar cambios en el estado de autenticación
    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user);  // Actualizamos el estado de user cuando la sesión cambia
      } else {
        setUser(INITIAL_VALUE);  // Si no hay sesión activa, lo dejamos en su valor inicial
      }
    });

    // Limpiar el listener cuando se desmonte el componente
    return () => {
      authListener.subscription?.unsubscribe();  // Usamos subscription para cancelar la suscripción
    };
  }, []);

  // Iniciar sesión con email y password
  const _signInWithEmailAndPassword = async (email, password) => {
    setError(null);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      setUser(data.user);  // Si el login es exitoso, actualizamos el estado de user
    } catch (error) {
      setError(error);  // Si ocurre un error, lo seteamos en el estado
    }
  };

  // Cerrar sesión
  const _signOut = async () => {
    setError(null);
    try {
      await supabase.auth.signOut();  // Cerramos sesión en Supabase
      setUser(INITIAL_VALUE);  // Reseteamos el estado de user
    } catch (error) {
      setError(error);  // Si ocurre un error, lo seteamos en el estado
    }
  };

    return {
        _signInWithEmailAndPassword,
        _signOut,
        user,
        ...user,
        error,
        message,
    }
}