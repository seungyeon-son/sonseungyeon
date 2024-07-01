import PageLayout from "@/app/\bcomponents/layout/subLayout";
import styled from "@emotion/styled";
import Link from "next/link";
import { FC, Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { PostsProps } from "./data";

const Posts = ({ posts }: PostsProps) => {
  return (
    <ArchivePage>
      <PageLayout>
        Archive Page
        <PostList>
          {posts &&
            posts.map((post) => (
              <PostItem key={post.id}>
                <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
                  <a>
                    <Thumbnail src={post.thumbnail} alt={post.title} />
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                  </a>
                </Link>
              </PostItem>
            ))}
        </PostList>
      </PageLayout>
    </ArchivePage>
  );
};

export default Posts;

const ArchivePage = styled.div`
  background: var(--slate-500);
  width: 100%;
  min-height: 100vh;
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
