import React, { createContext, ReactNode, useState } from 'react';
import { Article } from 'common/Article';

export const ArticleContext = createContext({} as {
    articles: Article[],
    articleIndex: number,
    setArticleIndex: (value: number) => any
});

const dummyArticles: Article[] = [
    {
        title: 'React', sections: [
            { title: 'About', html: '' },
            { title: 'Component', html: '' },
            { title: 'JSX', html: '' },
            { title: 'Context', html: '' }
        ]
    },
    {
        title: 'Webpack', sections: [
            { title: 'About', html: '' }
        ]
    },
    {
        title: 'MobX', sections: [
            { title: 'About', html: '' }
        ]
    }
];

export interface ArticleProviderProps {
    children: ReactNode;
}

export const ArticleProvider = ({ children }: ArticleProviderProps) => {
    const [articleIndex, setArticleIndex] = useState(0);

    return (
        <ArticleContext.Provider value={{
            articles: dummyArticles,
            articleIndex: articleIndex,
            setArticleIndex: setArticleIndex
        }}>
            {children}
        </ArticleContext.Provider>
    );
};
