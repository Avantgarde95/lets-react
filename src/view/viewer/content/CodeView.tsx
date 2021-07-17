import React, { ReactNode } from 'react';
import { PrismLight } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/markup';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import xonokai from 'react-syntax-highlighter/dist/esm/styles/prism/xonokai';

PrismLight.registerLanguage('jsx', jsx);
PrismLight.registerLanguage('tsx', tsx);
PrismLight.registerLanguage('json', json);
PrismLight.registerLanguage('html', html);
PrismLight.registerLanguage('css', css);

// ex. language = 'TypeScript' -> return 'tsx'.
function convertLanguage(language?: string) {
    if (typeof language === 'undefined') {
        return undefined;
    }

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

interface CodeViewProps {
    language?: string;
    children: ReactNode;
}

// Component for showing a code with syntax highlighting.
export const CodeView = ({ language, children }: CodeViewProps) => (
    <PrismLight language={convertLanguage(language)} style={xonokai}>
        {String(children).trimRight()}
    </PrismLight>
);
