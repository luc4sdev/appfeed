import { Header } from "@/components/Header";
import { Post } from "@/components/Post";
import { Emoji } from "@/data/types/emoji";
import { api } from "@/data/api";


async function getEmojis(): Promise<Emoji[]> {
  const response = await api('/v2/emoji', {
    next: {
      revalidate: 60 * 60, // 1 hour
    }
  })

  const emojis = await response.json()

  return emojis.data
}

export default async function Home() {

  const emojis = await getEmojis()
  return (
    <div className="mx-auto flex flex-col items-center min-h-screen w-full max-w-[1600px] gap-5 p-8">
      <Header emojis={emojis} />
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <Post />
      </div>
    </div>
  );
}
