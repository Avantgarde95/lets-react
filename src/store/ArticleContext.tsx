import React, { createContext, ReactNode, useState } from 'react';
import { Article } from 'common/Article';

// If articleIndex is out of range, return 0.
function validateArticleIndex(articles: Article[], articleIndex: number) {
    if (articleIndex >= 0 && articleIndex < articles.length) {
        return articleIndex;
    } else {
        return 0;
    }
}

// If sectionIndex is out of range, return -1.
function validateSectionIndex(articles: Article[], articleIndex: number, sectionIndex: number) {
    const article = articles[articleIndex];

    if (sectionIndex >= 0 && sectionIndex < article.sections.length) {
        return sectionIndex;
    } else {
        return -1;
    }
}

// Manage the list of the articles.
export const ArticleContext = createContext({} as {
    // The list of the articles.
    articles: Article[],

    // Currently selected article.
    // (Should be non-negative.)
    articleIndex: number,
    setArticleIndex: (index: number) => any,

    // Currently selected section.
    // (-1: Not selected any section.)
    sectionIndex: number,
    setSectionIndex: (index: number) => any
});

export interface ArticleProviderProps {
    articles: Article[],
    children: ReactNode;
}

export const ArticleProvider = ({ articles, children }: ArticleProviderProps) => {
    const initialArticleIndex = validateArticleIndex(articles, +(localStorage.getItem('articleIndex') ?? 0));
    const initialSectionIndex = validateSectionIndex(articles, initialArticleIndex, +(localStorage.getItem('sectionIndex') ?? -1));

    const [articleIndex, setArticleIndex] = useState(initialArticleIndex);
    const [sectionIndex, setSectionIndex] = useState(initialSectionIndex);

    return (
        <ArticleContext.Provider value={{
            articles: articles,
            articleIndex: articleIndex,
            sectionIndex: sectionIndex,
            setArticleIndex: index => {
                const articleIndex = validateArticleIndex(articles, index);
                localStorage.setItem('articleIndex', `${articleIndex}`);
                setArticleIndex(articleIndex);
            },
            setSectionIndex: index => {
                const sectionIndex = validateSectionIndex(articles, articleIndex, index);

                if (sectionIndex >= 0) {
                    localStorage.setItem('sectionIndex', `${sectionIndex}`);
                }

                setSectionIndex(sectionIndex);
            }
        }}>
            {children}
        </ArticleContext.Provider>
    );
};
