import styled from "@emotion/styled";
import { FC, Key } from "react";
import PageLayout from "@/app/\bcomponents/layout/subLayout";
import { archivePosts, PostsProps } from "./data";
import PostItem from "./post";
import { motion } from "framer-motion";

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <PageLayout>
      <Panel className="container mx-auto">
        Archive Page
        <PostList>{posts && posts.map((post) => <PostItem key={post.id} post={post} />)}</PostList>
        <motion.div
          className="box bg-slate-500"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          dd
        </motion.div>
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
