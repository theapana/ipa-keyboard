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
                <td></td>
                <td colspan="4">Labial</td>
                <td colspan="8">Coronal</td>
                <td colspan="2"></td>
                <td colspan="4">Dorsal</td>
                <td colspan="6">Radical</td>
            </tr>
            <tr>
                <td>plosive</td>
                <IPAEntry value="" />
                <IPAEntry value="" />
                <IPAEntry value="p" />
                <IPAEntry value="b" />
                <IPAEntry value="t" colspan="3"/>
                <IPAEntry value="d" colspan="3"/>
                <IPAEntry value="ʈ" />
                <IPAEntry value="ɖ" />
                <IPAEntry value="c" />
                <IPAEntry value="ɟ" />
                <IPAEntry value="k" />
                <IPAEntry value="g" />
                <IPAEntry value="q" />
                <IPAEntry value="ɢ" />
            </tr>
            <tr>
                <td>fricative</td>
                <IPAEntry value="ɸ" />
                <IPAEntry value="ʙ" />
                <IPAEntry value="f" />
                <IPAEntry value="v" />
                <IPAEntry value="θ" />
                <IPAEntry value="ð" />
                <IPAEntry value="s" />
                <IPAEntry value="z" />
                <IPAEntry value="ʃ" />
                <IPAEntry value="ʒ" />
                <IPAEntry value="ʂ" />
                <IPAEntry value="ʐ" />
                <IPAEntry value="c" />
                <IPAEntry value="ɟ" />
                <IPAEntry value="x" />
                <IPAEntry value="ɣ" />
                <IPAEntry value="χ" />
                <IPAEntry value="" />
            </tr>
            <tr>
                <td>liquid</td>
            </tr>
            <tr>
                <td>nasal</td>
                <IPAEntry value="m" colspan="2"/>
                <IPAEntry value="ɱ" colspan="2"/>
                <IPAEntry value="n" colspan="6"/>
                <IPAEntry value="ɳ" colspan="2"/>
                <IPAEntry value="ɲ" colspan="2"/>
                <IPAEntry value="ŋ" colspan="2"/>
                <IPAEntry value="ɴ" colspan="2"/>
            </tr>
        </tbody>
    </table>;
}

function IPAEntry({value, colspan}) {
    const [hidden, setHidden] = useState(true);
    return <td
        colspan={colspan}
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
    return !hidden && <div className="key-tooltip">{keymap[value] || value}</div>;
}
