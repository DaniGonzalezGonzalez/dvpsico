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
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white pt-16 lg:pt-24 pb-10 xl:pb-20">
        {/* Encabezado */}
        <div className="flex flex-col items-center text-center gap-3 px-6">
          <h1 className="text-3xl xl:mt-20 mt-10 lg:text-5xl font-light tracking-tight uppercase">
            Listado de Apoyo Económico
          </h1>
          <p className="text-sm lg:text-base text-gray-400 max-w-xl">
            * Todos los detalles de cada nivel de apoyo en la sección Agradecimientos
            de la página principal
          </p>
          <div className="w-20 h-1 bg-green-500 rounded-full mt-2"></div>
        </div>

        {/* Tabs de años */}
        <div className="flex justify-center my-8 flex-wrap gap-3">
          {years.map((year, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-5 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300
                ${
                  currentPage === index + 1
                    ? "bg-green-500 text-black scale-105"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Grid dinámico */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {usuarios.map((usuario, index) => (
            <div key={index} className={`relative overflow-hidden rounded-2xl p-6 flex flex-col justify-between
                transition duration-500 hover:scale-[1.02] hover:shadow-2xl
                ${
                  usuario.nivel === "Nivel 1"
                    ? "bg-gradient-to-br from-slate-800 to-slate-600"
                    : usuario.nivel === "Nivel 2"
                    ? "bg-gradient-to-br from-blue-900 to-blue-700"
                    : "bg-gradient-to-br from-green-900 to-green-700 row-span-2"
                }
              `}
            >
              {/* Encabezado de usuario */}
              <h2 className="text-2xl font-semibold tracking-wide mb-3">
                {usuario.nombre}
              </h2>

              {/* Info */}
              <div className="flex flex-col gap-2 text-gray-200">
                <p className="text-sm lg:text-base">
                  <span className="font-semibold text-white">
                    {usuario.numeroApoyo}
                  </span>{" "}
                  mes{usuario.numeroApoyo > 1 && "es"} de apoyo
                </p>
                <span
                  className={`self-start px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      usuario.nivel === "Nivel 1"
                        ? "bg-slate-700"
                        : usuario.nivel === "Nivel 2"
                        ? "bg-blue-700"
                        : "bg-green-700"
                    }`}
                >
                  {usuario.nivel}
                </span>
              </div>

              {/* Glow decorativo */}
              <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}