import styled from "@emotion/styled";
import Link from "next/link";
import { FC, Key } from "react";
import PageLayout from "@/app/\bcomponents/layout/subLayout";
import { archivePosts, PostsProps } from "./data";
import PostItem from "./post";

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <PageLayout>
      Archive Page
      <PostList>{posts && posts.map((post) => <PostItem key={post.id} post={post} />)}</PostList>
    </PageLayout>
  );
};

const ArchivePage = () => {
  return <Posts posts={archivePosts} />;
};

export default ArchivePage;

const ArchivePageWrapper = styled.div`
  background: var(--slate-500);
  width: 100%;
  min-height: 100vh;
  padding-top: 120px;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
