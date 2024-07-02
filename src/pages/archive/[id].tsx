import styled from "@emotion/styled";
import { PostsProps } from "./data";

const PostPage = ({ posts }: PostsProps) => {
  return (
    <PostPages>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <Thumbnail src={post.thumbnail} alt={post.title} />
            <h2>{post.title}title</h2>
            <p>{post.description}description</p>
          </div>
        ))}
    </PostPages>
  );
};

export default PostPage;

const PostPages = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  height: 100svh;
`;

const Thumbnail = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 10px;
  object-fit: cover;
  border-radius: 5px;
`;
