import React, { lazy, Suspense } from 'react';

// Since the size of react-markdown is large, we use code splitting and lazy loading.
// (See https://reactjs.org/docs/code-splitting.html.)
const ReactMarkdown = lazy(() => import('react-markdown'));
import { Components } from 'react-markdown/src/ast-to-react';

import { CodeView } from 'view/viewer/content/CodeView';
import { DemoView } from 'view/viewer/content/DemoView';
import { ImageView } from 'view/viewer/content/ImageView';

// Override the rendering functions of some tags.
const components: Components = {
    code({ inline, className, children }) {
        const hasLanguage = ((typeof className !== 'undefined') && className.startsWith('language-'));
        const language = hasLanguage ? className!!.substring(9) : undefined;

        if (inline) {
            return <code className={className}>{children}</code>;
        } else {
            return <CodeView language={language}>{children}</CodeView>;
        }
    },
    a({ href, children }) {
        const hrefString = href as string;

        if (hrefString.startsWith('https://codesandbox.io/embed')) {
            return <DemoView href={hrefString} />;
        } else {
            return <a target={'_blank'} rel={'noopenner noreferrer'} href={hrefString}>{children}</a>
        }
    },
    img({ src, alt, children }) {
        return <ImageView src={src as string} alt={alt as string}>{children}</ImageView>;
    }
};

interface ContentViewProps {
    content: string;
}

// Component for rendering a markdown string.
export const ContentView = ({ content }: ContentViewProps) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ReactMarkdown components={components}>{content}</ReactMarkdown>
        </Suspense>
    );
};
