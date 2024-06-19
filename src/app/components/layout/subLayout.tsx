import styled from "styled-components";
import Header from "../ui/Header";

const PageLayout = (props: { children: React.ReactNode }) => {
  return (
    <Centering>
      <FixedWidth>
        {props.children}
        {/* <Header /> */}
      </FixedWidth>
    </Centering>
  );
};

const Centering = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
const FixedWidth = styled.div`
  width: 300px;
  height: 62px;
  overflow: hidden;
  @media (max-width: 500px) {
    /* 화면 너비가 500px 이하가 되면 요소 너비를 100%로 고정*/
    width: 100%;
  }
`;
export default PageLayout;
