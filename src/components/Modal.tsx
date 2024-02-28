'use client'
import { GridEmojis } from './GridEmojis';
import { Emoji } from '@/data/types/emoji';
import { useModalContext } from '@/contexts/ModalContext';

interface ModalProps {
    emojis: Emoji[];
}

export function Modal({ emojis }: ModalProps) {

    const { toggleModalVisibility } = useModalContext();

    return (
        <div>
            <button
                className="bg-yellow-300 rounded-lg p-2 hover:brightness-105 text-base md:text-lg text-gray-950 font-bold"
                onClick={toggleModalVisibility}>
                View Emojis
            </button>
            <GridEmojis emojis={emojis} />
        </div>
    )
};