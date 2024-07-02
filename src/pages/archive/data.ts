import { Key } from "react";

// Post 타입 정의
interface PostTypes {
  id: Key;
  slug: string;
  title: string;
  thumbnail: string;
  description: string;
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
      "https://cdn.prod.website-files.com/63340e4175515b8b5cefdbd4/6579c88a686c69936a209fcd_onesignal-supernova-case-study-header.png", // 적절한 이미지 경로로 수정하세요
    description: "This is the description of the first post.",
  },
  {
    id: 2,
    slug: "2",
    title: "Second Post",
    thumbnail: "https://generated.vusercontent.net/placeholder.svg", // 적절한 이미지 경로로 수정하세요
    description: "This is the description of the second post.",
  },
  {
    id: 3,
    slug: "3",
    title: "Third Post",
    thumbnail: "https://generated.vusercontent.net/placeholder.svg", // 적절한 이미지 경로로 수정하세요
    description: "This is the description of the third post.",
  },
  {
    id: 4,
    slug: "4",
    title: "Fourth Post",
    thumbnail: "https://generated.vusercontent.net/placeholder.svg", // 적절한 이미지 경로로 수정하세요
    description: "This is the description of the fourth post.",
  },
];
