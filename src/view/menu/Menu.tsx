import React, { useContext } from 'react';
import { ArticleContext } from 'store/ArticleContext';
import { ArticleItem } from 'view/menu/ArticleItem';

export const Menu = () => {
    const { articles, articleIndex, setArticleIndex } = useContext(ArticleContext);

    return (
        <div className={'Menu'}>
            {articles.map((article, index) =>
                <ArticleItem
                    article={article}
                    isSelected={index === articleIndex}
                    onClick={() => {
                        setArticleIndex(index);
                    }}
                />
            )}
        </div>
    );
};
