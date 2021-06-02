import React from 'react';
import { Explorer } from './Explorer';
import { Viewer } from './Viewer';

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
