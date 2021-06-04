import React, { useContext } from 'react';
import { ArticleContext } from 'store/ArticleContext';

export const Viewer = () => {
    const { articles, articleIndex } = useContext(ArticleContext);
    const article = articles[articleIndex];

    return (
        <div className={'Viewer'}>
            <div className={'ArticleTitle'}>{article.title}</div>
            {article.sections.map(section => (
                <div className={'SectionTitle'}>{section.title}</div>
            ))}
        </div>
    );
};
