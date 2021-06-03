import React from 'react';
import { Subsection } from 'common/Article';

export interface SubsectionItemProps {
    subsection: Subsection;
}

export const SubsectionItem = ({ subsection }: SubsectionItemProps) => (
    <div
        className={'SubsectionItem'}
        onClick={() => {

        }}
    >
        {subsection.title}
    </div>
);
