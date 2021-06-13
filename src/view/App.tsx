import React, { useContext } from 'react';
import { ViewContext } from 'store/ViewContext';
import { Menu } from 'view/menu/Menu';
import { Viewer } from 'view/viewer/Viewer';
import MenuIcon from 'image/MenuIcon.svg';
import CodeIcon from 'image/CodeIcon.svg';

const MenuButton = () => {
    const { isMenuOpen, setMenuOpen } = useContext(ViewContext);

    return (
        <MenuIcon
            className={'MenuButton'}
            onClick={() => {
                setMenuOpen(!isMenuOpen);
            }}
        />
    );
};

const CodeButton = () => (
    <a
        className={'CodeButton'}
        href={'https://github.com/Avantgarde95/lets-react'}
        target={'_blank'}
        rel={'noopenner noreferrer'}
    >
        <CodeIcon />
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

// The whole application.
export const App = () => (
    <div className={'App'}>
        <Header />
        <Main />
    </div>
);
