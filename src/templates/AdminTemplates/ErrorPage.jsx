import { Link, useRouteError } from "react-router-dom";
import { HomeIcon } from "../../assets/Icons";

export function ErrorPage() {
  const error = useRouteError();
  const { data, status } = error
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col bg-gray-300 items-center justify-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Lo siento, ha ocurrido un error inesperado.</p>
      <p>
        <i>Error {status}: {data}</i>
      </p>
      <div className="flex flex-col items-center mt-8 gap-4 bg-gray-100 rounded p-4 hover:bg-green-300">
        <p>Volver a la página principal</p>
        <Link to='/'><HomeIcon/></Link>
      </div>
    </div>
  );
}