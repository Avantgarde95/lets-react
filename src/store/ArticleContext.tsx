import React, { createContext, ReactNode, useState } from 'react';
import { Article } from 'common/Article';

export const ArticleContext = createContext({} as {
    article: Article,
    selectedSectionIndex: number,
    setSelectedSectionIndex: (value: number) => any
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

export const ArticleProvider = ({ children }: ArticleProviderProps) => {
    const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);

    return (
        <ArticleContext.Provider value={{
            article: dummyArticle,
            selectedSectionIndex: selectedSectionIndex,
            setSelectedSectionIndex: setSelectedSectionIndex
        }}>
            {children}
        </ArticleContext.Provider>
    );
};
