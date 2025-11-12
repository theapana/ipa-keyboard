import {useState} from "react";
export default function App() {
    return <div>
        <IPAChart />
    </div>;
}

function IPAChart() {
    return <table className="IPAChart">
        <tbody>
            <tr>
                <td>plosive</td>
                <IPAEntry value="p" />
                <IPAEntry value="b" />
                <IPAEntry value="t" />
                <IPAEntry value="d" />
                <IPAEntry value="c" />
                <IPAEntry value="ɟ" />
                <IPAEntry value="k" />
                <IPAEntry value="g" />
            </tr>
            <tr>
                <td>fricative</td>
                <IPAEntry value="f" />
                <IPAEntry value="v" />
                <IPAEntry value="θ" />
                <IPAEntry value="ð" />
                <IPAEntry value="ʈ" />
                <IPAEntry value="ɖ" />
                <IPAEntry value="s" />
                <IPAEntry value="z" />
                <IPAEntry value="ʃ" />
                <IPAEntry value="ʒ" />
                <IPAEntry value="ʂ" />
                <IPAEntry value="ʐ" />
            </tr>
            <tr>
                <td>nasal</td>
                <IPAEntry value="m" />
                <IPAEntry value="ɱ" />
                <IPAEntry value="n" />
                <IPAEntry value="ɳ" />
                <IPAEntry value="ɲ" />
                <IPAEntry value="ŋ" />
                <IPAEntry value="ɴ" />
            </tr>
        </tbody>
    </table>;
}

function IPAEntry({value}) {
    const [hidden, setHidden] = useState(true);
    return <td
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}>
        {value}
        <Key value={value} hidden={hidden} />
    </td>;
}

function Key({value, hidden}) {
    const keymap = {
        "p": ["+", "p"],
        "b": ["+", "b"],
        "t": ["+", "t"],
        "d": ["+", "d"],
        "c": ["+", "c"],
        "ɟ": ["+", "ɟ"],
        "k": ["+", "k"],
        "g": ["+", "g"],
        "f": ["+", "f"],
        "v": ["+", "v"],
        "θ": ["+", "θ"],
        "ð": ["+", "ð"],
        "ʈ": ["+", "ʈ"],
        "ɖ": ["+", "ɖ"],
        "s": ["+", "s"],
        "z": ["+", "z"],
        "ʃ": ["+", "ʃ"],
        "ʒ": ["+", "ʒ"],
        "ʂ": ["+", "ʂ"],
        "ʐ": ["+", "ʐ"],
        "m": ["+", "m"],
        "ɱ": ["+", "ɱ"],
        "n": ["+", "n"],
        "ɳ": ["+", "ɳ"],
        "ɲ": ["+", "ɲ"],
        "ŋ": ["+", "ŋ"],
        "ɴ": ["+", "ɴ"],
    };
    return !hidden && <div className="key-tooltip">{keymap[value]}</div>;
}
