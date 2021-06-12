import React, { useContext } from 'react';
import { ViewContext } from 'store/ViewContext';
import { Menu } from 'view/menu/Menu';
import { Viewer } from 'view/viewer/Viewer';
import MenuIcon from 'image/MenuIcon.svg';

const MenuButton = () => {
    const { isMenuOpen, setMenuOpen } = useContext(ViewContext);

    return (
        <img
            className={'MenuButton'}
            src={MenuIcon}
            alt={'Menu'}
            onClick={() => {
                setMenuOpen(!isMenuOpen);
            }}
        />
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
        <span>
            <MenuButton />
            <span className={'Title'}>Let's react</span>
        </span>
        <span>
            <CodeButton />
        </span>
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
