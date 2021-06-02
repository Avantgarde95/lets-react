import React, { useContext } from 'react';
import { ArticleContext, ArticleProvider } from 'store/ArticleContext';
import { Explorer } from 'view/explorer/Explorer';
import { Viewer } from 'view/viewer/Viewer';

const Header = () => {
    const { article } = useContext(ArticleContext);

    return (
        <div className={'Header'}>
            {article.title}
        </div>
    );
}

const Content = () => (
    <div className={'Content'}>
        <Explorer />
        <Viewer />
    </div>
);

export const App = () => (
    <ArticleProvider>
        <div className={'App'}>
            <Header />
            <Content />
        </div>
    </ArticleProvider>
);
