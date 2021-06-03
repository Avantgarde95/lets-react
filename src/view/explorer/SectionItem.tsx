import React from 'react';
import { Section } from 'common/Article';
import { SubsectionItem } from 'view/explorer/SubsectionItem';

export interface SectionItemProps {
    section: Section;
    isSelected: boolean;
    onClick: () => any;
}

export const SectionItem = ({ section, isSelected, onClick }: SectionItemProps) => {
    return (
        <div className={'SectionItem'}>
            <div
                className={`Button ${isSelected ? 'selected' : ''}`}
                onClick={onClick}
            >
                {section.title}
            </div>
            {isSelected && (
                <div className={'Dropdown'}>
                    {section.subsections.map(subsection =>
                        <SubsectionItem subsection={subsection} />
                    )}
                </div>
            )}
        </div>
    );
};
