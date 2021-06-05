import React, { useContext, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { ArticleContext } from 'store/ArticleContext';

interface SectionTitleProps {
    index: number;
    title: string;
}

const SectionTitle = ({ index, title }: SectionTitleProps) => {
    const { sectionIndex } = useContext(ArticleContext);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (index === sectionIndex) {
            ref.current!!.scrollIntoView();
        }
    }, [sectionIndex]);

    return <h1 ref={ref}>{title}</h1>;
};

export const Viewer = () => {
    const { articles, articleIndex } = useContext(ArticleContext);
    const article = articles[articleIndex];

    return (
        <div className={'Viewer'}>
            <div className={'ArticleTitle'}>{article.title}</div>
            {article.sections.map((section, index) => (
                <>
                    {(section.title !== null) && <SectionTitle index={index} title={section.title} />}
                    <ReactMarkdown>{section.content}</ReactMarkdown>
                </>
            ))}
        </div>
    );
};
