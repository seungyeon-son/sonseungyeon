import styled from "styled-components";

const AppLayout = (props: { children: React.ReactNode }) => {
  return (
    <Panel>
      <div>{props.children}</div>
    </Panel>
  );
};

const Panel = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  div {
    width: 100%;
  }
`;

export default AppLayout;
