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
        <Thumbnail src={post.thumbnail} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </Link>
    </PostItems>
  );
};

export default PostItem;

const PostItems = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
`;

const Thumbnail = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;
