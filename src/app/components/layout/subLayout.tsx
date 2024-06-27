import styled from "styled-components";
import Header from "../ui/Header";

const PageLayout = (props: { children: React.ReactNode }) => {
  return (
    <Centering>
      <FixedWidth>{props.children}</FixedWidth>
    </Centering>
  );
};

const Centering = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
const FixedWidth = styled.div`
  width: 1280px;
  overflow: hidden;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export default PageLayout;
