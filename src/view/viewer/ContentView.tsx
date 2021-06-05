import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown/src/ast-to-react';
import { PrismLight as CodeView } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import xonokai from 'react-syntax-highlighter/dist/esm/styles/prism/xonokai';

CodeView.registerLanguage('jsx', jsx);
CodeView.registerLanguage('javascript', jsx);
CodeView.registerLanguage('tsx', tsx);
CodeView.registerLanguage('typescript', tsx);

const components: Components = {
    code({ inline, className, children }) {
        const hasLanguage = ((typeof className !== 'undefined') && className.startsWith('language-'));

        if (!inline && hasLanguage) {
            const language = className!!.substr(9).toLowerCase();
            return <CodeView language={language} style={xonokai}>{children}</CodeView>
        } else {
            return <code className={className}>{children}</code>;
        }
    }
};

interface ContentViewProps {
    content: string;
}

export const ContentView = ({ content }: ContentViewProps) => (
    <ReactMarkdown components={components}>{content}</ReactMarkdown>
);
