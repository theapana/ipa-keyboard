import ReactDOMServer from 'react-dom/server';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

import {keymap} from "./keymap";
import Key from "./Key";

export default function Layout() {
    return <div>
        <IPAKeyboard layer="base"/>
        <br />
        <Modifiers /></div>;
}

function Label({_}) {
    return <div>
        <div className="key-label lower">{_["lower"]}</div>
        <div className="key-label base">{_["base"]}</div>
        <div className="key-label raise">{_["raise"]}</div>
        <div className="key-label round">{_["round"]}</div>
        <br />
        <div className="key-label implosive">{_["implosive"]}</div>
        <div className="key-label lateral">{_["lateral"]}</div>
        <div className="key-label uvular">{_["uvular"]}</div>
        <div className="key-label slash">{_["slash"]}</div>
        <div className="key-label retroflex">{_["retroflex"]}</div>
    </div>;
}

function IPAKeyboard({layer}) {
    // https://react.dev/reference/react/Children#alternatives
    const display = {
        "a": keymap["a"][layer],
        "b": keymap["b"][layer],
        "c": keymap["c"][layer],
        "d": keymap["d"][layer],
        "e": keymap["e"][layer],
        "f": keymap["f"][layer],
        "g": keymap["g"][layer],
        "h": keymap["h"][layer],
        "i": keymap["i"][layer],
        "j": keymap["j"][layer],
        "k": keymap["k"][layer],
        "l": keymap["l"][layer],
        "m": keymap["m"][layer],
        "n": keymap["n"][layer],
        "o": keymap["o"][layer],
        "p": keymap["p"][layer],
        "q": keymap["q"][layer],
        "r": keymap["r"][layer],
        "s": keymap["s"][layer],
        "t": keymap["t"][layer],
        "u": keymap["u"][layer],
        "v": keymap["v"][layer],
        "w": keymap["w"][layer],
        "x": keymap["x"][layer],
        "y": keymap["y"][layer],
        "z": keymap["z"][layer],
        ",": keymap[","][layer],
        "'": keymap["'"][layer],
        ";": keymap[";"][layer],
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
            <p />
            <dt><Key value="l" /></dt>
            <dd>lateral</dd>
        </dl>
    </div>;
}
