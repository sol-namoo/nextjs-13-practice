import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  children: string;
};

const MarkdownRenderer = ({ children }: Props) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose lg:prose-xl">
      {children}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
