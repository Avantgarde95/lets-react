import React, { useContext } from 'react';
import { ArticleContext } from 'store/ArticleContext';

export const Viewer = () => {
    const { article, selectedSectionIndex } = useContext(ArticleContext);
    const section = article.sections[selectedSectionIndex];

    return (
        <div className={'Viewer'}>
            <div className={'SectionTitle'}>{section.title}</div>
            {section.subsections.map(subsection => (
                <div className={'SubsectionTitle'}>{subsection.title}</div>
            ))}
        </div>
    );
};
