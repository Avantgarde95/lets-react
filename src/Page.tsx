import React from 'react';
import { render } from 'react-dom';
import { parseSections } from 'ArticleParser';
import { Article } from 'common/Article';
import { ArticleProvider } from 'store/ArticleContext';
import { ViewProvider } from 'store/ViewContext';
import { App } from 'view/App';

// Import the styles.
import 'style/Page.scss';
import 'style/App.scss';
import 'style/Menu.scss';
import 'style/Viewer.scss';

// Import the articles.
import IntroductionArticle from 'article/Introduction.md';
import WebArticle from 'article/Web.md';
import NodeArticle from 'article/Node.md';
import TypeScriptArticle from 'article/TypeScript.md';
import SASSArticle from 'article/SASS.md';
import WebpackArticle from 'article/Webpack.md';
import ReactArticle from 'article/React.md';
import MobXArticle from 'article/MobX.md';
import ReactRouterArticle from 'article/ReactRouter.md';
import ElectronArticle from 'article/Electron.md';

const articles: Article[] = [
    { title: 'Introduction', sections: parseSections(IntroductionArticle) },
    { title: 'Web', sections: parseSections(WebArticle) },
    { title: 'Node.js', sections: parseSections(NodeArticle) },
    { title: 'TypeScript', sections: parseSections(TypeScriptArticle) },
    { title: 'Webpack', sections: parseSections(WebpackArticle) },
    { title: 'React', sections: parseSections(ReactArticle) },
    { title: 'SASS', sections: parseSections(SASSArticle) },
    { title: 'MobX', sections: parseSections(MobXArticle) },
    { title: 'React Router', sections: parseSections(ReactRouterArticle) },
    { title: 'Electron', sections: parseSections(ElectronArticle) }
];

// Top-level component.
const Page = () => (
    <ArticleProvider articles={articles}>
        <ViewProvider>
            <App />
        </ViewProvider>
    </ArticleProvider>
);

// React will render <Page/> in this element. (See Template.html.)
const root = document.getElementsByClassName('Root')[0];

render(<Page />, root);
