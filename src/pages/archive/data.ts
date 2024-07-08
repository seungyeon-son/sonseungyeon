import { Key } from "react";

// Post 타입 정의
interface PostTypes {
  id: Key;
  slug: string;
  title: string;
  thumbnail: string;
  description: string;
  tag: string;
}

export interface PostsProps {
  posts: PostTypes[];
}

export const archivePosts: PostTypes[] = [
  {
    id: 1,
    slug: "1",
    title: "First Post",
    thumbnail:
      "https://cdn.prod.website-files.com/63340e4175515b8b5cefdbd4/6579c88a686c69936a209fcd_onesignal-supernova-case-study-header.png",
    description: "This is the description of the first post.",
    tag: "web",
  },
  {
    id: 2,
    slug: "2",
    title: "Second Post",
    thumbnail: "https://framerusercontent.com/images/s0U1xTRRdjFBkQqDEjaCGvDqh8.png?scale-down-to=1024",
    description:
      "This is the description of the second post.This is the description of the second post.This is the description of the second post.This is the description of the second post.This is the description of the second post.This is the description of the second post.",
    tag: "UI/UX",
  },
  {
    id: 3,
    slug: "3",
    title: "Third Post",
    thumbnail: "https://framerusercontent.com/images/iwf5h6rg8GLWvRizWcf40xYqSH8.png?scale-down-to=512",
    description: "This is the description of the third post.",
    tag: "Mobile",
  },
  {
    id: 4,
    slug: "4",
    title: "Fourth Post",
    thumbnail: "https://framerusercontent.com/images/MKebsjw7AIp52N4FYji7xtbUqI.png?scale-down-to=1024",
    description: "This is the description of the fourth post.",
    tag: "Product",
  },
];
