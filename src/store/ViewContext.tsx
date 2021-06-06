import React, { createContext, ReactNode, useState } from 'react';

export const ViewContext = createContext({} as {
    isMenuOpen: boolean,
    openMenu: (value: boolean) => any
});

export interface ViewProviderProps {
    children: ReactNode;
}

export const ViewProvider = ({ children }: ViewProviderProps) => {
    const [isMenuOpen, openMenu] = useState(false);

    return (
        <ViewContext.Provider value={{
            isMenuOpen: isMenuOpen,
            openMenu: openMenu
        }}>
            {children}
        </ViewContext.Provider>
    );
};
