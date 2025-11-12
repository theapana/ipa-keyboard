import {useState} from 'react';
import Markdown from "react-markdown";

const content = `
Why a re-arranged IPA chart?

- primary objective: put _all_ pulmonic consonants in the pulmonic consonant chart
- those symbols left off the chart too often treated like an afterthought, and frustrating for learners
- design for learning, not techinical specification of a standard; different
  objectives and constraints from the actual IPA standard
`

const content2 = `
Considerations in making changes:

- extend; don't modify
- places of articulation
  - i.e. create column for place of articulation: epi-glottal
  - put consonants with two places of articulation somewhere...
- order rows (manner of articulation) by increasing sonority
- condense rows where possible and sensible, especially for manners of
  articulation that lack a voiceless/voiced distinction
  - e.g. combine tap/flap w. trill
  - e.g. combine lateral approximants with central approximants
- semivowels (glides) in the vowel chart (mostly)
`

export default function IPAChart() {
    const [symbol, setSymbol] = useState('p');
    return <div>
        <h1>(Re-arranged) IPA Chart</h1>
        <Markdown>{content}</Markdown>
        <PulmonicChart setSymbol={setSymbol} />
        <Card value={symbol} />
        <p />
        <VowelChart setSymbol={setSymbol} />
        <NonPulmonicChart setSymbol={setSymbol} />
        <p />
        <Markdown>{content2}</Markdown>
    </div>;
}

function Card({value}) {
    return <div className="IPACard">
        <div className="glyph">{value}</div>
        <div className="glyph-name">latin 'b'</div>
        <div className="description">voiced bilabial plosive</div>
        <div className="tipa-code">b</div>
    </div>;
}

function IPAEntry({value, colSpan, rowSpan, setSymbol}) {
    return <td colSpan={colSpan} rowSpan={rowSpan}
        onMouseEnter={() => {setSymbol(value);}}>
        {value}
    </td>;
}

function PulmonicChart({setSymbol}) {
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
                <td></td>
                <td className="IPAPlace" colSpan="2">bilab.</td>
                <td className="IPAPlace" colSpan="2">la-den</td>
                <td className="IPAPlace" colSpan="2">den.</td>
                <td className="IPAPlace" colSpan="2">alv.</td>
                <td className="IPAPlace" colSpan="2">post-alv.</td>
                <td className="IPAPlace" colSpan="2">retro</td>
                <td className="IPAPlace" colSpan="2">pal.</td>
                <td className="IPAPlace" colSpan="2">vel.</td>
                <td className="IPAPlace" colSpan="2">uv.</td>
                <td className="IPAPlace" colSpan="2">phar.</td>
                <td className="IPAPlace" colSpan="2">epi-g.</td>
                <td className="IPAPlace" colSpan="2">glot.</td>
            </tr>
            <tr>
                <td>plosive</td>
                <td colSpan="2" />
                <IPAEntry value="p" setSymbol={setSymbol} />
                <IPAEntry value="b" setSymbol={setSymbol} />
                <td colSpan="2" />
                <IPAEntry value="t" setSymbol={setSymbol} />
                <IPAEntry value="d" setSymbol={setSymbol} />
                <td colSpan="2" />
                <IPAEntry value="ʈ" setSymbol={setSymbol} />
                <IPAEntry value="ɖ" setSymbol={setSymbol} />
                <IPAEntry value="c" setSymbol={setSymbol} />
                <IPAEntry value="ɟ" setSymbol={setSymbol} />
                <IPAEntry value="k" setSymbol={setSymbol} />
                <IPAEntry value="g" setSymbol={setSymbol} />
                <IPAEntry value="q" setSymbol={setSymbol} />
                <IPAEntry value="ɢ" setSymbol={setSymbol} />
                <td colSpan="2"></td>
                <IPAEntry value="ʡ" setSymbol={setSymbol} />
                <td></td>
                <IPAEntry value="ʔ" setSymbol={setSymbol} />
                <td></td>
            </tr>
            <tr>
                <td rowSpan="2">fricative</td>
                <IPAEntry value="ɸ" setSymbol={setSymbol} />
                <IPAEntry value="ʙ" setSymbol={setSymbol} />
                <IPAEntry value="f" setSymbol={setSymbol} rowSpan="2" />
                <IPAEntry value="v" setSymbol={setSymbol} rowSpan="2" />
                <IPAEntry value="θ" setSymbol={setSymbol} />
                <IPAEntry value="ð" setSymbol={setSymbol} />
                <IPAEntry value="s" setSymbol={setSymbol} />
                <IPAEntry value="z" setSymbol={setSymbol} />
                <IPAEntry value="ʃ" setSymbol={setSymbol} />
                <IPAEntry value="ʒ" setSymbol={setSymbol} />
                <IPAEntry value="ʂ" setSymbol={setSymbol} rowSpan="2" />
                <IPAEntry value="ʐ" setSymbol={setSymbol} rowSpan="2" />
                <IPAEntry value="ç" setSymbol={setSymbol} />
                <IPAEntry value="ʝ" setSymbol={setSymbol} />
                <IPAEntry value="x" setSymbol={setSymbol} />
                <IPAEntry value="ɣ" setSymbol={setSymbol} rowSpan="2" />
                <IPAEntry value="χ" setSymbol={setSymbol} rowSpan="2" />
                <IPAEntry value="ʁ" setSymbol={setSymbol} rowSpan="2" />
                <IPAEntry value="ħ" setSymbol={setSymbol} rowSpan="2" />
                <IPAEntry value="ʕ" setSymbol={setSymbol} rowSpan="2" />
                <IPAEntry value="ʜ" setSymbol={setSymbol} rowSpan="2" />
                <IPAEntry value="ʢ" setSymbol={setSymbol} rowSpan="2" />
                <IPAEntry value="h" setSymbol={setSymbol} rowSpan="2" />
                <IPAEntry value="ɦ" setSymbol={setSymbol} rowSpan="2" />
            </tr>
            <tr>
                <IPAEntry value="ʍ" setSymbol={setSymbol} />
                <td />
                <td colSpan="2" />
                <IPAEntry value="ɬ" setSymbol={setSymbol} />
                <IPAEntry value="ɮ" setSymbol={setSymbol} />
                <td colSpan="2" />
                <IPAEntry value="ɕ" setSymbol={setSymbol} />
                <IPAEntry value="ʑ" setSymbol={setSymbol} />
                <IPAEntry value="ɧ" setSymbol={setSymbol} />
            </tr>
            <tr>
                <td>trill/tap/flap</td>
                <IPAEntry value="ʙ" setSymbol={setSymbol} />
                <td></td>
                <td></td>
                <IPAEntry value="ⱱ" setSymbol={setSymbol} />
                <td colSpan="2"></td>
                <IPAEntry value="r" setSymbol={setSymbol} />
                <IPAEntry value="ɾ" setSymbol={setSymbol} />
                <td colSpan="2"></td>
                <td></td>
                <IPAEntry value="ɽ" setSymbol={setSymbol} />
                <td colSpan="4"></td>
                <IPAEntry value="ʀ" setSymbol={setSymbol} />
                <td colSpan="1"></td>
                <td colSpan="6"></td>
            </tr>
            <tr>
                <td>liquid</td>
                <td colSpan="4"></td>
                <td colSpan="2" />
                <IPAEntry value="ɹ" setSymbol={setSymbol} />
                <IPAEntry value="l" setSymbol={setSymbol} />
                <td colSpan="2" />
                <IPAEntry value="ɻ" setSymbol={setSymbol} />
                <IPAEntry value="ɭ" setSymbol={setSymbol} />
                <td colSpan="2"></td>
                <td colSpan="4"></td>
                <td colSpan="6"></td>
            </tr>
            <tr>
                <td>glide</td>
                <IPAEntry value="w" setSymbol={setSymbol} />
                <td></td>
                <IPAEntry value="ʋ" setSymbol={setSymbol} />
                <td></td>
                <td colSpan="8"></td>
                <IPAEntry value="j" setSymbol={setSymbol} />
                <IPAEntry value="ʎ" setSymbol={setSymbol} />
                <td colSpan="4"></td>
                <td colSpan="6"></td>
            </tr>
            <tr>
                <td>nasal</td>
                <IPAEntry value="m" setSymbol={setSymbol} colSpan="2" />
                <IPAEntry value="ɱ" setSymbol={setSymbol} colSpan="2" />
                <IPAEntry value="n" setSymbol={setSymbol} colSpan="6" />
                <IPAEntry value="ɳ" setSymbol={setSymbol} colSpan="2" />
                <IPAEntry value="ɲ" setSymbol={setSymbol} colSpan="2" />
                <IPAEntry value="ŋ" setSymbol={setSymbol} colSpan="2" />
                <IPAEntry value="ɴ" setSymbol={setSymbol} colSpan="2" />
                <td colSpan="6"></td>
            </tr>
        </tbody>
    </table>;
}

function VowelChart({setSymbol}) {
    return <table className="IPAChart">
        <tbody>
            <tr>
                <td colSpan="7">Vowels</td>
            </tr>
            <tr>
                <td>semi-vowels</td>
                <IPAEntry value="j" setSymbol={setSymbol} />
                <IPAEntry value="ɥ" setSymbol={setSymbol} />
                <td colSpan="2"></td>
                <IPAEntry value="ɰ" setSymbol={setSymbol} />
                <IPAEntry value="w" setSymbol={setSymbol} />
            </tr>
            <tr>
                <td></td>
                <td colSpan="6"></td>
            </tr>
            <tr>
                <td>high</td>
                <IPAEntry value="i" setSymbol={setSymbol} />
                <IPAEntry value="y" setSymbol={setSymbol} />
                <IPAEntry value="ɨ" setSymbol={setSymbol} />
                <IPAEntry value="ʉ" setSymbol={setSymbol} />
                <IPAEntry value="ɯ" setSymbol={setSymbol} />
                <IPAEntry value="u" setSymbol={setSymbol} />
            </tr>
            <tr>
                <td>high (lax)</td>
                <IPAEntry value="ɪ" setSymbol={setSymbol} />
                <IPAEntry value="ʏ" setSymbol={setSymbol} />
                <td colSpan="2"></td>
                <IPAEntry value="ʊ" setSymbol={setSymbol} />
                <td></td>
            </tr>
            <tr>
                <td>mid-tense</td>
                <IPAEntry value="e" setSymbol={setSymbol} />
                <IPAEntry value="ø" setSymbol={setSymbol} />
                <IPAEntry value="ɘ" setSymbol={setSymbol} />
                <IPAEntry value="ɵ" setSymbol={setSymbol} />
                <IPAEntry value="ɤ" setSymbol={setSymbol} />
                <IPAEntry value="o" setSymbol={setSymbol} />
            </tr>
            <tr>
                <td></td>
                <td colSpan="2"></td>
                <IPAEntry value="ə" setSymbol={setSymbol} colSpan="2" />
                <td colSpan="2"></td>
            </tr>
            <tr>
                <td>mid-lax</td>
                <IPAEntry value="ɛ" setSymbol={setSymbol} />
                <IPAEntry value="œ" setSymbol={setSymbol} />
                <IPAEntry value="ɜ" setSymbol={setSymbol} />
                <IPAEntry value="ɞ" setSymbol={setSymbol} />
                <IPAEntry value="ʌ" setSymbol={setSymbol} />
                <IPAEntry value="ɔ" setSymbol={setSymbol} />
            </tr>
            <tr>
                <td></td>
                <IPAEntry value="æ" setSymbol={setSymbol} colSpan="2" />
                <IPAEntry value="ɐ" setSymbol={setSymbol} colSpan="2" />
                <td colSpan="2"></td>
            </tr>
            <tr>
                <td>low</td>
                <IPAEntry value="a" setSymbol={setSymbol} />
                <IPAEntry value="ɶ" setSymbol={setSymbol} />
                <td colSpan="2"></td>
                <IPAEntry value="ɑ" setSymbol={setSymbol} />
                <IPAEntry value="ɒ" setSymbol={setSymbol} />
            </tr>
        </tbody>
    </table>;
}

function NonPulmonicChart({setSymbol}) {
    return <table className="IPAChart">
        <tbody>
            <tr>
                <td colSpan="3">Non-Pulmonic Consonants</td>
            </tr>
            <tr>
                <td>"Clicks"</td>
                <td>"Impl."</td>
                <td>"Eject."</td>
            </tr>
            <tr>
                <IPAEntry value="ʘ" setSymbol={setSymbol} />
                <IPAEntry value="ɓ" setSymbol={setSymbol} />
                <IPAEntry value="ʼ" setSymbol={setSymbol} />
            </tr>
            <tr>
                <IPAEntry value="ǀ" setSymbol={setSymbol} />
                <IPAEntry value="ɗ" setSymbol={setSymbol} />
                <td />
            </tr>
            <tr>
                <IPAEntry value="ǁ" setSymbol={setSymbol} />
                <IPAEntry value="ʄ" setSymbol={setSymbol} />
                <td />
            </tr>
            <tr>
                <IPAEntry value="ǂ" setSymbol={setSymbol} />
                <IPAEntry value="ɠ" setSymbol={setSymbol} />
                <td />
            </tr>
            <tr>
                <IPAEntry value="ǃ" setSymbol={setSymbol} />
                <IPAEntry value="ʛ" setSymbol={setSymbol} />
                <td />
            </tr>
        </tbody>
    </table>;
}
