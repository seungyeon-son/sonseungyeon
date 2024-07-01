import PageLayout from "@/app/\bcomponents/layout/subLayout";
import styled from "@emotion/styled";
import Link from "next/link";
import { FC, Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

// Post 타입 정의
interface Post {
  id: Key;
  slug: string;
  title: string;
  thumbnail: string;
  description: string;
}

interface PostsProps {
  posts: Post[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <ArchivePage>
      <PageLayout>
        Archive Page
        <Posts posts={PostsProps} />;
      </PageLayout>
    </ArchivePage>
  );
};

export default Posts;

const ArchivePage = styled.div`
  background: var(--slate-500);
  width: 100%;
  min-height: 100vh; // svh -> vh로 수정
  padding-top: 120px;
`;
const PostList = styled.ul``;
const PostItem = styled.li``;

const Thumbnail = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;
