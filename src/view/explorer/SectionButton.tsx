import React from 'react';
import { Section } from 'common/Article';
import { SubsectionButton } from 'view/explorer/SubsectionButton';

export interface SectionButtonProps {
    section: Section;
    isSelected: boolean;
    onClick: () => any;
}

export const SectionButton = ({ section, isSelected, onClick }: SectionButtonProps) => {
    return (
        <div className={'SectionButton'}>
            <div
                className={`Title ${isSelected ? 'selected' : ''}`}
                onClick={onClick}
            >
                {section.title}
            </div>
            {isSelected && (
                <div className={'Dropdown'}>
                    {section.subsections.map(subsection =>
                        <SubsectionButton subsection={subsection} />
                    )}
                </div>
            )}
        </div>
    );
};
