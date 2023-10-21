'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Markdown = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className='prose max-w-prose'
      // components={{
      //   code: ({ node, inline, className, children, ...props }) => {
      //     const match = /language-(\w+)/.exec(className || '');
      //     return !inline && match ? (
      //       <SyntaxHighlighter
      //         style={oneDark}
      //         PreTag='div'
      //         language={match[1]}
      //         {...props}>
      //         {String(children).replace(/\n$/, '')}
      //       </SyntaxHighlighter>
      //     ) : (
      //       <code className={className ? className : ''} {...props}>
      //         {children}
      //       </code>
      //     );
      //   },
      // }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
