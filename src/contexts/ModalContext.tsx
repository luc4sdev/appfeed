"use client"

import { createContext, useContext, useState } from 'react';



interface ModalProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    toggleModalVisibility: () => void;
}

interface ModalProviderProps {
    children: React.ReactNode;
}

const ModalContext = createContext({} as ModalProps)

export function useModalContext() {
    return useContext(ModalContext);
}

export function ModalProvider({ children }: ModalProviderProps) {

    const [visible, setVisible] = useState(false);

    function toggleModalVisibility() {
        setVisible(!visible);
    };



    return (
        <ModalContext.Provider value={{ visible, setVisible, toggleModalVisibility }}>
            {children}
        </ModalContext.Provider>
    )
}

