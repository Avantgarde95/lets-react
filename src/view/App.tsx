import React from 'react';
import { Explorer } from 'view/explorer/Explorer';
import { Viewer } from 'view/viewer/Viewer';

const Header = () => (
    <div className={'Header'}>
        Let's react
    </div>
);

const Content = () => (
    <div className={'Content'}>
        <Explorer />
        <Viewer />
    </div>
);

export const App = () => (
    <div className={'App'}>
        <Header />
        <Content />
    </div>
);
