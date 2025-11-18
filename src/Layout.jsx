import ReactDOMServer from 'react-dom/server';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

import {keymap} from "./keymap";
import Key from "./Key";

export default function Layout() {
    return <div>
        <IPAKeyboard />
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

function IPAKeyboard() {
    // https://react.dev/reference/react/Children#alternatives
    const display = {
        "a": ReactDOMServer.renderToString(<Label _={keymap["a"]} />),
        "b": ReactDOMServer.renderToString(<Label _={keymap["b"]} />),
        "c": ReactDOMServer.renderToString(<Label _={keymap["c"]} />),
        "d": ReactDOMServer.renderToString(<Label _={keymap["d"]} />),
        "e": ReactDOMServer.renderToString(<Label _={keymap["e"]} />),
        "f": ReactDOMServer.renderToString(<Label _={keymap["f"]} />),
        "g": ReactDOMServer.renderToString(<Label _={keymap["g"]} />),
        "h": ReactDOMServer.renderToString(<Label _={keymap["h"]} />),
        "i": ReactDOMServer.renderToString(<Label _={keymap["i"]} />),
        "j": ReactDOMServer.renderToString(<Label _={keymap["j"]} />),
        "k": ReactDOMServer.renderToString(<Label _={keymap["k"]} />),
        "l": ReactDOMServer.renderToString(<Label _={keymap["l"]} />),
        "m": ReactDOMServer.renderToString(<Label _={keymap["m"]} />),
        "n": ReactDOMServer.renderToString(<Label _={keymap["n"]} />),
        "o": ReactDOMServer.renderToString(<Label _={keymap["o"]} />),
        "p": ReactDOMServer.renderToString(<Label _={keymap["p"]} />),
        "q": ReactDOMServer.renderToString(<Label _={keymap["q"]} />),
        "r": ReactDOMServer.renderToString(<Label _={keymap["r"]} />),
        "s": ReactDOMServer.renderToString(<Label _={keymap["s"]} />),
        "t": ReactDOMServer.renderToString(<Label _={keymap["t"]} />),
        "u": ReactDOMServer.renderToString(<Label _={keymap["u"]} />),
        "v": ReactDOMServer.renderToString(<Label _={keymap["v"]} />),
        "w": ReactDOMServer.renderToString(<Label _={keymap["w"]} />),
        "x": ReactDOMServer.renderToString(<Label _={keymap["x"]} />),
        "y": ReactDOMServer.renderToString(<Label _={keymap["y"]} />),
        "z": ReactDOMServer.renderToString(<Label _={keymap["z"]} />),
        ",": ReactDOMServer.renderToString(<Label _={keymap[","]} />),
        "'": ReactDOMServer.renderToString(<Label _={keymap["'"]} />),
        ";": ReactDOMServer.renderToString(<Label _={keymap[";"]} />),
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
