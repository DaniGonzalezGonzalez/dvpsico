import { useState } from 'react';
import { useGetData } from '../../../../hooks/useGetData';
import { ScrollToTopButton } from '../AnimationIndexComponents';

export function ExtraListadoAgradecimientos() {
  const { agradecimientos } = useGetData();
  const [currentPage, setCurrentPage] = useState(1);

  // Filtrar los años disponibles en agradecimientos
  const years = [...new Set(agradecimientos.map(item => item.titulo).filter(title => title.includes('Apoyo')))];
  years.sort((a, b) => b.localeCompare(a)); // Ordenar años de mayor a menor

  const filteredAgradecimientos = agradecimientos.filter(
    (item) => item.titulo === years[currentPage - 1]
  );

  let usuarios = [];

  filteredAgradecimientos.forEach((item) => {
    // Procesar Nivel 1
    if (item.descripcion.includes("Nivel 1") && item.infoExtra) {
      item.infoExtra.split('|').forEach((usuario) => {
        const [nombre, cantidad] = usuario.trim().split(' ');
        const numeroApoyo = cantidad ? cantidad.replace(/[()x]/g, '') : '0';
        usuarios.push({ nombre, numeroApoyo: parseInt(numeroApoyo, 10) || 0, nivel: "Nivel 1", prioridad: 3 });
      });
    }
    
    // Procesar Nivel 2
    if (item.infoExtra2 === "Nivel 2" && item.infoExtra3) {
      item.infoExtra3.split('|').forEach((usuario) => {
        const [nombre, cantidad] = usuario.trim().split(' ');
        const numeroApoyo = cantidad ? cantidad.replace(/[()x]/g, '') : '0';
        usuarios.push({ nombre, numeroApoyo: parseInt(numeroApoyo, 10) || 0, nivel: "Nivel 2", prioridad: 2 });
      });
    }

    // Procesar Nivel 3
    if (item.genero === "Nivel 3" && item.estudio) {
      item.estudio.split('|').forEach((usuario) => {
        const [nombre, cantidad] = usuario.trim().split(' ');
        const numeroApoyo = cantidad ? cantidad.replace(/[()x]/g, '') : '0';
        usuarios.push({ nombre, numeroApoyo: parseInt(numeroApoyo, 10) || 0, nivel: "Nivel 3", prioridad: 1 });
      });
    }
  });

  // Ordenar por prioridad (Nivel 3 primero, luego Nivel 2, luego Nivel 1) y dentro de cada nivel por número de meses de apoyo
  usuarios.sort((a, b) => a.prioridad - b.prioridad || b.numeroApoyo - a.numeroApoyo);

  return (
    <>
      <div className="flex flex-col min-h-screen text-white pt-14 lg:pt-24 max-w-screen color-fondo-3">
        <div className="flex flex-col items-center justify-center w-full gap-3 p-3 pt-14 lg:px-6">
          <h1 className="lg:text-xl text-lg text-center uppercase">Listado de apoyo económico</h1>
          <h2 className="lg:text-xs text-[10px] text-center">* Todos los detalles de cada nivel de apoyo en la sección Agradecimientos de la página principal</h2>
        </div>
        {/* Botones de paginación por año */}
        <div className="flex justify-center my-6">
          {years.map((year, index) => (
            <button key={index} onClick={() => setCurrentPage(index + 1)} className={`mx-2 p-7 cursor-pointer rounded w-[6em] h-[2.5em] flex justify-center items-center text-sm hover:bg-green-700 transition duration-500 ${ currentPage === index + 1 ? 'bg-gray-100 text-black' : 'bg-gray-600 text-white'}`}
            >{year}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 lg:gap-6 p-6 md:grid-cols-3">
          {usuarios.map((usuario, index) => (
            <div key={index} className={`hover:scale-105 transition duration-500 p-2 lg:p-4 rounded-lg text-center shadow-lg ${usuario.nivel === 'Nivel 1' ? 'bg-slate-800' : usuario.nivel === 'Nivel 2' ? 'bg-blue-950' : 'bg-green-800'}`}>
              <h2 className="text-base lg:text-xl font-bold text-start">{usuario.nombre}</h2>
              <div className='flex lg:flex-col items-end text-gray-200'>
                <p className="lg:text-lg text-xs">{usuario.numeroApoyo} mes{usuario.numeroApoyo>1&&'es'} de apoyo</p>
                <span className="px-1 lg:hidden text-xs"> | </span>
                <span className="mt-2 lg:text-lg text-xs font-semibold">{usuario.nivel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}