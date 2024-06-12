import { Agradecimientos, FormasApoyo, HeadHomePage, Horario, InfoCanal, Programas } from "../../helpers/components/UserTemplateComponents"
import { ScrollToTopButton } from "../../helpers/components/UserTemplateComponents/AnimationIndexComponents/ScrollToTopButton"

export function Homepage() {
  return (
    <div className="text-sm">
      <HeadHomePage/>
      <div id='indice-informacion-canal' className="py-40 text-white bg-indigo-100 px-14 sm:px-20 color-fondo-1">
        <InfoCanal/>      
      </div>

      <div id="indice-programas" className="px-10 py-20 text-white bg-indigo-200 sm:px-20 color-fondo-2">
          <Programas/>
      </div>

      <div id="indice-horario" className="px-20 py-20 text-white bg-indigo-300 color-fondo-3">
        <Horario/>
      </div>

      <div id="indice-formas-apoyo" className="px-10 py-20 text-white bg-indigo-400 color-fondo-4">
        <FormasApoyo/>
      </div>

      <div id="indice-agradecimientos" className="px-10 py-20 text-white bg-indigo-500 color-fondo-5">
        <Agradecimientos/>
      </div>
      <ScrollToTopButton/>
    </div>
  )
}
