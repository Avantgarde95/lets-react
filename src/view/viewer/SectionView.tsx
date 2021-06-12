import React, { useContext, useEffect, useRef } from 'react';
import { Section } from 'common/Article';
import { ArticleContext } from 'store/ArticleContext';
import { ContentView } from 'view/viewer/ContentView';

interface SectionViewProps {
    index: number;
    section: Section;
}

// Render a section.
export const SectionView = ({ index, section }: SectionViewProps) => {
    const { sectionIndex, setSectionIndex } = useContext(ArticleContext);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // When the user selects this section on the menu,
        // scroll to the location of this section.
        if (index === sectionIndex) {
            ref.current!!.scrollIntoView({ behavior: 'smooth' });

            // Reset the section selection after scrolling.
            // This enables the user to scroll to the same section multiple times.
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
