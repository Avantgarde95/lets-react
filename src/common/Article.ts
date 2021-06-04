export interface Article {
    title: string;
    sections: Section[];
}

export interface Section {
    title: string;
    html: string;
}
