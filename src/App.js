import {useState} from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';


export default function App()  {
    return <div>
        <h1>IPA Keyboard Design</h1>
        <IPAChart />
        <VowelChart />
        <NonPulmonicChart />
        <Keyboard
            onChange={() => {console.log("foo");}}
            onKeyPress={() => {console.log("bar");}}
        />
    </div>;
}

function VowelChart() {
    return <table className="IPAChart">
        <tbody>
            <tr>
                <td colspan="6">Vowels</td>
            </tr>
            <tr>
                <IPAEntry value="i" />
                <IPAEntry value="y" />
                <IPAEntry value="ɨ" />
                <IPAEntry value="ʉ" />
                <IPAEntry value="ɯ" />
                <IPAEntry value="u" />
            </tr>
            <tr>
                <IPAEntry value="ɪ" />
                <IPAEntry value="ʏ" />
                <IPAEntry value="" />
                <IPAEntry value="" />
                <IPAEntry value="ʊ" />
                <IPAEntry value="" />
            </tr>
            <tr>
                <IPAEntry value="e" />
                <IPAEntry value="ø" />
                <IPAEntry value="" />
                <IPAEntry value="" />
                <IPAEntry value="ɤ" />
                <IPAEntry value="o" />
            </tr>
            <tr>
                <IPAEntry value="ɛ" />
                <IPAEntry value="œ" />
                <IPAEntry value="" />
                <IPAEntry value="" />
                <IPAEntry value="ʌ" />
                <IPAEntry value="ɔ" />
            </tr>
            <tr>
                <IPAEntry value="a" />
                <IPAEntry value="ɶ" />
                <IPAEntry value="" />
                <IPAEntry value="" />
                <IPAEntry value="ɑ" />
                <IPAEntry value="ɒ" />
            </tr>
        </tbody>
    </table>;
}
function NonPulmonicChart() {
    return <table className="IPAChart">
        <tbody>
            <tr>
                <td colspan="3">Non-Pulmonic Consonants</td>
            </tr>
            <tr>
                <IPAEntry value="Clicks" />
                <IPAEntry value="Impl." />
                <IPAEntry value="Eject." />
            </tr>
            <tr>
                <IPAEntry value="ʘ" />
                <IPAEntry value="ɓ" />
                <IPAEntry value="ʼ" />
            </tr>
            <tr>
                <IPAEntry value="ǀ" />
                <IPAEntry value="ɗ" />
                <IPAEntry value="" />
            </tr>
            <tr>
                <IPAEntry value="ǁ" />
                <IPAEntry value="ʄ" />
                <IPAEntry value="" />
            </tr>
            <tr>
                <IPAEntry value="ǂ" />
                <IPAEntry value="ɠ" />
                <IPAEntry value="" />
            </tr>
            <tr>
                <IPAEntry value="ǃ" />
                <IPAEntry value="ʛ" />
                <IPAEntry value="" />
            </tr>
        </tbody>
        </table>;
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
                <IPAEntry value="t" colspan="3" />
                <IPAEntry value="d" colspan="3" />
                <IPAEntry value="ʈ" />
                <IPAEntry value="ɖ" />
                <IPAEntry value="c" />
                <IPAEntry value="ɟ" />
                <IPAEntry value="k" />
                <IPAEntry value="g" />
                <IPAEntry value="q" />
                <IPAEntry value="ɢ" />
                <IPAEntry value="ʔ" />
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
                <IPAEntry value="ç" />
                <IPAEntry value="ʝ" />
                <IPAEntry value="x" />
                <IPAEntry value="ɣ" />
                <IPAEntry value="χ" />
                <IPAEntry value="ʁ" />
                <IPAEntry value="h" />
                <IPAEntry value="ɦ" />
            </tr>
            <tr>
                <td>approximant</td>
                <IPAEntry value="w" colspan="2" />
                <IPAEntry value="ʋ" colspan="2" />
                <IPAEntry value="ɹ" colspan="3" />
                <IPAEntry value="l" colspan="3" />
                <IPAEntry value="ɻ" />
                <IPAEntry value="ɭ" />
                <IPAEntry value="j" />
                <IPAEntry value="ʎ" />
            </tr>
            <tr>
                <td>nasal</td>
                <IPAEntry value="m" colspan="2" />
                <IPAEntry value="ɱ" colspan="2" />
                <IPAEntry value="n" colspan="6" />
                <IPAEntry value="ɳ" colspan="2" />
                <IPAEntry value="ɲ" colspan="2" />
                <IPAEntry value="ŋ" colspan="2" />
                <IPAEntry value="ɴ" colspan="2" />
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
        <div className="IPAEntry">
            {value}
            <Key value={value} hidden={hidden} />
        </div>
    </td>;
}

function Key({value, hidden}) {
    const keymap = {
        "p": ["p"],
        "b": ["b"],
        "ɸ": ["+", "f"],
        "ʙ": ["+", "b"],
        "t": ["t"],
        "d": ["d"],
        "c": ["c"],
        "ɟ": ["+", "j"],
        "ç": ["c"],
        "ɕ": ["c"],
        "ʑ": ["z"],
        "ʝ": ["j"],
        "k": ["+", "k"],
        "g": ["g"],
        "ɣ": ["+", "g"],
        "f": ["f"],
        "v": ["v"],
        "θ": ["+", "t"],
        "ð": ["+", "d"],
        "ʈ": ["+", "t"],
        "ɖ": ["+", "d"],
        "s": ["s"],
        "z": ["z"],
        "ʃ": ["-", "s"],
        "ʒ": ["-", "z"],
        "ʂ": ["+", "s"],
        "ʐ": ["+", "z"],
        "m": ["m"],
        "ɱ": ["+", "m"],
        "n": ["n"],
        "ɳ": ["+", "n"],
        "ɲ": ["+", "n"],
        "ŋ": ["+", "n"],
        "ɴ": ["q", "n"],
        "x": ["x"],
        "χ": ["+", "x"],
        "h": ["h"],
        "ɦ": ["b", "h"],
        "ʀ": ["q", "r"],
        "ʁ": ["q", "R"],
        "ʙ": ["q", "b"],
        "ʟ": ["q", "l"],
        "q": ["q"],
        "ɢ": ["q", "q"],
        "ɓ": ["b", "b"],
        "ɗ": ["b", "d"],
        "ʄ": ["b", "s"],
        "ɠ": ["b", "g"],
        "ʛ": ["b", "G"],
        "w": ["w"],
        "ʋ": ["v"],
        "ɹ": ["r"],
        "l": ["l"],
        "ɻ": ["r", "r"],
        "ɭ": ["r", "l"],
        "j": ["j"],
        "ʎ": ["l", "j"],
        "a": ["a"],
        "i": ["i"],
        "y": ["y"],
        "ɨ":["/", "i"],
        "ʉ":["/", "i"],
        "e": ["e"],
        "ø": ["/", "o"],
        "ɤ": [""],
        "o": ["o"],
        "ɯ": ["w"],
        "ɰ": ["w"],
        "u": ["-", "u"],
        "ɪ": ["-", "i"],
        "ʏ": ["-", "y"],
        "ʊ": ["-", "u"],
        "ɛ": ["-", "e"],
        "œ": ["o"],
        "ʌ": [""],
        "ɔ": ["-", "o"],
        "ɶ": ["O"],
        "ɑ": ["a"],
        "ɒ": ["a"],
    };
    let keys = keymap[value] || [value];
    if (value == "") {return null;}
    return !hidden &&
        <div className="key-tooltip">
            {keys.map((key) => <div className="key-background">
                <div className="key">{key}</div>
            </div>)}
        </div>;
}
