import React, { useContext } from 'react';
import { ArticleContext } from 'store/ArticleContext';
import { ArticleItem } from 'view/explorer/ArticleItem';

export const Explorer = () => {
    const { articles, articleIndex, setArticleIndex } = useContext(ArticleContext);

    return (
        <div className={'Explorer'}>
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
