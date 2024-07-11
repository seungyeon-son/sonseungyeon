import styled from "@emotion/styled";
import { FC } from "react";
import { motion } from "framer-motion";

import PageLayout from "@/app/\bcomponents/layout/subLayout";
import { archivePosts } from "../../app/lib/data";
import PostItemComponent from "../../app/components/postItem";

const PageHeader = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: aliceblue;
  mix-blend-mode: difference;
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 6px;
    padding-top: 120px;
  }

  p {
    font-size: 18px;
    color: #bbbbbb;
  }
`;

const Panel = styled.div`
  background: var(--slate-500);
  min-height: 100vh;
  div.un-blur {
    animation: un-blur 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  @keyframes un-blur {
    0% {
      filter: blur(42px);
      scale: 1.2;
      opacity: 0;
    }
    100% {
      filter: blur(0);
      scale: 1;
      opacity: 1;
    }
  }
`;

const PostList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 36px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ArchiveIndex: FC = () => {
  return (
    <PageLayout>
      <Panel className="container mx-auto">
        <PageHeader>
          <h1>W. Page</h1>
        </PageHeader>
        <motion.div
          className="box un-blur"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <PostList>
            {archivePosts.map((post) => (
              <PostItemComponent key={post.id} post={post} />
            ))}
          </PostList>
        </motion.div>
      </Panel>
    </PageLayout>
  );
};

export default ArchiveIndex;
