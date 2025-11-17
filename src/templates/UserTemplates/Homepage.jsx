import { Agradecimientos, FormasApoyo, HeadHomePage, Horario, InfoCanal, Programas } from "../../helpers/components/UserTemplateComponents"
import { ScrollToTopButton } from "../../helpers/components/UserTemplateComponents/AnimationIndexComponents/ScrollToTopButton"

export function Homepage() {
  return (
    <div className="text-sm">
      <HeadHomePage/>
      <div id='indice-informacion-canal' className="px-8 pt-20 pb-20 text-white bg-indigo-100 lg:pb-40 sm:px-20 color-fondo-1">
        <InfoCanal/>      
      </div>

      <div id="indice-programas" className="px-5 pt-20 pb-20 text-white bg-indigo-200 lg:pb-40 xl:px-10 sm:px-20 color-fondo-2">
          <Programas/>
      </div>

      <div id="indice-horario" className="text-white bg-indigo-300 color-fondo-3">
        <Horario/>
      </div>

      <div id="indice-formas-apoyo" className="px-5 pt-20 pb-20 text-gray-800 bg-gray-200 lg:py-40">
        <FormasApoyo/>
      </div>

      <div id="indice-agradecimientos" className="px-5 py-20 text-white bg-black lg:px-20">
        <Agradecimientos/>
      </div>
      <ScrollToTopButton/>
    </div>
  )
}
