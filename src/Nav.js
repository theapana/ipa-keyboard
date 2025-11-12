import {Link} from "react-router";

export default function MyAppNav() {
    return (
        <nav className="nav">
            <ul>
                <li className="nav-link"><Link to="/">Home</Link></li>
                <li className="nav-link"><Link to="/IPAChart">IPAChart</Link></li>
                <li className="nav-link"><Link to="/Keyboard">Keyboard</Link></li>
            </ul>
        </nav>
    );
}
