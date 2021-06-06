import { Article, Section } from 'common/Article';

function getTitleIfSection(line: string) {
    const match = line.match(/^\s*#[^#]/);

    if (match === null) {
        return null;
    } else {
        const heading = match[0];
        return line.slice(heading.length);
    }
}

export function parseSections(markdown: string) {
    const lines = markdown.split(/\r?\n/);
    const sections: Section[] = [{ title: null, content: '' }];

    lines.forEach(line => {
        const title = getTitleIfSection(line);

        if (title !== null) {
            sections.push({
                title: title,
                content: ''
            });
        } else {
            const currentSection = sections[sections.length - 1];
            currentSection.content += line + '\n';
        }
    });

    return sections;
}
