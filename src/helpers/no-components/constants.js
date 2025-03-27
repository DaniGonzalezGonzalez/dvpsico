export const INITIAL_VALUE = {
    uid:'', 
    email:'', 
    displatName:''
}

export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  export const GET_COLOR_CLASS = (nota) => {
    let colorClass = "";
    switch (parseInt(nota)) {
      case 0:
        colorClass = "bg-red-800";
        break;
      case 1:
      case 2:
      case 3:
      case 4:
        colorClass = "bg-red-600";
        break;
      case 5:
      case 6:
        colorClass = "bg-yellow-600";
        break;
      case 7:
        colorClass = "bg-green-600";
        break;
      case 8:
        colorClass = "bg-green-700";
        break;
      case 9:
        colorClass = "bg-green-800";
        break;
      case 10:
        colorClass = "bg-green-900";
        break;
      default:
        colorClass = "bg-gray-600";
    }
    return colorClass;
  }


  export function getPlatformBackground(platform) {
    switch (platform) {
        case 'PS1':
            return 'bg-gradient-to-r from-purple-600 to-purple-800';
        case 'PS2':
            return 'bg-gradient-to-r from-blue-600 to-blue-800';
        case 'PS3':
            return 'bg-gradient-to-r from-gray-600 to-gray-800';
        case 'PS4':
            return 'bg-gradient-to-r from-blue-800 to-blue-950';
        case 'PS5':
            return 'bg-gradient-to-r from-gray-200 to-gray-400';
        case 'N64':
            return 'bg-gradient-to-r from-red-700 to-blue-800';
        case 'GBC':
            return 'bg-gradient-to-r from-green-800 to-green-950';
        case 'GB':
            return 'bg-gradient-to-r from-green-300 to-green-500';
        case 'NES':
            return 'bg-gradient-to-r from-red-600 to-red-800';
        case 'SNES':
            return 'bg-gradient-to-r from-purple-600 to-purple-800';
        case 'GBA':
            return 'bg-gradient-to-r from-violet-400 to-violet-600';
        case 'PSP':
            return 'bg-gradient-to-r from-black to-gray-800';
        case 'PS Vita':
            return 'bg-gradient-to-r from-blue-400 to-blue-600';
        case 'Wii':
            return 'bg-gradient-to-r from-gray-100 to-blue-400';
        case 'WiiU':
          return 'bg-gradient-to-r from-blue-500 to-blue-800';
        case 'NGC':
            return 'bg-gradient-to-r from-purple-500 to-purple-900';
        case 'Switch':
            return 'bg-gradient-to-r from-red-600 to-red-800';
        case '3DS':
          return 'bg-gradient-to-r from-red-900 to-slate-900';
          case 'NDS':
            return 'bg-gradient-to-r from-gray-400 to-slate-700';
        case 'Xbox 360':
            return 'bg-gradient-to-r from-green-600 to-green-800';
        case 'Xbox One':
            return 'bg-gradient-to-r from-black to-gray-800';
        case 'SEGA Megadrive':
            return 'bg-gradient-to-r from-blue-600 to-blue-800';
        default:
            return 'bg-slate-900'; // Fondo predeterminado
    }
  }