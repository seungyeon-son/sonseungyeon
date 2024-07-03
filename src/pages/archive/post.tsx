import styled from "@emotion/styled";
import Link from "next/link";
import { FC, Key } from "react";

interface Post {
  id: Key;
  slug: string;
  title: string;
  thumbnail: string;
  description: string;
}

interface PostItemProps {
  post: Post;
}

export const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <PostItems>
      <Link href={`/archive/${encodeURIComponent(post.slug)}`}>
        <Thumbnail image={post.thumbnail} />
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </Link>
    </PostItems>
  );
};

export default PostItem;

const PostItems = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 600;
    font-size: 16px;
    color: #fefefe;
    padding: 0 8px;
  }
  p {
    font-size: 14px;
    color: #d9d9d9;
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
