export interface Article {
    title: string;
    sections: Section[];
}

export interface Section {
    title: string;
    subsections: Subsection[];
}

export interface Subsection {
    title: string;
    content: Content;
}

export interface Content {

}
