import React, { useState } from 'react';
import { Section, Subsection } from 'common/Article';

interface SubsectionButtonProps {
    subsection: Subsection;
    isSelected: boolean;
}

const SubsectionButton = ({ subsection, isSelected }: SubsectionButtonProps) => (
    <div className={'SubsectionButton'}>
        {subsection.title}
    </div>
);

interface SectionButtonProps {
    section: Section;
    isSelected: boolean;
}

const SectionButton = ({ section, isSelected }: SectionButtonProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className={'SectionButton'}>
            <div>{section.title}</div>
            {isSelected && section.subsections.map((subsection, index) =>
                <SubsectionButton subsection={subsection} isSelected={index === selectedIndex} />
            )}
        </div>
    );
};

interface ExplorerProps {
    sections: Section[];
}

export const Explorer = ({ sections }: ExplorerProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className={'Explorer'}>
            {sections.map((section, index) =>
                <SectionButton section={section} isSelected={index === selectedIndex} />
            )}
        </div>
    );
};
