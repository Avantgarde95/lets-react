export interface Article {
    title: string;
    sections: Section[];
}

export interface Section {
    title: string | null; // null: No title.
    content: string; // Markdown string.
}
