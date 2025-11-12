import {useState} from "react";

import Key from "./Key.js";

export default function IPAChart() {
    return <div>
        <h1>IPA Chart</h1>
        <PulmonicChart />
        <VowelChart />
        <NonPulmonicChart />
    </div>;
}

function PulmonicChart() {
    return <table className="IPAChart">
        <tbody>
            <tr>
                <td></td>
                <td colSpan="4">Labial</td>
                <td colSpan="8">Coronal</td>
                <td colSpan="2"></td>
                <td colSpan="4">Dorsal</td>
                <td colSpan="6">Radical</td>
            </tr>
            <tr>
                <td>plosive</td>
                <IPAEntry value="" colSpan="2" />
                <IPAEntry value="p" />
                <IPAEntry value="b" />
                <IPAEntry value="t" colSpan="3" />
                <IPAEntry value="d" colSpan="3" />
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
                <td colSpan="5"></td>
                <IPAEntry value="ɬ" colSpan="3" />
                <IPAEntry value="ɮ" colSpan="3" />
            </tr>
            <tr>
                <td>approximant</td>
                <IPAEntry value="w" colSpan="2" />
                <IPAEntry value="ʋ" colSpan="2" />
                <IPAEntry value="ɹ" colSpan="3" />
                <IPAEntry value="l" colSpan="3" />
                <IPAEntry value="ɻ" />
                <IPAEntry value="ɭ" />
                <IPAEntry value="j" />
                <IPAEntry value="ʎ" />
            </tr>
            <tr>
                <td>nasal</td>
                <IPAEntry value="m" colSpan="2" />
                <IPAEntry value="ɱ" colSpan="2" />
                <IPAEntry value="n" colSpan="6" />
                <IPAEntry value="ɳ" colSpan="2" />
                <IPAEntry value="ɲ" colSpan="2" />
                <IPAEntry value="ŋ" colSpan="2" />
                <IPAEntry value="ɴ" colSpan="2" />
            </tr>
        </tbody>
    </table>;
}

function IPAEntry({value, colSpan}) {
    const [hidden, setHidden] = useState(true);
    return <td
        colSpan={colSpan}
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}>
        <div className="IPAEntry">
            {value}
            <Key value={value} hidden={hidden} />
        </div>
    </td>;
}

function VowelChart() {
    return <table className="IPAChart">
        <tbody>
            <tr>
                <td colSpan="6">Vowels</td>
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
                <td colSpan="3">Non-Pulmonic Consonants</td>
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
