import React, { createContext, ReactNode, useState } from 'react';
import { Article } from 'common/Article';

export const ArticleContext = createContext({} as {
    articles: Article[],
    articleIndex: number,
    sectionIndex: number | null,
    setArticleIndex: (value: number) => any,
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
