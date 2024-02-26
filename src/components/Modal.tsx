'use client'
import { Dialog } from '@progress/kendo-react-dialogs';
import { useState } from 'react';
import { GridEmojis } from './GridEmojis';
import { Emoji } from '@/data/types/emoji';



interface ModalProps {
    emojis?: Emoji[];
}

export function Modal({ emojis }: ModalProps) {
    const [visible, setVisible] = useState(false);

    const toggleDialog = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <button className="bg-yellow-300 rounded-lg p-2 hover:brightness-105 text-base md:text-lg text-gray-950 font-bold" onClick={toggleDialog}>View Emojis</button>
            {visible && 
            <Dialog title={"Emojis list"} onClose={toggleDialog}>
                <GridEmojis emojis={emojis} />
            </Dialog>}
        </div>
    )
};