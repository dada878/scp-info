import PostCard, { Post } from "@/components/home/post-card";
import { Newspaper, Search, Sparkles, UserRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import Filters from "@/components/home/filters";

export default function Home() {
  return (
    <main className="container mt-10">
      <div className="flex flex-col max-w-3xl mx-auto p-4 gap-6">
        <div className="flex flex-col gap-3">
          <SearchBar />
          <Filters />
        </div>
        <div className="flex flex-col gap-3">
          {postsPlaceholder.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}

function SearchBar() {
  return <Input placeholder="搜尋心得" startIcon={Search} />;
}

const postsPlaceholder: Post[] = [
  {
    id: "1",
    author: "某電神",
    tags: ["資工系", "APCS 組", "競程"],
    school: "國立清華大學",
    result: "正取 1",
    category: "甲組",
    year: "2022",
    components: [
      {
        icon: UserRound,
        link: "https://google.com",
        name: "個人網站",
      },
      {
        icon: Sparkles,
        link: "https://google.com",
        name: "查看心得",
      },
      {
        link: "https://google.com",
        icon: Newspaper,
        name: "查看備審",
      }
    ],
  },
  {
    id: "1",
    author: "某電神",
    tags: ["資工系", "APCS 組", "競程"],
    school: "國立清華大學",
    result: "正取 1",
    category: "甲組",
    year: "2022",
    components: [
      {
        icon: UserRound,
        link: "https://google.com",
        name: "個人網站",
      },
      {
        icon: Sparkles,
        link: "https://google.com",
        name: "查看心得",
      },
    ],
  },
];
