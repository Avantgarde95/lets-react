import React, { useContext } from 'react';
import { ViewContext } from 'store/ViewContext';
import { Menu } from 'view/menu/Menu';
import { Viewer } from 'view/viewer/Viewer';

const MenuButton = () => {
    const { isMenuOpen, openMenu } = useContext(ViewContext);

    return (
        <button
            className={'Button'}
            onClick={() => {
                openMenu(!isMenuOpen);
            }}
        >
            Menu
        </button>
    );
};

const CodeButton = () => (
    <a
        className={'Button'}
        href={'https://github.com/Avantgarde95/lets-react'}
        target={'_blank'}
        rel={'noopenner noreferrer'}
    >
        Code
    </a>
);

const Header = () => (
    <div className={'Header'}>
        <MenuButton />
        <span className={'Title'}>Let's react</span>
        <CodeButton />
    </div>
);

const Main = () => (
    <div className={'Main'}>
        <Menu />
        <Viewer />
    </div>
);

export const App = () => (
    <div className={'App'}>
        <Header />
        <Main />
    </div>
);
