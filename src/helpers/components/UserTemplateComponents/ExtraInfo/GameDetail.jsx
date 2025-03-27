import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { chartOptions, graficaHLTBData } from "../../../no-components/graficaHLTBData";
import { getDocument } from "../../../../api/firebase/cloud-firestore";
import { GET_COLOR_CLASS, getPlatformBackground } from "../../../no-components/constants";
import { ArrowRight } from "../../../../assets/Icons/ArrowRight";
import { ScrollToTopButton } from "../AnimationIndexComponents";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function GameDetail() {
    const { gameId } = useParams();
    const [juego, setJuego] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (gameId) {
            const fetchData = async () => {
                try {
                    const datosJuego = await getDocument('ListadoDeJuegos', gameId);
                    setJuego(datosJuego);
                } catch (error) {
                    setError(error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchData();
        }
    }, [gameId]);


    if (isLoading) {
        return <p className="mt-40 text-xl text-center">Cargando...</p>;
    }

    if (error) {
        return <p className="mt-40 text-xl text-center text-red-500">Error: {error.message}</p>;
    }
    const backgroundClass = getPlatformBackground(juego.infoExtra);
    
    // Preparar los datos para la gráfica
    const mainStoryHours = juego.tiempoMainStory ? juego.tiempoMainStory : 1;
    const mainAndExtraHours = juego.tiempoMainAndSides ? juego.tiempoMainAndSides : 2;
    const completionistHours = juego.tiempoCompletionist ? juego.tiempoCompletionist : 3;

    graficaHLTBData.datasets[0].data = [mainStoryHours, mainAndExtraHours, completionistHours]

    return (
        <div className={`w-full min-h-screen pt-40 ${backgroundClass} flex flex-col items-center`}>
            {/* Contenedor de la imagen */}
            <div className="flex justify-center w-full">
                <img 
                    src={juego.url} 
                    alt={juego.titulo} 
                    className="object-cover max-w-screen-md transition duration-300 ease-in-out transform rounded-lg shadow-lg h-60 w-60 hover:scale-105" 
                />
            </div>

            {/* Contenedor del contenido */}
            <div className="w-full px-5 py-10 mt-10 text-white bg-black shadow-lg">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h1 className="text-4xl font-bold">{juego.titulo}</h1>
                    <p className="mt-6 text-sm">{juego.estudio}</p>
                    <div className="flex items-center justify-center mt-5">
                        <p className="flex items-center justify-center object-contain h-8 p-1 text-sm bg-gray-300 rounded text-slate-950">{juego.infoExtra} </p>
                        {/* <span className="ml-4 text-2xl font-medium">{juego.infoExtra}</span> */}
                    </div>
                    <div className="flex justify-center gap-10 mt-10">
                        <div className="flex items-center justify-center gap-10 sm:gap-20">
                            <div className="flex items-center gap-5">
                                <div className="w-8 h-8"><img src="/Metacritic-logo.png" alt="Logo metacritic" /></div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col items-center gap-2 md:flex-row">
                                        <p className={`text-xs text-gray-100 flex justify-center items-center rounded px-2 w-6 h-6 py-1 text-end ${GET_COLOR_CLASS(juego?.notaMetacriticPrensa)}`}>{juego?.notaMetacriticPrensa}</p>
                                        <p className="text-xs">Nota Prensa</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 md:flex-row">
                                        <p className={`text-xs text-gray-100 flex justify-center items-center rounded px-2 w-6 h-6 py-1 text-end ${GET_COLOR_CLASS(juego?.notaMetacriticUsuarios)}`}>{juego?.notaMetacriticUsuarios}</p>
                                        <p className="text-xs">Nota Usuarios</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-10 py-5 mt-10 h-96 sm:h-80">
                        <h3 className="text-2xl font-bold">HowLongToBeat</h3>
                        <Bar data={graficaHLTBData} options={chartOptions} />
                    </div>

                    <div className="p-2">
                        <p className="mt-10 text-xs text-justify sm:text-sm">{juego.descripcion}</p>
                        <p className="mt-10 text-xs text-justify">Género: {juego.genero}</p>
                        <div className="flex items-center justify-start gap-5 mt-5 text-xs">
                            <p className="flex items-center gap-2">{juego.titulo} - Metacritic <ArrowRight/></p>
                            <div className="w-6 h-6">
                                <a href={juego.linkMetacritic}><img src="/Metacritic-logo.png" alt="Logo metacritic" /></a>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-start gap-3 mt-5 text-xs">
                            <p className="flex items-center gap-2 text-start">{juego.titulo} - HowLongToBeat <ArrowRight/></p>
                            <div>
                                <a href={juego.linkHowLongToBeat}><p className="p-1 font-bold">HLTB</p></a>
                            </div>
                        </div>
                    </div>      

                </div>
            </div>
            <ScrollToTopButton/>
        </div>
        
    );
}