import React from 'react';
import { Section } from 'common/Article';

export interface SectionItemProps {
    section: Section;
}

export const SectionItem = ({ section }: SectionItemProps) => (
    <div
        className={'SectionItem'}
        onClick={() => {

        }}
    >
        {section.title}
    </div>
);
