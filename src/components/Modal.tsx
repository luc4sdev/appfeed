'use client'
import { GridEmojis } from './GridEmojis';
import { Emoji } from '@/data/types/emoji';
import { useState } from 'react';

interface ModalProps {
    emojis: Emoji[];
}

export function Modal({ emojis }: ModalProps) {

    const [visible, setVisible] = useState(false);

    function toggleModalVisibility() {
        setVisible(true)
    }


    return (
        <div>
            <button
                className="bg-yellow-300 rounded-lg p-2 hover:brightness-105 text-base md:text-lg text-gray-950 font-bold"
                onClick={toggleModalVisibility}>Emojis List</button>
            <GridEmojis emojis={emojis} visible={visible} setVisible={setVisible} />
        </div>
    )
};