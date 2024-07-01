import { Card } from "../ui/card";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface Component {
  icon: LucideIcon;
  link: string;
  name: string;
}

export interface Post {
  id: string;
  author: string;
  tags: string[];
  school: string;
  result: string;
  year: string;
  category: string;
  components: Component[];
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card className="flex p-3 gap-5 justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-xl">{post.author}</h3>
          <p className="text-muted-foreground">
          {post.year}・{post.school}・{post.result}
          </p>
        </div>
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
      </div>
      <div className="flex gap-3 items-center">
        {post.components.map((component) => (
          <Component key={component.name} component={component} />
        ))}
      </div>
    </Card>
  );
}

function Component({ component }: { component: Component }) {
  return (
    <Link href={component.link} target="_blank">
      <Card className="flex flex-col gap-3 p-3 items-center justify-center size-24 hover:bg-muted transition-all cursor-pointer">
        <component.icon size={24} />
        {component.name}
      </Card>
    </Link>
  );
}

function Tag({ tag }: { tag: string }) {
  return (
    <span key={tag} className="text-sm bg-muted px-2 py-1 rounded-md">
      {tag}
    </span>
  );
}
