import React from 'react';
import { render } from 'react-dom';
import { parseSections } from 'ArticleParser';
import { Article } from 'common/Article';
import { ArticleProvider } from 'store/ArticleContext';
import { ViewProvider } from 'store/ViewContext';
import { App } from 'view/App';

// 스타일들 불러오기.
import 'style/Main.scss';
import 'style/App.scss';
import 'style/Menu.scss';
import 'style/Viewer.scss';

// Article들 불러오기.
import IntroductionArticle from 'article/Introduction.md';
import WebArticle from 'article/Web.md';
import NodeArticle from 'article/Node.md';
import TypeScriptArticle from 'article/TypeScript.md';
import SASSArticle from 'article/SASS.md';
import WebpackArticle from 'article/Webpack.md';
import ReactArticle from 'article/React.md';
import MobXArticle from 'article/MobX.md';
import ReactRouterArticle from 'article/ReactRouter.md';

const articles: Article[] = [
    { title: 'Introduction', sections: parseSections(IntroductionArticle) },
    { title: 'Web', sections: parseSections(WebArticle) },
    { title: 'Node.js', sections: parseSections(NodeArticle) },
    { title: 'TypeScript', sections: parseSections(TypeScriptArticle) },
    { title: 'Webpack', sections: parseSections(WebpackArticle) },
    { title: 'React', sections: parseSections(ReactArticle) },
    { title: 'SASS', sections: parseSections(SASSArticle) },
    { title: 'MobX', sections: parseSections(MobXArticle) },
    { title: 'React Router', sections: parseSections(ReactRouterArticle) }
];

// 최상위 component.
const Page = () => (
    <ArticleProvider articles={articles}>
        <ViewProvider>
            <App />
        </ViewProvider>
    </ArticleProvider>
);

// React가 <Page/>를 렌더링할 element. (Template.html 참고)
const root = document.getElementsByClassName('Root')[0];

render(<Page />, root);
