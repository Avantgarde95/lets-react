import React from 'react';
import { Article } from 'common/Article';
import { SectionItem } from 'view/explorer/SectionItem';

export interface ArticleItemProps {
    article: Article;
    isSelected: boolean;
    onClick: () => any;
}

export const ArticleItem = ({ article, isSelected, onClick }: ArticleItemProps) => {
    return (
        <div className={'ArticleItem'}>
            <div
                className={`Button ${isSelected ? 'selected' : ''}`}
                onClick={onClick}
            >
                {article.title}
            </div>
            {isSelected && (
                <div className={'Dropdown'}>
                    {article.sections.map(section =>
                        (section.title !== null) && <SectionItem section={section} />
                    )}
                </div>
            )}
        </div>
    );
};
