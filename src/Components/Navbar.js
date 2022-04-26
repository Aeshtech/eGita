import { Link } from "react-router-dom";

export default function Navbar() {
    return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid justify-content-center">
                    <Link className="navbar-brand text-warning" to="/">eGita</Link>

                    <ul className="navbar-nav flex-row">
                        <li className="nav-item pe-3">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="shlock">Shlock</Link>
                        </li>
                    </ul>

                </div>
            </nav>
    )
}
