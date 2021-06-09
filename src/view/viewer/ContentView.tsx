import React, { ReactNode, useState } from 'react';
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

interface ImageViewProps {
    src: string;
    alt: string;
    children: ReactNode;
}

const ImageView = ({ src, alt, children }: ImageViewProps) => {
    const [isLoad, setLoad] = useState(false);

    return (
        <div className={'Image'}>
            {!isLoad && 'Loading...'}
            <img
                src={src}
                alt={alt}
                onLoad={() => {
                    setLoad(true);
                }}
            >
                {children}
            </img>
        </div>
    );
};

const components: Components = {
    code({ inline, className, children }) {
        const hasLanguage = ((typeof className !== 'undefined') && className.startsWith('language-'));

        if (inline) {
            return <code className={className}>{children}</code>;
        } else if (hasLanguage) {
            const language = convertLanguage(className!!.substring(9));
            return <CodeView language={language} style={xonokai}>{String(children).trimRight()}</CodeView>
        } else {
            return <CodeView style={xonokai}>{String(children).trimRight()}</CodeView>
        }
    },
    a({ href, children }) {
        return <a target={'_blank'} rel={'noopenner noreferrer'} href={href as string}>{children}</a>
    },
    img({ src, alt, children }) {
        return <ImageView src={src as string} alt={alt as string}>{children}</ImageView>;
    }
};

interface ContentViewProps {
    content: string;
}

export const ContentView = ({ content }: ContentViewProps) => (
    <ReactMarkdown components={components}>{content}</ReactMarkdown>
);
