import React, { useContext } from 'react';
import { ArticleContext } from 'store/ArticleContext';
import { SectionView } from 'view/viewer/SectionView';

export const Viewer = () => {
    const { articles, articleIndex } = useContext(ArticleContext);
    const article = articles[articleIndex];

    return (
        <div className={'Viewer'}>
            <div className={'ArticleTitle'}>{article.title}</div>
            {article.sections.map((section, index) => (
                <SectionView index={index} section={section} />
            ))}
        </div>
    );
};
