import React from 'react';
import { Subsection } from 'common/Article';

export interface SubsectionButtonProps {
    subsection: Subsection;
}

export const SubsectionButton = ({ subsection }: SubsectionButtonProps) => (
    <div
        className={'SubsectionButton'}
        onClick={() => {
            
        }}
    >
        {subsection.title}
    </div>
);
