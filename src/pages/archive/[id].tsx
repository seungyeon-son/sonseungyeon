import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { archivePosts, PostsProps } from "./data";
import PageLayout from "@/app/\bcomponents/layout/subLayout";

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }

  // Find the post with the matching id
  const post = archivePosts.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <div className="h-svh flex flex-col gap-5 items-center justify-center  bg-slate-800">
        <p className="font-bold text-lg text-slate-400">Post not found</p>
        <a href="/archive" className="border px-4 py-0.5 border-slate-600 text-slate-500 rounded-md">
          go back
        </a>
      </div>
    );
  }

  return (
    <PageLayout key={post.id}>
      <ThumbnailBg image={post.thumbnail} />

      <Panel className="container mx-auto">
        <PostHeader>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </PostHeader>

        <a href="https://www.supernova.io/forge" target="_blank" rel="noopener noreferrer">
          reference 1
        </a>
        <a href="https://designcode.io/tutorials" target="_blank" rel="noopener noreferrer">
          reference 2
        </a>
      </Panel>
    </PageLayout>
  );
};

export default PostPage;

const Panel = styled.div`
  /* padding-top: 160px; */
  display: flex;
  flex-direction: column;
  min-height: 150svh;
`;

const ThumbnailBg = styled.div<{ image: string }>`
  width: 100%;
  height: 320px;
  background-attachment: fixed;
  background: url(${(props) => props.image}) no-repeat;
  background-size: cover;
  background-position: top;
  filter: blur(20px);
  margin-bottom: 68px;
`;

const PostHeader = styled.div`
  text-align: center;
  color: aliceblue;
  h2 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    font-size: 18px;
    color: #c6c6c6;
  }
`;
