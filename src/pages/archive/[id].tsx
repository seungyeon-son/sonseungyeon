import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

import PageLayout from "@/app/\bcomponents/layout/subLayout";
import Button from "@/app/\bcomponents/ui/Button";
import { archivePosts } from "./lib/data";

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
  height: 400px;
  background: url(${(props) => props.image}) no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  margin-bottom: 68px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

const PostHeader = styled.div`
  text-align: center;
  color: aliceblue;
  mix-blend-mode: difference;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  backdrop-filter: blur(22px);

  h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 6px;
    padding-top: 80px;
  }

  p {
    font-size: 18px;
    color: #bbbbbb;
    max-width: 60%;
  }
`;

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const post = archivePosts.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <div className="h-svh flex flex-col gap-5 items-center justify-center  bg-slate-800">
        <p className="font-bold text-lg text-slate-400">Post not found</p>
        <Link href="/archive/" className="border px-4 py-0.5 border-slate-600 text-slate-500 rounded-md">
          go back
        </Link>
      </div>
    );
  }

  return (
    <PageLayout key={post.id}>
      <ThumbnailBg image={post.thumbnail}>
        {" "}
        <PostHeader className="">
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </PostHeader>
      </ThumbnailBg>
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
        <Button size="sm" variant="primary" value="" disabled={false}>
          Home
        </Button>
        <Link href="https://www.supernova.io/forge" target="_blank" rel="noopener noreferrer">
          reference 1
        </Link>
        <Link href="https://designcode.io/tutorials" target="_blank" rel="noopener noreferrer">
          reference 2
        </Link>
        <Button size="sm" variant="primary" value="" disabled={false}>
          Archive
        </Button>
      </Panel>
    </PageLayout>
  );
};

export default PostPage;
