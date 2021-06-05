import React from 'react';
import { render } from 'react-dom';
import { Article, Section } from 'common/Article';
import { ArticleProvider } from 'store/ArticleContext';
import { App } from 'view/App';

import 'style/Main.scss';
import 'style/App.scss';
import 'style/Explorer.scss';
import 'style/Viewer.scss';

import Node from 'article/Node.md';
import TypeScript from 'article/TypeScript.md';

function getTitleIfSection(line: string) {
    const match = line.match(/^\s*#[^#]/);

    if (match === null) {
        return null;
    } else {
        const heading = match[0];
        return line.slice(heading.length);
    }
}

function toSections(markdown: string) {
    const lines = markdown.split(/\r?\n/);
    const sections: Section[] = [{ title: null, content: '' }];

    lines.forEach(line => {
        const title = getTitleIfSection(line);

        if (title !== null) {
            sections.push({
                title: title,
                content: ''
            });
        } else {
            const currentSection = sections[sections.length - 1];
            currentSection.content += line + '\n';
        }
    });

    return sections;
}

const articles: Article[] = [
    { title: 'Node', sections: toSections(Node) },
    { title: 'TypeScript', sections: toSections(TypeScript) }
];

render((
    <ArticleProvider articles={articles}>
        <App />
    </ArticleProvider>
), document.getElementsByClassName('Root')[0]);
