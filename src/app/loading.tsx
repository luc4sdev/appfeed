import { Header } from "@/components/Header";

export default function Loading() {
    return (
        <div className="mx-auto flex flex-col items-center min-h-screen w-full max-w-[1600px] gap-5 p-8">
            <Header />
            <div className="w-full flex-1 flex flex-col justify-center items-center">
                <div className="w-11/12 md:w-1/3 h-[450px] md:h-[600px] flex flex-col justify-start items-center bg-zinc-700 border rounded-md p-5 mb-10">
                    <div className="w-full flex justify-start items-center py-2">
                        <div className="w-[30px] h-[30px] rounded-full bg-zinc-50/10 animate-pulse" />
                        <div className="w-1/2 h-5 ml-2 bg-zinc-50/10 animate-pulse rounded-md" />
                    </div>

                    <div className="w-full h-full bg-zinc-50/10 animate-pulse rounded-md" />

                    <div className="w-full flex justify-start items-center py-2">
                        <div className="w-1/2 h-5 bg-zinc-50/10 animate-pulse rounded-md" />
                    </div>

                </div>
            </div>

            <div className="w-full flex-1 flex flex-col justify-center items-center">
                <div className="w-11/12 md:w-1/3 h-[450px] md:h-[600px] flex flex-col justify-start items-center bg-zinc-700 border rounded-md p-5 mb-10">
                    <div className="w-full flex justify-start items-center py-2">
                        <div className="w-[30px] h-[30px] rounded-full bg-zinc-50/10 animate-pulse" />
                        <div className="w-1/2 h-5 ml-2 bg-zinc-50/10 animate-pulse rounded-md" />
                    </div>

                    <div className="w-full h-full bg-zinc-50/10 animate-pulse rounded-md" />

                    <div className="w-full flex justify-start items-center py-2">
                        <div className="w-1/2 h-5 bg-zinc-50/10 animate-pulse rounded-md" />
                    </div>

                </div>
            </div>
        </div>
    )
}