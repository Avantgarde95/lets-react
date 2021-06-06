import React from 'react';
import { Menu } from 'view/menu/Menu';
import { Viewer } from 'view/viewer/Viewer';

const Header = () => (
    <div className={'Header'}>
        <button className={'Button'}>Menu</button>
        <span className={'Title'}>Let's react</span>
        <a
            className={'Button'}
            href={'https://github.com/Avantgarde95/lets-react'}
            target={'_blank'}
            rel={'noopenner noreferrer'}
        >
            Code
        </a>
    </div>
);

const Content = () => (
    <div className={'Content'}>
        <Menu />
        <Viewer />
    </div>
);

export const App = () => (
    <div className={'App'}>
        <Header />
        <Content />
    </div>
);
