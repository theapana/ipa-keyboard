import Markdown from "react-markdown";

const text = `
# Re-interpreting the IPA Chart: A Learning-first approach
`;

export default function App() {
    return <div>
        <Markdown>{text}</Markdown>
    </div>;
}
