import React, { useContext, useState } from 'react';
import { ArticleContext } from 'store/ArticleContext';
import { SectionButton } from 'view/explorer/SectionButton';

export const Explorer = () => {
    const { article } = useContext(ArticleContext);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className={'Explorer'}>
            {article.sections.map((section, index) =>
                <SectionButton
                    section={section}
                    isSelected={index === selectedIndex}
                    onClick={() => {
                        setSelectedIndex(index);
                    }}
                />
            )}
        </div>
    );
};
