import styled from "@emotion/styled";
import Link from "next/link";
import { FC, Key } from "react";

interface Post {
  id: Key;
  slug: string;
  title: string;
  thumbnail: string;
  description: string;
  tag: string;
}

interface PostItemProps {
  post: Post;
}

export const PostItems = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  div.tag {
    font-size: 14px;
    color: #c0c0c0;
    background: #54525c;
    width: fit-content;
    border-radius: 6px;
    padding: 0 6px;
    margin: 0 6px 12px;
  }
  h2 {
    font-weight: 600;
    font-size: 16px;
    color: #fefefe;
    padding: 0 8px;
    margin-bottom: 4px;
  }
  p {
    font-size: 14px;
    line-height: 1.35rem;
    color: #c0c0c0;
    padding: 0 8px;
  }
`;

const Thumbnail = styled.div<{ image: string }>`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
  background: url(${(props) => props.image}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <PostItems>
      <Link href={`/archive/${encodeURIComponent(post.slug)}`}>
        <Thumbnail image={post.thumbnail} />
        <div className="tag">{post.tag}</div>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </Link>
    </PostItems>
  );
};

export default PostItem;
