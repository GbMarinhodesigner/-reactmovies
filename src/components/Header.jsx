import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
export function Header() {
    return (
        <div className="bg-brand-dark  bg-opacity-20 backdrop-blur-sm flex flex-col md:flex-row gap-y-5 justify-between items-center p-6 fixed top-0 w-full z-10" >
            <Link to="/">
                <img src={logo} alt="" />

            </Link>
            <nav className="flex gap-14">
                <Link to="/" className="hover:text-brand-blue-light">Início</Link>
                <Link to="/filmes"className="hover:text-brand-blue-light">Filmes</Link>
                <Link to="/series"className="hover:text-brand-blue-light">Séries</Link>
            </nav>
        </div>
    )
}