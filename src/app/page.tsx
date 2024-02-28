import { Header } from "@/components/Header";
import { Post } from "@/components/Post";

export default function Home() {

  return (
    <div data-testid="container" className="mx-auto flex flex-col items-center min-h-screen w-full max-w-[1600px] gap-5 p-8">
      <Header />
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <Post />
      </div>
    </div>
  );
}
