import Markdown from "react-markdown";

const text = "# Home"

export default function App()  {
    return <div>
        <Markdown>{text}</Markdown>
    </div>;
}
