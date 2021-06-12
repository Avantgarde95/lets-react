import React, { useContext } from 'react';
import { ArticleContext } from 'store/ArticleContext';
import { ViewContext } from 'store/ViewContext';
import { ArticleItem } from 'view/menu/ArticleItem';

// Show the list of the articles.
export const Menu = () => {
    const { articles, articleIndex, setArticleIndex } = useContext(ArticleContext);
    const { isMenuOpen } = useContext(ViewContext);

    return (
        <div className={`Menu ${isMenuOpen ? 'open' : ''}`}>
            {articles.map((article, index) =>
                <ArticleItem
                    key={index}
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
