import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

export default function Layout() {
    return <div>
        <h1>IPA Keyboard Layout</h1>
        <div className="keyboard">
            <Keyboard />
        </div>
    </div>;
}
