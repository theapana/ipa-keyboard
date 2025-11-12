import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

import Key from "./Key.js";

export default function Layout() {
    return <div>
        <IPAKeyboard />
        <p />
        <Modifiers /></div>;
}

function IPAKeyboard() {
    const display = {
    };
    return <div className="keyboard">
        <h1>IPA Keyboard Layout</h1>
        <Keyboard physicalKeyboardHighlight="true"
            display={display} mergeDisplay="true" />
    </div>;
}

function Modifiers() {
    return <div>
        <h1>Modifiers</h1>
        <dl className="key-list">
            <dt><Key value="/" /></dt>
            <dd>slash [typographical]</dd>
            <p />
            <dt><Key value="-" /></dt>
            <dd>lower; in a triple of "lower", "base", "raise", select "lower"</dd>
            <p />
            <dt><Key value="+" /></dt>
            <dd>raise; in a triple of "lower", "base", "raise", select "raise"</dd>
            <p />
            <dt><Key value="q" /></dt>
            <dd>uvular</dd>
            <p />
            <dt><Key value="b" /></dt>
            <dd>implosive</dd>
            <p />
            <dt><Key value="r" /></dt>
            <dd>retroflex</dd>
        </dl>
    </div>;
}
