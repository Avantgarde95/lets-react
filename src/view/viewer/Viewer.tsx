import React, { useContext } from 'react';
import Markdown from 'markdown-to-jsx';
import { ArticleContext } from 'store/ArticleContext';

export const Viewer = () => {
    const { articles, articleIndex } = useContext(ArticleContext);
    const article = articles[articleIndex];

    return (
        <div className={'Viewer'}>
            <div className={'ArticleTitle'}>{article.title}</div>
            {article.sections.map(section => (
                <>
                    {(section.title !== null) && <h1>{section.title}</h1>}
                    <Markdown>{section.content}</Markdown>
                </>
            ))}
        </div>
    );
};
