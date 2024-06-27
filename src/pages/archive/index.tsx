import AppLayout from "@/app/\bcomponents/layout/Layout";
import PageLayout from "@/app/\bcomponents/layout/subLayout";
import styled from "@emotion/styled";

import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

function Posts({ posts }: any) {
  return (
    <PageLayout>
      Archive Page
      <ul>
        {posts &&
          posts.map(
            (post: {
              id: Key | null | undefined;
              slug: string | boolean;
              title:
                | string
                | bigint
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined;
            }) => (
              <li key={post.id}>
                <Link href={`/blog/${encodeURIComponent(post.slug)}`}>{post.title}</Link>
              </li>
            ),
          )}
      </ul>
    </PageLayout>
  );
}

export default Posts;
