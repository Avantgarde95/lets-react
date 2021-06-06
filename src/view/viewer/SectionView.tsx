import React, { useContext, useEffect, useRef } from 'react';
import { Section } from 'common/Article';
import { ArticleContext } from 'store/ArticleContext';
import { ContentView } from 'view/viewer/ContentView';

interface SectionViewProps {
    index: number;
    section: Section;
}

export const SectionView = ({ index, section }: SectionViewProps) => {
    const { sectionIndex, setSectionIndex } = useContext(ArticleContext);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (index === sectionIndex) {
            ref.current!!.scrollIntoView({ behavior: 'smooth' });
            setSectionIndex(null);
        }
    }, [sectionIndex]);

    return (
        <div ref={ref}>
            {(section.title !== null) && <h1>{section.title}</h1>}
            <ContentView content={section.content} />
        </div>
    );
};
