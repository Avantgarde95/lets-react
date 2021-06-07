import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown/src/ast-to-react';
import { PrismLight as CodeView } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/markup';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import xonokai from 'react-syntax-highlighter/dist/esm/styles/prism/xonokai';

CodeView.registerLanguage('jsx', jsx);
CodeView.registerLanguage('tsx', tsx);
CodeView.registerLanguage('json', json);
CodeView.registerLanguage('html', html);
CodeView.registerLanguage('css', css);

function convertLanguage(language: string) {
    const languageLower = language.toLowerCase();

    switch (languageLower) {
        case 'javascript':
            return 'jsx';
        case 'typescript':
            return 'tsx';
        case 'jsonc':
            return 'json';
        default:
            return languageLower;
    }
}

const components: Components = {
    code({ inline, className, children }) {
        const hasLanguage = ((typeof className !== 'undefined') && className.startsWith('language-'));

        if (!inline && hasLanguage) {
            const language = convertLanguage(className!!.substring(9));
            return <CodeView language={language} style={xonokai}>{String(children).trimRight()}</CodeView>
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
