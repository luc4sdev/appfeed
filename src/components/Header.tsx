import Image from "next/image";
import { Modal } from "./Modal";
import { Emoji } from "@/data/types/emoji";

import logo from '../../public/logo.svg'


interface HeaderProps {
    emojis?: Emoji[];
}

export function Header({ emojis }: HeaderProps) {
    return (
        <div className="relative w-full flex flex-col md:flex-row justify-center items-center gap-2 pb-5 border-b border-cyan-400">
            <div className="flex justify-center items-center gap-2">
                <Image src={logo} alt="Logo" width={30} height={30} />
                <h1 className="font-bold text-xl md:text-3xl">GIPHY <span className="font-normal">Trendings</span>
                </h1>
            </div>
            <div className="md:absolute mt-2 md:mt-0 right-0">
                <Modal emojis={emojis} />
            </div>
        </div>


    )
}