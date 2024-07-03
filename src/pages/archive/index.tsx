import styled from "@emotion/styled";
import Link from "next/link";
import { FC, Key } from "react";
import PageLayout from "@/app/\bcomponents/layout/subLayout";
import { archivePosts, PostsProps } from "./data";
import PostItem from "./post";

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <PageLayout>
      <Panel className="container mx-auto">
        Archive Page
        <PostList>{posts && posts.map((post) => <PostItem key={post.id} post={post} />)}</PostList>
      </Panel>
    </PageLayout>
  );
};

const ArchivePage = () => {
  return <Posts posts={archivePosts} />;
};

export default ArchivePage;

const Panel = styled.div`
  background: var(--slate-500);
  min-height: 100vh;
  padding-top: 160px;
`;

const PostList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 36px;
  list-style: none;
  padding: 0;
  margin: 0;
`;
