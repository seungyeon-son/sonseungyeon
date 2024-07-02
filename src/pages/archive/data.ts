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
    slug: "first-post",
    title: "First Post",
    thumbnail: "https://generated.vusercontent.net/placeholder.svg", // 적절한 이미지 경로로 수정하세요
    description: "This is the description of the first post.",
  },
  {
    id: 2,
    slug: "second-post",
    title: "Second Post",
    thumbnail: "https://generated.vusercontent.net/placeholder.svg", // 적절한 이미지 경로로 수정하세요
    description: "This is the description of the second post.",
  },
  {
    id: 3,
    slug: "third-post",
    title: "Third Post",
    thumbnail: "https://generated.vusercontent.net/placeholder.svg", // 적절한 이미지 경로로 수정하세요
    description: "This is the description of the third post.",
  },
  {
    id: 4,
    slug: "fourth-post",
    title: "Fourth Post",
    thumbnail: "https://generated.vusercontent.net/placeholder.svg", // 적절한 이미지 경로로 수정하세요
    description: "This is the description of the fourth post.",
  },
];
