import React, { createContext, ReactNode } from 'react';
import { Article } from 'common/Article';

export const ArticleContext = createContext({} as {
    article: Article
});

const dummyArticle: Article = {
    title: 'Let\'s react',
    sections: [
        {
            title: 'React', subsections: [
                { title: 'About', content: {} },
                { title: 'Component', content: {} },
                { title: 'JSX', content: {} },
                { title: 'Context', content: {} }
            ]
        },
        {
            title: 'Webpack', subsections: [
                { title: 'About', content: {} }
            ]
        },
        {
            title: 'MobX', subsections: [
                { title: 'About', content: {} }
            ]
        }
    ]
};

export interface ArticleProviderProps {
    children: ReactNode;
}

export const ArticleProvider = ({ children }: ArticleProviderProps) => (
    <ArticleContext.Provider value={{ article: dummyArticle }}>
        {children}
    </ArticleContext.Provider>
);
