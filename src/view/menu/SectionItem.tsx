import React, { useContext } from 'react';
import { Section } from 'common/Article';
import { ArticleContext } from 'store/ArticleContext';

export interface SectionItemProps {
    index: number;
    section: Section;
}

// Button for opening the section.
export const SectionItem = ({ index, section }: SectionItemProps) => {
    const { setSectionIndex } = useContext(ArticleContext);

    return (
        <div
            className={'SectionItem'}
            onClick={() => {
                setSectionIndex(index);
            }}
        >
            {section.title}
        </div>
    );
};
