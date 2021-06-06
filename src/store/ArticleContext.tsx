import React, { createContext, ReactNode, useState } from 'react';
import { Article } from 'common/Article';

// Article의 목록 및 상태를 저장.
export const ArticleContext = createContext({} as {
    articles: Article[], // Article 목록.
    articleIndex: number, // 현재 선택된 article.
    sectionIndex: number | null, // 현재 선택된 section. (null: 선택하지 않음)
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
