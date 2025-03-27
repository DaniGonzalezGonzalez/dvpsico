import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InstagramIcon, TwitterIcon, TwitchIcon, YoutubeIcon, SpotifyIcon } from "../../assets/Icons/Social-networks";
import { HomeIcon, SettingsIcon, SettingsIconOpenMenu } from "../../assets/Icons";
import { IndicePantallaGrande, IndicePantallaPequena } from "../../helpers/components/UserTemplateComponents/AnimationIndexComponents"
import { IvooxIcon } from "../../assets/Icons/Social-networks/IvooxIcon";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleGoBack = () => {
    navigate(-1);
};

  return (
    <nav>
      {/* Los enlaces sociales */}
      <div className="flex justify-between gap-3 text-white font-montserrat">
        {/* Botón de Settings visible en todas las pantallas. Con el hidden controlo que aparezca en pantallas pequeñas solamente */}
        {location.pathname === '/' ?
        <button className="flex items-center p-1 space-x-2 text-white rounded hover:bg-gray-700 bg-opacity-80 sm:hidden" onClick={toggleMenu}>
          {!menuOpen ? <SettingsIcon/> : <SettingsIconOpenMenu/>}
        </button> :
        <div className="flex items-center gap-3 p-1 transition duration-500 rounded-lg bg-slate-800 hover:bg-slate-700">         
          {location.pathname.startsWith('/game') ? <button className="text-xs text-white" onClick={handleGoBack}><p className="p-1">Volver</p></button> :  <Link to='/'><div><HomeIcon/></div></Link>}
        </div>        
        }

        <div className="flex items-center gap-3 ml-auto text-white font-montserrat">
          <a href="https://www.instagram.com/dvpsico/" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/dvpsico" target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://www.youtube.com/c/dvpsico" target="_blank" rel="noreferrer">
            <YoutubeIcon />
          </a>
          <a href="https://www.twitch.tv/daniggonzalez" target="_blank" rel="noreferrer">
            <TwitchIcon />
          </a>
          <a href="https://open.spotify.com/user/8mbqx8jy9c1c4pirpsqxdzsyi?si=5Kky3G2yRuml17K6GueHPQ&nd=1" target="_blank" rel="noreferrer">
            <SpotifyIcon/>
          </a>
          <a href="https://www.ivoox.com/perfil-dvpsico_a8_podcaster_21705080_1.html" target="_blank" rel="noreferrer">
            <IvooxIcon/>
          </a>
        </div>
      </div>

      {/* En pantallas grandes, muestra el texto del menú. Con el hidden del componente controlo que aparezca en pantallas grandes solamente  */}
      {
        location.pathname === '/' &&
        <div>
          <IndicePantallaGrande textAlign={'text-center'}/>
        </div>
      }

      {/* En pantallas pequeñas, muestra el texto del menú cuando está abierto */}

      {(menuOpen && location.pathname === '/') && (
        <div className="flex flex-col justify-center w-2/6 gap-3 mt-6 mb-2 text-sm text-white sm:text-base sm:hidden font-montserrat">
          {/* El setMenu es para que se cierre cuando clickamos en cualquier palabra del índice, salvo el inicio */}
          <IndicePantallaPequena setMenuOpen={setMenuOpen} textAlign={'text-start'}/>
        </div>
      )}
    </nav>
  )
}
