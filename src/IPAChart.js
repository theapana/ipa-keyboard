export default function IPAChart() {
    return <div>
        <h1>(Re-arranged) IPA Chart</h1>
        <PulmonicChart />
        <p />
        <VowelChart />
        <NonPulmonicChart />
    </div>;
}

function IPAEntry({value, colSpan, rowSpan}) {
    // TODO: show key sequence on hover
    return <td colSpan={colSpan} rowSpan={rowSpan}>{value}</td>;
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
                <IPAEntry value="" colSpan="2" />
                <IPAEntry value="p" />
                <IPAEntry value="b" />
                <td colSpan="2" />
                <IPAEntry value="t" />
                <IPAEntry value="d" />
                <td colSpan="2" />
                <IPAEntry value="ʈ" />
                <IPAEntry value="ɖ" />
                <IPAEntry value="c" />
                <IPAEntry value="ɟ" />
                <IPAEntry value="k" />
                <IPAEntry value="g" />
                <IPAEntry value="q" />
                <IPAEntry value="ɢ" />
                <td colSpan="2"></td>
                <IPAEntry value="ʡ" />
                <td></td>
                <IPAEntry value="ʔ" />
                <td></td>
            </tr>
            <tr>
                <td rowSpan="2">fricative</td>
                <IPAEntry rowSpan="2" value="ɸ" />
                <IPAEntry rowSpan="2" value="ʙ" />
                <IPAEntry rowSpan="2" value="f" />
                <IPAEntry rowSpan="2" value="v" />
                <IPAEntry value="θ" />
                <IPAEntry value="ð" />
                <IPAEntry value="s" />
                <IPAEntry value="z" />
                <IPAEntry value="ʃ" />
                <IPAEntry value="ʒ" />
                <IPAEntry rowSpan="2" value="ʂ" />
                <IPAEntry rowSpan="2" value="ʐ" />
                <IPAEntry value="ç" />
                <IPAEntry value="ʝ" />
                <IPAEntry rowSpan="2" value="x" />
                <IPAEntry rowSpan="2" value="ɣ" />
                <IPAEntry rowSpan="2" value="χ" />
                <IPAEntry rowSpan="2" value="ʁ" />
                <IPAEntry rowSpan="2" value="ħ" />
                <IPAEntry rowSpan="2" value="ʕ" />
                <IPAEntry rowSpan="2" value="ʜ" />
                <IPAEntry rowSpan="2" value="ʢ" />
                <IPAEntry rowSpan="2" value="h" />
                <IPAEntry rowSpan="2" value="ɦ" />
            </tr>
            <tr>
                <td colSpan="2" />
                <IPAEntry value="ɬ" />
                <IPAEntry value="ɮ" />
                <td colSpan="2" />
                <IPAEntry value="ɕ" />
                <IPAEntry value="ʑ" />
            </tr>
            <tr>
                <td>trill/tap/flap</td>
                <IPAEntry value="ʙ" />
                <td></td>
                <td></td>
                <IPAEntry value="ⱱ" />
                <td colSpan="2"></td>
                <IPAEntry value="r" />
                <IPAEntry value="ɾ" />
                <td colSpan="2"></td>
                <td></td>
                <IPAEntry value="ɽ" />
                <td colSpan="4"></td>
                <IPAEntry value="ʀ" />
                <td colSpan="1"></td>
                <td colSpan="6"></td>
            </tr>
            <tr>
                <td>liquid</td>
                <td colSpan="4"></td>
                <td colSpan="2" />
                <IPAEntry value="ɹ" />
                <IPAEntry value="l" />
                <td colSpan="2" />
                <IPAEntry value="ɻ" />
                <IPAEntry value="ɭ" />
                <td colSpan="2"></td>
                <td colSpan="4"></td>
                <td colSpan="6"></td>
            </tr>
            <tr>
                <td>glide</td>
                <IPAEntry value="w" />
                <td></td>
                <IPAEntry value="ʋ" />
                <td></td>
                <td colSpan="8"></td>
                <IPAEntry value="j" />
                <IPAEntry value="ʎ" />
                <td colSpan="4"></td>
                <td colSpan="6"></td>
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
                <td colSpan="6"></td>
            </tr>
        </tbody>
    </table>;
}

function VowelChart() {
    return <table className="IPAChart">
        <tbody>
            <tr>
                <td colSpan="7">Vowels</td>
            </tr>
            <tr>
                <td>semi-vowels</td>
                <IPAEntry value="j" />
                <IPAEntry value="ɥ" />
                <td colSpan="2"></td>
                <IPAEntry value="ɰ" />
                <IPAEntry value="w" />
            </tr>
            <tr>
                <td></td>
                <td colSpan="6"></td>
            </tr>
            <tr>
                <td>high</td>
                <IPAEntry value="i" />
                <IPAEntry value="y" />
                <IPAEntry value="ɨ" />
                <IPAEntry value="ʉ" />
                <IPAEntry value="ɯ" />
                <IPAEntry value="u" />
            </tr>
            <tr>
                <td>high (lax)</td>
                <IPAEntry value="ɪ" />
                <IPAEntry value="ʏ" />
                <td colSpan="2"></td>
                <IPAEntry value="ʊ" />
                <td></td>
            </tr>
            <tr>
                <td>mid-tense</td>
                <IPAEntry value="e" />
                <IPAEntry value="ø" />
                <IPAEntry value="ɘ" />
                <IPAEntry value="ɵ" />
                <IPAEntry value="ɤ" />
                <IPAEntry value="o" />
            </tr>
            <tr>
                <td></td>
                <td colSpan="2"></td>
                <IPAEntry value="ə" colSpan="2" />
                <td colSpan="2"></td>
            </tr>
            <tr>
                <td>mid-lax</td>
                <IPAEntry value="ɛ" />
                <IPAEntry value="œ" />
                <IPAEntry value="ɜ" />
                <IPAEntry value="ɞ" />
                <IPAEntry value="ʌ" />
                <IPAEntry value="ɔ" />
            </tr>
            <tr>
                <td></td>
                <IPAEntry value="æ" colSpan="2" />
                <IPAEntry value="ɐ" colSpan="2" />
                <td colSpan="2"></td>
            </tr>
            <tr>
                <td>low</td>
                <IPAEntry value="a" />
                <IPAEntry value="ɶ" />
                <td colSpan="2"></td>
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
