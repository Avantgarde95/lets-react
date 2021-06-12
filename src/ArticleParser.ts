import { Section } from 'common/Article';

// If line = '# Title', return 'Title'.
// Otherwise, return null.
function getTitleIfSection(line: string) {
    const match = line.match(/^#[^#]/);

    if (match === null) {
        return null;
    } else {
        const heading = match[0];
        return line.slice(heading.length);
    }
}

// Divide a markdown string into 'sections'.
//
// Hooray!    -------> Section {title: null, content: 'Hooray...'}
//
// # Title 1  ---+
// Hello         |---> Section {title: 'Title 1', content: 'Hello...'}
// World      ---+
//
// # Title 2  ---+
// Bye           |---> Section {title: 'Title 2', content: 'Bye...'}
// World      ---+
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
