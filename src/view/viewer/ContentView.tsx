import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ContentViewProps {
    content: string;
}

export const ContentView = ({ content }: ContentViewProps) => (
    <ReactMarkdown>{content}</ReactMarkdown>
);
