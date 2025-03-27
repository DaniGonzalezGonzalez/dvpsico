import { createBrowserRouter } from "react-router-dom"
import { MainTemplate } from "../templates/MainTemplate"
import { Homepage } from "../templates/UserTemplates/Homepage"
import { AddContent, EditContent, Login, ErrorPage } from "../templates/AdminTemplates"
import { ExtraProgramas } from "../helpers/components/UserTemplateComponents/ExtraInfo/ExtraProgramas"
import { AccesoPrivado } from "../helpers/components/AdminComponents/AccesoPrivado"
import { ExtraListadoAgradecimientos } from "../helpers/components/UserTemplateComponents/ExtraInfo"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainTemplate/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Homepage/>
            },
            {
                path:'login',
                element: <Login/>
            },
            {
                path:'admin-add-content',
                element: <AccesoPrivado>
                            <AddContent/>
                        </AccesoPrivado>
            },
            {
                path:'admin-edit-content',
                element: <AccesoPrivado>
                            <EditContent/>
                        </AccesoPrivado>
            },
            {
                path:'extra-programas',
                element: <ExtraProgramas/>
            },
            {
                path:'extra-listado-agradecimientos',
                element: <ExtraListadoAgradecimientos/>
            },
            // {
            //     path:'extra-listado-juegos',
            //     element: <ExtraListadoJuegos/>
            // },
            // {
            //     path:'game/:gameId',
            //     element: 
            //             //  <AccesoPrivado>
            //                 <GameDetail/>
            //             // </AccesoPrivado>
            // },
        ]
    }
])