import React, { useContext } from 'react';
import { ArticleContext } from 'store/ArticleContext';
import { SectionItem } from 'view/explorer/SectionItem';

export const Explorer = () => {
    const { article, selectedSectionIndex, setSelectedSectionIndex } = useContext(ArticleContext);

    return (
        <div className={'Explorer'}>
            {article.sections.map((section, index) =>
                <SectionItem
                    section={section}
                    isSelected={index === selectedSectionIndex}
                    onClick={() => {
                        setSelectedSectionIndex(index);
                    }}
                />
            )}
        </div>
    );
};
