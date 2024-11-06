import { Link } from "react-router-dom"
import "./notFound.scss"
import drunkOld from "../assets/menu/DrunkOwl.jpg"

const NotFound = () => {
  return (
    <section className="notfound-container">
        <div className="text-notFound">
        <h1>404</h1>
        <h2> ¡Ups! Te has perdido en la fiesta</h2>
        <p>Tal vez un par de tragos más y habrías encontrado el enlace correcto. Vuelve al <Link to="/" className="home-link">inicio</Link> y sigue disfrutando. ¡Salud!🥂</p>
      </div>
      <div className="img-notfound">
        <img src={drunkOld} alt="drunk old" />
    </div>
    </section>

  );
}

export default NotFound;