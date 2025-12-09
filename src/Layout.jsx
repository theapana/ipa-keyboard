import {useState} from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

import {keymap} from "./keymap";
import Key from "./Key";

// [r] for retroflex
// [o] for round

export default function Layout() {
    const [layer, setLayer] = useState("base");
    return <div>
        <IPAKeyboard layer={layer}/>
        <select size="10" onClick={(e) => setLayer(e.target.value)}>
            <option>base</option>
            <option>lower</option>
            <option>raise</option>
            <option>slash</option>
            <option>round</option>
            <option>lateral</option>
            <option>retroflex</option>
            <option>uvular</option>
            <option>implosive</option>
        </select>
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
        <h2>Base</h2>
        <dl className="key-list">
            <dt><Key value="-" /></dt>
            <dd>lower; in a triple of "lower", "base", "raise", select "lower"</dd>
            <p />
            <dt><Key value="+" /></dt>
            <dd>raise; in a triple of "lower", "base", "raise", select "raise"</dd>
            <p />
        </dl>
        <h2>Place/Manner Vowel</h2>
        <dl className="key-list">
            <dt><Key value="o" /></dt>
            <dd>(un)round</dd>
            <p />
            <dt><Key value="-" /></dt>
            <dd>lax</dd>
            <p />
        </dl>
        <h2>Place/Manner Cons</h2>
        <dl className="key-list">
            <dt><Key value="g" /></dt>
            <dd>velar</dd>
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
        <h2>Typographical</h2>
        <dl className="key-list">
            <dt><Key value="/" /></dt>
            <dd>slash</dd>
            <p />
        </dl>
    </div>;
}
