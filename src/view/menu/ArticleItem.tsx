import React from 'react';
import { Article } from 'common/Article';
import { SectionItem } from 'view/menu/SectionItem';

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
                    {article.sections.map((section, index) =>
                        (section.title !== null) && <SectionItem key={index} index={index} section={section} />
                    )}
                </div>
            )}
        </div>
    );
};
