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

const PostItems = styled.li`
  width: 23%;
  display: flex;
  flex-direction: column;
`;

const PostTag = styled.div`
  font-size: 14px;
  color: #c0c0c0;
  background: #54525c;
  width: fit-content !important;
  border-radius: 6px;
  padding: 0 6px;
  margin: 0 6px 12px;
`;

const PostTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  color: #fefefe;
  padding: 0 8px;
  margin-bottom: 4px;
`;

const PostDescribe = styled.p`
  font-size: 14px;
  line-height: 1.35rem;
  color: #c0c0c0;
  padding: 0 8px;
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

const PostItemComponent: FC<PostItemProps> = ({ post }) => {
  return (
    <PostItems>
      <Link href={`/archive/${encodeURIComponent(post.slug)}`}>
        <Thumbnail image={post.thumbnail} />
        <PostTag>{post.tag}</PostTag>
        <PostTitle>{post.title}</PostTitle>
        <PostDescribe>{post.description}</PostDescribe>
      </Link>
    </PostItems>
  );
};

export default PostItemComponent;
