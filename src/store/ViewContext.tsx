import React, { createContext, ReactNode, useState } from 'react';

// Manage the states of the views.
export const ViewContext = createContext({} as {
    isMenuOpen: boolean,
    setMenuOpen: (value: boolean) => any
});

interface ViewProviderProps {
    children: ReactNode;
}

export const ViewProvider = ({ children }: ViewProviderProps) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <ViewContext.Provider value={{
            isMenuOpen: isMenuOpen,
            setMenuOpen: setMenuOpen
        }}>
            {children}
        </ViewContext.Provider>
    );
};
