

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, esta ruta no existe!</h1>
      <Link to="/">
        Puedes volver dando click aqui!
      </Link>
    </div>
  );
};

export default ErrorPage;