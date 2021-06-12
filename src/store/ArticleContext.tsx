import React, { createContext, ReactNode, useState } from 'react';
import { Article } from 'common/Article';

// Manage the list of the articles.
export const ArticleContext = createContext({} as {
    // The list of the articles.
    articles: Article[],

    // Currently selected article.
    articleIndex: number,
    setArticleIndex: (value: number) => any,

    // Currently selected section.
    // (null: Not selected anything)
    sectionIndex: number | null,
    setSectionIndex: (value: number | null) => any
});

export interface ArticleProviderProps {
    articles: Article[],
    children: ReactNode;
}

export const ArticleProvider = ({ articles, children }: ArticleProviderProps) => {
    const [articleIndex, setArticleIndex] = useState(0);
    const [sectionIndex, setSectionIndex] = useState<number | null>(null);

    return (
        <ArticleContext.Provider value={{
            articles: articles,
            articleIndex: articleIndex,
            sectionIndex: sectionIndex,
            setArticleIndex: setArticleIndex,
            setSectionIndex: setSectionIndex
        }}>
            {children}
        </ArticleContext.Provider>
    );
};
