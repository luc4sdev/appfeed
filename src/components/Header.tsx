import Image from "next/image";
import { Modal } from "./Modal";
import { Emoji } from "@/data/types/emoji";

import logo from '../../public/logo.svg'


interface HeaderProps {
    emojis: Emoji[];
}

export function Header({ emojis }: HeaderProps) {
    return (
        <div className="relative w-full flex justify-center items-center gap-2 pb-5 border-b border-cyan-400">
            <Image src={logo} alt="Logo" width={30} height={30} />
            <h1 className="font-bold text-3xl">GIPHY <span className="font-normal">Trendings</span></h1>
            <div className="absolute right-0">
            <Modal emojis={emojis} />
            </div>
        </div>

        
    )
}