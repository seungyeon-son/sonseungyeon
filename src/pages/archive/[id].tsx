import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { archivePosts, PostsProps } from "./data";
import PageLayout from "@/app/\bcomponents/layout/subLayout";
import Image from "next/image";
import Button from "@/app/\bcomponents/ui/Button";
import { on } from "events";

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }

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
      <PostHeader className=" pt-52 pb-32">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </PostHeader>
      <ThumbnailBg image={post.thumbnail} />
      <Panel className="container mx-auto">
        <PostLayout className="mb-20">
          <Image
            src="https://generated.vusercontent.net/placeholder.svg"
            width={100}
            height={100}
            alt=""
            className="w-3/4 h-full object-cover mx-auto"
          />
        </PostLayout>
        <Button size={"sm"} variant={"primary"} value={""} disabled={false} onClick={() => (location.href = "/")}>
          Home
        </Button>
        <a href="https://www.supernova.io/forge" target="_blank" rel="noopener noreferrer">
          reference 1
        </a>
        <a href="https://designcode.io/tutorials" target="_blank" rel="noopener noreferrer">
          reference 2
        </a>
        <Button size={"sm"} variant={"primary"} onClick={() => (location.href = "/")} value={""} disabled={false}>
          Archive
        </Button>
      </Panel>
    </PageLayout>
  );
};

export default PostPage;

const PostLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const Panel = styled.div`
  /* padding-top: 160px; */
  display: flex;
  flex-direction: column;
  min-height: 150svh;
`;

const ThumbnailBg = styled.div<{ image: string }>`
  width: 100%;
  height: 280px;
  background-attachment: fixed;
  background: url(${(props) => props.image}) no-repeat;
  background-size: cover;
  background-position: top;
  filter: blur(8px) grayscale(0%) brightness(100%);
  margin-bottom: 68px;
`;

const PostHeader = styled.div`
  text-align: center;
  color: aliceblue;
  max-width: 60%;
  margin: 0 auto;
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  p {
    font-size: 18px;
    color: #bbbbbb;
  }
`;
