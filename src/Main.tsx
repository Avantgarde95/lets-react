import React from 'react';
import { render } from 'react-dom';
import { parseSections } from 'ArticleParser';
import { Article } from 'common/Article';
import { ArticleProvider } from 'store/ArticleContext';
import { ViewProvider } from 'store/ViewContext';
import { App } from 'view/App';

import 'style/Main.scss';
import 'style/App.scss';
import 'style/Menu.scss';
import 'style/Viewer.scss';

import NodeArticle from 'article/Node.md';
import TypeScriptArticle from 'article/TypeScript.md';
import SASSArticle from 'article/SASS.md';
import WebpackArticle from 'article/Webpack.md';
import ReactArticle from 'article/React.md';

const articles: Article[] = [
    { title: 'Node', sections: parseSections(NodeArticle) },
    { title: 'TypeScript', sections: parseSections(TypeScriptArticle) },
    { title: 'SASS', sections: parseSections(SASSArticle) },
    { title: 'Webpack', sections: parseSections(WebpackArticle) },
    { title: 'React', sections: parseSections(ReactArticle) }
];

const Page = () => (
    <ArticleProvider articles={articles}>
        <ViewProvider>
            <App />
        </ViewProvider>
    </ArticleProvider>
);

const root = document.getElementsByClassName('Root')[0];

render(<Page />, root);
