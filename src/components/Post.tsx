import { api } from "@/data/api"
import { Gif } from "@/data/types/gif"
import Image from "next/image"

export async function getTrendingGifs(): Promise<Gif[]> {
    const response = await api('/v1/gifs/trending', {
        next: {
            revalidate: 60 * 60, // 1 hour
        }
    })

    const gifs = await response.json()

    return gifs.data
}

export async function Post() {

    const trendingGifs = await getTrendingGifs()

    return (
        <>
            {trendingGifs.map(gif => {
                return (
                    <div key={gif.id} className="w-11/12 md:w-1/3 h-[450px] md:h-[600px] flex flex-col justify-start items-center bg-zinc-700 border rounded-md p-5 mb-10">

                        <div className="w-full flex justify-start items-center py-2">
                            <a
                                href={gif.user ? gif.user.profile_url : '/'}
                                rel="external"
                                target="_blank"
                            >
                                <Image
                                    className="rounded-full"
                                    src={gif.user ? gif.user.avatar_url : ''}
                                    width={30}
                                    height={30}
                                    alt={gif.username}
                                />
                            </a>

                            <a
                                href={gif.user ? gif.user.profile_url : '/'}
                                rel="external"
                                target="_blank"
                                className="text-lg font-semibold ml-2 hover:brightness-110">
                                {gif.username}
                            </a>
                        </div>

                        <a
                            href={gif.url}
                            rel="external"
                            target="_blank"
                            className="w-full"
                            >
                            <Image
                                className="w-full h-72 md:h-[450px] bg-red-50 rounded-md"
                                src={gif.images.original.url}
                                width={200}
                                height={200}
                                alt={gif.title}
                            />
                        </a>


                        <div className="w-full flex flex-col md:flex-row justify-start items-start md:items-center py-2">
                            <a
                                href={gif.user ? gif.user.profile_url : '/'}
                                rel="external"
                                target="_blank"
                                className="text-base font-medium hover:brightness-110">{gif.username ? gif.username + ':' : ''}
                            </a>
                            <p className="text-sm font-medium md:ml-2 md:truncate">{gif.title}</p>
                        </div>
                    </div>

                )
            })}
        </>

    )
}