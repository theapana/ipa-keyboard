import {Link} from "react-router";

export default function MyAppNav() {
    return (
        <nav className="nav">
            <ul>
                <li className="nav-link"><Link to="/ipa-keyboard">Home</Link></li>
                <li className="nav-link"><Link to="/ipa-keyboard/IPAChart">IPAChart</Link></li>
                <li className="nav-link"><Link to="/ipa-keyboard/Keyboard">Keyboard</Link></li>
            </ul>
        </nav>
    );
}
