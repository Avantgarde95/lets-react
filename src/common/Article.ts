export interface Article {
    title: string;
    sections: Section[];
}

export interface Section {
    title: string | null;
    content: string;
}
