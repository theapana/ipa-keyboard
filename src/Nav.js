import {NavLink} from "react-router";

export default function MyAppNav() {
    return (
        <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/IPAChart">IPAChart</NavLink>
            <NavLink to="/Keyboard">Keyboard</NavLink>
        </nav>
    );
}
