import { useState } from 'react';
import { useGetData } from '../../../../hooks/useGetData';
import { ScrollToTopButton } from '../AnimationIndexComponents';

export function ExtraListadoAgradecimientos() {
  const { agradecimientos } = useGetData();
  const itemsPerPage = 1; // Cantidad de elementos por página
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAgradecimientos = agradecimientos.filter(
    (item) =>
      item.titulo === 'Apoyo 2022' ||
      item.titulo === 'Apoyo 2021' ||
      item.titulo === 'Apoyo 2020'
  )
  .sort((a, b) => {
    // Personaliza el orden aquí según tus necesidades
    if (a.titulo < b.titulo) return 1;
    if (a.titulo > b.titulo) return -1;
    return 0;
  });

  const totalPages = Math.ceil(filteredAgradecimientos.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const paginatedAgradecimientos = filteredAgradecimientos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen pt-24 text-white max-w-screen color-fondo-3">
        <div className="flex flex-col items-center justify-center w-full p-8 py-12 text-center color-fondo-2">
          <p className="text-xl">
            Listado de todas las personas que han apoyado económicamente al canal
          </p>
          <p className="mt-6 text-sm">
            * Todos los detalles de cada nivel de agradecimientos en la sección &apos;Apoyo&apos; de la{' '}<a className="text-link-underline" href="/" title="Ir a la página principal">página principal</a></p>
        </div>

        {/* Renderiza los elementos de la página actual */}
        {paginatedAgradecimientos.map((item) => (
          <div key={item.idDoc}>
            <div className="p-8 py-12">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex flex-col">
                  <h2 className="p-3 text-2xl font-bold text-center uppercase">{item.titulo}</h2>
                </div>
                <div className="relative p-6 text-justify xl:w-2/3">
                  <div className="absolute top-0 bottom-0 left-0 right-0" style={{ backgroundImage: `url(${item.url})`, backgroundSize: 'cover', opacity: '0.1', backgroundPosition: 'top center' }}
                  ></div>
                  <div className="relative" style={{ zIndex: 1 }}>
                    <p className="py-6 font-bold">{item.descripcion}</p>
                    <p>{item.infoExtra}</p>
                    <p className="py-6 font-bold">{item.infoExtra2}</p>
                    <p>{item.infoExtra3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controles de paginación */}
        <div className="flex justify-center my-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button key={index} onClick={() => handleClick(index + 1)} className={`mx-2 p-2 cursor-pointer rounded w-[3em] h-[2em] flex justify-center items-center text-sm hover:bg-green-700 transition duration-500 ${ currentPage === index + 1 ? 'bg-gray-100 text-black' : 'bg-gray-600 text-white'}`}
            >{index + 1}</button>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </>
  )
}
