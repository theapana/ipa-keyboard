import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

import IPAChart from "./IPAChart.js";

export default function App()  {
    return <div>
        <h1>IPA Keyboard Design</h1>
        <IPAChart />
        <Keyboard
            onChange={() => {console.log("foo");}}
            onKeyPress={() => {console.log("bar");}}
        />
    </div>;
}

