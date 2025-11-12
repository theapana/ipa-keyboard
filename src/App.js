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
                <IPAEntry value="p" />
                <IPAEntry value="b" />
            </tr>
            <tr>
                <IPAEntry value="f" />
                <IPAEntry value="v" />
            </tr>
        </tbody>
    </table>;
}

function IPAEntry({value}) {
    const [hidden, setHidden] = useState(true);
    return <td>
        <div onMouseEnter={() => setHidden(false)}
            onMouseLeave={() => setHidden(true)}>
            {value}
            {hidden ? null: <div className="key-tooltip">{value}</div>}
        </div>
    </td>;
}
