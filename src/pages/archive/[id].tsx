import { FC } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { archivePosts } from "@/src/app/lib/data";
import PageLayout from "@/src/app/\bcomponents/layout/subLayout";
import Button from "@/src/app/\bcomponents/ui/Button";

const LayoutRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto 0 0;
`;
const LayoutLeft = styled.div`
  display: flex;

  width: fit-content;
  justify-content: flex-start;
`;
const PostLayout = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
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
  /* border-image: fill 0 linear-gradient(#0003, #0009); */
  border-image: conic-gradient(from 45deg at calc(100% - 1lh), #000 25%, #cece 0) fill 0/0 0 0 100vw;
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

const PostDetail: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }
  const post = archivePosts.find((p) => p.id === Number(id));

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
        <PostHeader className="">
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </PostHeader>
      </ThumbnailBg>
      <Panel className="container mx-auto">
        <div>
          <PostLayout className="mb-20">
            <div>
              <Image
                src="https://generated.vusercontent.net/placeholder.svg"
                width={100}
                height={100}
                alt=""
                className="w-full h-full object-cover mx-auto"
              />
            </div>
            <div>
              {" "}
              <Image
                src="https://generated.vusercontent.net/placeholder.svg"
                width={100}
                height={100}
                alt=""
                className="w-full h-full object-cover mx-auto"
              />
            </div>
          </PostLayout>
          <LayoutLeft className="mb-20">
            <Image
              src="https://generated.vusercontent.net/placeholder.svg"
              width={100}
              height={100}
              alt=""
              className="w-3/5 h-full object-cover"
            />
          </LayoutLeft>
          <LayoutRight>
            {" "}
            <Image
              src="https://generated.vusercontent.net/placeholder.svg"
              width={100}
              height={100}
              alt=""
              className="w-3/5 h-full object-cover"
            />
          </LayoutRight>
        </div>
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

export default PostDetail;
